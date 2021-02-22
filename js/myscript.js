const kmprz = 0.21;
const over = 65;
const under = 18;
const scontoover = kmprz * 0.4;
const scontounder = kmprz * 0.2;

var nome = prompt ("Inserire nome");

var cognome = prompt ("Inserire cognome");

var km = prompt ("Inserire Kilometri desiderati");

var age = prompt ("Inserire età in anni");

if (isNaN(km) || (isNaN(age))) {
    alert("Inserisci un Numero");
    document.getElementById("gener").innerHTML = "Impossibile calcolare prezzo, inserire valore numerici in KM e ANNI"
} else {
    if (age < under) {
        price = (kmprz - scontounder) * km;
    } else if ( age > 65 ) {
        price = (kmprz - scontoover) * km;
    } else {
        price = kmprz * km;
    }  
    document.getElementById("gener").innerHTML = nome + " " + cognome;
    document.getElementById("price").innerHTML = price;
}

