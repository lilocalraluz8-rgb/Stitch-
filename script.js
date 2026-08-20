let slideIndex = 1;

// Show the first slide
showSlides(slideIndex);


// Next / Previous buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}


// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


// Show slides
function showSlides(n) {

    let i;

    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    // Go back to the first slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Go to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    // Activate current dot
    dots[slideIndex - 1].className += " active";
}


// Automatic slideshow
setInterval(function() {
    plusSlides(1);
}, 4000);