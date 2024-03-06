// Events slider
const eventsSwiperEl = document.querySelector('.events swiper-container');

const eventsSwiperParams = {
    // slidesPerView: 1,
    breakpoints: {
        767: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
    },
    on: {
        init() {
            // ...
        },
    },
};


Object.assign(eventsSwiperEl, eventsSwiperParams);
eventsSwiperEl.initialize();

// Events slider






// services slider
const serviceSwiperEl = document.querySelector('#service swiper-container');


const serviceSwiperParams = {

    breakpoints: {
        767: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
    on: {
        init() {
            // ...
        },
    },
};




Object.assign(serviceSwiperEl, serviceSwiperParams);
serviceSwiperEl.initialize();

// services slider




// testimonials slider
const testimonialsSwiperEl = document.querySelector('#testimonials swiper-container');


const testimonialsSwiperParams = {

    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 1,
        },
    },
    on: {
        init() {
            // ...
        },
    },
};




Object.assign(testimonialsSwiperEl, testimonialsSwiperParams);
testimonialsSwiperEl.initialize();

// testimonials slider



/*--    
    Counter Up
  -----------------------------------*/

// $('.counter').counterUp({
//     delay: 10,
//     time: 1500,
// })
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });
});
