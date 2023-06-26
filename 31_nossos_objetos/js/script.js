let pessoa = {
    nome: "Henrique",
    idade: 33,
    falar: function(){
        console.log("Olá, tudo bem?")
    },
    soma: function(a, b){
        return a + b
    }
}
console.log(pessoa.nome)
pessoa.falar()

var soma = pessoa.soma(3, 5)
console.log(soma)