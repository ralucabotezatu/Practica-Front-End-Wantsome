// 1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata

//function expresion variabila in care stochez ca si val o fn

var sumNumbersUpTo = function (limit){
    var sum = 0;
    for( var i=0; i<limit; i++){
      sum +=i;
    };
    return sum;
}; //ES5

//ES6

const sumNumbersUpToNew = limit => {
    let sum = 0;
    for ( i= 1; i <= limit ;i++){
        sum +=1;
    };
    return sum;
};

//2 Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    var res = '';

    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
    longestWord = strSplit[i].length;
       } 
       if (strSplit[i].length === longestWord) {
        res =  strSplit[i];
       }
    }
    return res;
  }
  console.log(findLongestWord("Raluca Botezatu Amazogfgfgfgfn"));

  //3 Implementati o functie care accepta ca parametru un string si ii face 'reverse'

  function reverseString(str) {
    var newString = " ";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));


