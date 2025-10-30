export function initFaq() {
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
