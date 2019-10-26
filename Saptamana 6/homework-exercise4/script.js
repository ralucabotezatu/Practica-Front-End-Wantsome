//Ex 1 1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".

/**
 * ne asiguram ca parametrul CNP este string sau il convertim in string pt a-i folosi pozitia
 * in cazul in care pozitia 0 din string este = cu stringul 2 returnam feminin. 
 * in cazul in care pozitia 0 din string este = cu stringul 1 returnam masculin.
 * in caz contrar returnam necunoscut.

 * @description returneaza un string 
 * 
 * @param {strig} CNP 
 * 
 * @returns string
 */
function getPersonGender(CNP) {
    if (typeof CNP !== "string") {
        CNP = CNP.toString();
    }
    if (CNP[0] === '2') {
        return "Persoana verificata este de sexul feminin."
    } else if (CNP[0] === '1') {
        return "Persoana verificata este de sexul masculin."
    } else {
        return "Necunoscut"
    }
}

console.log(getPersonGender(2000000));

//2 2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
// - 1-3 = E
// - 3-6 = D
// - 7-8 = B
// - 9 = A
// - 10 = A+
// Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".

var student = function (points) {
    switch (true) {
        case points <= 3:
            return "Calficativul corespunzator punctajului " + points + " este E.";
        case points <= 6:
            return "Calficativul corespunzator punctajului " + points + " este D.";
        case points <= 8:
            return "Calficativul corespunzator punctajului " + points + " este B.";
        case points <= 9:
            return "Calficativul corespunzator punctajului " + points + " este A.";
        case points = 10:
            return "Calficativul corespunzator punctajului " + points + " este A+.";
        default:
            return "Out of range"
    }
}
console.log(student(2));

//3 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. Una dintre implementari trebuie sa fie bazata pe Object Literals ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )

var cars = function (mark) {

    switch (true) {

        case mark == "BMW":
            return "Marca " + mark + " se produce in Germania";
        case mark == "Ford":
            return "Marca " + mark + " se produce in Sua";
        case mark == "Mazda":
            return "Marca " + mark + " se produce in Japonia";
        case mark == "Hyundai":
            return "Marca " + mark + " se produce in Coreea de Sud";
        case mark == "Dacia":
            return "Marca " + mark + " se produce in Romania";
        case mark == "Peugeot":
            return "Marca " + mark + " se produce in Franta";
        default:
            return "Marca este necunoscuta."
    }
}
console.log(cars("Opel"));

function Mycars(mark) {
    if (mark == "Opel") {
        return "Marca " + mark + " se produce in Franta";
    } else if (mark == "Citroen") {
        return "Marca " + mark + " se produce in Franta";
    } else if (mark == "Dodge") {
        return "Marca " + mark + " se produce in Sua";
    } else if (mark == Kia) {
        return "Marca " + mark + " se produce in Japonia";
    } else if (mark == Renault) {
        return "Marca " + mark + " se produce in Franta";
    } else if (mark == Skoda) {
        return "Marca " + mark + " se produce in Germania";
    }

}
console.log(Mycars("Opel"));

var cars = {
    countries: {
        BMW: "Germania",
        Audi: "Germania",
        Ford: "Sua",
        Hyundai: "Coreea de Sud",
        Mazda: "Japonia",
        Opel: "Franta"
    },
    getMessageSwitch: function (mark) {
        switch (true) {
            case this.countries[mark] !== undefined:
                return "Marca " + mark + " se produce in " + this.countries[mark];
            default:
                return "Marca este necunoscuta."
        }
    },
    getMessageIf: function (mark) {
        if (this.countries[mark] !== undefined) {
            return "Marca " + mark + " se produce in " + this.countries[mark];
        }

        return "Marca este necunoscuta.";
    }
}


console.log(cars.getMessageSwitch("Ford"));
console.log(cars.getMessageIf("BMW"));

//4 4. Scrieti o functie de tip IIFE care:
// - sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
// var cars = [
//   {name: "John",  salary: 20000 },
//   { name: "Danny", salary: 30500 },
//   { name: "Bekker", salary: 15000 }
// ];
// - afiseaza in consola array-ul sortat
(function (Employee) {
    Employee.sort(function (a, b) {
        if (a.salary > b.salary) {
            return 1;
        } else if (a.salary === b.salary) {
            return 0;
        }
        return -1;
    });
    console.log(Employee);
})([
    { name: "John", salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 }
]);
