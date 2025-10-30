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

export function initAssortmentSwiper() {
	new Swiper('.assortment__right-slider', {
		spaceBetween: 4,
		slidesPerView: 2,
		navigation: {
			prevEl: '.assortment__right-slider__prev',
			nextEl: '.assortment__right-slider__next',
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 7,
			},
		},
	})
}
export function initReviewsSwiper() {
	new Swiper('.reviews__swiper', {
		spaceBetween: 8,
		slidesPerView: 1,
		navigation: {
			prevEl: '.reviews__swiper__prev',
			nextEl: '.reviews__swiper__next',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 3,
			},
		},
	})
}

export function initProductSwiper() {
	const slidesCount = document.querySelectorAll(
		'.small-slider .swiper-slide'
	).length
	const maxVisible = 8

	const smallSlider = new Swiper('.small-slider', {
		direction: 'vertical',
		slidesPerView: Math.min(slidesCount, maxVisible),
		spaceBetween: 10,
		watchSlidesProgress: true,
	})
	// великий слайдер
	const largeSlider = new Swiper('.large-slider', {
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.large-swiper-next',
			prevEl: '.large-swiper-prev',
		},
		thumbs: {
			swiper: smallSlider,
		},
	})
}
