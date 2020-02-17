// SLIDER VIDEOS Y FOTOS
let indice = 1;

muestraSlides(indice);

function avanzaSlide(n) {
    muestraSlides(indice += n)
}

function posicionSlide(n) {
    muestraSlides(indice = n)
}

function muestraSlides(n) {
    let i;
    var slides = document.getElementsByClassName("miSlider");
    var slides2 = document.getElementsByClassName("miSlider2");
    var slides3 = document.getElementsByClassName("miSlider3");
    var slides4 = document.getElementsByClassName("miSlider4");

    if (n > slides.length) {
        indice = 1;
    };
    if (n < 1) {
        indice = slides.length;
    };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    };
    slides[indice - 1].style.display = "block";
    
    if (n > slides2.length) {
        indice = 1;
    };
    if (n < 1) {
        indice = slides2.length;
    };
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = 'none'
    };
    slides2[indice - 1].style.display = "block";

    if (n > slides3.length) {
        indice = 1;
    };
    if (n < 1) {
        indice = slides3.length;
    };
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = 'none'
    };
    slides3[indice - 1].style.display = "block";

    if (n > slides4.length) {
        indice = 1;
    };
    if (n < 1) {
        indice = slides4.length;
    };
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = 'none'
    };
    slides4[indice - 1].style.display = "block";
}

// abrir slider
function openSlider() {
    document.getElementById('slider').style.display = "block";
};

function closeSlider() {

    document.getElementById('slider').style.display = "none";
};

function openSlider2() {
    document.getElementById('slider2').style.display = "block";
};

function closeSlider2() {

    document.getElementById('slider2').style.display = "none";
};

function openSlider3() {
    document.getElementById('slider3').style.display = "block";
};

function closeSlider3() {

    document.getElementById('slider3').style.display = "none";
};

function openSlider4() {
    document.getElementById('slider4').style.display = "block";
};

function closeSlider4() {

    document.getElementById('slider4').style.display = "none";
};