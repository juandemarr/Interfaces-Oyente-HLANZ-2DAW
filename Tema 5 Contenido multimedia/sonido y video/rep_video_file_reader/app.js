//PARA VIDEOS
var videos=[];
var nombres=[];
var carga = 0;
var current = 0;

function ahndleFileSelect(evt){
    var files = evt.target.files;
    for(var i = 0, f; f = files[i]; i++){//for(let i=0 ; i<files.length ; i++)
        //cuando files[i] sea nulo, se devuelve a f y esa condicion seria falsa por lo que pararia
        if(!f.type.match('video/*')){
            continue;//vete a la siguiente iteración
        }
        var reader = new FileReader();
        reader.onload = (function(theFile){
            return function(e){
                videos[carga] = e.target.result;
                nombres[carga] = theFile.name;
                opcion = document.createElement("option");
                opcion.value = carga;
                opcion.innerHTML = theFile.name;
                lsita.appendChild(opcion);
                carga++;
                muestra_carga.innerHTML = "Videos cargados: "+carga;
            };
        })(f);//ejecuta una funcion se carga el reader, abajo en reader.readAsDataURL(f)
        reader.readAsDataURL(f);
    }
}

function cargar_video(){
    carga = videos.length;
    theVideo.src = videos[current];
    theVideo.load();
}
function playVideo(){
    cargar_video();
    theVideo.play();
    info.innerHTML = "Now playing " + 
}
function pauseVideo(){
    theVideo.pause();
    info.innerHTML = nombres[current] + ' paused';
}
function previous(){
    if(current > 0){
        current--;
    }
    else{
        current.
    }
}
function next(){
    if(current < videos.length-1){
        current++;
    }
    else{
        current = 0;
    }
}
function avanza10(){
    theVideo.currentTime += 10;
}
function retrocede10(){
    theVideo.currentTime -= 10;
}
function reproducir(){
    current = document.getElementById("lista_reproduccion").value;

}


//objetos de tipo blob, binarios, cosas que no son texto

document.getElementById('ficheros').addEventListener('change',handleFileSelect,false);

//CON URL
en el metodo de onchange del input tfile, el this hace referencia al input, y su .files hace referencia al atributo files de ese input