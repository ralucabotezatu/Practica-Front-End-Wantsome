// // Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra

document.getElementsByTagName('body')[0].style.fontFamily = "Arial, sans-serif";

const spanTexts = ['Botezatu Raluca','Wine','Barlad'];
const spans = document.getElementsByTagName('span');

for ( var i =0; i<spans.length;i++){
    
   spans[i].innerText = spanTexts[i];
}

const liItems = document.getElementsByTagName('li');
for (var i= 0; i<liItems.length;i++ ){
    liItems[i].className = 'listitem';
}

const styleTag = document.createElement('style');
styleTag.innerText = "\
    .listitem {\
        color: red;\
    }" ;

document.getElementsByTagName('head')[0].appendChild(styleTag);

const imgTag = document.createElement('img');
imgTag.src = './cat.jpg';
document.getElementsByTagName('body')[0].appendChild(imgTag);
