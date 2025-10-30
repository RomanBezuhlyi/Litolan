export function initDropSort(rootId, onChange) {
	const root = document.getElementById(rootId)
	if (!root) return

	const button = root.querySelector('.drop-sort__toggle')
	const menu = root.querySelector('.drop-sort__menu')
	const valueSpan = root.querySelector('.drop-sort__value')
	const options = Array.from(root.querySelectorAll('.drop-sort__option'))

	let current =
		options.find(o => o.getAttribute('aria-selected') === 'true') || options[0]
	valueSpan.textContent = current.textContent.trim()

	function open() {
		menu.classList.add('is-open')
		button.setAttribute('aria-expanded', 'true')
	}

	function close() {
		menu.classList.remove('is-open')
		button.setAttribute('aria-expanded', 'false')
	}

	function toggle() {
		menu.classList.contains('is-open') ? close() : open()
	}

	function select(opt) {
		options.forEach(o => o.setAttribute('aria-selected', 'false'))
		opt.setAttribute('aria-selected', 'true')
		valueSpan.textContent = opt.textContent.trim()
		close()
		if (typeof onChange === 'function') {
			onChange(opt.dataset.value, opt.textContent.trim())
		}
	}

	button.addEventListener('click', toggle)
	document.addEventListener('click', e => {
		if (!root.contains(e.target)) close()
	})

	options.forEach(opt => {
		opt.addEventListener('click', () => select(opt))
	})
}
