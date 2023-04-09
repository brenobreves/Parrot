let qtdcartas = prompt("Com quantas cartas você quer jogar?")
let Pcarta
let Scarta
let contviradas = 0
let jogadas = 0
let contacertos = 0
let gifs = ["<img src='./imagens/bobrossparrot.gif'>","<img src='./imagens/bobrossparrot.gif'>",
"<img src='./imagens/explodyparrot.gif'>","<img src='./imagens/explodyparrot.gif'>",
"<img src='./imagens/fiestaparrot.gif'>","<img src='./imagens/fiestaparrot.gif'>",
"<img src='./imagens/metalparrot.gif'>","<img src='./imagens/metalparrot.gif'>",
"<img src='./imagens/revertitparrot.gif'>","<img src='./imagens/revertitparrot.gif'>",
"<img src='./imagens/tripletsparrot.gif'>","<img src='./imagens/tripletsparrot.gif'>",
"<img src='./imagens/unicornparrot.gif'>","<img src='./imagens/unicornparrot.gif'>"]

while(qtdcartas > 14 || qtdcartas < 4 || qtdcartas%2 == 1){
    qtdcartas = prompt("Atenção! O número de cartas deve ser um numero par e estar entre 4 e 14!")
}

embaralhar = gifs.slice(0,qtdcartas);
embaralhar.sort(comparador);

const cardList = document.querySelector('ul')

for(let i = 0 ; i < qtdcartas ; i++){
    cardList.innerHTML += "<li><div onclick='virar(this)' class='card'><div class='front-face face'><img src='./imagens/back.png'></div><div class='back-face face simg'></div></div></li>"
}

for(let j = 0 ; j < 14 ; j++){
    adicionarimg = document.querySelectorAll(".simg");
    adicionarimg[j].innerHTML = embaralhar[j];

}
function virar(p){
    if(contviradas==0){
        carta1 = p.querySelector(".front-face");
        carta1.classList.toggle("front");
        carta2 = p.querySelector(".back-face");
        carta2.classList.toggle("back");
        contviradas++
        jogadas++
        Pcarta = p;
    }    
    if(contviradas == 1 && Pcarta != p){
        carta1 = p.querySelector(".front-face");
        carta1.classList.toggle("front");
        carta2 = p.querySelector(".back-face");
        carta2.classList.toggle("back");
        contviradas++
        jogadas++
        Scarta = p;
        check();
    }
}
function reset(){
    carta1 = Pcarta.querySelector(".front-face");
    carta1.classList.toggle("front");
    carta2 = Pcarta.querySelector(".back-face");
    carta2.classList.toggle("back");
    carta1 = Scarta.querySelector(".front-face");
    carta1.classList.toggle("front");
    carta2 = Scarta.querySelector(".back-face");
    carta2.classList.toggle("back");
    contviradas = 0
    Pcarta,Scarta = null
}
function comparador() { 
	return Math.random() - 0.5; 
}
function check(){
    console.log(Pcarta);
    console.log(Scarta);
    if(Pcarta == Scarta){
        contacertos+=2
        contviradas=0
        alert("acertou");
    }
    else{
        setTimeout(reset,1000);
    }
}