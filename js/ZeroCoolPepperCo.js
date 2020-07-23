document.addEventListener("DOMContentLoaded", () => {});

/**
 * Image Carousel
 */
var slideIndex = 1;
showSlides(slideIndex);

//Next/Previous Button Controls 
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Thumbnail Image Controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[1].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].lastChild;
}
