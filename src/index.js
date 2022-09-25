import './normalize1.css'
import './estilo.css'



// Declaracion de variables para las diferentes funcionalidades
// Menu responsive
const linitasHorizontal = document.querySelector(".icono-menu");
const navMenu = document.querySelector(".menu");
const foto = document.querySelector(".logo");
// Efecto slider manual y automatico
const contenedorAnimado = document.querySelector("#contenedor-animado");
let  seccionesAnimadas = document.querySelectorAll(".seccion-animada");
let  ultimaSeccionAnimada = seccionesAnimadas[seccionesAnimadas.length -1];
// Efecto scroll para mostrar texto
let efectoAparecer = document.querySelectorAll(".efecto-java");
// ---------------------------------------------------------------------------------------------


// Funcionalidades:
// Efecto scroll para mostrar texto
function efectoScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i =0;i < efectoAparecer.length ; i++){
        let distanciaAltura =  efectoAparecer[i].offsetTop;
        if(distanciaAltura - 600 < scrollTop){
            efectoAparecer[i].style.opacity=1;  
        }
    }
}
window.addEventListener("scroll",efectoScroll);
// Menu responsive
linitasHorizontal.addEventListener("click",(e)=>{
    document.body.style.overflow = "hidden";
    navMenu.classList.toggle("active");
    foto.classList.toggle("ocultar-foto");
});
const cruzMenu = document.querySelector(".cruz-responsive");
        cruzMenu.addEventListener("click",()=>{
        document.body.style.overflow = "initial"
        navMenu.classList.toggle("active");
        foto.classList.toggle("ocultar-foto");
});
// Efecto slider manual y automatico
contenedorAnimado.insertAdjacentElement('afterbegin',ultimaSeccionAnimada);

const moverDerecha = ()=>{
    let ultimaSeccionAnimada = document.querySelectorAll(".seccion-animada")[0];
    contenedorAnimado.style.marginLeft= "-200%";
    contenedorAnimado.style.transition= "all 2s";

setTimeout(()=>{
    contenedorAnimado.style.transition="none";
    contenedorAnimado.insertAdjacentElement('beforeend',ultimaSeccionAnimada);
    contenedorAnimado.style.marginLeft="-100%"; 
},2000);
}

setInterval(()=>{
    moverDerecha()
},3000)







