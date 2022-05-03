window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');



}

let estadoSecreto = 0;
let palabra = ['s', 'e', 'c', 'r', 'e', 't', 'o'];
let acPosition = 0;

let titulo = document.querySelector('#titulo');

titulo.addEventListener('keypress', function(e){

if(e.key == palabra[acPosition]){
    estadoSecreto += 1;
    acPosition += 1;
    
}else if(e.key != palabra[acPosition]){
    estadoSecreto = 0;
    acPosition = 0;
}

if(estadoSecreto == 7){
    alert('Secreto magico yupi')
}


console.log(estadoSecreto)

})



