// Detect request animation frame
//----------------------------------------------------


// ===== Top to Botttom===============
let topTOBottom = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }

    })
})

const allTopTOBottom = document.querySelectorAll('.topTOBottom')

allTopTOBottom.forEach((el) => topTOBottom.observe(el))


// =======Left to right=================

let leftToRight = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }

    })
})

const allLeftToRight = document.querySelectorAll('.leftToRight')

allLeftToRight.forEach((el) => leftToRight.observe(el))



// ===== Bottom to Top ===============
let bottomToTop = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }

    })
})

const allBottomToTop = document.querySelectorAll('.bottomToTop')

allBottomToTop.forEach((el) => bottomToTop.observe(el))





// =======Right to Left =================

let rightToLeft = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }

    })
})

const allRightToLeft = document.querySelectorAll('.rightToLeft')

allRightToLeft.forEach((el) => rightToLeft.observe(el))