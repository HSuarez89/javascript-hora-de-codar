var x = 1 //global
var y = 3
console.log(x, y)

function teste(){
    var z = 0 //local
    console.log(z)
}
teste()

function testando(){
    var z = 5
    console.log(z)
}
testando()

if(true){
    var p = 6 //bloco if não delimita variável como local
}
console.log(p)