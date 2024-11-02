/**
 * Configuration des réponses du chatbot
 * Contient toutes les réponses possibles du chatbot
 */
const chatbotResponses = {
    // Réponse par défaut
    default: "Je ne comprends pas votre demande. Pouvez-vous reformuler ?",
    
    // Messages de salutation
    greetings: ["Bonjour!", "Salut!", "Bienvenue chez ImmoConseil!"],
    
    // Réponses aux questions spécifiques
    questions: {
        // Questions sur les prix
        "prix": "Les prix varient selon la localisation...",
        
        // Questions sur l'estimation
        "estimation": "Pour une estimation précise...",
        
        // ... autres questions
    }
};

/**
 * Traite le message reçu et retourne une réponse appropriée
 * @param {string} message - Le message de l'utilisateur
 * @returns {string} La réponse du chatbot
 */
function processMessage(message) {
    // ... logique de traitement
} 