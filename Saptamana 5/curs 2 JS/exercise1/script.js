var multiply = function(a){
    return a*10;
}
var result = multiply(6);
console.log(result)

function myNameIs(firstName){
    return "Numele meu este " + firstName;
    
}

console.log(myNameIs("Raluca"));

function myFunction(num) {
    return  num.toString();
}
var myresult = myFunction(15);
console.log(myresult);

function mySquare(a){
    return a*a;
}

var square = mySquare(2);
console.log(square);

function myFuture(job,years,company,money){
    return "Eu voi fi " + job + " la" + company + " in" + years + " si voi face" + money + " pe ora";

}
var future = myFuture("Programmer",1,"Endava",50);
console.log(future);