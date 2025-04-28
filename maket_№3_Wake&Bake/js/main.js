(function () {
    // burger-menu

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        // const target = e.target
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header__nav-link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return
        // if (burgerIcon) {
        //     e.preventDefault()
        // }
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
        // console.log('работает')
    }


    //  modal--po-up

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()
        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }



    // tab-content--show
    // tab-controls__link--activ
    // "tab-content" id="tab1"

    //  tabulation + accordion

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    // e==event
    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--activ')) return


        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--activ')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--activ')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }


        tabControl.classList.add('tab-controls__link--activ')
        tabContent.classList.add('tab-content--show')
    }


    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            // для атоматического сворачивания всех кроме активного элемента V2
            // если не нужно, то строки ниже убрать

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            console.log(accordionOpenedItem)
            console.log(accordionOpenedContent)
            //  V1
            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;


            // V2
            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            // V2


            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        })
    })


    // Слайдер в галлереии

    const swiper = new Swiper('.gallery__slider', {
        // loop: true,
        slidesPerView: 1.5,
        spaceBetween: 15,
        // If we need pagination
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            // when window width is >= 320px
            601: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 480px
            801: {
                slidesPerView: 3,
                spaceBetween: 32
            },
            // when window width is >= 640px
            1101: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });


})()

