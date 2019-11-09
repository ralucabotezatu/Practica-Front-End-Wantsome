//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100



function calculateNumbers(number1, number2) {
    if (number1 === number2) {
        return number1 * number2;
    } else {
        return number1 + number2;
    }

}
console.log(calculateNumbers(10, 10));
console.log(calculateNumbers(10, 15));

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function myfunction(value1, value2) {

    if (value1 && value2 === 30) {

        return true;

    } else if (value1 + value2 === 30) {
        return true;
    }

    else {
        return false;
    }

}

console.log(myfunction(10, 15));

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkString(str) {
    if (typeof str === 'string') {
        if (str.toUpperCase().indexOf('JS') > -1) {
            return str;
        } else {
            return 'JS' + str;
        }
    } else {
        return 'The received parameter is not a string';
    }
}
console.log(checkString(25));

//4 //Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function removeDuplicates(value) {

    if (typeof value === 'string' || typeof value === 'number') {
        const input = '' + value;
        let output = '';
        for (i = 0; i < input.length; i++) {
            if (output.indexOf(input[i]) === -1) {
                output += input[i];
            }
        }
        return output;
    } else {
        return 'the parametre is ivalid.';
    }
}
console.log(removeDuplicates('aabcdeef'));

// 5 // Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     var res = '';

//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//     longestWord = strSplit[i].length;
//        } 
//        if (strSplit[i].length === longestWord) {
//         res =  strSplit[i];
//        }
//     }
//     return res;
//   }
//   console.log(findLongestWord('Wantsome is Awsomeeee today'));

//b

function theLongest(value) {

    const wordList = value.split(' ');
    let longestWord = '';

    for (i = 0; i < wordList.length; i++) {
        if (longestWord.length < wordList[i].length) {
            longestWord = wordList[i];
        }
    }
    return longestWord;
}
console.log(theLongest('Wantsome is Awsomeeee today'));

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

function starsOutput(value) {
    let output = '';
    for (i = 1; i <= value; i++) {
        for (j = 1; j <= i; j++) {
            output += ' *';
        }
        output += "\n";
    }
    return output;
}
console.log(starsOutput(5));

//7 //ex7       // append any negative numbers found in the numbers array 
// into the negativeNumbers array constant variable above
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i])
        }
    }
}
extractNegativeNumbers([1, 2, -5, 4, -6]);
console.log(negativeNumbers);

//8 //ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function calculate(firstNumber, secondNumber, operator) {
    let output;
    switch (operator) {
        case 'add':
            output = firstNumber + secondNumber;
            break;
        case 'substract':
            output = firstNumber - secondNumber;
            break;
        case 'multiply':
            output = firstNumber * secondNumber;
            break;
        case 'divide':
            output = firstNumber / secondNumber;
            break;
        default:
            output = 'operator is unknown';
            break;

    }
    return output;
}
console.log(calculate(2, 7, 'multiply'));

// //Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function isDiv(number) {
    function isDivByThree(number) {
        return number % 3 === 0;
    }
    function isDivByFive(number) {
        return number % 5 === 0;
    }
    let output;
    switch (true) {
        case isDivByThree(number) && isDivByFive(number):
            output = 'Both';
            break;
        case isDivByFive(number):
            output = 'Five';
            break;
        case isDivByThree(number):
            output = 'Three';
            break;
        default:
            output = number;
            break;
    }
    return output;
}
console.log(isDiv(7));

//9 //Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

function showAdvancedDate() {
    const currentDate = new Date();
    const days = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
    const day = days[currentDate.getDay()];
    const hour = currentDate.getHours();
    const minuteWithoutZero = currentDate.getMinutes();
    const secondsWithoutZero = currentDate.getSeconds();
    const minutes = (minuteWithoutZero < 10 ? '0' : '') + minuteWithoutZero;
    const seconds = (secondsWithoutZero < 10 ? '0' : '') + secondsWithoutZero;
    const period = (hour >= 12 && hour <= 23 ? 'PM' : 'AM');

    let output = 'Azi este: ' + day + "\n" +
        'Ora este: ' + hour + ' ' + period + " : " + minutes + " : " + seconds;
    return output;
}
console.log(showAdvancedDate());

////ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

function validPin(number) {
    function isInteger(number) {
        return (number === parseInt(number, 10));
    }
    if (isInteger(number)) {
        const stringFromNumber = '' + number;

        return (stringFromNumber.length === 4 || stringFromNumber.length === 6);
    }
    return false;
}
console.log(validPin('123456'));

//11 //ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}
console.log(removeVowels('Hey I am developer'));

//12 //ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

function isSquare(number) {
    function isInteger(number) {
        return (number === parseInt(number, 10));
    }
    return isInteger(Math.sqrt(number));
}
console.log(isSquare(-16));

//13 //ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

function isAnagram(phrase1, phrase2){
    const phrase1WithoutSpaces = phrase1.replace(/\s/gi, '');
    const phrase2WithoutSpace = phrase2.replace(/\s/gi, '');
    const phrase1Letters = phrase1WithoutSpaces.split('');
    const phrase2Letters = phrase2WithoutSpace.split('');

    return phrase2Letters.sort().join() === phrase1Letters.sort().join();
}
console.log(isAnagram('ala bala', 'alabala'));