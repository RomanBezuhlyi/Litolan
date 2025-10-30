export function initAssortment() {
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
