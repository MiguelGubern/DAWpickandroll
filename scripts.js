
function cargarSugerencias() {
    // var insert = $("#añadirArticulos");
    var html = "";
    $.getJSON("../articulos.json", function (dataJson) {
        $.each(dataJson.data, function (index, element) {
            html += "<img src=\"" + element.img + "\" width=\"100%\">\n" +
                "        <h4>" + element.articulo + "</h4>\n" +
                "        <span>Fecha: " + element.fecha + "</span><hr/>";
        });
        console.log(html);
        $("#añadirArticulos").append(html);
    });
}

function enviar() {
    alert("Gracias por contactar con nosotros");
}

var contador = 1;
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(28.0724719,-15.4515526),
        zoom:18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function comentar() {
    var comentario = $("textarea#comment").val();
    $( ".media" ).append( "<div class=\"media-left\">\n" +
        "<img src=\"../img/LogoP&Rnaranja.png\" class=\"media-object\" style=\"width:60px\">\n" +
        "</div>\n" +
        "<div class=\"media-body\">\n" +
        "<h4 class=\"media-heading\">Tú</h4>\n" +
        <!--<aqui deberia ponerse en vez de ese p con el lorem, poner el parrafo escrito por el usuario to bomba>-->
        "<p id='añadir"+contador+"'></p>\n" +
        "</div>\n" +
        "<br>" );
    $( "#añadir"+contador).append(comentario);
    contador= contador+1;
}

function toLast(section) {
    $('#resultNext'+section).css("background-color", "");
    $('#resultLast'+section).css("background-color", "gainsboro");
    var html ="<table class=\"table\" id=\"tablePortada1\">\n" +
        "                        <tr>\n" +
        "                            <th>V</th>\n" +
        "                            <th>-</th>\n" +
        "                            <th>L</th>\n" +
        "                        </tr>\n" +
        "\n" +
        "                            <tr>\n" +
        "                                <td>F.C.B.</td>\n" +
        "                                <th class=\"result-td\">96 - 97</th>\n" +
        "                                <td>Herbalife GC</td>\n" +
        "                            </tr>\n" +
        "                            <tr>\n" +
        "                                <td>CB Canarias</td>\n" +
        "                                <th class=\"result-td\">79 - 66</th>\n" +
        "                                <td>Baskonia</td>\n" +
        "                            </tr>\n" +
        "                    </table>";
    $('#tablaResult'+section).html(html);
}



function toNext(section) {
    $('#resultLast'+section).css("background-color", "");
    $('#resultNext'+section).css("background-color", "gainsboro");
    var html ="<table class=\"table\">\n" +
        "                        <tr>\n" +
        "                            <th>V</th>\n" +
        "                            <th>-</th>\n" +
        "                            <th>L</th>\n" +
        "                        </tr>\n" +
        "\n" +
        "                            <tr>\n" +
        "                                <td>T.Zaragoza</td>\n" +
        "                                <th class=\"result-td\">0 - 0</th>\n" +
        "                                <td>Valencia Basket</td>\n" +
        "                            </tr>\n" +
        "                            <tr>\n" +
        "                                <td>M. Fuenlabrada</td>\n" +
        "                                <th class=\"result-td\">0 - 0</th>\n" +
        "                                <td>Movistar Estu</td>\n" +
        "                            </tr>\n" +
        "                            <tr>\n" +
        "                                <td>Juventud</td>\n" +
        "                                <th class=\"result-td\">0 - 0</th>\n" +
        "                                <td>Murcia</td>\n" +
        "                            </tr>\n" +
        "                    </table>";
    $('#tablaResult'+section).html(html);
}
