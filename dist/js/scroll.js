var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 600,
	speedAsDuration: true
});

// Add scroll animation on elements
ScrollReveal().reveal('.banner', {
	duration: 1000,
	origin: 'top',
	distance: '50px'
});

ScrollReveal().reveal('.banner-text', {
	duration: 1200,
	origin: 'top',
	distance: '30px'
});

ScrollReveal().reveal('.btn', {
	delay: 800,
	origin: 'bottom',
	distance: '20px'
});

ScrollReveal().reveal('.intro-text', {
	delay: 100,
	origin: 'top',
});

ScrollReveal().reveal('.icon', {
	duration: 1500,
	origin: 'top',
	distance: '20px'
});

ScrollReveal().reveal('.title', {
	duration: 1500,
	origin: 'bottom',
});

ScrollReveal().reveal('.subtitle', {
	delay: 100,
	origin: 'bottom',
});

ScrollReveal().reveal('.about-me', {
	duration: 1500,
	origin: 'bottom',
});

ScrollReveal().reveal('.contact-section', {
	delay: 700,
	origin: 'top',
	distance: '30px'
});

ScrollReveal().reveal('.submit', {
	delay: 300,
	origin: 'bottom',
	distance: '20px'
});