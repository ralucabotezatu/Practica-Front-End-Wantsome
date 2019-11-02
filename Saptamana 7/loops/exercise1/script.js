// // //ex1 case for Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la
// iteratia numarul [index]” - Scrieti codul in doua variante

// function caseFor(number) {
//     for (i = 0; i < number; i++) {
//         console.log("Sunt la iteratia numarul:" + i)
//     }
// }

// caseFor(12);

// // ex1 case while

// function caseWhile(number) {
//     var i = 0;
//     while (i < number) {

//         console.log("Sunt la iteratia numarul:" + i);
//         i++;
//     }
// }

// caseWhile(5);

// ex2 Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa -
// Scrieti codul in doua variante

// function myArrayVerification(display) {
//     for (i = 0; i < display.length; i++) {
//         console.log(display[i]);
//     }

// }

// myArrayVerification([15,20,30])

// // 2 case while

// function myArrayVerification1(display1){
//     var i = 0;
//     while(i<display1.length){
//         console.log(display1[i]);
//         i++;
//     }
// }
// myArrayVerification1([10,30,67,81,9]);

// EX 3 Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa -
// scrieti codul in doua variante

// function myObjectVerification(value){

//     var accessKeys = Object.keys(value);
//     var keysLen = accessKeys.length;

//     for (i = 0; i < keysLen; i++) {
//         console.log(accessKeys[i]);
//     }

    
// }

// var person = {
//     name: "Raluca",
//     age: 31,
//     job: "Amazon"
// }

// console.log(myObjectVerification(person))

//4.1 Cerinte:
// 1. 0 100 200 300 400 500 600 700 800 900 1000


function multiplyBy100() {

    for (i = 0; i <= 10; i++) {
     console.log(i*100);
    }
  } 
  multiplyBy100();

// 4.2 cerinta: 1 2 4 8 16 32 64 128

function multiplyBy2(){

    for( i= 1; i <= 128 ; i*=2){

        console.log(i);
    }
}
multiplyBy2()

// 4.3 cerinta: 0 2 4 6 8 10

function showEvenNumbers(){
    
    for ( i= 0 ; i <=5 ; i++){
        console.log(i*2);
    }
}
showEvenNumbers();

// 4.4 3 6 9 12 15

function multiplyBy3(){
    
    for ( i= 1 ; i <=5 ; i++){
        console.log(i*3);
    }
}
multiplyBy3()

// 4.5 9 8 7 6 5 4 3 2 1 0

function decrementBy1(){

    for (i = 9; i >= 0;i--) {
        console.log(i);
    }
}
decrementBy1()

// 4.6 1 1 1 2 2 2 3 3 3 4 4 4

function showSeriesOfNumbers(){
    for ( i=1; i<=4;i++){
        for (j=1;j<=3;j++){
            console.log(j+". "+i)
        }
    }
}
showSeriesOfNumbers()

// 4.7 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

function showSetOfNumbers(){

    for ( i=0;i<3;i++){

   
        for( j=0;j<=4;j++){
            console.log(j);
        }
    }
    
}   
showSetOfNumbers()



// ex 4 Implementati functia stream. Trebuie sa:
// ● accepte ca argumente 2 functii: conditionalFn, actionFn.
// ● apeleaza actionFn pana cand conditionalFn returneaza fals
// ● nu returneaza nimic

var counter = 10;
var returnsFalseAlways = function() {
    return false;
};
var showMessage = function() {
    console.log(counter + ". Vreau sa ies la tabla!");
};
var returnsTrueWhenCounterGreaterThanMinusOne = function() {
    counter--;
    return counter >= 0;
}

function stream(ConditionalFunction, messageShower){
    while(ConditionalFunction() === true) {
        messageShower();
    }
}

stream(returnsFalseAlways, showMessage);

stream(returnsTrueWhenCounterGreaterThanMinusOne, showMessage)




// 5 Implementati functia computeSumOfArrayElements.
// Trebuie sa:
// ● accepte ca argument un array format din numere
// ● returneze suma numerelor din array
// ● foloseasca instructiunea while


function computeSumOfArrayElements(arrayOfNumber){
    var sum = 0;
    var count = arrayOfNumber.length;
    while( count > 0){
        count--;
        sum += arrayOfNumber[count]
    }
    return sum;
}
var arrayOfNumber = [1,2,3,4,5,6,100];
var singleValuesArray = [1];

console.log(computeSumOfArrayElements([]));
console.log(computeSumOfArrayElements(arrayOfNumber));
console.log(computeSumOfArrayElements(singleValuesArray));