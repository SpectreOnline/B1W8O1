var AantalFris = 0;
var AantalBier = 0;
var AantalWijn = 0;
var TotaalFris = 0;
var TotaalBier = 0;
var TotaalWijn = 0;
var TotaalBedrag = 0;

//hier beginnen de functies
function bestellingPhase1() {
    var BestellingDrinken = prompt("Wat zou u willen bestellen? \n Uw opties zijn: \n Fris, bier en wijn \n als u klaar bent met bestellen typ dan stop in").toLowerCase();
    if (BestellingDrinken == "fris") {
        AantalFris += parseInt(prompt("Hoeveel dranken fris wilt u bestellen?"));
        bestellingPhase1();
    } else if (BestellingDrinken == "bier") {
        AantalBier += parseInt(prompt("Hoevel glazen bier wilt u bestellen?"));
        bestellingPhase1();
    } else if (BestellingDrinken == "wijn") {
        AantalWijn += parseInt(prompt("hoeveel glazen wijn wilt u bestellen?"));
        bestellingPhase1();
    } else if (BestellingDrinken == "stop") {
        bestellingPhase2();
    } else {
        alert("keuze is ongeldig");
        bestellingphase1();
    }
}

function bestellingPhase2() {
    if (AantalFris != 0) {
        TotaalFris = parseInt(AantalFris * 1.50)
        //document.write("Uw totaal voor Fris is: ", TotaalFris, "<br>");
        document.getElementById('item1amount').innerHTML = 'Uw totaal aantal fris is: ' + AantalFris;
        document.getElementById('item1total').innerHTML = 'Uw totaal voor fris is: ' + TotaalFris, '<br>';
    }

    if (AantalBier != 0) {
        TotaalBier = parseInt(AantalBier * 2)
        //document.write("Uw totaal voor Bier is: ", TotaalBier, "<br>");
        document.getElementById('item2amount').innerHTML = 'Uw totaal aantal glazen bier is: ' + AantalBier;
        document.getElementById('item2total').innerHTML = 'Uw totaal voor bier is: ' + TotaalBier, '<br>';
    }

    if (AantalWijn != 0) {
        TotaalWijn = parseInt(AantalWijn * 2.75)
        //document.write("Uw totaal voor Wijn is: ", TotaalWijn, "<br>");
        document.getElementById('item3amount').innerHTML = 'Uw totaal aantal glazen wijn is: ' + AantalWijn;
        document.getElementById('item3total').innerHTML = 'Uw totaal voor wijn is: ' + TotaalWijn, '<br>';

    }

    if (AantalFris != 0 || AantalWijn != 0 || AantalBier != 0) {
        parseInt(TotaalBedrag += TotaalFris += TotaalBier += TotaalWijn);
        //document.write("Uw totaal bedrag is: " + TotaalBedrag);
        document.getElementById('result').innerHTML = 'Uw totaal bedrag is: ' + TotaalBedrag;
    }
}


