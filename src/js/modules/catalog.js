export function initCatalog() {
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
