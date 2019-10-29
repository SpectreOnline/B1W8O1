var AantalFris = 0;
var AantalBier = 0;
var AantalWijn = 0;
var TotaalBedrag = 0;

//hier beginnen de functies
function bestellingPhase1() {
    var BestellingDrinken = prompt("Wat zou u willen bestellen? \n Uw opties zijn: \n Fris, bier en wijn \n als u klaar bent met bestellen typ dan stop in").toLowerCase();
    if (BestellingDrinken == "fris") {
        AantalFris += parseInt(prompt("Hoeveel dranken fris wilt u bestellen?"));
        console.log(AantalFris);
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
        var TotaalFris = AantalFris * 1.50
        document.write("Uw totaal voor Fris is: ", TotaalFris, "<br>");
    }

    if (AantalBier != 0) {
        var TotaalBier = AantalBier * 2
        document.write("Uw totaal voor Bier is: ", TotaalBier, "<br>");
    }

    if (AantalWijn != 0) {
        var TotaalWijn = AantalWijn * 2.75
        document.write("Uw totaal voor Wijn is: ", TotaalWijn, "<br>");
    }
    console.log(AantalBier);
    console.log(AantalWijn);
    if (AantalFris != 0 || AantalWijn != 0 || AantalBier != 0) {
        parseInt(TotaalBedrag = TotaalFris + TotaalBier + TotaalWijn);
        document.write("Uw totaal bedrag is: " + TotaalBedrag);
    }
}

bestellingPhase1();

