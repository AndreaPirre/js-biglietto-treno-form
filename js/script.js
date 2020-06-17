var creaBtn = document.getElementById('creaBiglietto');
var annullaBtn = document.getElementById('annullaBiglietto');

creaBtn.addEventListener("click", function () {

    var costoBiglietto;
    var costoBase = km * 0.21;
    var costoMinorenni = costoBase - (costoBase * 20 / 100);
    var costoOver = costoBase - (costoBase * 40 / 100);
    var prezzoKm = 0.21;
    var nome = document.getElementById('nome').value;
    var km = document.getElementById('km').value;
    var categoria = document.getElementById('categoria').value;
    var minCarrozza = 1;
    var maxCarrozza = 10;
    var minNumeroTreno = 90000;
    var maxNumeroTreno =100000;

    if (categoria == "minorenne") {
        var costoBiglietto = costoMinorenni.toFixed(2) + " euro" + " (hai meno di 18 anni, è già stato applicato uno sconto del 20%)"  ;
    }else if (categoria == "over65") {
        var costoBiglietto = costoOver.toFixed(2) + " euro" + " (hai più di 65 anni, è già stato applicato uno sconto del 40%)";
    }else {
        var costoBiglietto = costoBase.toFixed(2) + " euro" + " (è stata applicata la tariffa base)";;
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
    document.getElementById('categoria').innerHTML = "Maggiorenne";
})
