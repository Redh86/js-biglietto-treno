const kmprz = 0.21;
const over = 65;
const under = 18;
const scontoover = 40% 0.21;
const scontounder = 20% 0.21;

var nome = prompt ("Inserire nome");

var cognome = prompt ("Inserire cognome");

var km = prompt ("Inserire Kilometri desiderati");
do {
    alert("Inserisci un Numero");
    km = prompt ("Inserire Kilometri desiderati");
} while (isNaN(km));

var age = prompt ("Inserire età in anni");
do {
    alert("Inserisci un Numero");
    age = prompt ("Inserire età in anni");
} while (isNaN(age));


age = parseInt(age);

if (age < under) {
    price = (kmprz - scontounder) * km;
} else if ( age >= 65 ) {
    price = (kmprz - scontoover) * km;
} else {
    price = kmprz * km;
}

document.getElementById("gener").innerHTML = nome + " " + cognome;
document.getElementById("price").innerHTML = price;