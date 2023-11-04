let menuBtn = document.getElementById('menuBtn');
let navMenu = document.getElementById('navMenu');
let navMenuLink = document.querySelectorAll('#navMenu li a')

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('displayOn');
})

navMenuLink.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('displayOn');
    })
})

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
  });