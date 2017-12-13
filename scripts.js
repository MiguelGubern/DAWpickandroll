$(window).on("load",function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 157) {
            $("#nav").addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 158) {
            $("#nav").removeClass('navbar-fixed-top');
        }
    });
    toLast(1);
    toLast(2);
    toLast(3);

    // var d = new Date();
    // var m = d.getMonth()+1;
    // var text = d.getDate() + '-' + m + '-' + d.getFullYear()
    // $("#date-resultados").text(text);

});

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
