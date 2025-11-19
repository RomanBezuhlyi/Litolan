/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/modules/accordion.js
function initAccordion() {
	const accordionItems = document.querySelectorAll('.product__accordion-item')
	if (!accordionItems.length) return

	accordionItems.forEach((item, index) => {
		const top = item.querySelector('.product__accordion-item--top')
		const bottom = item.querySelector('.product__accordion-item--bottom')
		const arrow = top ? top.querySelector('img') : null

		if (!top || !bottom || !arrow) return

		// ✅ Якщо це перший елемент — відкриваємо одразу
		if (index === 0) {
			bottom.style.maxHeight = bottom.scrollHeight + 'px'
			arrow.style.transform = 'rotate(180deg)'
		}

		top.addEventListener('click', () => {
			const isOpen = bottom.style.maxHeight && bottom.style.maxHeight !== '0px'

			if (isOpen) {
				// Закриваємо
				bottom.style.maxHeight = '0'
				bottom.style.overflow = 'hidden'
				bottom.style.transition = 'max-height 0.4s ease'

				arrow.style.transform = 'rotate(0deg)'
				arrow.style.transition = 'transform 0.3s ease'
			} else {
				// Відкриваємо
				bottom.style.transition = 'max-height 0.4s ease'
				bottom.style.overflow = 'hidden'
				bottom.style.maxHeight = bottom.scrollHeight + 'px'

				arrow.style.transform = 'rotate(180deg)'
				arrow.style.transition = 'transform 0.3s ease'
			}
		})
	})
}

;// ./src/js/modules/assortment.js
function initAssortment() {
	// ==========================
	// Dropdowns
	// ==========================
	const drops = document.querySelectorAll('.assortment__menu-drop')

	drops.forEach(drop => {
		const head = drop.querySelector('.dropdown__head')
		const tabs = drop.querySelectorAll('.dropdown__tab')

		if (head) {
			head.addEventListener('click', () => {
				drop.classList.toggle('active')
			})
		}

		tabs.forEach(tab => {
			tab.addEventListener('click', () => {
				tabs.forEach(t => t.classList.remove('active'))
				tab.classList.add('active')
			})
		})
	})

	// ==========================
	// Price Slider
	// ==========================
	const priceSlider = document.getElementById('price-slider')
	const inputMin = document.getElementById('price-min')
	const inputMax = document.getElementById('price-max')

	// Якщо слайдер відсутній — припиняємо виконання
	if (!priceSlider || !inputMin || !inputMax) {
		console.warn('⚠️ Елементи для цінового слайдера не знайдені')
		return
	}

	const PRICE_DEFAULT = [400, 50000]

	noUiSlider.create(priceSlider, {
		start: PRICE_DEFAULT,
		connect: true,
		step: 100,
		range: {
			min: 0,
			max: 100000,
		},
	})

	// Оновлення інпутів при русі бігунка
	priceSlider.noUiSlider.on('update', (values, handle) => {
		const value = Math.round(values[handle])
		if (handle === 0) {
			inputMin.value = value
		} else {
			inputMax.value = value
		}
	})

	// Оновлення бігунка при зміні інпутів
	function setSliderHandle(index, value) {
		const r = [null, null]
		r[index] = value
		priceSlider.noUiSlider.set(r)
	}

	inputMin.addEventListener('change', () => {
		setSliderHandle(0, inputMin.value)
	})

	inputMax.addEventListener('change', () => {
		setSliderHandle(1, inputMax.value)
	})

	// ==========================
	// Reset Button
	// ==========================
	const resetBtn = document.querySelector('.assortment__btn-reset')

	if (resetBtn) {
		resetBtn.addEventListener('click', () => {
			// Скинути active з усіх дропдаунів
			drops.forEach(drop => drop.classList.remove('active'))

			// Скинути active з усіх табів
			document
				.querySelectorAll('.dropdown__tab')
				.forEach(tab => tab.classList.remove('active'))

			// Скинути значення слайдера та інпутів
			priceSlider.noUiSlider.set(PRICE_DEFAULT)
			inputMin.value = PRICE_DEFAULT[0]
			inputMax.value = PRICE_DEFAULT[1]
		})
	}
}

;// ./src/js/modules/banner.js
function initCloseBanner() {
	const banner = document.querySelector('.header__banner')
	const closeBtn = document.querySelector('.header__banner-close')

	if (banner && closeBtn) {
		closeBtn.addEventListener('click', () => {
			banner.style.display = 'none'
		})
	}
}

;// ./src/js/modules/cabinet.js
function initCabinet() {
	const switches = document.querySelectorAll('.cabinet__switch')
	const blockFirst = document.querySelector('.cabinet__block-first')
	const blockSecond = document.querySelector('.cabinet__block-second')
	const imgFirst = document.querySelector('.cabinet__img-first')
	const imgSecond = document.querySelector('.cabinet__img-second')

	// --- Перемикач блоків ---
	switches.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			switches.forEach(b => b.classList.remove('active'))
			btn.classList.add('active')

			if (index === 0) {
				blockFirst.style.display = 'flex'
				blockSecond.style.display = 'none'
				imgFirst.style.display = 'flex'
				imgSecond.style.display = 'none'
			} else {
				blockFirst.style.display = 'none'
				blockSecond.style.display = 'flex'
				imgFirst.style.display = 'none'
				imgSecond.style.display = 'flex'
			}
		})
	})

	// --- Розблокування кнопок при заповненні всіх полів ---
	const forms = document.querySelectorAll('.cabinet__sub-block')

	forms.forEach(form => {
		const inputs = form.querySelectorAll('input')
		const button = form.querySelector('.cabinet__btn')

		// Якщо кнопка заблокована — додаємо перевірку
		if (button && button.disabled) {
			form.addEventListener('input', () => {
				let allFilled = true
				inputs.forEach(input => {
					if (input.value.trim() === '') {
						allFilled = false
					}
				})
				button.disabled = !allFilled
			})
		}
	})
}

;// ./src/js/modules/catalog.js
function initCatalog() {
	const catalog = document.querySelector('.catalog__menu')
	if (!catalog) return

	const openButtons = document.querySelectorAll('.open-catalog')

	openButtons.forEach(btn => {
		btn.addEventListener('click', e => {
			e.stopPropagation()
			catalog.classList.toggle('active')
		})
	})

	document.addEventListener('click', e => {
		if (!catalog.contains(e.target)) {
			catalog.classList.remove('active')
		}
	})

	// Колонки
	const firstCol = catalog.querySelector('.catalog__menu-col.first')
	const secondCol = catalog.querySelector('.catalog__menu-col.second')
	const thirdCol = catalog.querySelector('.catalog__menu-col.third')

	if (!firstCol || !secondCol || !thirdCol) return

	const firstItems = firstCol.querySelectorAll('.catalog__menu-item')

	//-----------------------------------------------------
	// 📌 Дані каталогу (розробник замінить на API OpenCart)
	//-----------------------------------------------------
	const catalogData = {
		'Пластиковые емкости': {
			second: [
				'Емкости по форме',
				'Емкости по назначению',
				'Трехслойные емкости',
				'Емкости оптом',
				'Сборные емкости',
				'Бочки пластиковые',
			],
			third: {
				'Емкости по форме': [
					{ name: 'Квадратные емкости', img: './img/cat-1.png' },
					{ name: 'Конусообразные емкости', img: './img/cat-2.png' },
					{ name: 'Вертикальные емкости', img: './img/cat-3.png' },
					{ name: 'Горизонтальные емкости', img: './img/cat-4.png' },
					{ name: 'Еврокуб', img: './img/cat-5.png' },
					{ name: 'Прямоугольные плоские емкости', img: './img/cat-6.png' },
					{ name: 'Емкости для КАС', img: './img/cat-7.png' },
				],
				'Емкости по назначению': [
					{ name: 'Квадратные емкости', img: './img/cat-1.png' },
					{ name: 'Конусообразные емкости', img: './img/cat-2.png' },
					{ name: 'Вертикальные емкости', img: './img/cat-3.png' },
					{ name: 'Горизонтальные емкости', img: './img/cat-4.png' },
					{ name: 'Еврокуб', img: './img/cat-5.png' },
					{ name: 'Прямоугольные плоские емкости', img: './img/cat-6.png' },
					{ name: 'Емкости для КАС', img: './img/cat-7.png' },
				],
			},
		},

		'Мелкая тара': {
			second: ['Категория 1', 'Категория 2'],
			third: {
				'Категория 1': ['Підкатегорія 1', 'Підкатегорія 2'],
				'Категория 2': ['Вариант 1', 'Вариант 2'],
			},
		},
	}

	//-----------------------------------------------------
	// 📌 РЕНДЕР 2-ї КОЛОНКИ
	//-----------------------------------------------------
	function renderSecondColumn(firstName) {
		const data = catalogData[firstName]
		if (!data) return

		secondCol.innerHTML = `
			<a class="catalog__menu-item--back" href="#">
				<img src="./img/arrow-back.svg" alt="">${firstName}
			</a>
		`

		data.second.forEach(item => {
			secondCol.innerHTML += `
				<a class="catalog__menu-item" data-second="${item}" href="#">${item}</a>
			`
		})

		secondCol.style.display = 'flex'
		thirdCol.style.display = 'none'
	}

	//-----------------------------------------------------
	// 📌 РЕНДЕР 3-ї КОЛОНКИ
	//-----------------------------------------------------
	function renderThirdColumn(firstName, secondName) {
		const data = catalogData[firstName]
		if (!data || !data.third[secondName]) return

		thirdCol.innerHTML = `
    <a class="catalog__menu-item--back" href="#">
      <img src="./img/arrow-back.svg" alt="">${secondName}
    </a>
  `

		data.third[secondName].forEach(item => {
			const el = document.createElement('a')
			el.className = 'catalog__menu-item second'
			el.href = '#'

			// картинка + текст
			el.innerHTML = `
      <img src="${item.img || ''}" alt="" />
      <span class="item-name">${item.name || ''}</span>
    `
			thirdCol.appendChild(el)
		})

		thirdCol.style.display = 'flex'
	}

	//-----------------------------------------------------
	// 📌 КЛІК ПО ПЕРШІЙ КОЛОНЦІ
	//-----------------------------------------------------
	firstItems.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()
			firstItems.forEach(i => i.classList.remove('active'))
			item.classList.add('active')

			const name = item.textContent.trim()
			renderSecondColumn(name)
		})
	})

	//-----------------------------------------------------
	// 📌 КЛІК ПО ДРУГІЙ КОЛОНЦІ (делегування)
	//-----------------------------------------------------
	secondCol.addEventListener('click', e => {
		const target = e.target.closest('.catalog__menu-item[data-second]')
		if (!target) return

		e.preventDefault()

		const secondName = target.dataset.second
		const firstName = firstCol.querySelector('.active')?.textContent.trim()

		if (!firstName) return

		renderThirdColumn(firstName, secondName)
	})

	//-----------------------------------------------------
	// 📌 НАЗАД
	//-----------------------------------------------------
	catalog.addEventListener('click', e => {
		const btn = e.target.closest('.catalog__menu-item--back')
		if (!btn) return

		e.preventDefault()

		const col = btn.closest('.catalog__menu-col')

		if (col.classList.contains('third')) {
			thirdCol.style.display = 'none'
		}

		if (col.classList.contains('second')) {
			secondCol.style.display = 'none'
			thirdCol.style.display = 'none'
		}
	})
}

;// ./src/js/modules/checkbox.js
function initCheckbox() {
	const checkboxes = document.querySelectorAll(
		'.options input[type="checkbox"]'
	)

	checkboxes.forEach(cb => {
		cb.addEventListener('change', () => {
			if (cb.checked) {
				// знімаємо всі інші
				checkboxes.forEach(other => {
					if (other !== cb) other.checked = false
				})
			}
		})
	})
}

;// ./src/js/modules/checkout.js
function initCheckout() {
	// Знаходимо всі блоки з варіантами
	document.querySelectorAll('.checkout__sub-block').forEach(block => {
		const checkboxes = block.querySelectorAll('input[type="checkbox"]')

		checkboxes.forEach(cb => {
			cb.addEventListener('change', () => {
				// знімаємо всі інші галочки тільки в цьому блоці
				checkboxes.forEach(other => {
					if (other !== cb) other.checked = false
				})
			})
		})
	})

	// окремо логіка для Нової Пошти
	const novaPoshtaCheckbox = document.getElementById('nova-poshta')
	const novaPoshtaBranch = document.getElementById('nova-poshta-branch')

	if (novaPoshtaCheckbox && novaPoshtaBranch) {
		novaPoshtaCheckbox.addEventListener('change', () => {
			novaPoshtaBranch.style.display = novaPoshtaCheckbox.checked
				? 'flex'
				: 'none'
		})
	}

	// перемикачі між блоками
	const switchButtons = document.querySelectorAll('.checkout__switch')
	const firstBlock = document.querySelector('.checkout__first')
	const secondBlock = document.querySelector('.checkout__second')

	if (switchButtons.length && firstBlock && secondBlock) {
		switchButtons.forEach((btn, index) => {
			btn.addEventListener('click', () => {
				// прибираємо active у всіх
				switchButtons.forEach(b => b.classList.remove('active'))
				btn.classList.add('active')

				// показуємо потрібний блок
				if (index === 0) {
					firstBlock.style.display = 'flex'
					secondBlock.style.display = 'none'
				} else {
					firstBlock.style.display = 'none'
					secondBlock.style.display = 'flex'
				}
			})
		})

		// початковий стан
		firstBlock.style.display = 'flex'
		secondBlock.style.display = 'none'
	}
}

;// ./src/js/modules/checkoutDrop.js
function initCheckoutDrop() {
	const checkoutBlocks = document.querySelectorAll('.checkout__block.mobile')
	if (!checkoutBlocks.length) return // якщо жодного немає — виходимо

	checkoutBlocks.forEach(block => {
		const toggle = block.querySelector('.checkout__block-top')
		const arrow = toggle ? toggle.querySelector('img') : null

		if (!toggle || !arrow) return // пропускаємо, якщо елементи відсутні

		toggle.addEventListener('click', () => {
			block.classList.toggle('open')
		})
	})
}

;// ./src/js/modules/dropdown.js
function initDropDown() {
	const dropdowns = document.querySelectorAll('.dropdown')

	dropdowns.forEach(dropdown => {
		const toggle = dropdown.querySelector('.dropdown__toggle')

		toggle.addEventListener('click', e => {
			e.preventDefault()

			// Закрити всі інші дропдауни
			dropdowns.forEach(d => {
				if (d !== dropdown) d.classList.remove('open')
			})

			// Перемикаємо поточний
			dropdown.classList.toggle('open')
		})
	})

	// Клік поза дропдауном — закрити всі
	document.addEventListener('click', e => {
		if (!e.target.closest('.dropdown')) {
			dropdowns.forEach(d => d.classList.remove('open'))
		}
	})
}

;// ./src/js/modules/fancybox.js
function initFancybox() {
	if (typeof Fancybox === 'undefined') return

	const galleryLinks = document.querySelectorAll('[data-fancybox="gallery"]')
	if (!galleryLinks.length) return

	Fancybox.bind('[data-fancybox="gallery"]', {
		Thumbs: { autoStart: true },
		Toolbar: {
			display: ['close'],
		},
	})
}

;// ./src/js/modules/faq.js
function initFaq() {
	const faqItems = document.querySelectorAll('.faq__item')

	faqItems.forEach(item => {
		const top = item.querySelector('.faq__item-top')
		const bottom = item.querySelector('.faq__item-bottom')

		// початково сховаємо
		bottom.style.maxHeight = '0'
		bottom.style.overflow = 'hidden'
		bottom.style.transition = 'max-height 0.3s ease'

		top.addEventListener('click', () => {
			const isOpen =
				bottom.style.maxHeight !== '0px' && bottom.style.maxHeight !== '0'

			// якщо треба, щоб відкривався тільки один пункт
			faqItems.forEach(i => {
				const b = i.querySelector('.faq__item-bottom')
				b.style.maxHeight = '0'
			})

			if (!isOpen) {
				bottom.style.maxHeight = bottom.scrollHeight + 'px'
			}
		})
	})
}

;// ./src/js/modules/filter.js
function initMobileFilter() {
	const filterBtn = document.querySelector('.assortment__right-btn-filter')
	const leftPanel = document.querySelector('.assortment__left')

	if (!filterBtn || !leftPanel) return

	// Клік по кнопці — додаємо/знімаємо клас "актив"
	filterBtn.addEventListener('click', e => {
		e.stopPropagation() // не даємо події "провалитися" до document
		leftPanel.classList.toggle('open')
	})

	// Клік поза блоком — знімаємо клас "актив"
	document.addEventListener('click', e => {
		if (!leftPanel.contains(e.target) && !filterBtn.contains(e.target)) {
			leftPanel.classList.remove('open')
		}
	})
}

;// ./src/js/modules/footer.js
function initMobileList() {
	const sections = document.querySelectorAll(
		'.footer__left, .footer__center, .footer__right-top'
	)

	function initFooterAccordion() {
		if (window.innerWidth < 768) {
			sections.forEach(section => {
				const arrow = section.querySelector('.footer__arrow')

				// Початковий стан
				section.style.overflow = 'hidden'
				section.style.transition = 'max-height 0.3s ease'
				section.style.maxHeight = '44px'

				// Якщо ще не ініціалізовано
				if (!section.dataset.accordionInit) {
					section.dataset.accordionInit = 'true'

					section.addEventListener('click', () => {
						const isOpen = section.classList.toggle('open')

						if (isOpen) {
							section.style.maxHeight = section.scrollHeight + 'px'
							if (arrow) arrow.style.transform = 'rotate(180deg)'
						} else {
							section.style.maxHeight = '44px'
							if (arrow) arrow.style.transform = 'rotate(0deg)'
						}
					})
				}
			})
		} else {
			// На десктопі — все відкрите
			sections.forEach(section => {
				const arrow = section.querySelector('.footer__arrow')
				section.style.maxHeight = 'none'
				if (arrow) arrow.style.transform = 'rotate(0deg)'
			})
		}
	}

	// Запуск при завантаженні
	initFooterAccordion()

	// Перевірка при зміні ширини
	window.addEventListener('resize', initFooterAccordion)
}

;// ./src/js/modules/initMenuDriodown.js
function initMenuDropdown() {
	document.querySelectorAll('.menu__nav-item-drop').forEach(drop => {
		const top = drop.querySelector('.menu__nav-item-drop--top')
		const list = drop.querySelector('.menu__nav-item-drop--list')

		if (!top || !list) return

		top.addEventListener('click', () => {
			drop.classList.toggle('open')
		})
	})
}

;// ./src/js/modules/mask.js
function initPhoneMask() {
	document.querySelectorAll('[data-phone-input]').forEach(input => {
		IMask(input, {
			mask: '+{380} (00) 000-00-00',
		})
	})
}

;// ./src/js/modules/menu.js
function initMobileMenu() {
	const burgerBtn = document.querySelector('.header-mobile__burger')
	const burgerIcon = burgerBtn?.querySelector('img')
	const menu = document.querySelector('.menu')
	const body = document.body

	if (!burgerBtn || !menu || !burgerIcon) return

	burgerBtn.addEventListener('click', () => {
		const isOpen = menu.classList.toggle('active')

		// Зміна іконки
		burgerIcon.src = isOpen ? './img/close-2.svg' : './img/butger.svg'
		burgerBtn.style.background = isOpen ? '#F6F6F6' : '#ffffff'

		// Заборона скролу
		body.classList.toggle('menu-open', isOpen)
	})
}

;// ./src/js/modules/modal.js
function initModals() {
	// Функції для блокування/розблокування скролу
	function disableScroll() {
		document.body.style.overflow = 'hidden'
	}
	function enableScroll() {
		document.body.style.overflow = ''
	}

	// ==========================
	// Модалка відгуку
	// ==========================
	const reviewBtn = document.querySelector('.reviews__btn')
	const reviewModal = document.getElementById('reviewModal')
	const thanksModal = document.getElementById('thanksModal')
	const closeButtons = document.querySelectorAll('.close')
	const stars = document.querySelectorAll('.stars .star')
	const ratingText = document.querySelector('.modal-form-stars-text')
	let rating = 0

	const ratingMessages = [
		'Очень плохо',
		'Плохо',
		'Нормально',
		'Хорошо',
		'Отлично',
	]

	// Відкриття модалки відгуку
	if (reviewBtn && reviewModal) {
		reviewBtn.addEventListener('click', () => {
			reviewModal.style.display = 'flex'
			disableScroll()
		})
	}

	// Закриття всіх модалок при кліку на хрестик
	closeButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			if (reviewModal) reviewModal.style.display = 'none'
			if (thanksModal) thanksModal.style.display = 'none'
			if (cartModal) cartModal.style.display = 'none'
			enableScroll()
		})
	})

	// Закриття при кліку поза модалкою
	;[reviewModal, thanksModal].forEach(modal => {
		if (modal) {
			modal.addEventListener('click', e => {
				if (e.target === modal) {
					modal.style.display = 'none'
					enableScroll()
				}
			})
		}
	})

	// Вибір рейтингу
	if (stars.length && ratingText) {
		stars.forEach((star, index) => {
			star.addEventListener('click', () => {
				rating = star.dataset.value
				stars.forEach((s, i) => {
					const path = s.querySelector('path')
					if (path) {
						if (i < rating) {
							path.setAttribute('fill', '#F4B70B')
							path.removeAttribute('stroke')
						} else {
							path.setAttribute('fill', 'none')
							path.setAttribute('stroke', '#F4B70B')
							path.setAttribute('stroke-width', '3')
						}
					}
				})
				ratingText.textContent = ratingMessages[rating - 1]
			})
		})
	}

	// Відправка форми відгуку
	const reviewForm = document.getElementById('reviewForm')
	if (reviewForm && reviewModal && thanksModal) {
		reviewForm.addEventListener('submit', e => {
			e.preventDefault()
			reviewModal.style.display = 'none'
			thanksModal.style.display = 'flex'
		})
	}

	// ==========================
	// Модалка корзини
	// ==========================
	const cartBtns = document.querySelectorAll('.open-cart')
	const cartModal = document.getElementById('cartModal')

	if (cartBtns.length && cartModal) {
		cartBtns.forEach(btn => {
			btn.addEventListener('click', () => {
				cartModal.style.display = 'flex'
				disableScroll()
			})
		})

		cartModal.addEventListener('click', e => {
			if (e.target === cartModal) {
				cartModal.style.display = 'none'
				enableScroll()
			}
		})
	}
}

;// ./src/js/modules/quantity.js
function initQuantity() {
	const quantityBlocks = document.querySelectorAll('.quantity')

	quantityBlocks.forEach(block => {
		const minusBtn = block.querySelector('.quantity__minus')
		const plusBtn = block.querySelector('.quantity__plus')
		const input = block.querySelector('.quantity__input')

		minusBtn.addEventListener('click', () => {
			let value = parseInt(input.value, 10)
			if (value > 1) {
				input.value = value - 1
			}
		})

		plusBtn.addEventListener('click', () => {
			let value = parseInt(input.value, 10)
			input.value = value + 1
		})
	})
}

;// ./src/js/modules/sort.js
function initDropSort(rootId, onChange) {
	const root = document.getElementById(rootId)
	if (!root) return

	const button = root.querySelector('.drop-sort__toggle')
	const menu = root.querySelector('.drop-sort__menu')
	const valueSpan = root.querySelector('.drop-sort__value')
	const options = Array.from(root.querySelectorAll('.drop-sort__option'))

	let current =
		options.find(o => o.getAttribute('aria-selected') === 'true') || options[0]
	valueSpan.textContent = current.textContent.trim()

	function open() {
		menu.classList.add('is-open')
		button.setAttribute('aria-expanded', 'true')
	}

	function close() {
		menu.classList.remove('is-open')
		button.setAttribute('aria-expanded', 'false')
	}

	function toggle() {
		menu.classList.contains('is-open') ? close() : open()
	}

	function select(opt) {
		options.forEach(o => o.setAttribute('aria-selected', 'false'))
		opt.setAttribute('aria-selected', 'true')
		valueSpan.textContent = opt.textContent.trim()
		close()
		if (typeof onChange === 'function') {
			onChange(opt.dataset.value, opt.textContent.trim())
		}
	}

	button.addEventListener('click', toggle)
	document.addEventListener('click', e => {
		if (!root.contains(e.target)) close()
	})

	options.forEach(opt => {
		opt.addEventListener('click', () => select(opt))
	})
}

;// ./src/js/modules/swiper.js
function initMainSwiper() {
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

function initAssortmentSwiper() {
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
function initReviewsSwiper() {
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

function initProductSwiper() {
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

;// ./src/js/modules/video.js
function initPlayVideo() {
	const videoWrapper = document.querySelector('.about__content-video')
	if (!videoWrapper) return // Немає елемента — вийти

	const playBtn = videoWrapper.querySelector('.about__content-play')
	const panel = videoWrapper.querySelector('.about__content-panel')
	const overlay = videoWrapper.querySelector('.about__content-overlay')
	const iframe = videoWrapper.querySelector('.about__content-iframe')

	let player // YouTube Player

	// 1️⃣ Підключаємо YouTube API
	let tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'
	let firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

	// 2️⃣ Створюємо YouTube player після ініціалізації API
	window.onYouTubeIframeAPIReady = function () {
		player = new YT.Player(iframe, {
			events: {
				onStateChange: onPlayerStateChange,
			},
		})
	}

	// 3️⃣ При кліку на кнопку — показуємо відео
	playBtn.addEventListener('click', function () {
		panel.style.display = 'none'
		overlay.style.display = 'none'
		iframe.style.display = 'block'
		if (player) player.playVideo() // Запускаємо відео
	})

	// 4️⃣ Коли відео закінчиться — повертаємо усе назад
	function onPlayerStateChange(event) {
		// 0 означає "ENDED"
		if (event.data === YT.PlayerState.ENDED) {
			iframe.style.display = 'none'
			panel.style.display = ''
			overlay.style.display = ''
		}
	}
}

;// ./src/js/index.js






















document.addEventListener('DOMContentLoaded', () => {
	initCloseBanner()
	initDropDown()
	initMobileMenu()
	initMainSwiper()
	initPlayVideo()
	initCatalog()
	initAssortment()
	initAssortmentSwiper()
	initDropSort('sortDropdown', (value, label) => {
		console.log('Sort changed:', value, label)
	})

	initDropSort('perPageDropdown', (value, label) => {
		console.log('Per page changed:', value, label)
	})
	initMobileFilter()
	initFaq()
	initReviewsSwiper()
	initProductSwiper()
	initCheckbox()
	initQuantity()
	initAccordion()
	initCheckout()
	initModals()
	initCabinet()
	initMobileList()
	initCheckoutDrop()
	initPhoneMask()
	initFancybox()
	initMenuDropdown()
})

/******/ })()
;