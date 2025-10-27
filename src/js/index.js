import { initCloseBanner } from './modules/banner'
import { initDropDown } from './modules/dropdown'
import { initMobileMenu, initMobileSearch } from './modules/menu'

document.addEventListener('DOMContentLoaded', () => {
	initCloseBanner()
	initDropDown()
	initMobileMenu()
	initMobileSearch()
})
