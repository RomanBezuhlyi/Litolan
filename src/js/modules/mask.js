export function initPhoneMask() {
	document.querySelectorAll('[data-phone-input]').forEach(input => {
		IMask(input, {
			mask: '+{380} (00) 000-00-00',
		})
	})
}
