export function initMenuDropdown() {
	document.querySelectorAll('.menu__nav-item-drop').forEach(drop => {
		const top = drop.querySelector('.menu__nav-item-drop--top')
		const list = drop.querySelector('.menu__nav-item-drop--list')

		if (!top || !list) return

		top.addEventListener('click', () => {
			drop.classList.toggle('open')
		})
	})
}
