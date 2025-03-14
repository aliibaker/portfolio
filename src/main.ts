import './style.css'
import { Router } from './router';

import { ditherView } from './blogs/dither';
import { birthdayView } from './misc/birthday';
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
                        <h4> Dither (tbd sorry got busy)</h4>
                        <p> Technical, artistic, historic. A post processing technique that has seen use across pragmatic
                            and creative contexts. In this blogpost, I'll explore the history, math, and application of 
                            a dither shader. 
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
        </div>
    `
}

const routes = [
    {path: '/', view: index},
    {path: '/birthday', view: birthdayView},
    {path: '/blogs/dither', view: ditherView}
]

const router = new Router(routes);

router.init();