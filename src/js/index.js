import { initCloseBanner } from './modules/banner'
import { initDropDown } from './modules/dropdown'
import { initMobileMenu, initMobileSearch } from './modules/menu'
import { initMainSwiper } from './modules/swiper'
import { initPlayVideo } from './modules/video'

document.addEventListener('DOMContentLoaded', () => {
	initCloseBanner()
	initDropDown()
	initMobileMenu()
	initMobileSearch()
	initMainSwiper()
	initPlayVideo()
})
