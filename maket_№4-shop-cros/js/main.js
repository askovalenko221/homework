(function () {
    const swiper = new Swiper(".header__slider", {
        // direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        // progressbarOpposite: Boolean,
        pagination: {
            el: ".header__pagination",
            clickable: true,
            // type: 'fraction',
            // verticalClass: string,
        },
    });
})()