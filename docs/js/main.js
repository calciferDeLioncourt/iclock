
const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

document.getElementById("reloj_en_vivo").addEventListener("click", my);
function my(){
    document.getElementById("reloj_en_vivo").classList.toggle("on");
};
    

window.requestAnimationFrame = function(f){setTimeout(f, 60)};
 
 
function updateclock(){
let fecha = new Date()
var element = document.querySelector("#reloj_en_vivo");
    if(element.classList.contains("on")){
        var grado_de_hora = ( fecha.getHours() + fecha.getMinutes()/60 ) / 12 * 360;
        var grado_de_minuto = fecha.getMinutes() / 60 * 360;
    }else{
        var grado_de_hora = ( 13 + fecha.getMinutes()/60 ) / 12 * 360;
        var grado_de_minuto = 23 / 60 * 360;
    };
let grado_de_segundo = ( fecha.getSeconds() + fecha.getMilliseconds()/1000 ) /60 * 360;
hora.style.transform = 'rotate(' + grado_de_hora + 'deg)';
minuto.style.transform = 'rotate(' + grado_de_minuto + 'deg) ';
segundo.style.transform = 'rotate(' + grado_de_segundo + 'deg)';
requestAnimationFrame(updateclock);
};
 
requestAnimationFrame(updateclock);