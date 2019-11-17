
// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
//BONUS: folositi ul si li pentru a face display la carti
//BONUS: adaugati o proprietaet pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.

const books = [
    {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        read: true
    },
    {
        title: 'Mindset: The New Psychology of Success',
        author: 'Carol S. Dweck',
        read: false
    }];

const body = document.getElementsByTagName('body')[0];

for(var i = 0; i<books.length;i++){
    var p = document.createElement('p');
    p.innerText = books[i].title + ' - '+ books[i].author;
    body.appendChild(p);
}

const ul = document.createElement('ul');

for(var i = 0; i<books.length;i++){
    var li = document.createElement('li');
    li.innerText = books[i].title + ' - '+ books[i].author;
    ul.appendChild(li);
}
body.appendChild(ul);

for ( var i =0;i<books.length;i++){
    books[i].cover = './cat.jpg';
}
body.appendChild(document.createElement('hr'));
const ul2 = document.createElement('ul');

for(var i = 0; i<books.length;i++){
    var img = document.createElement('img');
    img.src = books[i].cover;
    var li = document.createElement('li');
    li.innerText = books[i].title + ' - '+ books[i].author;
    li.appendChild(img);
    if(books[i].read === true){
        li.style.color = 'green';
    }else {
        li.style.color = 'red';
    }
    
    ul2.appendChild(li);

}
body.appendChild(ul2);

