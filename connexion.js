// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, OAuthProvider, updateProfile, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo--IEnTiD8deRZp5zHIcOR96uyZgJh4s",
  authDomain: "immoconseil-30825.firebaseapp.com",
  projectId: "immoconseil-30825",
  storageBucket: "immoconseil-30825.appspot.com",
  messagingSenderId: "468039815768",
  appId: "1:468039815768:web:3d102a3f68f86068d8f02d",
  measurementId: "G-3N3XRK2SP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fonction pour l'inscription
export function signUp(username, email, password) {
  console.log("Tentative d'inscription avec:", username, email);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Inscription réussie
      const user = userCredential.user;
      // Mettre à jour le profil de l'utilisateur avec le nom d'utilisateur
      return updateProfile(user, {
        displayName: username
      }).then(() => {
        console.log("Utilisateur inscrit :", user);
        // Afficher l'animation de succès
        if (typeof window.showSuccessAnimation === 'function') {
          window.showSuccessAnimation();
        }
        // Rediriger vers la page de connexion avec un délai
        setTimeout(() => {
          window.location.href = "connexion.html";
        }, 3000);
      });
    })
    .catch((error) => {
      // Erreur lors de l'inscription
      console.error("Erreur d'inscription :", error);
      alert("Erreur d'inscription : " + error.message);
    });
}

// Fonction pour la connexion
export function signIn(email, password) {
  console.log("Tentative de connexion avec:", email);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Connexion réussie
      const user = userCredential.user;
      console.log("Utilisateur connecté :", user);
      // Rediriger tous les utilisateurs vers le dashboard
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      // Erreur lors de la connexion
      console.error("Erreur de connexion :", error);
      alert("Erreur de connexion : " + error.message);
    });
}

// Fonction pour la connexion avec Google
export function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Connexion Google réussie
      const user = result.user;
      console.log("Utilisateur connecté avec Google :", user);
      // Rediriger vers la page de tableau de bord
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      // Erreur lors de la connexion Google
      console.error("Erreur de connexion Google :", error);
      alert("Erreur de connexion Google : " + error.message);
    });
}

// Fonction pour la connexion avec Apple
export function signInWithApple() {
  const provider = new OAuthProvider('apple.com');
  signInWithPopup(auth, provider)
    .then((result) => {
      // Connexion Apple réussie
      const user = result.user;
      console.log("Utilisateur connecté avec Apple :", user);
      // Rediriger vers la page de tableau de bord
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      // Erreur lors de la connexion Apple
      console.error("Erreur de connexion Apple :", error);
      alert("Erreur de connexion Apple : " + error.message);
    });
}

// Fonction pour réinitialiser le mot de passe
export function resetPassword(email) {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Un email de réinitialisation a été envoyé à votre adresse email.");
            // Retour à la page de connexion
            document.getElementById('mot-de-passe-oublie').style.display = 'none';
            document.getElementById('connexion').style.display = 'block';
        })
        .catch((error) => {
            console.error("Erreur lors de la réinitialisation du mot de passe :", error);
            alert("Erreur : " + error.message);
        });
}
