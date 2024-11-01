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
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            console.error("Erreur de connexion :", error);
            let messageErreur;
            
            // Traduire les messages d'erreur Firebase
            switch (error.code) {
                case 'auth/invalid-login-credentials':
                    messageErreur = "Email ou mot de passe incorrect.";
                    break;
                case 'auth/user-not-found':
                    messageErreur = "Aucun compte ne correspond à cet email.";
                    break;
                case 'auth/wrong-password':
                    messageErreur = "Mot de passe incorrect.";
                    break;
                case 'auth/invalid-email':
                    messageErreur = "L'adresse email n'est pas valide.";
                    break;
                case 'auth/user-disabled':
                    messageErreur = "Ce compte a été désactivé.";
                    break;
                case 'auth/too-many-requests':
                    messageErreur = "Trop de tentatives de connexion. Veuillez réessayer plus tard.";
                    break;
                default:
                    messageErreur = "Une erreur s'est produite lors de la connexion. Veuillez réessayer.";
            }
            
            // Créer et afficher le message d'erreur animé
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = messageErreur;
            
            // Ajouter les styles pour l'animation
            errorDiv.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #e74c3c;
                color: white;
                padding: 15px 30px;
                border-radius: 5px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                z-index: 1000;
                animation: slideDown 0.5s ease-out, fadeOut 0.5s ease-out 2.5s forwards;
            `;

            // Ajouter les keyframes pour l'animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideDown {
                    from {
                        transform: translate(-50%, -100%);
                        opacity: 0;
                    }
                    to {
                        transform: translate(-50%, 0);
                        opacity: 1;
                    }
                }
                @keyframes fadeOut {
                    from {
                        opacity: 1;
                        transform: translate(-50%, 0);
                    }
                    to {
                        opacity: 0;
                        transform: translate(-50%, -20px);
                    }
                }
            `;
            document.head.appendChild(style);
            document.body.appendChild(errorDiv);

            // Supprimer le message après l'animation
            setTimeout(() => {
                errorDiv.remove();
                style.remove();
            }, 3000);

            // Ajouter l'effet de secousse sur les champs de formulaire
            const form = document.getElementById('login-form');
            form.classList.add('shake');
            setTimeout(() => form.classList.remove('shake'), 500);
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
    console.log("Tentative de réinitialisation du mot de passe pour:", email);
    return sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("Email de réinitialisation envoyé avec succès");
            // Retourner une promesse résolue
            return Promise.resolve();
        })
        .catch((error) => {
            console.error("Erreur lors de la réinitialisation :", error);
            // Retourner une promesse rejetée
            return Promise.reject(error);
        });
}
