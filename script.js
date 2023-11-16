// Pirma Užduotis

var legalAge = 20;

var clientAge = prompt("Koks yra kliento amžius?");

if (clientAge < legalAge) {
  alert("Kliento amžius napasiekęs " + legalAge);
} else {
  alert("Kliento amžius pasiekęs " + legalAge);
}
console.log(clientAge);

// Antra Užduotis

var myName = prompt("Mano vardas");

if (myName.length > 6) {
  alert("Ilgas vardas");
}

console.log(myName);

//Trečia užduotis

var age = prompt("Įveskite savo amžių");
if (age >= 19 && age <= 99) {
  alert("Adult");
} else if (age >= 1 && age <= 18) {
  alert("Child");
} else {
  alert("Invalid age");
}

console.log(age);
