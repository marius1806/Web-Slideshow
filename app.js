/* Aplicatia pentru accesarea slide-urilor prin folosirea
unor bullets si prin sageti inainte si inapoi a fost scrisa
pentru cazul general in care presupun ca as reveni la
slider-ul meu si as mai adauga slide-uri in plus, fiecare
avand cate un nou bullet. Astfel nu va mai trebui modificat
de fiecare data codul aplicatiei pentru a lua in calcul fiecare
slide nou si bullet adaugat. Va face asta automat indiferent
de numarul de slide-uri. */

const slidesArray = document.getElementsByClassName('slide');
const bulletsArray = document.getElementsByTagName('span')
let theIndex;

if (!(slidesArray.length % 2)) theIndex = slidesArray.length / 2;
 else theIndex = Math.floor(slidesArray.length / 2 + 1);

slidesArray[theIndex - 1].id = 'on';
bulletsArray[theIndex - 1].id = 'startPoint';

const showSlide = index => {
    for (let idx = 0; idx < index - 1; ++idx) {
        slidesArray[idx].style.display = 'none';
        bulletsArray[idx].style.backgroundColor = 'transparent';
    }
    slidesArray[index - 1].style.display = 'block';
    bulletsArray[index - 1].style.backgroundColor = 'rgba(32, 1, 58, 0.63)';
    for (let idx = index; idx < slidesArray.length; ++idx) {
        slidesArray[idx].style.display = 'none';
        bulletsArray[idx].style.backgroundColor = 'transparent';
    }
    theIndex = index;
}

const previousSlide = () => {
    --theIndex;
    if (theIndex === 0) theIndex = slidesArray.length;
    showSlide(theIndex);
}

const nextSlide = () => {
    ++theIndex;
    if (theIndex === slidesArray.length + 1) theIndex = 1;
    showSlide(theIndex);
}