export function initCloseBanner() {
	const banner = document.querySelector('.header__banner')
	const closeBtn = document.querySelector('.header__banner-close')

	if (banner && closeBtn) {
		closeBtn.addEventListener('click', () => {
			banner.style.display = 'none'
		})
	}
}
