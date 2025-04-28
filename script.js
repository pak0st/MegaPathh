// Get form and message elements
const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the user already exists
  let users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some(user => user.username === username);

  if (userExists) {
    messageDiv.textContent = "Username already exists!";
    messageDiv.style.color = "red";
  } else {
    // Add the new user
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to the language selection page
    window.location.href = 'language.html';
  }
});
