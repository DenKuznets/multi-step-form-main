1) year = month * 10

2) sessionStorage https://developer.mozilla.org/ru/docs/Web/API/Window/sessionStorage

// Сохранение данных в sessionStorage
sessionStorage.setItem("key", "value");

// Получение данных из sessionStorage
var data = sessionStorage.getItem("key");

4) have a redirect ‘manager’ on the layout step that redirects the user to the current step they need be, if they end up refreshing or coming back to the wizard.

5) assume your users will want to play with the URL

6)шаг 2 можно включить при пустом шаге 1, шаг 3 нельзя без 2 шаг, шаг 4 нельзя без 2 и 3. При нажатии confirm в шаге 4, проверить заполнен ли шаг 1, если нет вернуть на шаг один, подсветить пустые поля, если да - показать окно "Спасибо"

7) тесты на изменение стейт?