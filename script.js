const card = document.getElementById("tiltCard");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 60;

  const y = (window.innerHeight / 2 - e.pageY) / 60;

  card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
});

const slider = document.getElementById("testimonialSlider");

function slideRight() {
  const card = slider.querySelector(".testimonial-card");

  const style = getComputedStyle(slider);

  const gap = parseInt(style.gap);

  const move = card.offsetWidth * 3 + gap * 3;

  slider.scrollBy({
    left: move,
    behavior: "smooth",
  });
}

function slideLeft() {
  const card = slider.querySelector(".testimonial-card");

  const style = getComputedStyle(slider);

  const gap = parseInt(style.gap);

  const move = card.offsetWidth * 3 + gap * 3;

  slider.scrollBy({
    left: -move,
    behavior: "smooth",
  });
}

// Sticky Navbar Scroll Effect
const navbarFixed = document.querySelector(".navbar-fixed");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbarFixed.classList.add("scrolled");
  } else {
    navbarFixed.classList.remove("scrolled");
  }
});
