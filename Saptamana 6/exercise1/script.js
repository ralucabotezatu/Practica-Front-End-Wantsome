//1 Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5

var array = ["pizza", "burger", "incecream", "chocolate", "wine"];
var result = array.length;

console.log(result);

//2 Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur

var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];

var result = array1.concat(array2);
console.log(result);

//3 Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()

var proove = [10, 20, 30, 40];
var result = Array.isArray(proove);

console.log(result);

var notproove = 10;
var result = Array.isArray(notproove);

console.log(result);

//4 Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala

var numbers = ['one', 'two', 'three', 'four', 'five'];
var result = numbers.join(" and ");

console.log(result);

//5 Adaugati 2 elemente noi in arrayul de mai jos

var cars = ["Tesla", "Dacia"];
cars.splice(2,0,"Mazda", "BMW");

console.log(cars);

//6 Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.

    var lastElement = cars.pop();

    console.log(cars);

//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului

var firstElement = cars
cars.unshift ("Dodge");

console.log(firstElement);

//8 //Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array

var otherOrder = cars

cars.reverse;

console.log(otherOrder);

//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();

var addElements = cars;
cars.splice(2,  0,"Hyundai ,Ford");

console.log(addElements);

//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];

arrayNumbers.sort(function(a,b){

    return (a-b);
});

var arrayNumbersTwo = [1, 5, 20 ,30, 100];

arrayNumbersTwo.sort(function(a,b){

    return (b-a);
});

console.log(arrayNumbers);
console.log(arrayNumbersTwo);

//11 Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]

fruitsArray.sort();

console.log(fruitsArray);

