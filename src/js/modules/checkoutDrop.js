export function initCheckoutDrop() {
	const checkoutBlocks = document.querySelectorAll('.checkout__block.mobile')
	if (!checkoutBlocks.length) return // якщо жодного немає — виходимо

	checkoutBlocks.forEach(block => {
		const toggle = block.querySelector('.checkout__block-top')
		const arrow = toggle ? toggle.querySelector('img') : null

		if (!toggle || !arrow) return // пропускаємо, якщо елементи відсутні

		toggle.addEventListener('click', () => {
			block.classList.toggle('open')
		})
	})
}
