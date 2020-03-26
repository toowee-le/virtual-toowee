var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800,
	speedAsDuration: true
});

// Add scroll animation on elements
ScrollReveal().reveal('.banner', {
	duration: 1000,
	origin: 'top',
	distance: '50px'
});

ScrollReveal().reveal('.banner-text', {
	duration: 1500,
	origin: 'top',
	distance: '30px'
});

ScrollReveal().reveal('.btn', {
	delay: 800,
	origin: 'bottom',
	distance: '20px'
});

ScrollReveal().reveal('.icon', {
	duration: 1500,
	origin: 'top',
	distance: '20px'
});

ScrollReveal().reveal('.title', {
	duration: 1500,
	origin: 'top',
	distance: '30px'
});

ScrollReveal().reveal('.subtitle', {
	delay: 500,
	origin: 'top',
	distance: '10px'
});

ScrollReveal().reveal('.contact-section', {
	duration: 1000,
	origin: 'top',
	distance: '30px'
});

ScrollReveal().reveal('.submit', {
	delay: 500,
	origin: 'bottom',
	distance: '20px'
});