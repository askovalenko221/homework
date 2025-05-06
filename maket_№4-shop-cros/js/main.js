(function () {
    const swiper = new Swiper(".header__slider", {
        // direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true, // прокрутка мышкой
        grabCursor: true, // Курсор-рука при наведении
        loop: true, // Бесконечная прокрутка
        speed: 800, // Скорость анимации (мс)
        // effect: 'creative', // 'slide' или 'fade', 'cube', 'coverflow', 'creative'
        // progressbarOpposite: Boolean,
        pagination: {
            el: ".header__pagination",
            clickable: true,
            // type: 'fraction',
            // verticalClass: string,
        },
    });
})()