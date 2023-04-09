let qtdcartas = prompt("Com quantas cartas você quer jogar?")
let Pcarta
let Scarta
let contviradas = 0
let jogadas = 0
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

embaralhar = gifs.slice(0,qtdcartas)

const cardList = document.querySelector('ul')
for(let i = 0 ; i < qtdcartas ; i++){
    cardList.innerHTML += "<li><div onclick='virar(this)' class='card'><div class='front-face face'><img src='./imagens/back.png'></div><div class='back-face face'></div></div></li>"
}
function virar(p){
    carta1 = p.querySelector(".front-face");
    carta1.classList.toggle("front");
    carta2 = p.querySelector(".back-face");
    carta2.classList.toggle("back");
    contviradas++
    if(contviradas == 1){
        Pcarta = p;
    }
    if(contviradas == 2){
        contviradas = 0
        Scarta = p
        setTimeout(reset,1000);
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
}