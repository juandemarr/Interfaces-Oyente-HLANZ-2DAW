/*JQUERY. Libreria de js
learn.jquery.com (desde jquery, how jaquery works)
jquery core API

<script src="o descargado de la pag oficial" o "url de cdn,seleccioanr el minified"></script>


//Poner siempre esto para cargar el dom

$(document).ready(function(){  //funcion anonima
    //aqui se escribe el resto del codigo
});

//A partir de la version 3
$(function(){

});


--- ELEMENTOS
formas de crear una variable = var, let , const, sin nada y $delante como en $img
$() -> selector de jQuery


--- PPROCESO DE TRABAJO 

*NOTA:casi siempre: .css() con un parametro lee el contenido, con 2 parametros lo modifica
resto de funciones, .html() obtiene, con un parametro modifica

Se pueden encadenar las funciones
$("h1").html().addClass("test") //se lo añade a todas las etiquetas html que haya dentro de h1

.html() es como .innerHTML
para crearlo como nodo DOM es con .append


--- SELECTORES igual que en css, ademas:
-- [atributo]
-- [atributo = "valor"]
-- [atributo ^= "value"] selecciona los elementos en los que el atributo se
    inicia con un valor específico
    ej: $ ('a [href ^= "http://"]')
-- [atributo $= "valor"] Selecciona elementos cuyo atributo termina con
    un valor específico
    ej: $ ('a [href $= ".pdf"]')
-- [atributo *= "valor"] selecciona elementos cuyo atributo contiene un
   valor específico en cualquier parte del atributo.
   ej: $ ('a [href *= "missingmanuals.com"]')


--- BUCLES
--para recorrer, .each(function(){}) //con funcion anonima o a una que ya exista

1. Seleccionar algun elemento del arbol DOM del doc
=> $("p").text("hola") //que tengan ese texto

--- $() //que puede ir dentro:
    - selector y pseudo-selectores de CSS 
            =>  $("p") => selecciona todos los parrafos
                $("#lista")
                $(".clase")
                $("#lista li:first")

    - Funciones como: has() , conteins() , not(), filter(), find(), 
    .eq(2) => empieza en 0, coge el tercer elemento de los que se devuelven
    .val() el valor del input
            => $("#lista:has(li#current)") que tenga esos elementos html
            => contains (texto plano)
    
    Ver: API documentation for traversing

2. Hacemos alguna operacion con ese elemento
    - Leer o modificar sus atributos
            => $(a#enlace).attr("href") //consultar su valor
            => $(a#enlace).attr("href" , "valor") //le asigna ese valor

    - Leer o modificar el codigo HTML que contiene
            => .html()
                $("div").html() //devuelve el html de ese elemento
                $("div").html("param") //le mete ese html

    - Leer o modificar su clase.
            => .css()
                $("div").css("propiedadCSS"); //lee //tanto noracion normal como camelCase
                $("div").css("propiedadCSS","valor"); //modifica
                    $("div").css({propiedadCSS:valor , prop2:valor2}) //como objeto
            => .addClass("nombre") //añadre otra a las existentes

            => .removeClass("nombre") //

            => .toggleClass("nombre") //si esta ese nombre lo quita, si no lo pone

    - Añadir, mover o eliminar elementos del arbol DOM
            => .append()
                $("div").append("elementoJS") //lo añade como ultimo hijo de ese elemento
            =>  $("ElementoAañadir").appendTo("elementoAlQueSeAñade")

            =>prepend() => primer hijo
            =>prependTo()

            => before => justo antes de la etiqueta de apertura (hermano)
            => after => justo despues de la etiqueta de cierre
            //estas 2 añaden un eleento al final de la seleccion

            => .remove()

            => .clone()

            --- Para recorrer el arbol DOM => funciones de traversing:


    - Recorrer el arbol DOM
            .children() //devuelve todos los hijos
            .first()
            .next()
            .parent()

--- EVENTOS
$("#cerrar").click( function() {
			$(".ventana").remove(); 
	});

    Selecciono el elemento .nombreEvento(function(){
        cosa a hacer
    })

.length

como no se puede saltar de un nodo a otro, hay que ir recorriendo el DOM

///////////////////////////////////////////////////////RESUMEN 2-clase
1. Importar la libreia (descargandola o CDN)
2. $(function(){

})
$().text() //muestra el texto
se convierte en un objeto jQuery antes de aplicarle una funcion, con $

Contenido (consultar,obtener) => text, html

Atributos => attr, css, addClass, removeClass, toggleClass

Modificar el DOM => append, appendTo, prepend, prependTo, after,before, remove

Traversing => at, ,children() busca hacia abajo en hijos directos, closest() busca hacia arriba en los padres directos, 
find() busca en todos los hijos, silblings() busca en los hermanos, first, last, next, prev...

each => this para tratar con cada elemento
para convertirlo a objeto jQuery => $(this)


asignacion:
var = $("<div></div>");

:last , :hidden , etc.


--- EVENTOS
Evento
    - se producen sobre un determinado elemento (generado por ususario o codigo)
    - se responde a ellos usando una funcion

- 1 forma, indicando el nombre del evento:
$("#boton").click( function(){

})

- 2 forma, on(admite hasta 4 parametros), se pueden añadir varios eventos simultaneamente a un objeto
$("#boton").on("click", function(){

})

.focus()
.blur() al perder el foco

#objeto es un input type text
$('#objeto).keypress(function(e){
    e.preventDefault() //evita que aparezca por defecto el texto en este input
    $("#salidapress").append(e.which + ";" + String.fromCharCode(e.which));
})

*/