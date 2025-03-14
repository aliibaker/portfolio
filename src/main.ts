import './style.css'
import { Router } from './router';

import { ditherView } from './blogs/dither';
import { birthdayView } from './misc/birthday';

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
                    Exploring real time rendering, compilers, tools for creation.
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