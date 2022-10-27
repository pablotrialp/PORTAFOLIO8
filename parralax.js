let header = document.getElementById('header')

let nube1 = document.getElementById('nube1')
let transparente = document.getElementById('transparente')
let nube2 = document.getElementById('nube2')
let slogan = document.getElementById('slogan')
let btn = document.getElementById('btn')
let viento = document.getElementById('viento')
let persona = document.getElementById('persona')
let persona2 = document.getElementById('persona2')


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    persona.style.marginLeft = value* 4  + 'px';
    persona2.style.marginLeft= value* 4  + 'px';

})

const navigation = document.querySelector('nav')
document.querySelector('.menu').onclick = function (){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
} 
