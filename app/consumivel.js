var qtaPocao = 5;

function atualizaQtaPocao() {
    forca = document.querySelector("[data-pocao-qta]").innerHTML = `
        Quantidade de poções: ${qtaPocao}
    `
}

function tomaPocao() {
    const tomarPocao = document.querySelector("[data-pocao]");
    tomarPocao.addEventListener('click', () => {
        if(setupPronto && !playerMorto){
            if(vidaAtual < vidaTotal && qtaPocao > 0){
                qtaPocao -= 1;
                vidaAtual += Math.ceil(Math.random() * 6) *2;
                console.log(vidaAtual);
                if(vidaAtual > vidaTotal)
                    vidaAtual = vidaTotal; 
                calculaVida();
                atualizaQtaPocao();
            }
            else {
                const telaPocao = document.createElement("div");
                telaPocao.innerHTML += `
                    <p class="texto">.
                    <p class="texto">..Você não pode mais tomar poções!</p>
                `
                principal.appendChild(telaPocao);
            }
        }
    })  
}

tomaPocao();
