// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
    btnDec: document.querySelector('button[data-action="decrement"]'),
    btnInc: document.querySelector('button[data-action="increment"]'),
    valueEl: document.getElementById('value'),
}

let counterValue = 0;


refs.btnDec.addEventListener('click', event => {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;

    console.log(refs.valueEl.textContent)
});

refs.btnInc.addEventListener('click', event => {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;

    console.log(refs.valueEl.textContent)
});




