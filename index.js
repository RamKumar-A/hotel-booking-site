let navbar = document.querySelector('.header .navbar')
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle('active')
}
window.onscroll = () => {
  navbar.classList.remove('active')
}
var swiper = new Swiper(".home-slider", {
  loop: true,
  effect: "coverflow",
  spaceBetween: 30,
  grabCursor: false,
    centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      });

      

var swiper = new Swiper(".gallery-slider", {
  loop: true,
  effect: "coverflow",
  grabCursor: false,
  
  centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        }
});
      

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
  faqBox.onclick = () => {
    faqBox.parentElement.classList.toggle('active')
  }
})

var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: false,
  spaceBetween: 30,
        slidesPerView: "auto",
        breakpoints: {
          
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
        pagination: {
          el: ".swiper-pagination",
        }
});