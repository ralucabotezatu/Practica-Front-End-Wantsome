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
    if (CNP.length === 13) {
        if (CNP[0] === '2') {
            return "Persoana verificata este de sexul feminin."
        } else if (CNP[0] === '1') {
            return "Persoana verificata este de sexul masculin."
        }
    }

    return "Necunoscut"
}

console.log(getPersonGender(2000000));

//2 2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
// - 1-3 = E
// - 3-6 = D
// - 7-8 = B
// - 9 = A
// - 10 = A+
// Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".

/**
 * pentru un numar de puncte de la 1 la 10 returnam calificativul aferent sau un mesaj de eroare 
 * @description returneaza calificativul in functie de puncte
 * @param {int} points 
 */
var getMarkBasedOnPoints = function (points) {
    switch (true) {
        case points <=1 && points <= 3:
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
console.log(getMarkBasedOnPoints(2));

//3 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. Una dintre implementari trebuie sa fie bazata pe Object Literals ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )




/** 
 * Avand la dispozitie numele producatorului automobilului obtinem un mesaj in care primim informatii despre 
 * tara in care este produs automobilul sau in caz contrar un mesaj sugestiv
 * 
 * @description Bazat pe numele producatorului automobilului obtinem tara in care este produs acesta
 * 
 * @param {string} manufacturer 
 */
var getCarOriginSwitch = function (manufacturer) {

    switch (true) {

        case manufacturer == "BMW":
            return "Marca " + manufacturer + " se produce in Germania";
        case manufacturer == "Ford":
            return "Marca " + manufacturer + " se produce in Sua";
        case manufacturer == "Mazda":
            return "Marca " + manufacturer + " se produce in Japonia";
        case manufacturer == "Hyundai":
            return "Marca " + manufacturer + " se produce in Coreea de Sud";
        case manufacturer == "Dacia":
            return "Marca " + manufacturer + " se produce in Romania";
        case manufacturer == "Peugeot":
            return "Marca " + manufacturer + " se produce in Franta";
        default:
            return "Marca este necunoscuta."
    }
}
console.log(getCarOriginSwitch("Opel"));

function getCarOriginIf(manufacturer) {
    if (manufacturer == "Opel") {
        return "Marca " + manufacturer + " se produce in Franta";
    } else if (manufacturer == "Citroen") {
        return "Marca " + manufacturer + " se produce in Franta";
    } else if (manufacturer == "Dodge") {
        return "Marca " + manufacturer + " se produce in Sua";
    } else if (manufacturer == Kia) {
        return "Marca " + manufacturer + " se produce in Japonia";
    } else if (manufacturer == Renault) {
        return "Marca " + manufacturer + " se produce in Franta";
    } else if (manufacturer == Skoda) {
        return "Marca " + manufacturer + " se produce in Germania";
    }

}
console.log(getCarOriginIf("Opel"));


function getCarOriginAdvanced(manufacturer){
    var carsOrigins = {
        countries: {
            BMW: "Germania",
            Audi: "Germania",
            Ford: "Sua",
            Hyundai: "Coreea de Sud",
            Mazda: "Japonia",
            Opel: "Franta"
        },
        getMessageSwitch: function (manufacturer) {
            switch (true) {
                case this.countries[manufacturer] !== undefined:
                    return "Marca " + manufacturer + " se produce in " + this.countries[manufacturer];
                default:
                    return "Marca este necunoscuta."
            }
        }
    }

    return carsOrigins.getMessageSwitch(manufacturer)
}
console.log(getCarOriginAdvanced("Opel"));
console.log(getCarOriginAdvanced("BMW"));
console.log(getCarOriginAdvanced("Unknown"));


//4 4. Scrieti o functie de tip IIFE care:
// - sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
// var cars = [
//   {name: "John",  salary: 20000 },
//   { name: "Danny", salary: 30500 },
//   { name: "Bekker", salary: 15000 }
// ];
// - afiseaza in consola array-ul sortat

/** 
 * Avand la dispozitie salariile angajatilor creez o functie care sa returneze sortarea acestora crescator
 * 
 * @description Bazat pe salariul angajatului facem sortarea 
 * 
 * @param {string} employee
 */

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
