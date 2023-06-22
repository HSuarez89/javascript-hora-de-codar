/* && = and
   || = or
   !  = not
*/

var idade = 16
var nome = "João"

if(nome == 'João' && idade == 16){
    console.log("Pode entrar na aula.")
}else {
    console.log("Este não é o aluno")
}

//------------------------------------------------

if(nome == 'Henrique' || idade > 14){
    console.log("Pode entrar.")
}else {
    console.log("Não pode entrar.")
}

//-------------------------------------------------

if(!false){
    console.log("É verdade.")
}