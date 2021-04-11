import { profilePage } from "../src/views/profile.js";
import page from "//unpkg.com/page/page.mjs";
import {render} from 'https://unpkg.com/lit-html?module';
import { educationPage } from "./views/education.js";
import { workPage } from "./views/work.js";
import { skillPage } from "./views/skills.js";

const container = document.getElementById('container');
document.querySelectorAll('.nav-right > li > i').forEach(bulb => {
    bulb.addEventListener('click', (ev) => switchLight(ev));
})

page('/', decorateCtx, profilePage);
page('/index.html', decorateCtx, profilePage);
page('/education', decorateCtx, educationPage);
page('/work', decorateCtx, workPage);
page('/skills', decorateCtx, skillPage);
page.start();

function decorateCtx(context, next) {
    context.render = (content) => render(content, container);
    next();
}
function switchLight(event) {
    if (event.target.parentNode.id == "light-on") {
        document.getElementById('light-off').style.display = 'block';
        document.getElementById('light-on').style.display = 'none';
        getLightTheme();
    } else if (event.target.parentNode.id == "light-off") {
        document.getElementById('light-off').style.display = 'none';
        document.getElementById('light-on').style.display = 'block';
        getDarkTheme();
    }
}

function getDarkTheme() {
    document.getElementsByTagName('nav')[0].style.background = "#222222";
    document.getElementsByTagName('body')[0].style.background = "#37474F";
    document.getElementsByTagName('html')[0].style.color = "white";
}
function getLightTheme() {
    document.getElementsByTagName('nav')[0].style.backgroundColor = "#389583";
    document.getElementsByTagName('body')[0].style.backgroundColor = "#EDF5E0";
    document.getElementsByTagName('html')[0].style.color = "black";
}