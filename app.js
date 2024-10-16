document.addEventListener("DOMContentLoaded", function () {
  const imageSliders = document.querySelectorAll('.image-slider');

  imageSliders.forEach((slider) => {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: slider.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });
  });

  const motorSwiper = new Swiper('.motor-cards', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.motor-arrow-div',
      prevEl: '.motor-arrow-prev-div',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1400: { slidesPerView: 4, spaceBetween: 20 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 10 },
      300: { slidesPerView: 1, spaceBetween: 5 },
    },
  });

  document.querySelector('.motor-arrow-div').addEventListener('click', () => {
    motorSwiper.slideNext();
  });

  document.querySelector('.motor-arrow-prev-div').addEventListener('click', () => {
    motorSwiper.slidePrev();
  });

  const newSwiper = new Swiper('.new-swiper .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.new-swiper .new-swiper-button-next',
      prevEl: '.new-swiper .new-swiper-button-prev',
    },
    breakpoints: {
      1400: { slidesPerView: 4, spaceBetween: 20 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 10 },
      300: { slidesPerView: 1, spaceBetween: 5 },
    },
  });

  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const slides = document.querySelectorAll('.swiper-slide');
  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');

  let currentIndex = 0;

  const showSlide = (index) => {
    const slideWidth = slides[0].offsetWidth + 20;
    swiperWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  };

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});


document.addEventListener("DOMContentLoaded", function () {
  const headerSwiper = new Swiper('.header-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.header-arrow-next', 
      prevEl: '.header-arrow-prev', 
    },
    pagination: {
      el: '.header-pagination', 
      clickable: true,
    },
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const newSwiper = new Swiper('.new-swiper .swiper-container', {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.new-swiper-button-next',
      prevEl: '.new-swiper-button-prev',
    },

    breakpoints: {
      1400: { slidesPerView: 6, spaceBetween: 10 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
      992: { slidesPerView: 4, spaceBetween: 10 },
      300: { slidesPerView: 3, spaceBetween: 5 },
    },
  });

  const motorSwiper = new Swiper('.motor-cards', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.motor-arrow-div',
      prevEl: '.motor-arrow-prev-div',
    },

    breakpoints: {
      1400: { slidesPerView: 4, spaceBetween: 20 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 10 },
      300: { slidesPerView: 1, spaceBetween: 5 },
    },
  });

  document.querySelector('.motor-arrow-div').addEventListener('click', () => {
    motorSwiper.slideNext();
  });

  document.querySelector('.motor-arrow-prev-div').addEventListener('click', () => {
    motorSwiper.slidePrev();
  });
});


const newSwiper = new Swiper('.new-swiper .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.new-swiper-button-next',
    prevEl: '.new-swiper-button-prev',
  },
  loop: true,
});

window.addEventListener('resize', function () {
  newSwiper.update();
});

document.addEventListener("DOMContentLoaded", function () {
  const imageSliders = document.querySelectorAll('.image-slider');

  imageSliders.forEach((slider) => {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: slider.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });
  });

  const partsSwiper = new Swiper('.parts-cards', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.parts-arrow-div',
      prevEl: '.parts-arrow-prev-div',
    },

    breakpoints: {
      1400: { slidesPerView: 4, spaceBetween: 20 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 10 },
      300: { slidesPerView: 1, spaceBetween: 5 },
    },
  });

  document.querySelector('.parts-arrow-div').addEventListener('click', () => {
    partsSwiper.slideNext();
  });

  document.querySelector('.parts-arrow-prev-div').addEventListener('click', () => {
    partsSwiper.slidePrev();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const videoSwiper = new Swiper('.video-swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1400: { slidesPerView: 4, spaceBetween: 20 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 10 },
      300: { slidesPerView: 1, spaceBetween: 5 },
    },
  });
});

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordion = header.parentElement;
    accordion.classList.toggle('open');
  });
});


let isMenuOpen = false;

function toggleMenu() {
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('.burger');

  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    menu.classList.remove('hidden');
    menu.classList.add('visible');
    burger.classList.add('open');
  } else {
    menu.classList.remove('visible');
    menu.classList.add('hidden');
    burger.classList.remove('open');
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const cardElements = document.querySelectorAll('.all-cards div');

  const activeItem = localStorage.getItem('activeCard');

  if (activeItem) {
      cardElements.forEach(card => card.classList.remove('active'));

      document.querySelector(`.all-cards div:nth-child(${activeItem})`).classList.add('active');
  }

  cardElements.forEach((card, index) => {
      card.addEventListener('click', () => {
          cardElements.forEach(c => c.classList.remove('active'));

          card.classList.add('active');

          localStorage.setItem('activeCard', index + 1);
      });
  });
});
