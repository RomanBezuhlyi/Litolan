export function initQuantity() {
	const minusBtn = document.querySelector('.quantity__minus')
	const plusBtn = document.querySelector('.quantity__plus')
	const input = document.querySelector('.quantity__input')

	minusBtn.addEventListener('click', () => {
		let value = parseInt(input.value, 10)
		if (value > 1) {
			input.value = value - 1
		}
	})

	plusBtn.addEventListener('click', () => {
		let value = parseInt(input.value, 10)
		input.value = value + 1
	})
}
