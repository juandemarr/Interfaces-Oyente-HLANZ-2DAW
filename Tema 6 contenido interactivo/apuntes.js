/*JQUERY. Libreria de js
learn.jquery.com (desde jquery, how jaquery works)
jquery core API

<script src="o descargado de la pag oficial" o "url de cdn,seleccioanr el minified"></script>
preferible de cdn, ya que tras acceder se queda en cache

//Poner siempre esto para cargar el dom

$(document).ready(function(){  //funcion anonima
    //aqui se escribe el resto del codigo
});

//A partir de la version 3
$(function(){

});

!!!!!!!!!!!!!!!!!NO USAR FUNCIONES ARROW

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

- 2 forma, on("click", 'li', {name: "Karl", date: "32"}, function(){} ) => hasta 4 parametros: 
nombreEvento, delegacion de eventos, datos, funcion manejadora

$("#boton").on("click", function(){

})

-- multiples eventos, se pasan como objetos dentro de on
$(this) hace referencia al elemento actual que produce el evento

$('p').on({
    'click': function() {
    console.log('clickeado');
    },
    'mouseover': function() {
    console.log('sobrepasado');
    }
});

--- DESVINCULAR EVENTOS 
.off("nombreEvento")

$('p').on('click', foo).on('click', bar);
$('p').off('click', bar); // foo esta atado aún al evento click

//EVENTOS DE RATON
.blur()
.click()
.dblclick()
.focusin()
.focusout() si cualquier hijo pierde le foco tbn
.mousedown() al presionar el boton del raton
.mouseup() al levantar el boton del raton
.mouseenter() al entrar a un elemento
.mouseleave() al salir del objeto
.mousemouve() cuando se mueve el raton dentro de un elemento
.mouseover() se propaga por los hijos a diferencia de mouseenter()
.mouseout() tbn se propaga por los hijos a diferencia de mouseleave()

//EVENTOS DE TECLADO
.focusin()
.focusout()
.keydown() al presionar una tecla
.keyup() cuando se libera una tecla
.keypress() al presionar una tecla pero con la idea de capturar que tecla se ha pulsado.Captura uno por uno cada caracter aunque se mantenga pulsado, keydown no

//EVENTOS DE VENTANA
.scroll() cuando se mueve un scroll
.resize() //cuando a un elemento se le cambia el tamaño de la ventana

//OBJETO DEL EVENTO e
tienen propiedades y metodos:
pageX, pageY //posicion del puntero , relativo a las zonas superiores e izquierda de la pag
type //tipo de evento
which //boton o tecla presionada
data //lee info pasada al objeto del evento
target
preventDefault()
stopPropagation()

//VINCULAR UN EVENTO UTILIZANDO EL MÉTODO ON CON INFORMACIÓN ASOCIADA
$( "button" ).on( "click", {name: "Karl", date: "32"}, greet );
//de poner mas datos, irian dostos dentro de los {} separados por comas

se accede con e.data.name

function greet( event ) {
    alert( "Hello " + event.data.name );
}


//EJECUCIÓN AUTOMÁTICA DE CONTROLADORES DE EVENTOS
trigger, jQuery provee una manera de disparar controladores
de eventos sobre algún elemento sin requerir la acción del usuario.
aqui se crea: $( "p" ).on( "myCustomEvent", function( event, myName )
aqui se llama: 
$( "button" ).click(function () {
$( "p" ).trigger( "myCustomEvent", [ "John" ] );
});


//DELEGACION DE EVENTOS
al asociar un evento a un elemento, si luego se crean mas de esos elementos, no tendran dicho evento, 
para ello se coge el contenedor y sepone la funcion indicandole el elemento sobre el que se tiene que ejecutar

$( "body" ).on( "click", "p", function() {
$( this ).after( "<p>Another paragraph! " + (++count) + "</p>" );
});

//DESVINCULAR EVENTOS DELEGADOS
$('#myUnorderedList').off('click', 'li');


EXTRA:
.focus()
.blur() al perder el foco
.hover()
.show()
.hide()

#objeto es un input type text
$('#objeto).keypress(function(e){
    e.preventDefault() //evita que aparezca por defecto el texto en este input
    $("#salidapress").append(e.which + ";" + String.fromCharCode(e.which));
})

Hacer ej a partir del 21


--- EFECTOS
Para jquery ui, importar css min y jquery min

Sustitutos de slideToggle o slideUp etc, con jquery ui
.toggle(nombreEleido, opciones, duracion en ms)
(ver api)

$("#dashboard").hover(
			function(){
				$(this).stop().animate({
					left:"0px",
					backgroundColor:"rgb(27, 45, 94)"
				}, 500 , "easeInSine");	//si la duracion y efectos son los mismos para todas las propiedades, se ponen
                al final fuera de las {} de las propiedades			
			},
			function(){
				$(this).stop().animate({
					//left: [1500, "easeOutBounce", "=0"],
					//backgroundColor : [1500, "easeOutBounce", "rgb(255, 211, 224)"]
					left:"-92px",
					backgroundColor:"rgb(255, 211, 224)"
				}, 1500, "easeOutBounce");
			}
		)

el .stop() es para que si se hace otra animacion, no se ponga en cola y tenga que esperar a que termine la primera, 
sino que termine en ese momento y comience la ssiguiente sin acumularse

.wrap() hace que el elemento actual se meta dentro de lo indicado en wrap
.wrapAll() para todos los elementos llamados asi


se pueden crear componentes en jquery, tipo boostrap, con una estructura de html ids y clases, luego en 
el html se escriben con esa estructura, y se importa ese componente o libreria
*/