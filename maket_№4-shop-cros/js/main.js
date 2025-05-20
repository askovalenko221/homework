(function () {
    const swiper = new Swiper(".header__slider", {
        // direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 50,
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

    // document.addEventListener('DOMContentLoaded', function () {
    //     // Данные товаров
    //     const products = [
    //         {
    //             id: 1,
    //             brand: "Nike",
    //             name: "Air Force 1 Orche",
    //             price: 19965,
    //             sizes: "8 - 10",
    //             category: "nike"
    //         },
    //         {
    //             id: 2,
    //             brand: "Nike",
    //             name: "Air Force Panda",
    //             price: 119655,
    //             sizes: "6 - 10",
    //             category: "nike"
    //         },
    //         {
    //             id: 3,
    //             brand: "Nike",
    //             name: "Air Force 1 '07",
    //             price: 115750,
    //             sizes: "9 - 12",
    //             category: "nike"
    //         },
    //         {
    //             id: 4,
    //             brand: "New Balance",
    //             name: "327' Munseil White",
    //             price: 111999,
    //             sizes: "7 - 11",
    //             category: "new-balance"
    //         }
    //         // Добавьте больше товаров по аналогии
    //     ];

    //     const sliderContainer = document.querySelector('.slider-container');
    //     const filterButtons = document.querySelectorAll('.filter-btn');
    //     const sortSelect = document.getElementById('sort-select');

    //     // Отображение товаров
    //     function displayProducts(productsToDisplay) {
    //         sliderContainer.innerHTML = '';

    //         productsToDisplay.forEach(product => {
    //             const productCard = document.createElement('div');
    //             productCard.className = 'product-card';
    //             productCard.innerHTML = `
    //           <div class="product-brand">${product.brand}</div>
    //           <div class="product-name">${product.name}</div>
    //           <div class="product-price">${formatPrice(product.price)}</div>
    //           <div class="product-sizes">Sizes: ${product.sizes}</div>
    //         `;
    //             sliderContainer.appendChild(productCard);
    //         });
    //     }

    //     // Форматирование цены
    //     function formatPrice(price) {
    //         return new Intl.NumberFormat('en-US').format(price);
    //     }

    //     // Фильтрация товаров
    //     function filterProducts(category) {
    //         if (category === 'all') {
    //             return products;
    //         }
    //         return products.filter(product => product.category === category);
    //     }

    //     // Сортировка товаров
    //     function sortProducts(productsToSort, sortBy) {
    //         const sortedProducts = [...productsToSort];

    //         switch (sortBy) {
    //             case 'price-asc':
    //                 return sortedProducts.sort((a, b) => a.price - b.price);
    //             case 'price-desc':
    //                 return sortedProducts.sort((a, b) => b.price - a.price);
    //             default: // 'popular'
    //                 return sortedProducts.sort((a, b) => b.price - a.price); // Пример сортировки по популярности
    //         }
    //     }

    //     // Обработчики событий для фильтров
    //     filterButtons.forEach(button => {
    //         button.addEventListener('click', () => {
    //             // Удаляем active класс у всех кнопок
    //             filterButtons.forEach(btn => btn.classList.remove('active'));
    //             // Добавляем active класс текущей кнопке
    //             button.classList.add('active');

    //             const filteredProducts = filterProducts(button.dataset.filter);
    //             const sortedProducts = sortProducts(filteredProducts, sortSelect.value);
    //             displayProducts(sortedProducts);
    //         });
    //     });

    //     // Обработчик события для сортировки
    //     sortSelect.addEventListener('change', () => {
    //         const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    //         const filteredProducts = filterProducts(activeFilter);
    //         const sortedProducts = sortProducts(filteredProducts, sortSelect.value);
    //         displayProducts(sortedProducts);
    //     });

    //     // Инициализация слайдера
    //     const slider = document.querySelector('.slider-container');
    //     const prevBtn = document.querySelector('.slider-arrow.prev');
    //     const nextBtn = document.querySelector('.slider-arrow.next');

    //     nextBtn.addEventListener('click', () => {
    //         slider.scrollBy({ left: 250, behavior: 'smooth' });
    //     });

    //     prevBtn.addEventListener('click', () => {
    //         slider.scrollBy({ left: -250, behavior: 'smooth' });
    //     });

    //     // Показываем все товары при загрузке
    //     displayProducts(sortProducts(products, 'popular'));
    // });
})()