//1

function is_string(inputValue){
    var result = (typeof inputValue === "string");
    return result;
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));


//2

function is_Blank(value){
    var result = (value === "")
    return result;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

//3

function string_to_array(a){
    var result = a.split(" ")
    return result;
}
console.log(string_to_array("Robin Singh"));

//4

function abbrev_name(a){
    var two_strings = a.split(" ")
    var first_string = two_strings[0];
    var second_string = two_strings[1];
    var first_letter = second_string[0];

    // return first_string + " " + first_letter + "."
    return first_string  + " " + second_string.substr(0,1) + ".";
}
console.log(abbrev_name("Robin Singh"));

//5

function capitalize(a){
    var all_strings = a.split(" ");
    var first_string = all_strings[0];
    var first_string_letters = first_string.split("");
    var first_letter = first_string_letters[0];
    return first_letter.toUpperCase() + a.substr(1,a.lenght);
}

console.log(capitalize('js string exercises'));

//6

function truncate_string(a,b){
    return a.substr(0,b);
}
console.log(truncate_string("Robin Singh",4));

//7

function isUpperCaseAt(text, index){
    var letter = text[index];
    return letter === letter.toUpperCase();

}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

//8

function insert(initialText, textToInsert, index){
    // var initialWords = initialText.split("");
    // initialWords.splice(index, 0, textToInsert);
    // return initialWords.join("");

    var firstPart = initialText.substr(0,index);
    var secondPart = initialText.substr(index, initialText.lenght);

    return firstPart + textToInsert + secondPart;
}


console.log(insert('We are doing some exercises.','JavaScript ',18));


//9

function remove_first_occurrence(originalText, firstToRemove){
    var without = originalText.replace(firstToRemove, "");

    return without;
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

//10

function compare_strings(stringOne, stringTwo){

    var stringOneLower = stringOne.toLowerCase();
    var stringTwoLower = stringTwo.toLowerCase();

    return stringOneLower === stringTwoLower;
}

console.log(compare_strings('abcd', 'AbcD'));

//11

function Uncapitalize(a){
    var all_strings = a.split(" ");
    var first_string = all_strings[0];
    var first_string_letters = first_string.split("");
    var first_letter = first_string_letters[0];
    return first_letter.toLowerCase() + a.substr(1,a.lenght);
}

console.log(Uncapitalize('Js string exercises'));
