// Variavéis
let data = new Date()
let hora = data.getHours()
const span = document.getElementById('texto')
span.innerText = hora

const imagens = document.getElementById("imgElemento")

function trocarImagem() {
    if (hora >= 4 && hora < 12) {
        imagens.src = "imgs/amanhacer.jpg"
    } else if (hora >= 12 && hora < 18) { 
        imagens.src = "imgs/entardecer.jpg"
    } else {
        imganes.src = "imgs/anoitecer.jpg"
    }
}   
trocarImagem()