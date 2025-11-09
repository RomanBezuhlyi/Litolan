export function initMobileList() {
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
