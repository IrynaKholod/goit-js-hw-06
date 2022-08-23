// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur (e){
    const inputEvent = e.currentTarget;
    const inputLength = Number(inputEvent.dataset.length);
    
    if (inputEvent.value.length === inputLength) {
        inputEvent.classList.remove("invalid");
        inputEvent.classList.add("valid");
    }
    else {
    inputEvent.classList.remove("valid");
    inputEvent.classList.add("invalid");
    }
}
