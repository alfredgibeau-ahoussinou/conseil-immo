# conseil-immo

## Description

Conseil Immo est une application web qui permet de consulter les annonces immobilières et de les contacter.

## Fonctionnalités

- Authentification des utilisateurs (inscription, connexion, réinitialisation de mot de passe)
- Consultation des services immobiliers (achat, vente, investissement, financement, home staging)
- Section de conseils utiles pour les projets immobiliers
- Formulaire de contact avec envoi d'emails
- Interface responsive et moderne
- Tableau de bord utilisateur

## Technologies utilisées

- HTML5/CSS3
- JavaScript
- Firebase (Authentication)
- EmailJS pour l'envoi d'emails
- Font Awesome pour les icônes
- FullCalendar pour le calendrier

## Installation

1. Clonez ce dépôt
2. Ouvrez le fichier index.html dans votre navigateur

## Configuration

1. Firebase
- Créez un projet Firebase sur la console Firebase
- Copiez les informations de configuration Firebase dans le fichier js/connexion.js
- Activez l'authentification par email/mot de passe dans la console Firebase

2. EmailJS
- Créez un compte sur EmailJS
- Configurez un service email et un template
- Mettez à jour l'ID public dans les fichiers HTML concernés

## Structure du projet

conseil-immo/
├── index.html # Page d'accueil
├── connexion.html # Page de connexion
├── dashboard.html # Tableau de bord
├── reset-password.html # Page de réinitialisation de mot de passe
├── css/ # Styles CSS   
├── js/ # Scripts JavaScript
├── img/ # Images
├── video/ # Vidéos         

## Contribution

1. Fork le dépôt
2. Créez une branche (git checkout -b feature/nouvelle-fonctionnalité)
3. Committez vos modifications (git commit -m 'Ajout de la nouvelle fonctionnalité')
4. Pushez vers la branche (git push origin feature/nouvelle-fonctionnalité)
5. Ouvrez une Pull Request                  







