export function initCabinet() {
	const switches = document.querySelectorAll('.cabinet__switch')
	const blockFirst = document.querySelector('.cabinet__block-first')
	const blockSecond = document.querySelector('.cabinet__block-second')
	const imgFirst = document.querySelector('.cabinet__img-first')
	const imgSecond = document.querySelector('.cabinet__img-second')

	// --- Перемикач блоків ---
	switches.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			switches.forEach(b => b.classList.remove('active'))
			btn.classList.add('active')

			if (index === 0) {
				blockFirst.style.display = 'flex'
				blockSecond.style.display = 'none'
				imgFirst.style.display = 'flex'
				imgSecond.style.display = 'none'
			} else {
				blockFirst.style.display = 'none'
				blockSecond.style.display = 'flex'
				imgFirst.style.display = 'none'
				imgSecond.style.display = 'flex'
			}
		})
	})

	// --- Розблокування кнопок при заповненні всіх полів ---
	const forms = document.querySelectorAll('.cabinet__sub-block')

	forms.forEach(form => {
		const inputs = form.querySelectorAll('input')
		const button = form.querySelector('.cabinet__btn')

		// Якщо кнопка заблокована — додаємо перевірку
		if (button && button.disabled) {
			form.addEventListener('input', () => {
				let allFilled = true
				inputs.forEach(input => {
					if (input.value.trim() === '') {
						allFilled = false
					}
				})
				button.disabled = !allFilled
			})
		}
	})
}
