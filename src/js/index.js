import { initAccordion } from './modules/accordion'
import { initAssortment } from './modules/assortment'
import { initCloseBanner } from './modules/banner'
import { initCabinet } from './modules/cabinet'
import { initCatalog } from './modules/catalog'
import { initCheckbox } from './modules/checkbox'
import { initCheckout } from './modules/checkout'
import { initCheckoutDrop } from './modules/checkoutDrop'
import { initDropDown } from './modules/dropdown'
import { initFancybox } from './modules/fancybox'
import { initFaq } from './modules/faq'
import { initMobileFilter } from './modules/filter'
import { initMobileList } from './modules/footer'
import { initMenuDropdown } from './modules/initMenuDriodown'
import { initPhoneMask } from './modules/mask'
import { initMobileMenu } from './modules/menu'
import { initModals } from './modules/modal'
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
	initModals()
	initCabinet()
	initMobileList()
	initCheckoutDrop()
	initPhoneMask()
	initFancybox()
	initMenuDropdown()
})
