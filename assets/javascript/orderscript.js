var AantalFris = 0;
var AantalBier = 0;
var AantalWijn = 0;
var TotaalFris = 0;
var TotaalBier = 0;
var TotaalWijn = 0;
var Aantalzesbitterballen = 0;
var Aantaltwaalfbitterballen = 0;
var TotaalBedrag = 0;
var KeuzeBitterballen
var KeuzeBitterballen6 = 0;
var KeuzeBitterballen12 = 0;
var TotaalBitterballen6 = 0;
var TotaalBitterballen12 = 0;


//hier kan men kiezen wat men wilt
function bestellingPhase1() {
    var BestellingDrinken = prompt("Wat zou u willen bestellen? \n Uw opties zijn: \n Fris, bier, wijn en bitterballen \n als u klaar bent met bestellen typ dan stop in").toLowerCase();
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
    } else if (BestellingDrinken == "bitterballen") {
        KeuzeBitterballen = prompt('Wilt u porties van 6 of 12 bitterballen bestellen?')
        if (KeuzeBitterballen = '6') {
            KeuzeBitterballen6 += parseInt(prompt('Hoeveel porties van 6 wilt u?'));
            bestellingphase1();
        } else if (KeuzeBitterballen = '12') {
            KeuzeBitterballen12 += parseInt(prompt('Hoeveel porties van 12 wilt u?'));
            bestellingphase1();
        } else {
            alert('keuze is ongeldig')
            bestellingPhase1();
        }
    } else {
        alert("keuze is ongeldig");
        bestellingphase1();
    }
}

//Bij deze functie wordt de totaal prijs berekent en weergegeven op de webpagina.
function bestellingPhase2() {
    if (AantalFris != 0) {
        TotaalFris = parseInt(AantalFris * 1.50)
        //document.write("Uw totaal voor Fris is: ", TotaalFris, "<br>");
        document.getElementById('item1amount').innerHTML = 'Uw totaal aantal fris is: ' + AantalFris;
        document.getElementById('item1total').innerHTML = 'Uw totaal voor fris is: ' + TotaalFris.toFixed(2), '<br>';
    }

    if (AantalBier != 0) {
        TotaalBier = parseInt(AantalBier * 2)
        //document.write("Uw totaal voor Bier is: ", TotaalBier, "<br>");
        document.getElementById('item2amount').innerHTML = 'Uw totaal aantal glazen bier is: ' + AantalBier;
        document.getElementById('item2total').innerHTML = 'Uw totaal voor bier is: ' + TotaalBier.toFixed(2), '<br>';
    }

    if (AantalWijn != 0) {
        TotaalWijn = parseInt(AantalWijn * 2.75)
        //document.write("Uw totaal voor Wijn is: ", TotaalWijn, "<br>");
        document.getElementById('item3amount').innerHTML = 'Uw totaal aantal glazen wijn is: ' + AantalWijn;
        document.getElementById('item3total').innerHTML = 'Uw totaal voor wijn is: ' + TotaalWijn.toFixed(2), '<br>';

    }

    if (KeuzeBitterballen6 != 0) {
        TotaalBitterballen6 = parseInt(KeuzeBitterballen6 * 3.50)
        document.getElementById('item4amount').innerHTML = 'Uw totaal aantal porties van 6 bitterballen is: ' + KeuzeBitterballen6;
        document.getElementById('item4total').innerHTML = 'Uw totaal voor de porties bitterballen van 6 is: ' + TotaalBitterballen6.toFixed(2), '<br>';

    }

    if (KeuzeBitterballen12 != 0) {
        TotaalBitterballen12 = parseInt(KeuzeBitterballen12 * 6)
        document.getElementById('item5amount').innerHTML = 'Uw totaal aantal porties van 12 bitterballen is: ' + KeuzeBitterballen12;
        document.getElementById('item5total').innerHTML = 'Uw totaal voor de porties bitterballen van 12 is: ' + TotaalBitterballen12.toFixed(2), '<br>';

    }


    if (AantalFris != 0 || AantalWijn != 0 || AantalBier != 0 || KeuzeBitterballen6 != 0 || KeuzeBitterballen12 != 0) {
        parseInt(TotaalBedrag += TotaalFris += TotaalBier += TotaalWijn += KeuzeBitterballen6 += KeuzeBitterballen12);
        //document.write("Uw totaal bedrag is: " + TotaalBedrag);
        document.getElementById('result').innerHTML = 'Uw totaal bedrag is: ' + TotaalBedrag.toFixed(2);
    }
}


