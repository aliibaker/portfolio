import './style.css'

enum NameState{
    first = 1,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh
}

const headerName = document.querySelector('.header-name');

const cursor = `<span id="cursor"><span>&#8203;</span></span>`;
let currentName = "ali baker";
let currentState = NameState.first;
let currentFrame = 0;



if(headerName){
    setTimeout(nameAnimation, 1000)
    // addCharacter("ali bake", "s", 8);
}

function addCharacter(text: string, character: string, index: number){
    const newText = text.slice(0, index) + character + text.slice(index);
    return newText;
}

function deleteCharacter(text: string, index: number){
    const newText = text.slice(0, index) + text.slice(index+1);
    return newText;
}


function nameAnimation(){
    if(!headerName){
        return;
    }
    let stateSwitched = false;
    switch(currentState){
        // ali baker => ali bakes
        case NameState.first:
            if(currentFrame == 0){
                currentName = deleteCharacter(currentName, 8);
                currentFrame += 1;
            }
            else{
                currentName = addCharacter(currentName, "s", 8);
                currentState = NameState.second;
                currentFrame = 0;
                stateSwitched = true;
            }
            headerName.innerHTML = currentName + cursor;
            break;
        // ali bakes => bakes
        case NameState.second:
                currentName = deleteCharacter(currentName, 3-currentFrame);
                headerName.innerHTML = currentName.slice(0,3-currentFrame) + cursor + currentName.slice(3-currentFrame);
                currentFrame += 1;
                if(currentFrame === 4){
                    currentFrame = 0;
                    currentState = NameState.third;
                    stateSwitched = true;
                }
            break;
        // bakes => bakesbasha
        case NameState.third:
            const basha: Record<number, string> = {0: "b", 1: "a", 2: "s", 3: "h", 4: "a"};
            currentName = addCharacter(currentName, basha[currentFrame], currentName.length);
            headerName.innerHTML = currentName + cursor;
            currentFrame += 1;
            if(currentFrame === 5){
                currentState = NameState.fourth;
                currentFrame = 0;
                stateSwitched = true;
            }
            break;
        // bakesbasha => basha
        case NameState.fourth:
            currentName = deleteCharacter(currentName, 4-currentFrame);
            headerName.innerHTML = currentName.slice(0,4-currentFrame) + cursor + currentName.slice(4-currentFrame);
            currentFrame += 1;
                if(currentFrame === 5){
                    currentFrame = 0;
                    currentState = NameState.fifth;
                    stateSwitched = true;
                }
            break;
        // basha => ali basha
        case NameState.fifth:
            const ali: Record<number, string> = {0: "a", 1: "l", 2: "i", 3: " "};
            currentName = addCharacter(currentName, ali[currentFrame], currentFrame);
            headerName.innerHTML = currentName.slice(0, currentFrame+1) + cursor + currentName.slice(currentFrame + 1);
            currentFrame += 1;
            if(currentFrame === 4){
                currentState = NameState.sixth;
                currentFrame = 0;
                stateSwitched = true;
            }
            break;
        // ali basha => ali
        case NameState.sixth:
            currentName = deleteCharacter(currentName, currentName.length-1);
            headerName.innerHTML = currentName + cursor;
            currentFrame += 1;
                if(currentFrame === 5){
                    currentFrame = 0;
                    currentState = NameState.seventh;
                    stateSwitched = true;
                }
            break;
        // ali => ali baker
        case NameState.seventh:
            const baker: Record<number, string> = {0: "b", 1: "a", 2: "k", 3: "e", 4: "r"};
            currentName = addCharacter(currentName, baker[currentFrame], currentName.length);
            headerName.innerHTML = currentName + cursor;
            currentFrame += 1;
            if(currentFrame === 5){
                stateSwitched = true;
                currentState = NameState.first;
                currentFrame = 0;
            }
            break;
        default: 
            break;
    }

    const timeout = stateSwitched ? 3000: 200
    setTimeout(nameAnimation, timeout)
}