export function initAccordion() {
	document.querySelectorAll('.product__accordion-item').forEach(item => {
		const top = item.querySelector('.product__accordion-item--top')
		const bottom = item.querySelector('.product__accordion-item--bottom')
		const arrow = top.querySelector('img')

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
