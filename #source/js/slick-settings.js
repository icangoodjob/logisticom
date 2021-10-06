$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 1000,
		easing: 'ease',
		infinite: false,
		initialSlide: 0,
		fade: false,
		// Автопрокрутка
		autoplay: false,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		// Возможность перетаскивать слайды вручную
		draggable: false,
		swipe: true,
		touchMove: true,
		// Дожидаемся полной анимации и только потом можем переключать на следующий(-ие) слайд(-ы)
		waitForAnimate: true,
		// Центрировать слайд
		centerMode: false,
		// Убрать ширину,которую по умолчанию задает slick
		variableWidth: false,
		// Ряды
		rows: 1,
		slidesPerRow: 1,
		// Вертикальный слайдер
		vertical: false,
		verticalSwiping: false,
		// Связать с другим слайдером
		// asNavFor: '.slider__thumb',
		// MobileFirst
		mobileFirst: false,
		// Брейкпоинты
		// Перемещение стрелок и точек из контейнера в другой div блок
		appendArrows: $('.slider__controls'),
		appendDots: $('.slider__controls'),
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});
	// Методы и сбытия
	$('.slider').slick('goTo', 0);
	$('.slider').slick('slickPrev');
	$('.slider').slick('slickNext');
	$('.slider').slick('slickPlay');
	$('.slider').slick('slickPause');

	$('.link-add').click(function(){
		$('.slider').slick('slickAdd', '<div class="newslide">123</div>');
		return false;
	});
	$('.link-remove').click(function(){
		$('.slider').slick('slickRemove', 0);
		return false;
	});
	// Переназначить значение
	$('.slider').slick('.slickSetOption', 'slidesToShow', 3);
	// Ломаем слайдер
	$('.slider').slick('unslick');
});