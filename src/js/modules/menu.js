export function initMobileMenu() {
	const burgerBtn = document.querySelector('.header-mobile__burger')
	const burgerIcon = burgerBtn?.querySelector('img')
	const menu = document.querySelector('.header-mobile-menu')
	const body = document.body

	if (!burgerBtn || !menu || !burgerIcon) return

	burgerBtn.addEventListener('click', () => {
		const isOpen = menu.classList.toggle('active')

		// Зміна іконки
		burgerIcon.src = isOpen ? './img/close-2.svg' : './img/burger.svg'

		// Заборона скролу
		body.classList.toggle('menu-open', isOpen)
	})
}

export function initMobileSearch() {
	const searchBtn = document.querySelector('.header-mobile__search')
	const search = document.querySelector('.header-mobile-search')
	const body = document.body

	if (!searchBtn || !search) return

	searchBtn.addEventListener('click', () => {
		const isOpen = search.classList.toggle('active')

		body.classList.toggle('menu-open', isOpen)
	})
}
