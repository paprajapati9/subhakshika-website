

// Our Projects swiper
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletActiveClass: "swiper-pagination-bullet-active our-projects__button--active",
        bulletClass: "swiper-pagination-bullet our-projects__button"
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar"
    }
});
