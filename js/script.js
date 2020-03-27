// Add event listener on button to scroll page to the top
const scrollToTop = document.getElementById('scrollToTopBtn');

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})