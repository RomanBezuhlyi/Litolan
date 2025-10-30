export function initMobileFilter() {
	const filterBtn = document.querySelector('.assortment__right-btn-filter')
	const leftPanel = document.querySelector('.assortment__left')

	if (!filterBtn || !leftPanel) return

	// Клік по кнопці — додаємо/знімаємо клас "актив"
	filterBtn.addEventListener('click', e => {
		e.stopPropagation() // не даємо події "провалитися" до document
		leftPanel.classList.toggle('open')
	})

	// Клік поза блоком — знімаємо клас "актив"
	document.addEventListener('click', e => {
		if (!leftPanel.contains(e.target) && !filterBtn.contains(e.target)) {
			leftPanel.classList.remove('open')
		}
	})
}
