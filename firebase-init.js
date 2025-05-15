import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";
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
