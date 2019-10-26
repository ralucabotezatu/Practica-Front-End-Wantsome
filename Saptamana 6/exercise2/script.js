// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
    name: "Tesla",
    wheels: 4,
}

car.name = "Mercedes";
delete car.name;

console.log(car);

////Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

var  food = {
    one: "pizza",
    two: "burger",
    three: "steak",
    for: "ribs",
}

var foodKeys = Object.keys(food);
console.log(foodKeys);
var upper = foodKeys.join(" ");
console.log(upper);
var newUpper = upper.toUpperCase();
console.log(newUpper);
var createString = newUpper.split();
console.log(createString);

var newLower = newUpper.toLowerCase();
console.log(newLower);

var foodValues = Object.values(food);
console.log(foodValues);
var newValues = foodValues.join(" ");
console.log(newValues);

var final = newValues + " " + foodKeys + " reprezinta mancare";
console.log(final);

//3 //Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

var months = {

    first: "January",
    second: "February",
    together: function(a,b){
        return this.first + " " + this.second;
    }
}
var monthsKeys = Object.keys(months);
var monthsValues = Object.values(months);

console.log(months.together());

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.

var myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
}

var myDrawer = {
    things: 100,
    preferred: "dresses",
    necessary: "makeup"
}

var clonedObject = Object.assign({}, myDrawer);

  
  console.log(clonedObject);

clonedObject.mirror = "big";
clonedObject["makeup table"] = "huge";
console.log(clonedObject);

var mergedObject = Object.assign(myHouse, clonedObject);

console.log(mergedObject);

//5
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"

var catOne = {
    catTwo : {
        name : "Bob",
        eyes: "green"

    }
}

var CatsKeys = Object.keys(catOne.catTwo);

console.log(CatsKeys);

var  final = CatsKeys.join(' si ')
console.log(final + " apartin obiectului catTwo")

//Ex6
// Avem obiectul : 
myObject = {
    name: "John",
    surname: "Applegate",
    }
    //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.

    var myObjectValues = Object.values(myObject);

console.log(myObjectValues);
var myObjectValues1 = myObjectValues.join();
console.log(myObjectValues1);

var final = myObjectValues.sort();

console.log(final);

//7 Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myself = new Person("Raluca", "Botezatu", 31, "brown");
var hubby = new Person("Vlad", "Botezatu", 34, "green");
var cat = new Person("Misha", "Kitty", 0.5, "orange");
console.log(myself,hubby,cat);

myself.firstName = myself.firstName.toUpperCase();
myself.lastName = myself.lastName.toUpperCase();
myself.eyeColor = myself.eyeColor.toUpperCase();

console.log(myself);


hubby.firstName = hubby.firstName.toUpperCase();
hubby.lastName = hubby.lastName.toUpperCase();
hubby.eyeColor = hubby.eyeColor.toUpperCase();

console.log(hubby);

cat.firstName = cat.firstName.toUpperCase();
cat.lastName = cat.lastName.toUpperCase();
cat.eyeColor = cat.eyeColor.toUpperCase();

console.log(cat);