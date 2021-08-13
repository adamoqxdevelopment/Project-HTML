window.onload = start;


var przyslowia = new Array(15);

przyslowia[0] = "Bez pracy nie ma kołaczy";
przyslowia[1] = "Apetyt rośnie w miarę jedzenia";
przyslowia[2] = "Dzieci i ryby głosu nie mają";
przyslowia[3] = "Grosz do grosza a będzie kokosza";
przyslowia[4] = "Łaska pańska na pstrym koniu jeździ";
przyslowia[5] = "Nie chwal dnia przed zachodem słońca";
przyslowia[6] = "Nie od razu Kraków zbudowano";
przyslowia[7] = "Biednemu zawsze wiatr w oczy";
przyslowia[8] = "Nie taki diabeł straszny jak go malują";
przyslowia[9] = "My rządzimy światem a nami kobiety";
przyslowia[10] = "Co nagle to po diable";
przyslowia[11] = "Mądry głupiemu ustępuje";
przyslowia[12] = "Im dalej w las tym więcej drzew";
przyslowia[13] = "Czas najlepszym lekarzem ";
przyslowia[14] = "Lepiej z mądrym zgubić niż z głupim znaleźć";

var film = new Array(15);

film[0] = "Interstellar";
film[1] = "Titanic";
film[2] = "Catch me if you can";
film[3] = "Incepcja";
film[4] = "Suicide squad";
film[5] = "Joker";
film[6]= "Godzilla";
film[7] = "Wonder Woman";
film[8] = "Terminator";
film[9] = "Deadpool";
film[10] = "Predator";
film[11] = "Shrek";
film[12] = "Iron man";
film[13] = "Władca pierścieni";
film[14] = "Park jurajski";

var gra = new Array(15);

gra[0] = "CSGO";
gra[1] = "Minecraft";
gra[2] = "Grand Theft Auto";
gra[3] = "Ark Survival Evolved";
gra[4] = "Euro Truck Simulator";
gra[5] = "Farming Simulator";
gra[6] = "The Forest";
gra[7] = "Wiedźmin";
gra[8] = "Tomb Raider";
gra[9] = "Metro";
gra[10] = "Twierdza";
gra[11] = "Dead by daylight";
gra[12] = "FNAF";
gra[13] = "Dont Starve Together";
gra[14] = "Arma";


var kategoria = new Array(3);
kategoria[0] = "Przysłowie";
kategoria[1] = "Film";
kategoria[2] = "Gra";


var losowa_kategoria = Math.floor(Math.random() * 3);
var akt_kategoria;
if (losowa_kategoria == 0) akt_kategoria = "Przysłowie";
if (losowa_kategoria == 1) akt_kategoria = "Film";
if (losowa_kategoria == 2) akt_kategoria = "Gra";


document.write('Kategoria: ' + akt_kategoria + '<br/>');

var losowe_haslo = Math.floor(Math.random() * 15);
document.write('Hasło: ' + losowe_haslo);

var haslo = "";

if (losowa_kategoria == 0) {
    haslo = przyslowia[losowe_haslo];
    haslo = haslo.toUpperCase();

}
if (losowa_kategoria == 1) {
    haslo = film[losowe_haslo];
    haslo = haslo.toUpperCase();
}
if (losowa_kategoria == 2) {
    haslo = gra[losowe_haslo];
    haslo = haslo.toUpperCase();
}



var yes = new Audio("img/yes.wav");
var no = new Audio("img/no.wav");
var win = new Audio("img/win.wav");
var lose = new Audio("img/lose.wav");

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
        win.play();
        document.getElementById("alfabet").innerHTML = 'Brawo! Podałeś poprawne hasło: ' + haslo +
            '<br/><br/><span class="reset" onclick="location.reload();"> JESZCZE RAZ?</span>';
    }
    if (ile_skuch >= 9) {
        lose.play();
        document.getElementById("alfabet").innerHTML = 'Przegrałeś! Prawidłowe hasło:<br/>' + haslo +
            '<br/><br/><span class="reset" onclick="location.reload();"> JESZCZE RAZ?</span>';
    }

    }



