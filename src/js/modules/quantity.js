export function initQuantity() {
	const quantityBlocks = document.querySelectorAll('.quantity')

	quantityBlocks.forEach(block => {
		const minusBtn = block.querySelector('.quantity__minus')
		const plusBtn = block.querySelector('.quantity__plus')
		const input = block.querySelector('.quantity__input')

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
	})
}
