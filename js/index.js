
document.addEventListener("DOMContentLoaded", function () {
  const offcanvasElement = document.getElementById("offcanvasNavbar");
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    link.addEventListener("click", function () {
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
    });
  });

  offcanvasElement.addEventListener("hidden.bs.offcanvas", function () {
    document.querySelectorAll(".offcanvas-backdrop").forEach(backdrop => {
      backdrop.remove();
    });
  });
});

var swiper = new Swiper(".swiperHero", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5500,
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