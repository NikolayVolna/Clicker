const result = document.querySelector('[data-result]');
const button = document.querySelector('[data-clicker]');
let clicksCount = 0;

button.addEventListener('click', () => {
    clicksCount = clicksCount + 1;

    result.innerText = clicksCount;
});