// //1Scrieti o functie care sa protejeze emailul unui user
// // de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

var email = "exampleexample@example.com";

var hide = email.split("@")[0].length - 2;

var r = new RegExp(".{"+hide+"}@", "g")

email = email.replace(r, "***@" );

console.log(email)


protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substr(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("robin_singh@example.com"));

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