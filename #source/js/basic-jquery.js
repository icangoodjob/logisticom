$(document).ready(function(){

	// ==============================КОМБИНИРОВАННЫЕ СЕЛЕКТОРЫ=================================
	$('h1 ~ p').addClass('selected'); // Все соседние теги p, которые идут справа,ниже после тега h2
	$('li.second-list-item ~ li').addClass('selected'); // Все теги li, идущие за элементов li с классом list-item
	$('h2 + p').addClass('selected'); // Соседний элемент от заголовка

	// ==================ПРОСТЫЕ ФИЛЬТРЫ (:first, :last, :even, :odd, eq(0))=====================
	$('p:first').addClass('selected'); // Первый
	$('p:last').addClass('selected'); // Последний 
	$('p:odd').addClass('selected'); // Четный
	$('p:even').addClass('selected'); // Нечетный
	$('p:eq(0)').addClass('selected'); // Выбор по индексу


	// ==================ФИЛЬТРЫ ПО СОДЕРЖИМОМУ (:has, :parent, :empty)=======================
	$('h3:has(span)').addClass('selected') // h3 внутри которого есть span
	$('.block:parent').addClass('selected') // Все теги с классом .block, которые являются родителями
	$('.block:empty').addClass('selected') // Все теги с классом .block, которые являются пустыми (empty)

});

$(document).ready(function(){

	// =============================МЕТОДЫ ВЫБОРА ЭЛЕМЕНТОВ===================================

	$('.inner').parent().addClass('selected'); // Находим элемент с классом inner, обращаемся к родителю и добавляем родителю класс selected
	$('.block').children().addClass('selected'); // Выбираем дочерние элементы относительно родителя с классом .block и добавляем потомкам класс .selected

	// Возвращаем первый ближайший родительский узел или текущий узел
	$('li#second-list-item').closest('ul').addClass('selected');
	$('#second-list-item').closest('li').addClass('selected');

	$('#second-list-item').parents().addClass('selected'); // Выбираем всех родителей
	$('#second-list-item').parent().addClass('selected'); // Выбираем единственного самого первого родителя

	$('.block').find('h4').addClass('selected'); // НАЙТИ элемент внутри селектора
	$('.block').find('p.inner').addClass('selected'); // Находим элемент p с классом inner внутри селектора block


	// ПРЕДЫДУЩИЙ И СЛЕДУЮЩИЙ ЭЛЕМЕНТ
	$('h1').prev().addClass('selected'); // Выбираем тег,стоящий перед h1
	$('h1').next().addClass('selected'); // Выбираем тег,стоящий после h1

	$('p').prev('h3').addClass('selected'); // Выбираем все h3, стоящие перед тегом p

	// ВЫБОР СОСЕДНИХ ЭЛЕМЕНТОВ НА ОДНОМ УРОВНЕ
	$('#second-list-item').siblings().addClass('selected'); // Выбор всех соседних лементов
	$('#second-list-item').siblings('.green').addClass('selected'); // Выбираем только соседние элементы с классом .green
});

$(document).ready(function(){

	// =========================МЕТОДЫ ДЛЯ РАБОТЫ С КЛАССАМИ================================

	// .addClass() - Добавить класс
	$('.block').on('click', function(){
		$('#testBox').addClass('green');
	});
	// .removeClass() - Удалить класс
	$('.block').on('click', function(){
		$('#testBox').removeClass('green');
	});
	// .toggleClass() - Добавить / Убрать класс
	$('.block').on('click', function(){
		$('#testBox').toggleClass('green');
	});
	// .css() - Добавить свой CSS - Bad Practice !!!
	$('.block').on('click', function(){
		$('#testBox').css('border', '1px solid #000');
	});
});

$(document).ready(function(){

	// =============================СОБЫТИЯ В jQuery==================================

	/*
	.click()
	.dblclick()
	.mouseenter()
	.mouseleave()
	.focus()
	.change()
	.keyup()
	*/

	// Метод on работает со всеми элементами даже после добавления элементов после прогрузки страницы (БОЛЕЕ УНИВЕРСАЛЬНЫЙ)
	// Метод click работаем с теми элементами,которые были изначально прогружены

	// ОДИН клик
	$('#button').on('click', function(){
		$('header').toggleClass('active');
	});

	// ДВОЙНОЙ клик
	$('#button').on('dblclick', function(){
		$('header').toggleClass('active');
	});

	// При наведении курсора мыши
	$('#box').on('mouseenter', function(){
		$(this).toggleClass('active');
	});

	// Убираем курсор мыши
	$('#box').on('mouseleave', function(){
		$(this).toggleClass('active');
	});

	// ====================ФОРМА========================================

	// Когда элемент в фокусе
	$('input').on('focus', function(){
		$(this).toggleClass('focus')
	});
	// Убираем фокус при клике вне поля ввода
	$('input').on('blur', function(){
		$(this).removeClass('focus')
	});
	// CHANGE - когда выходим из элемента и его финальное состояние (пустое поле) было изменено
	$('input').on('change', function(){
		$('#textblock').text($(this).val()); // Возвращаем в текстовый блок введенное значение в поле ввода
	});
 	// KEYUP - передача значения при нажатии клавиши (когда отпускаем клавишу)
 	$('input').on('keyup', function(){
		$('#textblock').text($(this).val()); // Возвращаем в текстовый блок введенное значение в поле ввода
	});
 	// Обнуление текстового поля при нажатии на ESC (у каждой клавиши есть свой КОД)
 	$('input').on('keyup', function(event){
 		if (event.which == 27){
 			$('#textblock').text( '' ); // Делаем текстовое поле пустым ('');
 		}
 	});
 });

$(document).ready(function(){

	// ================РАБОТА С АТРИБУТАМИ НА ПРИМЕРЕ АТРИБУТА SRC У КАРТИНКИ======================

	// 1. Получаем значение атрибута src у картинки
	var srcValue = $('#imgHolder img').attr('src');

	// 2. Меняем значение атрибута src у картинки (вставляем другую картинку)
	$('#imgHolder img').on('click', function(){
		$(this).attr('src', 'img/blue.png')
	});

	// 3. ОТДЕЛЬНОЕ действие для каждого цвета
	$('#colorSelector .colorItem.colorBlue').on('click', function(){
		$('#imgHolder img').attr('src', 'img/blue.png');
	})
	$('#colorSelector .colorItem.colorWhite').on('click', function(){
		$('#imgHolder img').attr('src', 'img/white.png');
	})
	$('#colorSelector .colorItem.colorBlack').on('click', function(){
		$('#imgHolder img').attr('src', 'img/black.png');
	})
	// Но данное решение не универсально,т.к. МНОГО строчек кода

	// 4. ЕДИНОЕ действие для всех цветов

	// 4.1. Выбираем все кружки с цветом
	// 4.2. При клике на отдельный кружок запускаем функцию
	/* В РАЗМЕТКЕ К кружкам с цветом добавляем data атрибут 
	data-img-path="путь к картинке"
	в data атрибуте указываем путь к картинке,сответствующей кружку с цветом
	*/
	$('#colorSelector .colorItem').on('click', function(){
		var imgPath;
		// Выбираем конкретный элемент, по которому кликнули (т.е. тот кружок с цветом)
		imgPath = $(this).attr('data-img-path');
		// Выбираем картинку
		$('#imgHolder img').attr('src' imgPath);
	});


	// 5. ЕДИНОЕ действие для всех цветов с эффектом fadeOut() fadeIn()
	$('#colorSelector .colorItem').on('click', function(){
		var imgPath;
		imgPath = $(this).attr('data-img-path');
		$('#imgHolder img').fadeOut(1000, function(){
			$('#imgHolder img').attr('src' imgPath).fadeIn(1000);
		})
	});

});


$(document).ready(function(){

	// ================ АНИМАЦИЯ С jQuery======================

	// .animate() - Изменить CSS свойства с анимацией
	// .animate({CSS props}), duration in ms)

	$('#buttonWidth').on('click', function(){
		$('#box').animate({'width': '200px'}, 3000);
	});

	$('#buttonOpacity').on('click', function(){
		$('#box').animate({'opacity': '0'}, 2000);
	});

	// СКРЫТЬ (HIDE) / ПОКАЗАТЬ (SHOW)
	$('#buttonHide').on('click', function(){
		$('#box').hide(1000);
	});
	$('#buttonHide').on('click', function(){
		$('#box').show(2000);
	});

	// КОМБИНИРУЕМ HIDE / SHOW / DELAY
	$('#buttonHideAndShow').on('click', function(){
		$('#box').hide(1000).delay(1000).show(1000);
	});


	// СКРЫТЬ (fadeOut) / ПОКАЗАТЬ (fadeIn)
	$('#buttonFadeOut').on('click', function(){
		$('#box').fadeOut(1000);
	});
	$('#buttonFadeIn').on('click', function(){
		$('#box').fadeIn(1000);
	});

	$('#buttonFadeToggle').on('click', function(){
		$('#box').fadeToggle(1000);
	});


	// СКРЫТЬ (slideUp) / ПОКАЗАТЬ (slideDown)
	$('#buttonSlideUp').on('click', function(){
		$('#box').slideUp();
	});
	$('#buttonSlideDown').on('click', function(){
		$('#box').slideDown();
	});

	$('#buttonSlideToggle').on('click', function(){
		$('#box').slideToggle(1000);
	});
});



$(document).ready(function(){
	// ================ РАБОТА С ФОРМОЙ =========================

	// 1. Отлавливаем событие submit при клике на кнопку submit в форме
	$('#formSum').on('submit', function(event){
		event.preventDefault();
		/*2. Получить значение двух полей, 
		сложить и вывести сумму в отдельный тег
		*/ 
		const numberOne;
		const numberTwo;
		const summ;
		numberOne = $('#numberOne').val();
		numberTwo = $('#numberTwo').val();

		// Чтобы происходило сложение двух чисел, а не двух строк
		numberOne = parseInt(numberOne);
		numberTwo = parseInt(numberTwo);
		summ = numberOne + numberTwo;

		// Выбираем тег,в который будем выводить сумму
		$('#sumResult').text(summ);

		// Проблема с NaN. Делаем проверку - заполнено ли поле или нет
		if (isNaN(numberOne)){
			numberOne = 0;
		}
		if (isNaN(numberTwo)){
			numberTwo = 0;
		}
	});

});
