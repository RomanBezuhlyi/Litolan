export function initDropDown() {
	const dropdowns = document.querySelectorAll('.dropdown')

	dropdowns.forEach(dropdown => {
		const toggle = dropdown.querySelector('.dropdown__toggle')

		toggle.addEventListener('click', e => {
			e.preventDefault()

			// Закрити всі інші дропдауни
			dropdowns.forEach(d => {
				if (d !== dropdown) d.classList.remove('open')
			})

			// Перемикаємо поточний
			dropdown.classList.toggle('open')
		})
	})

	// Клік поза дропдауном — закрити всі
	document.addEventListener('click', e => {
		if (!e.target.closest('.dropdown')) {
			dropdowns.forEach(d => d.classList.remove('open'))
		}
	})
}
