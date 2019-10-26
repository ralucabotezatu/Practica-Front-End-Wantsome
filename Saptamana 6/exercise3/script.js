//1

function greatestNrBetween(a, b) {
    if (a < b) {
        return "Numarul mai mare dintre " + a + " si " + b + " este " + a;
    } else if (a > b) {
        return "Numarul mai mic dintre " + b + " si " + a + " este " + b;

    } else {
        return "Numerele sunt egale";
    }
}
console.log(greatestNrBetween(5, 10));

//2

var helloWorldInLang = function (lang) {

    switch (lang) {
        case "en":
        case "en_us":
        case "en_uk":
            return "Hello World";
        case "es":
            return "Holla Mariola";
        case "de":
            return "Hallo Welt";
        default:
            return "buna ziua";
    }

}

console.log(helloWorldInLang("bg"));

//3

function pluralizeWord(noun, nr) {
    if (nr > 1) {
        if (noun === "goose") {
            return "geese";
        }
        if (noun === "sheep") {
            return "sheep";
        }
        return noun + "s";
    } else {
        return noun;
    }

}


console.log(pluralizeWord("horse", 0));

//4

function taxPerYear(income) {
    if (income <= 30000) {
        return 0;
    } else if (income => 30001 && income <= 50000) {
        return (0.10 * income);

    }
    else if (income => 50001 && income <= 99999) {
        return (0.35 * income);

    } else if (income => 100000) {
        return (0.45 * income);
    }
}
console.log(taxPerYear(150000));

//5 part 1

function greaterThanOne(points) {
    if (points > 91) {
        return "AA";
    } else if (points > 81 && points <= 90) {
        return "AB";
    } else if (points > 71 && points <= 80) {
        return "BB";
    } else if (points > 61 && points <= 70) {
        return "BC";
    } else if (points > 51 && points <= 60) {
        return "CC";
    } else if (points > 41 && points <= 50) {
        return "CD";
    } else if (points > 31 && points <= 40) {
        return "DD";
    } else if (points <= 30) {
        return "FF";
    }
}
console.log(greaterThanOne(30));

//5 part 2 

var greaterThanTwo = function (points) {
    switch (true) {
        case points > 91: 
                return "AA";
        case points > 81 && points <= 90:
                return "AB";
        case points > 71 && points <= 80:
                return "BB";
        case points > 61 && points <= 70:
                return "BC";
        case points > 51 && points <= 60:
                return "CC";
        case points > 41 && points <= 50:
                return "CD";    
        case points > 31 && points <= 40:
                return "DD";
        case points <= 30:
            return "FF";

    }
}

console.log(greaterThanTwo(30));

//6

var is_weekend = function (check) {
    var date = new Date(check);

    if (date.getDay() == 6 || date.getDay() == 0) {
        return "weekend";
    }
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
