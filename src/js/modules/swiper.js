export function initMainSwiper() {
	new Swiper('.hero__slider', {
		spaceBetween: 8,
		slidesPerView: 1,
		navigation: {
			prevEl: '.hero__slider__prev',
			nextEl: '.hero__slider__next',
		},
		pagination: {
			el: '.hero__slider__pagination',
			clickable: true,
		},
		breakpoints: {
			991: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3.15,
			},
		},
	})
}
