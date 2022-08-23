// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
// при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const refs = {
body: document.querySelector('body'),
btnEl: document.querySelector('.change-color'),
spanEl: document.querySelector('.color'),
}

refs.btnEl.addEventListener('click', changeColor);

function changeColor(){
  refs.spanEl.textContent = getRandomHexColor();
  refs.body.setAttribute('style', 'background-color: ' + refs.spanEl.textContent
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
