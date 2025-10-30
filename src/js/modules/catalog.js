export function initCatalog() {
	const catalog = document.querySelector('.catalog__menu')
	const openButtons = document.querySelectorAll('.open-catalog')

	// відкриття каталогу по кнопці
	openButtons.forEach(btn => {
		btn.addEventListener('click', e => {
			e.stopPropagation() // щоб клік по кнопці не закривав каталог
			catalog.classList.toggle('active')
		})
	})

	// закриття каталогу при кліку поза ним
	document.addEventListener('click', e => {
		if (!catalog.contains(e.target)) {
			catalog.classList.remove('active')
		}
	})

	// активний пункт та відкриття колонок
	const firstItems = catalog.querySelectorAll(
		'.catalog__menu-col.first .catalog__menu-item'
	)
	const secondItems = catalog.querySelectorAll(
		'.catalog__menu-col.second .catalog__menu-item'
	)
	const thirdItems = catalog.querySelectorAll(
		'.catalog__menu-col.third .catalog__menu-item'
	)

	// клік по першій колонці
	firstItems.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()
			firstItems.forEach(i => i.classList.remove('active'))
			secondItems.forEach(i => i.classList.remove('active'))
			thirdItems.forEach(i => i.classList.remove('active'))
			item.classList.add('active')

			// показати другу колонку
			catalog.querySelector('.catalog__menu-col.second').style.display = 'block'
			catalog.querySelector('.catalog__menu-col.third').style.display = 'none'
		})
	})

	// клік по другій колонці
	secondItems.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()
			secondItems.forEach(i => i.classList.remove('active'))
			thirdItems.forEach(i => i.classList.remove('active'))
			item.classList.add('active')

			// показати третю колонку
			catalog.querySelector('.catalog__menu-col.third').style.display = 'block'
		})
	})

	// клік по третій колонці
	thirdItems.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()
			thirdItems.forEach(i => i.classList.remove('active'))
			item.classList.add('active')

			// показати четверту колонку
			catalog.querySelector('.catalog__menu-col.fourth').style.display = 'block'
		})
	})
}
