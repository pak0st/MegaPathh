/*
 * Authentication Handler Module
 * Модуль обработки аутентификации
 *
 * This module handles Google authentication and guest access functionality
 * Этот модуль обрабатывает аутентификацию через Google и функционал гостевого доступа
 */

// Import Firebase modules and configuration
// Импорт модулей и конфигурации Firebase
import { auth, provider, db } from "./firebase-init.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

// Handle Google login button click
// Обработка клика по кнопке входа через Google
document.getElementById("google-login").addEventListener("click", async () => {
  try {
    // Attempt to sign in with Google popup
    // Попытка входа через всплывающее окно Google
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Create user data object for local storage
    // Создание объекта данных пользователя для локального хранилища
    const userData = {
      name: user.displayName,
      email: user.email,
      picture: user.photoURL
    };

    // Save user data to local storage
    // Сохранение данных пользователя в локальное хранилище
    localStorage.setItem("user", JSON.stringify(userData));

    // Save user data to Firestore database
    // Сохранение данных пользователя в базу данных Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      joinedAt: new Date()
    });

    // Redirect to home page after successful login
    // Перенаправление на главную страницу после успешного входа
    window.location.href = "index.html";
  } catch (err) {
    // Handle login errors
    // Обработка ошибок входа
    console.error("Error in the login:", err.message);
    alert("Error in login with Google.");
  }
});

// Function to handle guest access
// Функция для обработки гостевого доступа
function continueAsGuest() {
  // Save guest status to local storage
  // Сохранение статуса гостя в локальное хранилище
  localStorage.setItem("user", JSON.stringify({ guest: true }));
  // Redirect to home page
  // Перенаправление на главную страницу
  window.location.href = "index.html";
}

// Add event listener for guest login button
document.getElementById("guest-login").addEventListener("click", continueAsGuest);
