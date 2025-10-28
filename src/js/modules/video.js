export function initPlayVideo() {
	const videoWrapper = document.querySelector('.about__content-video')
	const playBtn = videoWrapper.querySelector('.about__content-play')
	const panel = videoWrapper.querySelector('.about__content-panel')
	const overlay = videoWrapper.querySelector('.about__content-overlay')
	const iframe = videoWrapper.querySelector('.about__content-iframe')

	let player // YouTube Player

	// 1️⃣ Підключаємо YouTube API
	let tag = document.createElement('script')
	tag.src = 'https://www.youtube.com/iframe_api'
	let firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

	// 2️⃣ Створюємо YouTube player після ініціалізації API
	window.onYouTubeIframeAPIReady = function () {
		player = new YT.Player(iframe, {
			events: {
				onStateChange: onPlayerStateChange,
			},
		})
	}

	// 3️⃣ При кліку на кнопку — показуємо відео
	playBtn.addEventListener('click', function () {
		panel.style.display = 'none'
		overlay.style.display = 'none'
		iframe.style.display = 'block'
		if (player) player.playVideo() // Запускаємо відео
	})

	// 4️⃣ Коли відео закінчиться — повертаємо усе назад
	function onPlayerStateChange(event) {
		// 0 означає "ENDED"
		if (event.data === YT.PlayerState.ENDED) {
			iframe.style.display = 'none'
			panel.style.display = ''
			overlay.style.display = ''
		}
	}
}
