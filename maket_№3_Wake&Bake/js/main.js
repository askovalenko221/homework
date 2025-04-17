(function () {
    // const = 
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        // const target = e.target
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header__nav-link')

        if (!burgerIcon && !burgerNavLink) return

        if(document.documentElement.clientWidth > 900) return

        // if (burgerIcon) {
        //     e.preventDefault()
        // }

            if (!document.body.classList.contains('body--opened-menu')) {
                document.body.classList.add('body--opened-menu')
            } else {
                document.body.classList.remove('body--opened-menu')
            }

        console.log('работает')



    }

})()





// const btn = document.querySelector('.btn')
// btn.addEventListener('click', event => {
//     // console.log(event.target)
//     // event.target.classList.toggle('red')
//     event.currentTarget.classList.toggle('red')

// })