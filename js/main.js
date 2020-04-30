class Carousel {

        /**
         * 
         * 
         * @param {HTMLElement} element
         * @param {Object} options
         * @param {Object} options.slidesToScroll = Nombre d'elements à faire défiler
         * @param {Object} options.slidesVisible = Nombre d'élements visibles dans un slide
         */
    
    
    constructor (element, option = {}) {
        console.log("Hello")
    }
}









document.addEventListener('DOMContentLoaded', function(event) {

    console.log(event)
    new Carousel (document.querySelector('#carousel'), {
        slidesToScroll: 3,
        slidesVisible: 3
    })
})