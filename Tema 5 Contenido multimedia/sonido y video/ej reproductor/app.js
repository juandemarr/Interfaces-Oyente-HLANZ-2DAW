//Elementos
const audio = document.getElementById("audio");
const duracion = document.getElementById("duracion");
const nombreArchivo = document.getElementById("nombreArchivo");

const btnPlay = document.getElementById("play");
const btnRestart = document.getElementById("restart");
const btnVolumenUp = document.getElementById("v-up");
const btnVolumenDown = document.getElementById("v-down");
const btnMoreTime = document.getElementById("more-5");
const btnLessTime = document.getElementById("less-5");

let nombreFichero;

//Funciones
function nombreFicheroAudio(a){
    let nuevo = a.split('/');
    return nuevo[nuevo.length-1]; 
}

//Eventos
btnPlay.addEventListener("click", () => {
    if(audio.paused)
        audio.play();
    else
        audio.pause();
    
    duracion.innerHTML = audio.duration;
    nombreArchivo.innerHTML = "Nombre de fichero: " + nombreFicheroAudio(audio.currentSrc);

}, false);

btnRestart.addEventListener("click", () => {
    audio.currentTime=0;
    audio.pause();
},false);

btnVolumenUp.addEventListener("click", () => {
    if(audio.volume < 1){
        audio.volume = audio.volume + 0.1;
        //console.log(audio.volume);
    }
        
    
},false);

btnVolumenDown.addEventListener("click", () => {
    if(audio.volume > 0.1 ){
        audio.volume = audio.volume - 0.1;
        //console.log(audio.volume);
    }
        
},false);

btnMoreTime.addEventListener("click", () => {
    audio.currentTime = audio.currentTime + 5;
    console.log(audio.currentTime);
},false);

btnLessTime.addEventListener("click", () => {
    audio.currentTime = audio.currentTime - 5;
    console.log(audio.currentTime);
},false);

//timeupdate funcion de la api de audio que se llama cada vez que se actualiza el tiempo
//audio.addEventListener('timeupdate',videoTimeUpdate,false)

//para barra de progreso creado con divs
//currentTime * 100 / duration
//y como porcentaje se le aplica el ancho de la barra

/**
 * Para subir multiples archivos
 * 1. seleccionar en el input varios archivos
 * 2. en el manejador (input file) se almacena la informacion de los archivos en 2 arrays (fichero y nombre)
 * en el bucle relleno esos dos arrays, o sacar el nombre del array del fichero
 * 3. cargo el primer video en el reproductor (load). Para esto hay un boton aparte cargar
 * 4. se reproduce (play)
 */