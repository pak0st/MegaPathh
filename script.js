/*
 * Registration Form Handler
 * Обработчик формы регистрации
 *
 * This script handles user registration functionality using localStorage
 * Этот скрипт обрабатывает функционал регистрации пользователей с использованием localStorage
 */

// Get form and message elements from the DOM
// Получение элементов формы и сообщения из DOM
const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

// Handle form submission event
// Обработка события отправки формы
form.addEventListener('submit', (e) => {
  // Prevent default form submission behavior
  // Предотвращение стандартного поведения отправки формы
  e.preventDefault();

  // Get username and password values from form inputs
  // Получение значений имени пользователя и пароля из полей формы
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Retrieve existing users from LocalStorage or initialize empty array
  // Получение существующих пользователей из LocalStorage или инициализация пустого массива
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if user already exists with same credentials
  // Проверка существования пользователя с такими же учетными данными
  const userExists = users.some(user => user.username === username && user.password === password);

  if (!userExists) {
    // Add new user to the users array and save to localStorage
    // Добавление нового пользователя в массив и сохранение в localStorage
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Redirect user to language selection page
  // Перенаправление пользователя на страницу выбора языка
  window.location.href = 'language.html';
});

