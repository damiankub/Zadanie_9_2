var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek',];
  // Dodawanie imienia Marian i sprawdzenie czy tablica zawiera juz takie imie
var newName = maleNames.indexOf('Marian');

if (newName === -1) maleNames.push('Marian');
else  console.log("Jest już takie imie");

var allNames = femaleNames.concat(maleNames);
console.log(allNames);
