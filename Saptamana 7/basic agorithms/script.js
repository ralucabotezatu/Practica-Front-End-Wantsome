// //1Scrieti o functie care sa protejeze emailul unui user
// // de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

// var email = "exampleexample@example.com";

// var hide = email.split("@")[0].length - 2;

// var r = new RegExp(".{"+hide+"}@", "g")

// email = email.replace(r, "***@" );

// console.log(email)


// protect_email = function (user_email) {
//     var avg, splitted, part1, part2;
//     splitted = user_email.split("@");
//     part1 = splitted[0];
//     avg = part1.length / 2;
//     part1 = part1.substr(0, (part1.length - avg));
//     part2 = splitted[1];
//     return part1 + "...@" + part2;
// };

// console.log(protect_email("robin_singh@example.com"));

// // //2 Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// // de ex: myFunction("i am superman") sa printeze "I Am Superman"


function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("i am superman",1))

// // //3 Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// // ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

  function swapcase(str) {
    var new_str = "";
    var a = str.length;
    for (var i = 0; i < a; i++) {
      if (str[i] === str[i].toLowerCase()) {
        new_str += str[i].toUpperCase();
      } else {
        new_str += str[i].toLowerCase();
      }
    }
    return new_str;
  }
  console.log(swapcase('xxXyYzZZ'));

  //  ex 1 new method

  function protectEmail (emailAddress){

    var pieces = emailAddress.split("@");
    var firstLetter = pieces[0].substr(0,1);
    var lastLetter = pieces[0].substr(pieces[0].length-1, 1);
    var asterisks = "";
    
    for ( i=0;i<pieces[0].length-2;i++){
      asterisks += "*";
    
    }

    return firstLetter + asterisks + lastLetter + "@"+pieces[1];
  }
  console.log(protectEmail("raluca_onose@yahoo.com"));

// // ex4 Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"
//a
function stringConcat(value,count){

    if(typeof(count) == "undefined") {
    count =1;
  }
  return count < 1 ? '' : new Array(count + 1).join(value);
    }
console.log(stringConcat("Wantsome",2));

//b


  var str = "Wantsome"
  console.log(str.repeat(5));

//c
var chorus = 'Wantsome';

console.log('Wantsome' + chorus.repeat(27));

// //5 A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the
// word 'level'. Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante


//a
function checkPalindrom (str) {
  return str == str.split('').reverse().join('');
}

console.log(checkPalindrom("eye"));

//b

function verifyString(value){

  var result = value.split(" ");
  var result1 = result.reverse();
  if (value === result1){
    return true;
  } else {
    return false;
} 
  
}

console.log(verifyString("eye"));

//6 Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si
// returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

