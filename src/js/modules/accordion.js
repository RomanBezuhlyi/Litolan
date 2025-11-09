export function initAccordion() {
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
