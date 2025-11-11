export function initCatalog() {
	const catalog = document.querySelector('.catalog__menu')
	if (!catalog) return // якщо каталогу немає — зупиняємось

	const openButtons = document.querySelectorAll('.open-catalog')

	// відкриття каталогу по кнопці
	openButtons?.forEach(btn => {
		btn.addEventListener('click', e => {
			e.stopPropagation()
			catalog.classList.toggle('active')
		})
	})

	// закриття каталогу при кліку поза ним
	document.addEventListener('click', e => {
		if (!catalog.contains(e.target)) {
			catalog.classList.remove('active')
		}
	})

	// колонки
	const firstCol = catalog.querySelector('.catalog__menu-col.first')
	const secondCol = catalog.querySelector('.catalog__menu-col.second')
	const thirdCol = catalog.querySelector('.catalog__menu-col.third')
	const fourthCol = catalog.querySelector('.catalog__menu-col.fourth')

	// якщо мінімально потрібних колонок немає — виходимо
	if (!firstCol || !secondCol || !fourthCol) return

	const firstItems = firstCol.querySelectorAll('.catalog__menu-item') || []
	const secondItems = secondCol.querySelectorAll('.catalog__menu-item') || []
	const thirdItems = thirdCol?.querySelectorAll('.catalog__menu-item') || []

	// 🔹 ПО ДЕФОЛТУ: перша, друга і четверта відкриті
	firstCol.style.display = 'flex'
	secondCol.style.display = 'flex'
	fourthCol.style.display = 'flex'
	if (thirdCol) thirdCol.style.display = 'none'

	// клік по першій колонці
	firstItems.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()
			firstItems.forEach(i => i.classList.remove('active'))
			secondItems.forEach(i => i.classList.remove('active'))
			thirdItems.forEach(i => i.classList.remove('active'))

			item.classList.add('active')

			secondCol.style.display = 'flex'
			if (thirdCol) thirdCol.style.display = 'none'
		})
	})

	// клік по другій колонці
	secondItems.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()
			secondItems.forEach(i => i.classList.remove('active'))
			thirdItems.forEach(i => i.classList.remove('active'))
			item.classList.add('active')

			if (thirdCol) thirdCol.style.display = 'flex'
		})
	})

	// клік по третій колонці
	thirdItems?.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()
			thirdItems.forEach(i => i.classList.remove('active'))
			item.classList.add('active')
			// четверта завжди показана — нічого не міняємо
		})
	})

	// кнопки "назад"
	const backButtons =
		catalog.querySelectorAll('.catalog__menu-item--back') || []
	backButtons.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			const col = btn.closest('.catalog__menu-col')
			if (!col) return

			if (col.classList.contains('third')) {
				col.style.display = 'none'
				secondCol.style.display = 'flex'
				thirdItems.forEach(i => i.classList.remove('active'))
			} else if (col.classList.contains('second')) {
				secondItems.forEach(i => i.classList.remove('active'))
				if (thirdCol) thirdCol.style.display = 'none'
			}
		})
	})
}
