// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
    inputEl: document.getElementById('font-size-control'),
    textEl: document.getElementById('text'),

}

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange() {
    refs.textEl.style.fontSize = refs.inputEl.value + 'px';
    console.log(refs.textEl.style.fontSize);
}






