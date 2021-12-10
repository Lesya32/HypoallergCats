var slideIndex = 0;

showSlides(slideIndex,0);
showSlides(slideIndex,1);
showSlides(slideIndex,2);

function plusSlides(n,nom) {
  showSlides(slideIndex += n,nom);
}

function currentSlide(n,nom) {
  showSlides(n,nom);
}

function showSlides(n,nom) {
    var i;
    var slides = document.getElementsByClassName("mySlides"+nom);
    var dots = document.getElementsByClassName("dot"+nom);
    slideIndex=n
    if (n > slides.length-1) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length-1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}