export function initFancybox() {
	if (typeof Fancybox === 'undefined') return

	const galleryLinks = document.querySelectorAll('[data-fancybox="gallery"]')
	if (!galleryLinks.length) return

	Fancybox.bind('[data-fancybox="gallery"]', {
		Thumbs: { autoStart: true },
		Toolbar: {
			display: ['close'],
		},
	})
}
