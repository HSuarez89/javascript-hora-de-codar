var aviao = document.querySelector("#aviao")

window.onload = function(){
    movimento()
}

function visivel() {
    aviao.setAttribute('class', 'invisivel' )
}

function movimento(){
    var janela = window.innerWidth
    aviao.style.right = janela - 604 + "px"
    aviao.style.opacity = 1
}