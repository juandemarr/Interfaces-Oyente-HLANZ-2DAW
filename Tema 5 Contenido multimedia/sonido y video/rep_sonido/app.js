//Elementos
const audio = document.getElementById("audio");
const duracion = document.getElementById("duracion");
const nombre = document.getElementById("nombreArchivo");
const reproduciendo = document.getElementById("reproduciendo");

const btnPlay = document.getElementById("play");
const btnRestart = document.getElementById("restart");
const btnVolumenUp = document.getElementById("v-up");
const btnVolumenDown = document.getElementById("v-down");
const btnMoreTime = document.getElementById("more-5");
const btnLessTime = document.getElementById("less-5");
const btnNext = document.getElementById("next");
const btnPrevious = document.getElementById("before");

const inputFile = document.getElementById("ficheros");//input type file

var files = null;//este files cogera la lista de archivos cargados con FileReader
//FUNCIONES

//PARA CARGAR ARCHIVO DE AUDIO CON FILE_READER
function handleFileSelect(evt){
    //Cargamos en files los archivos subido en el input files, el cual es un objeto array FileList
    files = evt.target.files;
    //Recorremos la lista para capturar sus nombree
    for(let i = 0 , f ; f = files[i] ; i++){
        //Solo procesamos los ficheros de sonido
        if(!f.type.match("audio/*")){
            continue;//si no es audio, pasa a la siguiente iteración
        }
        //usamos la variable reader para abrir los ficheros y capturar sus nombres
        var reader = new FileReader();
        //Para capturar la informacion
        reader.onload = (function(theFile){
            return function(e){
                //console.log(theFile.name);
                //console.log(e.target.result);
                //console.log(reader.result);//con la de arriba es lo mismo
                audio.src = reader.result;
                nombreFichero = theFile.name;
                nombre.innerHTML = nombreFichero;
            };
        })(f);
        //Leemos el archivo como un data URL
        reader.readAsDataURL(f);
    }
}

/**
 * funcion handleAudioChange(event){
 * //Cuando cambia el contenido del audio se actualizan los valores asociados en las etiquetas (parrafos) de la interfaz.
 *      reproduciendo.innerHTML = "Inicie la reproducción pulsando Play.";
 *      nombre.innerHTML = nombreFichero;
 * }NO SE USA
 */

function nombreFicheroAudio(a){
    let nuevo = a.split('/');
    return nuevo[nuevo.length-1]; 
}

function hora(segundos){
    let d = new Date(segundos*1000);//el objeto Date se construye en milisegundos
    let hora = d.getHours() == 0 ? 23 : d.getHours()-1; //la funcion getHours() nos dara siempre una hora de mas
    //por eso le restamos uno, ya sea 00 => 23 u otra cifra => -1
    hora = hora < 10 ? "0"+hora : hora; //si es solo un digito, en vez de aparecer 1 le añadimos un 0 delante
    let minutes = d.getMinutes() < 10 ? "0"+d.getMinutes() : d.getMinutes();
    let seconds = d.getSeconds() < 10 ? "0"+d.getSeconds() : d.getSeconds();
    return hora + " : " + minutes + " : " + seconds;
}


//EVENTOS
//cargar archivo
inputFile.addEventListener('change',handleFileSelect,false);

//tiempo actual
audio.addEventListener("timeupdate",() => {
    duracion.innerHTML = hora(audio.currentTime) + " / " + hora(audio.duration);
},false);

//Play/pause
btnPlay.addEventListener("click", () => {
    if(audio.paused){
        audio.play();
        reproduciendo.innerHTML = "El audio se está reproduciendo";
    }else{
        audio.pause();
        reproduciendo.innerHTML = "El audio está pausado";
    }
        
    
    if(files == null)
    nombre.innerHTML = nombreFicheroAudio(audio.currentSrc);
    //para los archivos subido con FileReader, no puedo coger el nombre del src a que esta encriptado,
    //se hace dentro de la funcion fileReader

}, false);

//Restart
btnRestart.addEventListener("click", () => {
    audio.currentTime=0;
    audio.pause();
},false);

//Volume up
btnVolumenUp.addEventListener("click", () => {
    if(audio.volume < 1){
        audio.volume = audio.volume + 0.1;
        //console.log(audio.volume);
    }
},false);

//Volume down
btnVolumenDown.addEventListener("click", () => {
    if(audio.volume > 0.1 ){
        audio.volume = audio.volume - 0.1;
        //console.log(audio.volume);
    }
},false);

//More time
btnMoreTime.addEventListener("click", () => {
    if(audio.currentTime < audio.duration - 4){
        audio.currentTime = audio.currentTime + 5;
        //console.log(audio.currentTime);
    }
        
},false);

//Less time
btnLessTime.addEventListener("click", () => {
    if(audio.currentTime > 4 ){
        audio.currentTime = audio.currentTime - 5;
        //console.log(audio.currentTime);
    }
    
},false);

//Next track
btnNext.addEventListener("click",() => {

},false);

//Previous track
btnPrevious.addEventListener("click",() => {

},false);


//TEORIA

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
 * 
 * ---FILE READER
 * para audio y video, src, la url por motivos de seguridad no se obtiene a traves de codigo
 * ---URL devuelve la url codificada
 * manejador del evento change del input type file, se ejecuta de manera asincrona, 
 * la lectura del fichero termina haciendose lo ultimo, y si necesito hacer alguna configuracion no tengo los datos
 * 
 */
