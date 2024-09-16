import './style.css'


// enum PageState {
//     INDEX = 0,
//     ABOUT = 1, 
// }

function blogs() {
    return(
    `
        <div class="content">
            <h2 class="content-title"> blogs </h2>
            <div class="blogs">
                    <p> Interactive technical writeups and analysis of topics I'm interested in. 
                        Will typically lean towards topics within the realm of graphics and compiler engineering. 
                    </p>
                    <div class="blog">
                        <h4> Dither (coming 22/09/2024) </h4>
                        <p> Technical, artistic, historic. A post processing technique that has seen use across pragmatic
                            and creative contexts. In this blogpost, I'll explore the history, math, and application of 
                            a dither shader. 
                        </p>
                    </div>
                    <div class="blog">
                        <h4> Understanding color (coming 06/10/2024) </h4>
                        <p>  Color is everywhere. In a very visual world, it occupies so much
                             of our daily life. This blog explores how we represent color
                             in the world of computation and also dives into the role of color
                             in the realm of graphics rendering. 
                        </p>
                    </div>
                    <div class="blog">
                        <h4> Conway (tbd) </h4>
                        <p>
                            A focus on the work of a revered mathematician and 
                            how he accidently pioneered a genre of digital art.
                        </p>
                    </div>
                </div>
        </div>
    `);
}

function about() {
    return `<div class="content">
                <div class="header">
                    <h1> ali baker </h1>
                    <h1> علي بكر </h1>
                </div> 
                <div class="about-me">
                <p>
                    Graphics and compiler engineer, based in San Francisco. 
                    I work on tools that empower digital creation. 
                </p>

                <p>
                    Exploring real time rendering, intermediate representation, tools for creation.
                </p>
                </div>

            </div>`
}

function header() {
    return about();
}
function index() {
    return `
        
        <div class="page"> 
            ${header()}
            ${blogs()}
        </div>
    `
}

function renderPage() {
    const root = document.getElementById('root');

    if(!root){
        return;
    }

    console.log('hello');
    root.innerHTML = index();
}

renderPage();