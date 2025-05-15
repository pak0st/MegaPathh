import { auth, provider, db } from "./firebase-init.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

document.getElementById("google-login").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userData = {
      name: user.displayName,
      email: user.email,
      picture: user.photoURL
    };

    localStorage.setItem("user", JSON.stringify(userData));

    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      joinedAt: new Date()
    });

    window.location.href = "index.html";
  } catch (err) {
    console.error("Erro no login:", err.message);
    alert("Erro ao fazer login com Google.");
  }
});

export function continueAsGuest() {
  localStorage.setItem("user", JSON.stringify({ guest: true }));
  window.location.href = "index.html";
}
