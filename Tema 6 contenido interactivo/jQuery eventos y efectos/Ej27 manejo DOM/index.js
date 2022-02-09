//poner la clase .ventana
//ocultar los div
//crear li con #pest y que tengan el nombre de las pestañas
$(function(){ //poner la seleccion de los modulos a una variable para no hacer tantas llamadas al dom que consumen
                //memoria
    let modulos = $('.module');
    modulos.hide();
	modulos.addClass("ventana");

	let pest = '<ul id="pest"></ul>'; //crear lista, mejor encima de los div que debajo de la etiqueta body, 
                                    //por si hay mas cosas en body
	modulos.first().before(pest);

    modulos.each(function(){
        let div = $(this);

        let titulo = div.children("h2").text();
        $("#pest").append('<li>'+titulo+'</li>');  //crear li con titulo de cada div
    });

    //mostrar de primeras el primer div
    modulos.first().show();
    $("li").first().addClass("current");
    ///////////////////////

    $("li").on("click",function(){

        let li = $(this);
        $(".current").removeClass("current"); //elimina la clase current de todos los li
        modulos.hide();  //oculta todos los div

        modulos.each(function(){
            if($(this).children("h2").text() == li.text()){ //recorrer los div para comparar su
                                                            //titulo con el texto del li y mostrar ese div
                $(this).show();
                li.addClass("current");
            }
                
        })
    })
	

});