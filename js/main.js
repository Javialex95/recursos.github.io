
'use strict'

// slides paginas

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.cssText = "visibility:hidden; opacity:0; animation: salida 2.8s linear;";
    }
    slides[slideIndex - 1].style.cssText = "visibility:visible; opacity:1; animation: entrada 3s linear;";

}


// MENÚ

/*Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body*/
function openNavMenu() {
    document.getElementById("mySidenavMenu").style.width = "465px";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNavMenu() {
    document.getElementById("mySidenavMenu").style.width = "0";
}

function openNavMenuIndex() {
    document.getElementById("mySidenavMenuIndex").style.width = "649px";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNavMenuIndex() {
    document.getElementById("mySidenavMenuIndex").style.width = "0";
}




/*Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body*/
function openNavRecursos() {
    document.getElementById("mySidenavRecursos").style.cssText = "width: 600px; border-left: solid 10px #3F3E3E;";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNavRecursos() {
    document.getElementById("mySidenavRecursos").style.cssText = "width: 0; border-left: solid 0px transparent;"
}




// MODALS RECURSOS
// Open the Modal1
function openModal1() {
    document.getElementById('myModal1').style.display = "block";
}

// Close the Modal1
function closeModal1() {
    document.getElementById('myModal1').style.display = "none";

}

// Open the Modal2
function openModal2() {
    var myModal2 = document.getElementById('myModal2');
    myModal2.style.display = "block";

}

// Close the Modal2
function closeModal2() {
    document.getElementById('myModal2').style.display = "none";
}

// Open the Modal3
function openModal3() {
    document.getElementById('myModal3').style.display = "block";
}

// Close the Modal3
function closeModal3() {
    document.getElementById('myModal3').style.display = "none";
}

// Open the Modal4
function openModal4() {
    document.getElementById('myModal4').style.display = "block";
}

// Close the Modal4
function closeModal4() {
    document.getElementById('myModal4').style.display = "none";
}

// Open the Modal5
function openModal5() {
    document.getElementById('myModal5').style.display = "block";
}

// Close the Modal5
function closeModal5() {
    document.getElementById('myModal5').style.display = "none";
}

// Open the Modal
function openModal6() {
    document.getElementById('myModal6').style.display = "block";
}

// Close the Modal
function closeModal6() {
    document.getElementById('myModal6').style.display = "none";
}

// Open the Modal
function openModal7() {
    document.getElementById('myModal7').style.display = "block";
}

// Close the Modal
function closeModal7() {
    document.getElementById('myModal7').style.display = "none";
}

// Open the Modal
function openModal8() {
    document.getElementById('myModal8').style.display = "block";
}

// Close the Modal
function closeModal8() {
    document.getElementById('myModal8').style.display = "none";
}

// Open the Modal
function openModal9() {
    document.getElementById('myModal9').style.display = "block";
}

// Close the Modal
function closeModal9() {
    document.getElementById('myModal9').style.display = "none";
}

// Open the Modal
function openModal10() {
    document.getElementById('myModal10').style.display = "block";
}

// Close the Modal
function closeModal10() {
    document.getElementById('myModal10').style.display = "none";
}

// Open the Modal
function openModal11() {
    document.getElementById('myModal11').style.display = "block";
}

// Close the Modal
function closeModal11() {
    document.getElementById('myModal11').style.display = "none";
}

// Open the Modal
function openModal12() {
    document.getElementById('myModal12').style.display = "block";
}

// Close the Modal
function closeModal12() {
    document.getElementById('myModal12').style.display = "none";
}
// Open the Modal
function openModal13() {
    document.getElementById('myModal13').style.display = "block";
}

// Close the Modal
function closeModal13() {
    document.getElementById('myModal13').style.display = "none";
}

// Open the Modal
function openModal14() {
    document.getElementById('myModal14').style.display = "block";
}

// Close the Modal
function closeModal14() {
    document.getElementById('myModal14').style.display = "none";
}

// Open the Modal
function openModal15() {
    document.getElementById('myModal15').style.display = "block";
}

// Close the Modal
function closeModal15() {
    document.getElementById('myModal15').style.display = "none";
}

// Open the Modal
function openModal16() {
    document.getElementById('myModal16').style.display = "block";
}

// Close the Modal
function closeModal16() {
    document.getElementById('myModal16').style.display = "none";
}

// Open the Modal
function openModal17() {
    document.getElementById('myModal17').style.display = "block";
}

// Close the Modal
function closeModal17() {
    document.getElementById('myModal17').style.display = "none";
}

// Open the Modal
function openModal18() {
    document.getElementById('myModal18').style.display = "block";
}

// Close the Modal
function closeModal18() {
    document.getElementById('myModal18').style.display = "none";
}

// Open the Modal
function openModal19() {
    document.getElementById('myModal19').style.display = "block";
}

// Close the Modal
function closeModal19() {
    document.getElementById('myModal19').style.display = "none";
}

// Open the Modal
function openModal20() {
    document.getElementById('myModal20').style.display = "block";
}

// Close the Modal
function closeModal20() {
    document.getElementById('myModal20').style.display = "none";
}

// Open the Modal
function openModal21() {
    document.getElementById('myModal21').style.display = "block";
}

// Close the Modal
function closeModal21() {
    document.getElementById('myModal21').style.display = "none";
}

// Open the Modal
function openModal22() {
    document.getElementById('myModal22').style.display = "block";
}

// Close the Modal
function closeModal22() {
    document.getElementById('myModal22').style.display = "none";
}

// Open the Modal
function openModal23() {
    document.getElementById('myModal23').style.display = "block";
}

// Close the Modal
function closeModal23() {
    document.getElementById('myModal23').style.display = "none";
}

// Open the Modal
function openModal24() {
    document.getElementById('myModal24').style.display = "block";
}

// Close the Modal
function closeModal24() {
    document.getElementById('myModal24').style.display = "none";
}

// Open the Modal
function openModal25() {
    document.getElementById('myModal25').style.display = "block";
}

// Close the Modal
function closeModal25() {
    document.getElementById('myModal25').style.display = "none";
}

// Open the Modal
function openModal26() {
    document.getElementById('myModal26').style.display = "block";
}

// Close the Modal
function closeModal26() {
    document.getElementById('myModal26').style.display = "none";
}

// Open the Modal
function openModal27() {
    document.getElementById('myModal27').style.display = "block";
}

// Close the Modal
function closeModal27() {
    document.getElementById('myModal27').style.display = "none";
}

// Open the Modal
function openModal28() {
    document.getElementById('myModal28').style.display = "block";
}

// Close the Modal
function closeModal28() {
    document.getElementById('myModal28').style.display = "none";
}

// Open the Modal
function openModal29() {
    document.getElementById('myModal29').style.display = "block";
}

// Close the Modal
function closeModal29() {
    document.getElementById('myModal29').style.display = "none";
}

// Open the Modal
function openModal30() {
    document.getElementById('myModal30').style.display = "block";
}

// Close the Modal
function closeModal30() {
    document.getElementById('myModal30').style.display = "none";
}

// Open the Modal
function openModal31() {
    document.getElementById('myModal31').style.display = "block";
}

// Close the Modal
function closeModal31() {
    document.getElementById('myModal31').style.display = "none";
}

// DESACTIVAR CLIC DERECHO 
document.oncontextmenu = new Function("return false;");

//  PARAR Y REINICIAR VIDEOS
function stopAll() {
    var media = document.getElementsByClassName('video-tag'),
        i = media.length;

    while (i--) {
        media[i].pause();
        media[i].currentTime = 0;
    }
}