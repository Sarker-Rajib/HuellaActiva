var swiper = new Swiper(".items-slider", {
    spaceBetween: 30,
    // freeMode: true,
    // loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    // centeredSlides: true,
    breakpoints: {
        320: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 9,
            spaceBetween: 20
        },
    }
});