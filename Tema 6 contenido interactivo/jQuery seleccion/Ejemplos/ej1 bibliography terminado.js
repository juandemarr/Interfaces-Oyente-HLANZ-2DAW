$(function(){ //todo aqui dentro
    var preparacion = "<div></div>";
    var titulo = "<h3></h3>";
    var lista = "<ul id='bib'></ul>";

    $(".main").append(preparacion);
    $(".main div").append(titulo);
    $(".main div").append(lista);

    $(".a").each( function(){ //en this se guarda cada elemento al recorrer el array
        var direccion = $(this).attr("href");
        var texto = $(this).html();
        var liElem = $("<li></li>");
        liElem.html("<span id='destacado'>" + texto + "</span>: "+direccion);
        liElem.appendTo("#bib");

    });//fin de each

});//fin de ready