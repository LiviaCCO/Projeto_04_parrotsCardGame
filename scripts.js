alert("Este jogo deve conter um número par de cartas entre 4 e 14. Vamos lá?");

let qtdCartas = (parseInt(prompt("Com quantas cartas deseja jogar?")));


let i=0;
let contador=0;

function virarCarta(carta){
    carta.classList.toggle('virada');
    i++;
    contador++;

    if(i == 2){
        
        // se as cartas sao diferentes
        const numCartas = document.querySelectorAll('.virada');
        const carta1 = numCartas[0].classList.values();
        const carta2 = numCartas[1].classList.values();
        console.log(carta1);


        if (carta1 != carta2){
            setTimeout(desvirar, 1000);
            i=0; }

        else{
            i=0;
        }
    }
}

function desvirar(){
    const numCartas = document.querySelectorAll('.virada');
    for(let j=0; j < numCartas.length; j++){
        numCartas[j].classList.remove('virada');}
}






// const lista = [];

// function cartoletas(){
//     let i=0;
//     while (i < qtdCartas){
//         const cartaExposta = document.querySelector('.carta');
//         cartaExposta[i].classList.add('revelar');
//         lista.push(cartaExposta[i]);
//         i++;
//     }
// }



// alert("Este jogo deve conter um número par de cartas entre 4 e 14. Vamos lá?");

// // let qtdCartas = (parseInt(prompt("Com quantas cartas deseja jogar?")));

// let Cartas = funcao();

// function funcao(){

//     let qtdCartas = (parseInt(prompt("Com quantas cartas deseja jogar?")));

//     if (qtdCartas < 4){
//         alert("Número de cartas inválido");
//         // parseInt(prompt("Com quantas cartas deseja jogar?"));
//         return Cartas;
//     }
//     else if (qtdCartas > 14){
//         alert("Número de cartas inválido");
//         // parseInt(prompt("Com quantas cartas deseja jogar?"));
//         return Cartas
//         }
//     else{
//         if ((qtdCartas%2)===0){
//         alert("Bora jogar!");
//         let i=1;
//         while (i<=qtdCartas){
//             adicionarCartas();
//             qtdCartas--;
//         }
//         function adicionarCartas() {
//             const elemento = document.querySelector(.carta:nth-child(i));
//             elemento.classList.add(.revelada);
//           }

//         // minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

//         // function comparador() { 
//         //     return Math.random() - 0.5; 
//         // }
//         }
//         else{
//             alert("Número de cartas inválido");
//             // parseInt(prompt("Com quantas cartas deseja jogar?"));
//             return Cartas
//         }
//     }

// }


//       let pensamento = prompt("No que vc está pensando?!");

//       while (pensamento !== "fim") {
//         adicionarPensamento(pensamento);
//         pensamento = prompt("No que vc está pensando?!");
//       }
//       function adicionarCartas() {
//         const elemento = document.querySelector(.cartas);
//         elemento.classList.add(.carta);
//       }