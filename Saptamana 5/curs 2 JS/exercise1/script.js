var multiply = function(a){
    return a*10;
}
var result = multiply(6);
console.log(result)

//2
function myNameIs(firstName){
    return "Numele meu este " + firstName;
    
}

console.log(myNameIs("Raluca"));

//3
function myFunction(num) {
    return  num.toString();
}
var myresult = myFunction(15);
console.log(myresult);
//4
function mySquare(a){
    return a*a;
}

var square = mySquare(2);
console.log(square);
//5
function myFuture(job,years,company,money){
    return "Eu voi fi " + job + " la " + company + " in " + years + " si voi face " + money + " pe ora ";

}
var future = myFuture("Programmer",1,"Endava",50);
console.log(future);
//6

function catyears(years, myYears){
   var newyears = years*7;
   var human = myYears*7;
   return "Pisica mea are " + newyears + " ani in ani pisicesti." + human

}
console.log(catyears(5,31));

//7

function countCoffe(years, coffePerDay){

    var inTime = years*coffePerDay*365;

    return inTime;
}
console.log(countCoffe(2,3));

//8


function calculateFarenheitToCelsius(Farenheit){
    
    var celsius =((Farenheit-32)*5)/9;
    return celsius;
    
}

console.log(calculateFarenheitToCelsius(122));

function calculateCelsiusToFerenheit(celsius){
    
    var Farenheit =celsius *9 / 5 + 32;
    return Farenheit;
}
console.log(calculateCelsiusToFerenheit(10));