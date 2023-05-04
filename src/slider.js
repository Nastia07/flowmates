const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].classList.add("active");
  slides[previousSlide()].classList.add("previous");
  slides[nextSlide()].classList.add("next");
}

function hideSlides() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slide.classList.remove("previous");
    slide.classList.remove("next");
  });
}

function previousSlide() {
  let previous = currentSlide - 1;
  if (previous < 0) {
    previous = slides.length - 1;
  }
  return previous;
}

function nextSlide() {
  let next = currentSlide + 1;
  if (next >= slides.length) {
    next = 0;
  }
  return next;
}

function next() {
  hideSlides();
  currentSlide = nextSlide();
  showSlide();
}

showSlide();
setInterval(next, 5000);
