
var str = "Daca te simti bine, nu te ingrijora, trece!"
var position = str.indexOf("trece","javascript");
console.log(position);

//2

var fruits = "Apple, Lemon, Plum, Kiwi";
var kiwiFruit = fruits.slice(20,24);
console.log(kiwiFruit);

var kiwiFruit = fruits.slice(-4);
console.log(kiwiFruit);

//3

var moreFruits = "Apple, Lemon, Plum, Kiwi";
var result = moreFruits.substr(-10, 4);
console.log(result);

//4

var replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
var result = replaceName.replace("Mia Kalifa", "Raluca Botezatu")

console.log(result);
//bonus
var bonusName = "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)"
var result = bonusName.replace(/Sasha/g, "Raluca");
console.log(result);

//5

var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?"
var result = text.toLowerCase();
var resultTwo = text.toUpperCase();
console.log(result);
console.log(resultTwo);

//6
var text1 = "Când ai un";
var text2 = "ciocan";
var text3 = "in mana toate lucrurile ti se par";
var text4 = "cuie";

var result = text1 +" " + text2 +" " + text3 + " " + text4;
console.log(result);

//7
var word = "Mamaliga";

console.log(word[6]);

var str = "Mamaliga";
var n = str.charCodeAt(6);
console.log(n);

//8

var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
var result = cars.replace(/\|/g, " ");
console.log(result);

//9

var firstWord = 'Nu exista';
var secondWord = 'raspunsuri proaste';
// var result = firstWord +" " + secondWord.replace("raspunsuri", "intrebari");

var result = (firstWord +" " + secondWord).replace("raspunsuri", "intrebari");

console.log(result);