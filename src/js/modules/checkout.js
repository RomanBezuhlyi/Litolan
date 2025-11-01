export function initCheckout() {
	// Знаходимо всі блоки з варіантами
	document.querySelectorAll('.checkout__sub-block').forEach(block => {
		const checkboxes = block.querySelectorAll('input[type="checkbox"]')

		checkboxes.forEach(cb => {
			cb.addEventListener('change', () => {
				// знімаємо всі інші галочки тільки в цьому блоці
				checkboxes.forEach(other => {
					if (other !== cb) other.checked = false
				})
			})
		})
	})

	// окремо логіка для Нової Пошти
	const novaPoshtaCheckbox = document.getElementById('nova-poshta')
	const novaPoshtaBranch = document.getElementById('nova-poshta-branch')

	if (novaPoshtaCheckbox) {
		novaPoshtaCheckbox.addEventListener('change', () => {
			novaPoshtaBranch.style.display = novaPoshtaCheckbox.checked
				? 'flex'
				: 'none'
		})
	}

	const switchButtons = document.querySelectorAll('.checkout__switch')
	const firstBlock = document.querySelector('.checkout__first')
	const secondBlock = document.querySelector('.checkout__second')

	switchButtons.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			// прибираємо active у всіх
			switchButtons.forEach(b => b.classList.remove('active'))
			btn.classList.add('active')

			// показуємо потрібний блок
			if (index === 0) {
				firstBlock.style.display = 'flex'
				secondBlock.style.display = 'none'
			} else {
				firstBlock.style.display = 'none'
				secondBlock.style.display = 'flex'
			}
		})
	})

	// початковий стан
	firstBlock.style.display = 'flex'
	secondBlock.style.display = 'none'
}
