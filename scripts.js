function zegarek() {
    var data = new Date();
    document.getElementById("html-data").innerHTML = data.getDate() + ", " + (data.getMonth() + 1) + ", " + data.getFullYear();
    document.getElementById("html-godzina").innerHTML = data.getHours() + " : " + data.getMinutes() + " : " + data.getSeconds();
    setTimeout("zegarek()", 1);
}

window.onload = function () {
    zegarek();
}


function oceny() {

    var wynik = 100;

    if (wynik < 50) {
        document.write("F");
    }

    else if (wynik < 70) {
        document.write("D");
    }

    else if (wynik < 80) {
        document.write("C");
    }

    else if (wynik < 90) {
        document.write("B");

    }

    else if (wynik <= 100) {
        document.write("A");

    }

    else { document.write("Wynik musi byæ mniejszy ni¿ 100 punktów") }

}

function wyœwietlanie_z_arraya() {

    var txt = "";
    var person = { fname: "John", lname: "Smith", age: 30 };
    var x;
    for (x in person) {
        txt += person[x] + " ";
    }
    document.getElementById("owoce1").innerHTML = txt;


}

function pêtla_licz¹ca() {
    var i = 0;
    while (i < 10) {
        document.write(i);
        document.write("<br />");
        i++;
    }

}

function pêtla_licz¹ca2() {
    function myFunction() {
        var i = 0;
        do {
            document.write(i + "<br>");
            i++;
        }
        while (i < 10)
        document.getElementById("owoce2").innerHTML = text;
    }

}

function color_changer() {
    var koloryt³a = new Array("#7dcdee", "#e0abdd", "#27ca8b", "#7102e5", "#df9cb6", "#d8dae2");

    var aktualnykolor = Math.round(Math.random() * 5);

    document.getElementById("owoce5").innerHTML = aktualnykolor;

    document.body.style.background = koloryt³a[aktualnykolor];
}
