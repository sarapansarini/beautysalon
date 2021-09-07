/* abrir e fechar o menu*/
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/*click em item do menu */

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* mudar o header da página quando der scroll */

const header = document.querySelector("#header");
const navHeight = header.offsetHeight; /*deslocamento*/

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add("scroll");
  } else {
    // menos que a altura do header
    header.classList.remove("scroll");
  }
});

// testimonials slider

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// ScrollReveal: Mostrar elementos quando der scroll na página

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links
`,

  { interval: 100 }
);
