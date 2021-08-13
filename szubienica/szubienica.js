window.onload = start;


var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var yes = new Audio("img/yes.wav");
var no = new Audio("img/no.wav");

var ile_skuch = 0;
var dlugosc = haslo.length;
var haslo1 = "";

for (i = 0; i < dlugosc; i++) {

    if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}



function wypisz_haslo() {

    document.getElementById("plansza").innerHTML = haslo1;

}
var abc = new Array(35);

abc[0] = "A";
abc[1] = "Ą";
abc[2] = "B";
abc[3] = "C";
abc[4] = "Ć";
abc[5] = "D";
abc[6] = "E";
abc[7] = "Ę";
abc[8] = "F";
abc[9] = "G";
abc[10] = "H";
abc[11] = "I";
abc[12] = "J";
abc[13] = "K";
abc[14] = "L";
abc[15] = "Ł";
abc[16] = "M";
abc[17] = "N";
abc[18] = "Ń";
abc[19] = "O";
abc[20] = "Ó";
abc[21] = "P";
abc[22] = "Q";
abc[23] = "R";
abc[24] = "S";
abc[25] = "Ś";
abc[26] = "T";
abc[27] = "U";
abc[28] = "V";
abc[29] = "W";
abc[30] = "X";
abc[31] = "Y";
abc[32] = "Z";
abc[33] = "Ż";
abc[34] = "Ź";



function start() {

    var tresc_diva = "";

    for (i = 0; i <= 34; i++) {

        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div onclick="sprawdz(' + i + ')" class="litera" id="' + element + '">' + abc[i] +  '</div>';
        if ((i + 1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;

    wypisz_haslo();
}

String.prototype.ustawZnak = function (miejsce, znak) {

    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

function sprawdz(nr) {

    var trafiona = false;

    for (i = 0; i < dlugosc; i++) {
        if (haslo.charAt(i) == abc[nr]) {
            haslo1 = haslo1.ustawZnak(i, abc[nr]);
            trafiona = true;
        }
    }
        if (trafiona == true) {
            yes.play();
            var element = "lit" + nr;
            document.getElementById(element).style.color = "green";
            document.getElementById(element).style.background = "#59e50f";
            document.getElementById(element).style.cursor = "default";
            document.getElementById(element).style.border = "3px solid #80f85d";
            wypisz_haslo();
        }
        else {
            no.play();
            var element = "lit" + nr;
            document.getElementById(element).style.color = "#b00000";
            document.getElementById(element).style.background = "#fc2b2b";
            document.getElementById(element).style.cursor = "default";
            document.getElementById(element).style.border = "3px solid #fa2f2f";
            document.getElementById(element).setAttribute("onclick",";");

            ile_skuch++; 
            var obraz = "img/s" + ile_skuch + ".jpg";
            document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '" alt="" />';
        }

    if (haslo == haslo1) {
        document.getElementById("alfabet").innerHTML = 'Brawo! Podałeś poprawne hasło: ' + haslo +
            '<br/><br/><span class="reset" onclick="location.reload();"> JESZCZE RAZ?</span>';
    }
    if (ile_skuch >= 9) {
        document.getElementById("alfabet").innerHTML = 'Przegrałeś! Prawidłowe hasło:<br/>' + haslo +
            '<br/><br/><span class="reset" onclick="location.reload();"> JESZCZE RAZ?</span>';
    }

    }



