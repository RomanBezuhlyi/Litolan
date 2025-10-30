export function initCheckbox() {
	const checkboxes = document.querySelectorAll(
		'.options input[type="checkbox"]'
	)

	checkboxes.forEach(cb => {
		cb.addEventListener('change', () => {
			if (cb.checked) {
				// знімаємо всі інші
				checkboxes.forEach(other => {
					if (other !== cb) other.checked = false
				})
			}
		})
	})
}
