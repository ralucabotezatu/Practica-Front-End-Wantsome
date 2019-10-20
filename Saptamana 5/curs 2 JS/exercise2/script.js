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

