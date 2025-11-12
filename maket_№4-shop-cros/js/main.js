(function () {
    // Initialize Swiper for hero section
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

        // Product data
    const products = [
        {
            id: 1,
            brand: "Nike",
            name: "Air Force 1 Orche",
            price: "₹9,985",
            sizes: "8 -10",
            image: "img/products/nike-air-force-orche.svg"
        },
        {
            id: 2,
            brand: "Nike",
            name: "Air Force Panda",
            price: "₹19,655",
            sizes: "6 -10",
            image: "img/products/nike-air-force-panda.svg"
        },
        {
            id: 3,
            brand: "Nike",
            name: "Air Force 1 '07",
            price: "₹15,750",
            sizes: "9-12",
            image: "img/products/nike-air-force-07.svg"
        },
        {
            id: 4,
            brand: "New Balance",
            name: "327' Munsell White",
            price: "₹11,999",
            sizes: "7-11",
            image: "img/products/new-balance-327.svg"
        },
        {
            id: 5,
            brand: "Nike",
            name: "Air Force 1 Orche",
            price: "₹9,985",
            sizes: "8 -10",
            image: "img/products/nike-air-force-orche.svg"
        },
    ];

    // Function to create product card HTML
    function createProductCard(product) {
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="brand">${product.brand}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="price">${product.price}</div>
                    <div class="sizes">Sizes: ${product.sizes}</div>
                </div>
            </div>
        `;
    }

    // Function to render products in a container
    function renderProducts(containerId, productsToRender) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = productsToRender.map(product => 
                createProductCard(product)
            ).join('');
        }
    }

    // Initialize products on page load
    document.addEventListener('DOMContentLoaded', function() {
        // Render first carousel (4 products)
        renderProducts('products-container-1', products);
        
        // Render second section (6 products - duplicating some)
        const productsSection2 = [
            ...products,
            products[0], // Duplicate first product
            products[1]  // Duplicate second product
        ];
        renderProducts('products-container-2', productsSection2);

        // Add event listeners
        initEventListeners();
    });

    // Initialize event listeners
    function initEventListeners() {
        // See All buttons
        document.querySelectorAll('.see-all-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('See all products clicked');
                // Here you would typically navigate to a products page
            });
        });

        // Filter buttons
        document.querySelectorAll('.filters').forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('Filters clicked');
                // Here you would implement filter logic
            });
        });

        // Sort buttons
        document.querySelectorAll('.sort').forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('Sort clicked');
                // Here you would implement sort logic
            });
        });

        // View toggle buttons
        document.querySelectorAll('.icon-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from siblings
                this.parentElement.querySelectorAll('.icon-btn').forEach(b => {
                    b.classList.remove('icon-btn--active');
                });
                // Add active class to clicked button
                this.classList.add('icon-btn--active');
            });
        });

        // Product cards click
        document.addEventListener('click', function(e) {
            const card = e.target.closest('.product-card');
            if (card) {
                const productId = card.dataset.productId;
                const product = products.find(p => p.id == productId);
                if (product) {
                    console.log('Product clicked:', product.name);
                    // Here you would navigate to product detail page
                }
            }
        });

        // Carousel navigation for first section
        const carousel1 = document.getElementById('products-container-1');
        const carousel1Prev = document.getElementById('carousel1-prev');
        const carousel1Next = document.getElementById('carousel1-next');

        if (carousel1 && carousel1Prev && carousel1Next) {
            carousel1Next.addEventListener('click', () => {
                carousel1.scrollBy({ left: 450, behavior: 'smooth' });
            });

            carousel1Prev.addEventListener('click', () => {
                carousel1.scrollBy({ left: -450, behavior: 'smooth' });
            });
        }
    }

    // Make functions globally available if needed
    window.createProductCard = createProductCard;
    window.productsData = products;


})()