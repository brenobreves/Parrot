let qtdcartas = prompt("Com quantas cartas você quer jogar?")
let Pcarta
let seg = 0
let Scarta
let contviradas = 0
let jogadas = 0
let contacertos = 0
let gifs = [
"<img class='parrot' data-test='face-up-image' src='./imagens/bobrossparrot.gif'>", "<img class='parrot' data-test='face-up-image' src='./imagens/bobrossparrot.gif'>",
"<img class='parrot' data-test='face-up-image' src='./imagens/explodyparrot.gif'>", "<img class='parrot' data-test='face-up-image' src='./imagens/explodyparrot.gif'>",
"<img class='parrot' data-test='face-up-image' src='./imagens/fiestaparrot.gif'>",  "<img class='parrot' data-test='face-up-image' src='./imagens/fiestaparrot.gif'>",
"<img class='parrot' data-test='face-up-image' src='./imagens/metalparrot.gif'>",   "<img class='parrot' data-test='face-up-image' src='./imagens/metalparrot.gif'>",
"<img class='parrot' data-test='face-up-image' src='./imagens/revertitparrot.gif'>","<img class='parrot' data-test='face-up-image' src='./imagens/revertitparrot.gif'>",
"<img class='parrot' data-test='face-up-image' src='./imagens/tripletsparrot.gif'>","<img class='parrot' data-test='face-up-image' src='./imagens/tripletsparrot.gif'>",
"<img class='parrot' data-test='face-up-image' src='./imagens/unicornparrot.gif'>", "<img class='parrot' data-test='face-up-image' src='./imagens/unicornparrot.gif'>"]

while(qtdcartas > 14 || qtdcartas < 4 || qtdcartas%2 == 1){
    qtdcartas = prompt("Atenção! O número de cartas deve ser um numero par e estar entre 4 e 14!")
}
const meuInterval = setInterval(timer,1000);
embaralhar = gifs.slice(0,qtdcartas);
embaralhar.sort(comparador);

const cardList = document.querySelector('ul')

for(let i = 0 ; i < qtdcartas ; i++){
    cardList.innerHTML += "<li><div onclick='virar(this)' data-test='card' class='card'><div class='front-face face'><img data-test='face-down-image' src='./imagens/back.png'></div><div class='back-face face'></div></div></li>"
}

for(let j = 0 ; j < qtdcartas ; j++){
    adicionarimg = document.querySelectorAll(".back-face");
    adicionarimg[j].innerHTML = embaralhar[j];

}
function virar(p){
    if(p.classList.contains('found')){
        return
    }
    if(contviradas==0){
        carta1 = p.querySelector(".front-face");
        carta1.classList.toggle("front");
        carta2 = p.querySelector(".back-face");
        carta2.classList.toggle("back");
        imagem = p.querySelector('.parrot');
        imagem.removeAttribute('data-test');
        imagem.setAttribute('data-test','face-up-image');
        contviradas++
        jogadas++
        Pcarta = p;
    }    
    if(contviradas == 1 && Pcarta != p){
        carta1 = p.querySelector(".front-face");
        carta1.classList.toggle("front");
        carta2 = p.querySelector(".back-face");
        carta2.classList.toggle("back");
        imagem = p.querySelector('.parrot');
        imagem.removeAttribute('data-test');
        imagem.setAttribute('data-test','face-up-image');
        contviradas++
        jogadas++
        Scarta = p;
        setTimeout(check,500);
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
    Pimg = Pcarta.querySelector('.parrot');
    Simg = Scarta.querySelector('.parrot');
    Pimg.removeAttribute('data-test');
    Simg.removeAttribute('data-test');
    Pimg.setAttribute('data-test' , 'face-down-image');
    Simg.setAttribute('data-test' , 'face-down-image');
    contviradas = 0
}
function comparador() { 
	return Math.random() - 0.5; 
}
function check(){
    Phtml= Pcarta.innerHTML;
    Shtml= Scarta.innerHTML;
    if(Phtml == Shtml){
        Pcarta.classList.add('found');
        Scarta.classList.add('found');
        contacertos+=2
        contviradas=0
    }
    else{
        setTimeout(reset,1000);
    }
    if(contacertos == qtdcartas){
        clearInterval(meuInterval);
        alert("Você ganhou em "+ jogadas +" jogadas! A duração do jogo foi de "+ seg +" segundos!");
        let continuar = prompt("Você gostaria de reiniciar a partida, responda apenas com 'sim' ou 'não'.")
        while(continuar != 'sim' && continuar != 'não'){
            continuar = prompt("Você gostaria de reiniciar a partida, responda APENAS COM 'sim' ou 'não'.")
        }
        if(continuar == 'sim'){
            location.reload();
        }
    }
}
function timer(){
    seg++
    p = document.querySelector('.timer');
    p.innerHTML = seg;
}