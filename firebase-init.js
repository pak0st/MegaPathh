/*
 * Firebase Initialization Module
 * Модуль инициализации Firebase
 *
 * This module initializes Firebase services including authentication and Firestore database
 * Этот модуль инициализирует сервисы Firebase, включая аутентификацию и базу данных Firestore
 */

// Import required Firebase modules
// Импорт необходимых модулей Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

// Firebase configuration object with project credentials
// Объект конфигурации Firebase с учетными данными проекта
const firebaseConfig = {
  apiKey: "AIzaSyAay9ozqNbMSyaoVCKVlgh66UmBjoRUGBY",
  authDomain: "megapath-2d9f2.firebaseapp.com",
  projectId: "megapath-2d9f2",
  storageBucket: "megapath-2d9f2.appspot.com",
  messagingSenderId: "639975739542",
  appId: "1:639975739542:web:5ed291036401d2ce5532b7"
};

// Initialize Firebase application
// Инициализация приложения Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// Инициализация аутентификации Firebase и получение ссылки на сервис
const auth = getAuth(app);

// Create Google authentication provider instance
// Создание экземпляра провайдера аутентификации Google
const provider = new GoogleAuthProvider();

// Initialize Firestore database and get a reference to the service
// Инициализация базы данных Firestore и получение ссылки на сервис
const db = getFirestore(app);

// Export initialized Firebase services for use in other modules
// Экспорт инициализированных сервисов Firebase для использования в других модулях
export { app, auth, provider, db };
