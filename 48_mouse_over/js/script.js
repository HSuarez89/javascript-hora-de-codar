// evento mouseover

var title = document.querySelector('#title')
title.addEventListener('mouseover', function(){
    this.style.color = 'black'
})


//evendo mouseout

title.addEventListener('mouseout', function(){
    this.style.color = 'purple'
})


//evento mouseover afetando outro elemento

var subtitle = document.querySelector(".subtitle")
subtitle.addEventListener('mouseover', function(){
    var info = document.querySelector('#hidesub')
    info.style.display = 'block'
    subtitle.addEventListener('mouseout', function(){
        info.style.display = 'none'
    })
})