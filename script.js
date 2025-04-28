// Get form and message elements
const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Retrieve users from LocalStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the user already exists
  const userExists = users.some(user => user.username === username && user.password === password);

  if (!userExists) {
    // Add the new user if they don't exist
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Redirect to the language selection page
  window.location.href = 'language.html';
});

