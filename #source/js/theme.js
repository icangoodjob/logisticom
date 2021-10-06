/*
В CSS лучше закрывать все цвета в отдельные переменные (:root),чтобы потом легче было глобально поменять стили
:root[data-theme="dark"] {переопределяем цвета в переменных}
*/

function theme(){
	const toggleTheme = document.querySelector('.toggle-theme');
	let el = document.documentElement;
	toggleTheme.addEventListener('click' function(){
		if (el.hasAttribute('data-theme')) {
			el.removeAttribute('data-theme');
			// Удаляем localStorage при отсутствии атрибута data-theme
			localStorage.removeItem('theme')
		} else {
			el.setAttribute('data-theme', 'dark');
			// Запоминаем значение темы при обновлении страницы
			localStorage.setItem('theme', 'dark')
		}
	})
	/* Нужно при загрузке страницы проверить наш LocalStorage
	Есть ли там какое-то значение (value)
	И если значение есть - сразу включить тему
	И нашему элементу (el или html) добавляем атрибут data-theme со значение dark
	*/
	if(localStorage.getItem('theme') !== null){
		el.setAttribute('data-theme', 'dark');
	}
}