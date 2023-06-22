let x = 5 // var x = 5
const y = 10 // variável constante, não muda.

x = 12
console.log(x)
console.log(y)

if(true){
    let x = 20 //cria o escopo local
    console.log(x)
    const y = 50
    console.log(y)
}

console.log(x)

for(let x = 0; x <= 10; x++){
    console.log(x)
}