// document.querySelector("[data-padrao]").addEventListener("click", (e) => {
//     document.body.className = "";
//     document.body.classList.toggle("padrao");
// })

// document.querySelector("[data-claro]").addEventListener("click", () => {
//     document.body.className = "";
//     document.body.classList.toggle("lighter");
// })

// document.querySelector("[data-amiga]").addEventListener("click", () => {
//     document.body.className = "";
//     document.body.classList.toggle("amiga");
// })

// document.querySelector("[data-cga]").addEventListener("click", () => {
//     document.body.className = "";
//     document.body.classList.toggle("cga");
// })

// document.querySelector("[data-ega]").addEventListener("click", () => {
//     document.body.className = "";
//     document.body.classList.toggle("ega");
// })

// document.querySelector("[data-zx]").addEventListener("click", () => {
//     document.body.className = "";
//     document.body.classList.toggle("zx");
// })

// document.querySelector("[data-gb]").addEventListener("click", () => {
//     document.body.className = "";
//     document.body.classList.toggle("gb");
// })

//tentando refatorar o código dos temas
//não funciona por conta do querySelector do btn, mas não sei como fazer de outro jeito

document.querySelectorAll("[data-tema]").forEach( elemento => {
    elemento.addEventListener('click', btn => {
        console.log("foi");
        btn = document.querySelector("[data-tema]").getAttribute("value");
        console.log(btn);
        document.body.className = "";
        document.body.classList.add(btn);
    })
})
