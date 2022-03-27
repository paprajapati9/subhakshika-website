// Logic to change Picture

const circlesContainer = document.querySelector(".circles");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");

// Event to change colors
circle1.addEventListener("click", e => {
    circle2.classList.remove("current");
    circle3.classList.remove("current");
    circle1.classList.add("current");
});
circle2.addEventListener("click", e => {
    circle1.classList.remove("current");
    circle3.classList.remove("current");
    circle2.classList.add("current");
});
circle3.addEventListener("click", e => {
    circle1.classList.remove("current");
    circle2.classList.remove("current");
    circle3.classList.add("current");
});

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
