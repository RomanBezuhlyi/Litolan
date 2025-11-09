export function initMobileMenu() {
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
