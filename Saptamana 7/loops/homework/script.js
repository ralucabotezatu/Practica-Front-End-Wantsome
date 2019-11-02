// Cerinte:
// Observatii: - inainte de a scrie o linie de cod, specificati un comentariu in care spuneti exact procedura pe care o urmati (ex: “declar functia
// de tip named / function expression care accepta argumentele…, declar variabila x, fac comparatia y si verific daca z, samd… ); chiar daca nu duceti o
// functie pana la capat, atasati codul cu comentarii pana la linia la care v-ati oprit;

// 1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
// raporta acest lucru in consola. (exemplu: “2 este numar par”);
// Scrieti functia in doua variante: while si for

// function verifyOddAndEvenFor(){

//     for(i=1;i<=20;i++){
        
//         if (i%2 === 0){
//             console.log(i+". Numarul " +i+ " este numar par");
//         } else {
//             console.log(i+". Numarul " +i+ " este impar")
//         }
//     } 
// }
// verifyOddAndEvenFor();

// function verifyOddAndEvenWhile(){
//     var i = 1;

//     while (i<=20){
//         if(i%2 === 0){
//             console.log(i+". Numarul " +i+ " este numar par");
//         } else {
//             console.log(i+". Numarul " +i+ " este impar")
//         }
//         i++;
//     }

// }
// verifyOddAndEvenWhile();

//  2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
// rezultatul. (exemplu: “3*9=27”).
// Scrieti functia in doua variante: while si for

// function multiplyNumberBy9For(){

//     for (i=0;i<=10;i++){

//         console.log("Rezultatul este " + i + "*9 = "+ i*9);
//     }
// }
// multiplyNumberBy9For();

// function multiplyNumberBy9While(){
// var i = 0;
//     while ( i <=10 ){

//         console.log("Rezultatul este " + i + "*9 = "+ i*9);
//         i++;
//     }

// }
// multiplyNumberBy9While();

//3.Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
// (exemplu: 1 * 0 = 0
//     1 * 1 = 1
//     …
//     1 * 10 = 10 )
//    Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.


// n = 1;

// function tabla() {

//     for(n=1; n<=10;n++){

//         for (i = 1; i <= 10; i++) {

//             console.log(n + " x " + i + " = " + n * i)
            
//         }
//         console.log("\n")
//     }

    

// }

// tabla();

// //4 Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
// poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
//     calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
//     dezvoltate la tema anterioara ! 

// var getMarkBasedOnPoints = function (points) {


//     switch (true) {

//         case points >= 1 && points <= 3:
//             return "Calficativul corespunzator punctajului " + points + " este E.";
//         case points <= 6:
//             return "Calficativul corespunzator punctajului " + points + " este D.";
//         case points <= 8:
//             return "Calficativul corespunzator punctajului " + points + " este B.";
//         case points <= 9:
//             return "Calficativul corespunzator punctajului " + points + " este A.";
//         case points == 10:
//             return "Calficativul corespunzator punctajului " + points + " este A+.";
//         default:
//             return "Out of range"
//     }
// }




// function MySecondFunction() {
//     for (i = 1; i <= 11; i++) {

//         console.log(getMarkBasedOnPoints(i));
//     }
// }
// MySecondFunction();
