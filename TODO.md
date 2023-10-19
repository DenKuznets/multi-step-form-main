1) year = month * 10

2) sessionStorage https://developer.mozilla.org/ru/docs/Web/API/Window/sessionStorage

// Сохранение данных в sessionStorage
sessionStorage.setItem("key", "value");

// Получение данных из sessionStorage
var data = sessionStorage.getItem("key");

3) have each step be on its own route

4) have a redirect ‘manager’ on the layout step that redirects the user to the current step they need be, if they end up refreshing or coming back to the wizard.

5) assume your users will want to play with the URL