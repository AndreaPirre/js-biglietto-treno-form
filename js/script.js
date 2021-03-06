var creaBtn = document.getElementById('creaBiglietto');
var annullaBtn = document.getElementById('annullaBiglietto');

creaBtn.addEventListener("click", function () {

    var costoBiglietto;
    var prezzoKm = 0.21;
    var nome = document.getElementById('nome').value;
    var km = document.getElementById('km').value;
    var categoria = document.getElementById('categoria').value;
    var minCarrozza = 1;
    var maxCarrozza = 10;
    var minNumeroTreno = 90000;
    var maxNumeroTreno =100000;

    if (categoria == "Minorenne") {
        var costoBiglietto = (km * prezzoKm - 20/100 * (km * prezzoKm)).toFixed(2) + " euro" + " (hai meno di 18 anni, applicato uno sconto del 20%)"  ;
    }else if (categoria == "Over 65") {
        var costoBiglietto = (km * prezzoKm - 40/100 * (km * prezzoKm)).toFixed(2) + " euro" + " (hai più di 65 anni, applicato uno sconto del 40%)";
    }else {
        var costoBiglietto = (km * prezzoKm).toFixed(2) + " euro" + " (è stata applicata la tariffa base)";
    }

    var numeroTreno = Math.floor(Math.random()*(maxNumeroTreno - minNumeroTreno + 1)) + minNumeroTreno;
    var carrozza = Math.floor(Math.random()*(maxCarrozza - minCarrozza + 1)) + minCarrozza;

    document.getElementById('passeggero').innerHTML = nome;
    document.getElementById('numeroTreno').innerHTML = numeroTreno;
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('costoBiglietto').innerHTML = costoBiglietto;
    document.getElementById('categoriaPasseggero').innerHTML = categoria;

    document.getElementById('biglietto').className = "show";


});

annullaBtn.addEventListener("click", function () {
    document.getElementById('biglietto').className = "hidden";
    document.getElementById('nome').value = "";
    document.getElementById('km').value = "carrozza";
    // document.getElementById('categoria').innerHTML = "Maggiorenne";
})
