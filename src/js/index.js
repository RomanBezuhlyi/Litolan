import { initAccordion } from './modules/accordion'
import { initAssortment } from './modules/assortment'
import { initCloseBanner } from './modules/banner'
import { initCatalog } from './modules/catalog'
import { initCheckbox } from './modules/checkbox'
import { initCheckout } from './modules/checkout'
import { initDropDown } from './modules/dropdown'
import { initFaq } from './modules/faq'
import { initMobileFilter } from './modules/filter'
import { initMobileMenu, initMobileSearch } from './modules/menu'
import { initQuantity } from './modules/quantity'
import { initDropSort } from './modules/sort'
import {
	initAssortmentSwiper,
	initMainSwiper,
	initProductSwiper,
	initReviewsSwiper,
} from './modules/swiper'
import { initPlayVideo } from './modules/video'

document.addEventListener('DOMContentLoaded', () => {
	initCloseBanner()
	initDropDown()
	initMobileMenu()
	initMobileSearch()
	initMainSwiper()
	initPlayVideo()
	initCatalog()
	initAssortment()
	initAssortmentSwiper()
	initDropSort('sortDropdown', (value, label) => {
		console.log('Sort changed:', value, label)
	})

	initDropSort('perPageDropdown', (value, label) => {
		console.log('Per page changed:', value, label)
	})
	initMobileFilter()
	initFaq()
	initReviewsSwiper()
	initProductSwiper()
	initCheckbox()
	initQuantity()
	initAccordion()
	initCheckout()
})
