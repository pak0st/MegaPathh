// Получаем элементы формы
const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

// Добавляем обработчик отправки формы
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Предотвращаем перезагрузку страницы

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Проверяем, есть ли уже такой пользователь
  let users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some(user => user.username === username);

  if (userExists) {
    messageDiv.textContent = "Пользователь с таким именем уже существует!";
    messageDiv.style.color = "red";
  } else {
    // Добавляем нового пользователя
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    messageDiv.textContent = "Регистрация успешна!";
    messageDiv.style.color = "green";

    // Очищаем форму
    form.reset();
  }
});
