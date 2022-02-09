$(function(){
    function manejador(event){
        event.preventDefault();
        alert(event.data.fuente);
    }

    $("a").on("mouseover", {fuente : "enlace"}, manejador);
    $("p").on("click" , { fuente : "parrafo"} , manejador);
})