$(function(){
    let estado = false;

    $("img").on("cambiarBombilla",function(){
        if(!estado){
            $("img").attr("src","bombilla_encendida.jpg");       
        }else{
            $("img").attr("src","bombilla_apagada.jpg");   
        }
        estado = !estado;//igual que ponerlo en cada if
    })


    $("button").on("click", function(){
        $("img").trigger("cambiarBombilla");
        if(!estado)
            $(this).text("Encender");
        else
            $(this).text("Apagar");
    })


})