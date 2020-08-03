document.addEventListener("DOMContentLoaded", () => {});

/**
 * Hamburger menu
 */
const hamburger = document.getElementById('hamburger');
const myLinks = document.getElementById('myLinks');

function myFunction() {
  var x = document.getElementById('myLinks');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block"
  }
}

//close hamburger menu after click
$('#myLinks').click(function() {
  $(this).toggleClass('#myLinks');
  $('#myLinks').toggleClass('open');
 });

// Close after clicking on a link
$('.top-nav a').on('click', function(){
   $("#myLinks").hide();
   $("#button-toggle").removeClass("active");
});


/**
 * Image Carousel
 */
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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 

// Peppers menu button
var btn = document.getElementsByClassName(myLinks);

// Contact Form Validation
function validateForm() {
  var x = document.forms["contactForm"]["name"].value;
  if(x == "") {
    alert("Name must be entered to submit message.");
    return false;
  }
}

//Back to the top button
mybutton = document.getElementById("backToTheTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox & IE
} 

/*
// scroll trigger 
const trigger = new scrollTrigger({
  trigger: {
    once: true
  }
})
*/