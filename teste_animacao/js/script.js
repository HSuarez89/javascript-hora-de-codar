var aviao = document.querySelector("#aviao")

window.onload = function(){
    movimento()
}

function visivel() {
    aviao.setAttribute('class', 'invisivel' )
}

function movimento(){
    aviao.style.right = 1200 + "px"
    aviao.style.opacity = 1
}