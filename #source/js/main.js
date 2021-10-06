"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.classList.remove('_active');
			menuArrow.addEventListener("click", function (e) {
				e.stopPropagation();
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.header__menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
}

// GALLERY SLIDER
const gallerySlider = document.querySelector('.room__gallery');
let mobileSwiper;
function mobSwiper() {
	if (window.innerWidth <= 820 && gallerySlider.dataset.mobile == 'false'){
		mobileSwiper = new Swiper(gallerySlider, {
			slidesPerGroup: 2,
			loop: false,
			spaceBetween: 15,
			slideClass: 'room__image',
			wrapperClass: 'room__body',
			bulletClass: 'room__pagination-bullet',
			initialSlide: 0,
			pagination: {
				el: '.room__pagination',
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				300: {
					slidesPerView: 2,
				},
				375: {
					slidesPerView: 2,
				},
			},
		});
		gallerySlider.dataset.mobile = 'true';
	};
	if (window.innerWidth > 820) {
		gallerySlider.dataset.mobile = 'false';
		if (gallerySlider.classList.contains('swiper-container-initialized')){
		}
	}
};
mobSwiper();
window.addEventListener('resize', () => {
	mobSwiper();
});
