const form = document.querySelector('.regForm');            // перенос пользователя на главную страницу после отправки регистрационной формы

form.addEventListener('submit', function (e) 
{
  e.preventDefault();
  window.location.href = 'index.html';
});

