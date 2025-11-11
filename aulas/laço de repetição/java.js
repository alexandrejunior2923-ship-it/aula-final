//LAÇOS DE REPETIÇÃO

/*
Os laços de repetiçao são comados utilizados oara executar instruções mais de uma vez, ou seja, cria loops de repetiçao de uma ou mais instruções com numero limitado de vezes. */



//console.log("1")
//console.log("2")
//console.log("3")
//console.log("4")
//.log("5")

//CUIDADO PARA UM LOPING INIFINITOOOOOO
/*
OPERADORES DE COMPARAÇÃO
==
!=
<
>
<=
>=
OPERADORE LÓGICOS
&&= E, || = oU, ! = not


1- FOR = (usado quando sabemos quantas vezes queremos repetir algo)

2- WHILE = (usado quando não sabemos exatamente a quatidade de vezes, mas sabemso a condição)


for (let i = 1 ; i<=50; i++ ){
    console.log(`contando o numero pedido é ${i}`);
}

console.clear()

for (fatia = 1; fatia <= 3; fatia++){
    console.log(`comendo ${fatia} de pizza`)
}
/*
for (inicio, condiçao, incremento){
//codigo a sser repetido
}
*/
console.clear
for (let tempo = 60; tempo > 0; tempo-- ){
    console.log(`TEMPO RESTANTE ${tempo}`)
}
// Trabalhando com ehile| ehile (usado quando não sabemos exatamente a quatidade de vezes , mas sabemos a condição
/* sintaxe

whilw(condição)
//continua exercutando "equanto" for verdade
*/
let contador = 0;
while (contador <= 10) { // enquanto contador for menor ou igual a 10
    console.log(contador); 
    contador++;
}
console.clear
let numeroSecreto = 7;
let tentativas = 0;
let chute = 0; // inicializando com algum valor que não seja o numeroSecreto
const maxTentativas = 3;

while(chute !== numeroSecreto && tentativas < maxTentativas){
    chute = Number(prompt(`Tente adivinhar o número secreto (entre 1 e 100). Tentativa ${tentativas + 1} de ${maxTentativas}:`));
    tentativas++;

    if(chute === numeroSecreto){
        alert(" Parabéns! Você acertou o número secreto!");
    } else if(tentativas < maxTentativas){
        alert("❌ Errou, tente novamente.");
    }
}

if(chute !== numeroSecreto){
    alert(` Suas tentativas acabaram. O número secreto era ${numeroSecreto}.`);
}

alert(" Muito obrigado por usar Kairos! 😁");
