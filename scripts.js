alert("Este jogo deve conter um número par de cartas entre 4 e 14. Vamos lá?");
let qtd = 0;
const  gifts = ["imagens/bobrossparrot.gif", "imagens/explodyparrot.gif", "imagens/fiestaparrot.gif", "imagens/metalparrot.gif", "imagens/revertitparrot.gif", "imagens/tripletsparrot.gif", "imagens/unicornparrot.gif"];
const cartasDoJogo = [];
const cartasViradas = [];
// chamando a função inicial 
qtdCartas(); 



// Inicio: Definição da qtd de cartas
function qtdCartas(){
    qtd=(parseInt(prompt("Com quantas cartas deseja jogar?")));
    
    // Para o numero incorreto de cartas
    if (qtd < 4 || qtd > 14 || qtd % 2 !== 0){
        alert("Número de cartas inválido");
        qtdCartas();
    }
    // Para o numero correto de cartas
    else{
        // Selecionando as cartas
        jogarCartas();
        // Colocando as cartas na mesa
        inserirCartas();
    }
}
function jogarCartas(){
    // qtd de cartas /2 para formar nova array 
    for (let i=0; i<(qtd/2); i++){
        cartasDoJogo.push(gifts[i]); 
        // Duplicando a array
        cartasDoJogo.push(gifts[i]);  
    }
    // embaralhar array
    cartasDoJogo.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
}
function inserirCartas(){
    const mesa = document.querySelector('.cartas');
    
    for (let i=0; i<cartasDoJogo.length; i++){
        mesa.innerHTML+= `
            <div class="carta" onclick="virarCarta(this)">
                <div class="front face">
                    <img src="imagens/back.png"></div>
                <div class="back face">
                    <img src="${cartasDoJogo[i]}">
                </div>
            </div>
        `
    }
}
// para embaralhar
function comparador() { 
    return Math.random() - 0.5;
} 


let i=0;
let cont=0;
function virarCarta(carta){
    carta.classList.toggle('virada');
    i++;
    cont++;
    fimJogo(); 
    if(i == 2){

        // verificando as 2 cartas selecionadas 
        const numCartas = document.querySelectorAll('.virada');
        const carta1 = numCartas[0].innerHTML;
        const carta2 = numCartas[1].innerHTML;

        // sendo iguais, acrescentamos estas a lista que auxiliará para a finalização do jogo   
        if (carta1 === carta2){
            cartasViradas.push(carta1);
            cartasViradas.push(carta2);
            i=0;
            console.log(cartasViradas.length);
            setTimeout(fimJogo, 50);
        }
        // se forem diferentes, desvirar 
        else{
            setTimeout(desvirar, 950);
            i=0;
                      
        }
       
    }
}

function desvirar(){
    const numCartas = document.querySelectorAll('.virada');
    for(let j=0; j < numCartas.length; j++){
        numCartas[j].classList.remove('virada');}
}
function fimJogo(){
    // console.log(cartasViradas.length);
    if (cartasViradas.length === cartasDoJogo.length){
        alert(`Você ganhou em ${cont} jogadas!`); 
        // novoGame();   
    }  
}
// let novoJogo;
// function novoGame(){
//     novoJogo=prompt("Deseja jogar novamente?");
//     if (novoJogo === "sim"){
//         let qtd = 0;
//         let i=0;
//         let cont=0;
//         const cartasDoJogo = [];
//         const cartasViradas = [];
//         const mesa = "";
//         qtdCartas();
//     }
//     else if (novoJogo === "não"){
//         alert("Ok! Caso mude de ideia, atualize a página!");
//     }
//     else{
//         alert("Não entendi! Sua resposta deve ser sim ou não, com todas as letras minúsculas e acentuação correta.");
//         novoGame();
//     }
// }