document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('#explicit__container');

    if (!container) return;

    const form = container.querySelector('#explicit__form');
    const result = container.querySelector('#explicit__result');

    form.addEventListener('ajax:success', function(evt) {
        const response = evt.detail[0];
        result.innerText = response.result || 'Ответ не получен';
    });
});
