var swiper = new Swiper(".header__swiper", {
    direction: "vertical",
    slidesPerView: 1.5,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".header__pagination",
        clickable: true,
    },
});