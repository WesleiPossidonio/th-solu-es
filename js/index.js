document.addEventListener("DOMContentLoaded", function () {
  const offcanvas = document.getElementById("offcanvasNavbar");
  const backdrop = document.querySelector(".offcanvas-backdrop");

  // Remover backdrop quando o offcanvas for fechado
  offcanvas.addEventListener("hidden.bs.offcanvas", function () {
    document.body.classList.remove("offcanvas-open", "modal-open");
    document.body.style.overflow = "";

    // Remover manualmente o backdrop, se existir
    const existingBackdrop = document.querySelector(".offcanvas-backdrop");
    if (existingBackdrop) {
      existingBackdrop.remove();
    }
  });

  // Fechar o menu ao clicar nos links dentro dele
  document.querySelectorAll(".close-offcanvas").forEach(link => {
    link.addEventListener("click", function () {
      const offcanvasElement = bootstrap.Offcanvas.getInstance(offcanvas);
      offcanvasElement.hide();
    });
  });
});

var swiper = new Swiper(".swiperHero", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".swiperCards", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1040: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})