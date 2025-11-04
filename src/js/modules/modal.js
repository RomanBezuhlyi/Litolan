export function initModals() {
	// Функції для блокування/розблокування скролу
	function disableScroll() {
		document.body.style.overflow = 'hidden'
	}
	function enableScroll() {
		document.body.style.overflow = ''
	}

	// ==========================
	// Модалка відгуку
	// ==========================
	const reviewBtn = document.querySelector('.reviews__btn')
	const reviewModal = document.getElementById('reviewModal')
	const thanksModal = document.getElementById('thanksModal')
	const closeButtons = document.querySelectorAll('.close')
	const stars = document.querySelectorAll('.stars .star')
	const ratingText = document.querySelector('.modal-form-stars-text')
	let rating = 0

	const ratingMessages = [
		'Очень плохо',
		'Плохо',
		'Нормально',
		'Хорошо',
		'Отлично',
	]

	// Відкриття модалки відгуку
	if (reviewBtn && reviewModal) {
		reviewBtn.addEventListener('click', () => {
			reviewModal.style.display = 'flex'
			disableScroll()
		})
	}

	// Закриття всіх модалок при кліку на хрестик
	closeButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			if (reviewModal) reviewModal.style.display = 'none'
			if (thanksModal) thanksModal.style.display = 'none'
			if (cartModal) cartModal.style.display = 'none'
			enableScroll()
		})
	})

	// Закриття при кліку поза модалкою
	;[reviewModal, thanksModal].forEach(modal => {
		if (modal) {
			modal.addEventListener('click', e => {
				if (e.target === modal) {
					modal.style.display = 'none'
					enableScroll()
				}
			})
		}
	})

	// Вибір рейтингу
	if (stars.length && ratingText) {
		stars.forEach((star, index) => {
			star.addEventListener('click', () => {
				rating = star.dataset.value
				stars.forEach((s, i) => {
					const path = s.querySelector('path')
					if (path) {
						if (i < rating) {
							path.setAttribute('fill', '#F4B70B')
							path.removeAttribute('stroke')
						} else {
							path.setAttribute('fill', 'none')
							path.setAttribute('stroke', '#F4B70B')
							path.setAttribute('stroke-width', '3')
						}
					}
				})
				ratingText.textContent = ratingMessages[rating - 1]
			})
		})
	}

	// Відправка форми відгуку
	const reviewForm = document.getElementById('reviewForm')
	if (reviewForm && reviewModal && thanksModal) {
		reviewForm.addEventListener('submit', e => {
			e.preventDefault()
			reviewModal.style.display = 'none'
			thanksModal.style.display = 'flex'
		})
	}

	// ==========================
	// Модалка корзини
	// ==========================
	const cartBtns = document.querySelectorAll('.open-cart')
	const cartModal = document.getElementById('cartModal')

	if (cartBtns.length && cartModal) {
		cartBtns.forEach(btn => {
			btn.addEventListener('click', () => {
				cartModal.style.display = 'flex'
				disableScroll()
			})
		})

		cartModal.addEventListener('click', e => {
			if (e.target === cartModal) {
				cartModal.style.display = 'none'
				enableScroll()
			}
		})
	}
}
