import { pegaInfo } from "./pegaInfo.js";

function inicia() {
    const start = document.querySelector("[data-inicia]");
    start.addEventListener('click', () => console.log("foi"))
}

inicia();