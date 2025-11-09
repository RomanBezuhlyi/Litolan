export function initMainSwiper() {
	new Swiper('.hero__slider', {
		spaceBetween: 8,
		slidesPerView: 1.4,
		navigation: {
			prevEl: '.hero__slider__prev',
			nextEl: '.hero__slider__next',
		},
		pagination: {
			el: '.hero__slider__pagination',
			clickable: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
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
		slidesPerView: 2.5,
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
		pagination: {
			el: '.reviews__pagination',
			clickable: true,
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

	function getNavSelectors() {
		// перевірка ширини екрану
		const isMobile = window.innerWidth <= 768
		return {
			nextEl: isMobile
				? '.large-swiper-nav .large-swiper-next'
				: '.large-slider .large-swiper-next',
			prevEl: isMobile
				? '.large-swiper-nav .large-swiper-prev'
				: '.large-slider .large-swiper-prev',
		}
	}

	// створюємо Swiper
	let largeSlider = new Swiper('.large-slider', {
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: getNavSelectors(),
		pagination: {
			el: '.large-swiper-pagination',
			clickable: true,
		},
		thumbs: {
			swiper: smallSlider,
		},
	})

	// Реініціалізація при ресайзі (щоб перемикались кнопки)
	window.addEventListener('resize', () => {
		const newNav = getNavSelectors()

		// якщо кнопки змінились — переініціалізуємо Swiper
		if (
			newNav.nextEl !== largeSlider.params.navigation.nextEl ||
			newNav.prevEl !== largeSlider.params.navigation.prevEl
		) {
			largeSlider.destroy(true, true)
			largeSlider = new Swiper('.large-slider', {
				slidesPerView: 1,
				spaceBetween: 10,
				navigation: newNav,
				pagination: {
					el: '.large-swiper-pagination',
					clickable: true,
				},
				thumbs: {
					swiper: smallSlider,
				},
			})
		}
	})
}
