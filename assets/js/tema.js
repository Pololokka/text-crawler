//tentei pelo value e não foi

document.querySelectorAll("[data-tema]").forEach( elemento => {
    elemento.addEventListener('click', btn => {
        btn = btn.target.innerHTML;
        document.body.className = "";
        document.body.classList.add(btn);
    })
})
