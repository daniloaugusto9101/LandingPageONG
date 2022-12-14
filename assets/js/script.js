
// Efeito Menu Stivk
// window.addEventListener("scroll", ()=>{
//     let header = document.querySelector("header");
//     let logo__img = document.querySelector(".logo__img");
//     header.classList.toggle("header--sticky", window.scrollY > 0);
//     logo__img.classList.toggle("logo__img--sticky", window.scrollY > 0);
// });

// Exibe scrooll suave
const menu = document.querySelectorAll('.menu a[href^="#"]')

menu.forEach(item =>{
    item.addEventListener('click', toScroll)
})

function toScroll(event){
    event.preventDefault();
    const element = event.target 
    const id = element.getAttribute('href');

    const section = document.querySelector(id)
    const to = section.offsetTop;

    window.scroll({
        top: to - 80,
        behavior: "smooth"
    })
}


// Abre e fecha menu mobolie
const navbar = document.querySelector('.header__container')
const btn = document.querySelector('.btn-mobile')
btn.addEventListener('click', function(){
    navbar.classList.toggle('active')
})


// Efeito abrir e fechar card de perguntas
const cards = document.querySelectorAll(".cardP")

cards.forEach(function(card) {
    const icon = card.querySelector(".cardP__icon");
    icon.addEventListener("click", function(item){

        cards.forEach(function(item) {
            // console.log(item)
            if (item !== card) {
                item.classList.remove("card--aberto");
            }
        });
        
        card.classList.toggle("card--aberto");
    })
});


// Slide de iamgnes
var swiper = new Swiper(".adoption__content", {
    slidesPerView: 3,
    spaceBetween: 15,
    // slidesPerGroup: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3
      }
    }
  });

// Efeito Scrol revel
// Window.sr = ScrollReveal({
//     reset: true,
//     distance: '60px',
//     duration: 2000,
//     delay: 400
// });
// ScrollReveal().reveal('.home__title')
// sr.reveal('.home__title, .home__text, .home__btn, .about__h2, .about__text, .adoption__title,.deposition__title, .deposition__title, .question__title', {
//     delay: 400,
//     origin: 'left'
// });
// sr.reveal('.home__img, .about__img2, .adoption__text, .deposition__text, .deposition__cards, .question__cards ', {
//     delay: 400,
//     origin: 'right'
// });
// sr.reveal('.about__img1, .banner__text, .footer__container', {
//     delay: 400,
//     origin: 'bottom'
// });







