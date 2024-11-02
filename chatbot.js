document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotBox = document.querySelector('.chatbot-box');
    const closeChat = document.querySelector('.close-chat');
    const sendMessage = document.querySelector('.send-message');
    const messageInput = document.querySelector('.chatbot-input input');
    const messagesContainer = document.querySelector('.chatbot-messages');

    // Réponses prédéfinies du chatbot
    const botResponses = {
        // Questions générales
        'bonjour': 'Bonjour ! Je suis l\'assistant virtuel d\'ImmoConseil. Comment puis-je vous aider aujourd\'hui ?',
        'hello': 'Bonjour ! Je suis l\'assistant virtuel d\'ImmoConseil. Comment puis-je vous aider aujourd\'hui ?',
        'salut': 'Bonjour ! Je suis l\'assistant virtuel d\'ImmoConseil. Comment puis-je vous aider aujourd\'hui ?',
        
        // Questions sur les prix et estimations
        'prix': 'Les prix varient selon plusieurs critères : localisation, surface, état du bien, etc. Souhaitez-vous une estimation personnalisée ? Je peux vous mettre en relation avec l\'un de nos experts.',
        'estimation': 'Pour obtenir une estimation précise de votre bien, nous prenons en compte de nombreux facteurs : \n- La localisation\n- La surface\n- L\'état général\n- Les prestations\n- Le marché local\nSouhaitez-vous prendre rendez-vous avec l\'un de nos experts pour une estimation détaillée ?',
        'cout': 'Le coût d\'un bien immobilier dépend de nombreux facteurs. Pouvez-vous me donner plus de détails sur le type de bien qui vous intéresse ?',
        
        // Questions sur les services
        'services': 'Nous proposons plusieurs services :\n- Estimation de biens\n- Accompagnement à l\'achat\n- Conseil en investissement\n- Gestion locative\n- Home staging\nQuel service vous intéresse particulièrement ?',
        'achat': 'Pour l\'achat d\'un bien, nous vous accompagnons à chaque étape :\n1. Définition de vos critères\n2. Recherche personnalisée\n3. Visites ciblées\n4. Négociation\n5. Accompagnement jusqu\'à la signature\nSouhaitez-vous commencer votre recherche ?',
        'vente': 'Pour vendre votre bien, nous vous proposons :\n- Estimation gratuite\n- Photos professionnelles\n- Diffusion sur les meilleurs supports\n- Visites qualifiées\n- Négociation optimale\nQuand souhaitez-vous commencer le processus ?',
        
        // Questions sur le financement
        'pret': 'Pour le financement, nous travaillons avec plusieurs partenaires bancaires. Nous pouvons vous aider à :\n- Évaluer votre capacité d\'emprunt\n- Comparer les offres\n- Optimiser votre dossier\nSouhaitez-vous être mis en relation avec notre courtier partenaire ?',
        'financement': 'Le financement est une étape cruciale. Nous pouvons vous aider à :\n1. Calculer votre budget\n2. Obtenir les meilleures conditions\n3. Monter votre dossier\nVoulez-vous en savoir plus ?',
        'taux': 'Les taux d\'intérêt varient selon les banques et votre profil. Actuellement, ils se situent généralement entre 2.5% et 4%. Souhaitez-vous une simulation personnalisée ?',
        
        // Questions sur les démarches
        'demarches': 'Les principales démarches pour un projet immobilier sont :\n1. Définition du projet\n2. Obtention du financement\n3. Recherche du bien\n4. Visites\n5. Offre d\'achat\n6. Signature du compromis\n7. Acte définitif\nÀ quelle étape êtes-vous ?',
        'documents': 'Les documents nécessaires varient selon votre situation. En général, il faut :\n- Pièce d\'identité\n- Justificatifs de revenus\n- Avis d\'imposition\n- Relevés bancaires\nJe peux vous fournir une liste détaillée selon votre cas.',
        
        // Questions sur les rendez-vous
        'rendez-vous': 'Pour prendre rendez-vous, vous avez plusieurs options :\n1. Par téléphone au 01 23 45 67 89\n2. Via notre formulaire de contact\n3. En agence\nQuelle option préférez-vous ?',
        'contact': 'Vous pouvez nous contacter :\n- Par téléphone : 01 23 45 67 89\n- Par email : contact@immoconseil.fr\n- En agence : 123 rue de l\'Immobilier\n- Via notre formulaire en ligne\nComment préférez-vous nous joindre ?',
        
        // Questions sur l'investissement
        'investissement': 'Pour l\'investissement immobilier, nous proposons :\n- Analyse de rentabilité\n- Conseil fiscal\n- Sélection des meilleurs emplacements\n- Accompagnement personnalisé\nQuel type d\'investissement envisagez-vous ?',
        'rentabilite': 'La rentabilité dépend de plusieurs facteurs :\n- L\'emplacement\n- Le type de bien\n- Le mode de location\n- La fiscalité\nSouhaitez-vous une étude personnalisée ?',
        
        // Formules de politesse
        'merci': 'Je vous en prie ! N\'hésitez pas si vous avez d\'autres questions. Je suis là pour vous aider !',
        'au revoir': 'Au revoir ! Merci d\'avoir utilisé notre service. N\'hésitez pas à revenir si vous avez d\'autres questions !',
        'bye': 'Au revoir ! Passez une excellente journée !',
        
        // Questions sur l'agence
        'agence': 'ImmoConseil est une agence immobilière spécialisée dans :\n- L\'achat/vente\n- La location\n- L\'investissement\n- Le conseil patrimonial\nNous sommes présents sur le marché depuis plus de 10 ans.',
        'experience': 'Notre équipe compte plus de 15 experts immobiliers avec une expérience moyenne de 8 ans dans le secteur. Chaque conseiller est spécialisé dans son domaine d\'expertise.',
        
        // Questions sur la localisation
        'zone': 'Nous intervenons principalement dans les secteurs suivants :\n- Paris et Île-de-France\n- Grandes métropoles régionales\n- Zones touristiques\nQuelle zone vous intéresse ?',
        'secteur': 'Nous pouvons vous conseiller sur les meilleurs secteurs selon vos critères :\n- Budget\n- Style de vie\n- Proximité des services\n- Potentiel d\'évolution\nQuels sont vos critères prioritaires ?',

        // Questions sur les types de biens
        'appartement': 'Pour les appartements, nous considérons plusieurs critères :\n- Étage et exposition\n- Présence d\'ascenseur\n- Charges de copropriété\n- État des parties communes\n- Isolation phonique et thermique\nQuel type d\'appartement recherchez-vous ?',
        'maison': 'Pour les maisons, voici les points importants :\n- Surface habitable et terrain\n- État général et travaux\n- Orientation et luminosité\n- Performances énergétiques\n- Environnement et voisinage\nAvez-vous des critères spécifiques ?',
        'studio': 'Nos studios sont idéaux pour :\n- Investissement locatif\n- Premier achat\n- Pied-à-terre\nIls sont sélectionnés pour leur :\n- Agencement optimal\n- Proximité des transports\n- Potentiel locatif\nQuel est votre projet ?',

        // Questions sur les quartiers
        'quartier': 'Pour choisir un quartier, nous analysons :\n- Transports en commun\n- Commerces et services\n- Écoles et crèches\n- Espaces verts\n- Développements futurs\nQuels sont vos critères prioritaires ?',
        'transport': 'Nous pouvons vous renseigner sur :\n- Les lignes de métro/bus\n- Les temps de trajet\n- Les projets de transport\n- L\'accessibilité\nQuel secteur vous intéresse ?',

        // Questions juridiques
        'notaire': 'Le notaire intervient pour :\n- La vérification juridique\n- Le compromis de vente\n- L\'acte authentique\nSes frais représentent environ :\n- 7-8% pour l\'ancien\n- 2-3% pour le neuf\nSouhaitez-vous plus de détails ?',
        'compromis': 'Le compromis de vente comprend :\n- Conditions suspensives\n- Délai de rétractation\n- Montant du dépôt de garantie\n- Date limite de signature\nVoulez-vous en savoir plus sur une de ces étapes ?',

        // Questions sur les diagnostics
        'diagnostic': 'Les diagnostics obligatoires sont :\n- DPE (performance énergétique)\n- Amiante\n- Plomb\n- Électricité/Gaz\n- Termites\n- Risques naturels\nSouhaitez-vous des précisions ?',
        'dpe': 'Le DPE (Diagnostic de Performance Énergétique) :\n- Note de A à G\n- Obligatoire pour vente/location\n- Valable 10 ans\n- Impact sur la valeur du bien\nVoulez-vous connaître les implications ?',

        // Questions sur la fiscalité
        'impots': 'La fiscalité immobilière concerne :\n- Taxe foncière\n- Taxe d\'habitation\n- Plus-values\n- Revenus locatifs\nSur quel aspect souhaitez-vous des précisions ?',
        'defiscalisation': 'Les options de défiscalisation incluent :\n- Loi Pinel\n- LMNP\n- Malraux\n- Déficit foncier\nQuel dispositif vous intéresse ?',

        // Questions sur la location
        'location': 'Nos services de location comprennent :\n- Recherche de locataires\n- Gestion locative\n- État des lieux\n- Assurance loyers impayés\nQuel aspect vous intéresse ?',
        'bail': 'Pour le bail, nous gérons :\n- Rédaction du contrat\n- État des lieux\n- Dépôt de garantie\n- Révision du loyer\nBesoin de précisions ?',

        // Questions sur les travaux
        'travaux': 'Pour les travaux, nous pouvons :\n- Évaluer le budget\n- Recommander des artisans\n- Suivre le chantier\n- Conseiller sur les aides\nQuel type de travaux envisagez-vous ?',
        'renovation': 'La rénovation peut concerner :\n- Mise aux normes\n- Amélioration énergétique\n- Agencement\n- Décoration\nAvez-vous un projet spécifique ?',

        // Questions sur le marché
        'marche': 'Le marché immobilier actuel est caractérisé par :\n- Évolution des prix\n- Taux d\'intérêt\n- Nouvelles tendances\n- Opportunités d\'investissement\nQuel aspect vous intéresse ?',
        'tendances': 'Les tendances actuelles sont :\n- Importance de l\'extérieur\n- Performance énergétique\n- Télétravail\n- Mobilité douce\nSouhaitez-vous plus d\'informations ?',

        // Questions sur les garanties
        'garantie': 'Nos garanties incluent :\n- Protection juridique\n- Assurance habitation\n- Garantie des vices cachés\n- Garantie décennale\nQuelle garantie vous intéresse ?',
        'assurance': 'Les assurances importantes sont :\n- Multirisque habitation\n- Protection juridique\n- Assurance emprunteur\n- Garantie loyers impayés\nBesoin de conseils ?',

        // Questions sur les biens spécifiques
        'loft': 'Les lofts offrent des avantages uniques :\n- Grands volumes\n- Espaces décloisonnés\n- Caractère industriel\n- Potentiel d\'aménagement\nRecherchez-vous ce type de bien ?',
        'duplex': 'Les duplex présentent plusieurs atouts :\n- Espace de vie sur 2 niveaux\n- Séparation jour/nuit\n- Sensation de maison\n- Souvent avec terrasse\nEst-ce le type de bien que vous recherchez ?',
        'penthouse': 'Nos penthouses offrent :\n- Vue panoramique\n- Terrasses privatives\n- Prestations haut de gamme\n- Derniers étages\nSouhaitez-vous plus d\'informations ?',

        // Questions sur l'environnement
        'ecologie': 'Nos critères écologiques incluent :\n- Performance énergétique\n- Matériaux durables\n- Énergies renouvelables\n- Isolation optimale\nQuel aspect vous intéresse ?',
        'energie': 'Les solutions énergétiques modernes :\n- Panneaux solaires\n- Pompe à chaleur\n- Isolation renforcée\n- Ventilation double flux\nVoulez-vous des détails sur ces équipements ?',

        // Questions sur le neuf
        'neuf': 'L\'immobilier neuf présente plusieurs avantages :\n- Garanties constructeur\n- Normes récentes\n- Frais de notaire réduits\n- Personnalisation possible\nEst-ce que cela correspond à votre recherche ?',
        'vefa': 'L\'achat sur plan (VEFA) comprend :\n- Paiement échelonné\n- Garanties spécifiques\n- Personnalisation\n- Prix bloqué\nSouhaitez-vous plus d\'informations ?',

        // Questions sur les aides
        'aides': 'Les aides disponibles incluent :\n- Prêt à taux zéro\n- Action Logement\n- Aides locales\n- MaPrimeRénov\nQuelle aide vous intéresse ?',
        'ptz': 'Le Prêt à Taux Zéro permet :\n- Financement sans intérêts\n- Conditions de ressources\n- Zones éligibles\n- Montant selon situation\nVoulez-vous vérifier votre éligibilité ?',

        // Questions sur la copropriété
        'copropriete': 'La gestion de copropriété inclut :\n- Charges communes\n- Règlement de copropriété\n- Assemblées générales\n- Travaux collectifs\nQuel aspect vous préoccupe ?',
        'syndic': 'Le rôle du syndic comprend :\n- Gestion quotidienne\n- Comptabilité\n- Travaux\n- Assemblées\nBesoin de précisions ?',

        // Questions sur les prêts spéciaux
        'pret-relais': 'Le prêt relais permet :\n- Achat avant revente\n- Durée limitée\n- Conditions spécifiques\n- Taux particuliers\nEst-ce votre situation ?',
        'pret-travaux': 'Les prêts travaux concernent :\n- Rénovation\n- Agrandissement\n- Mise aux normes\n- Économies d\'énergie\nQuel projet avez-vous ?',

        // Questions sur la construction
        'construction': 'Pour la construction neuve :\n- Recherche terrain\n- Permis de construire\n- Choix constructeur\n- Suivi chantier\nQuelle étape vous intéresse ?',
        'terrain': 'Pour le choix du terrain :\n- Étude de sol\n- Viabilisation\n- PLU et règles\n- Orientation\nBesoin de conseils ?',

        // Questions sur la location saisonnière
        'airbnb': 'La location courte durée implique :\n- Réglementation locale\n- Rentabilité variable\n- Gestion intensive\n- Équipement complet\nEst-ce votre projet ?',
        'saisonniere': 'La location saisonnière nécessite :\n- Emplacement stratégique\n- Équipement complet\n- Gestion des réservations\n- Marketing\nSouhaitez-vous plus d\'informations ?',

        // Questions sur les biens atypiques
        'atypique': 'Les biens atypiques incluent :\n- Lofts industriels\n- Maisons d\'architecte\n- Biens historiques\n- Constructions originales\nQuel type vous intéresse ?',
        'prestige': 'L\'immobilier de prestige offre :\n- Emplacements premium\n- Prestations luxueuses\n- Services exclusifs\n- Confidentialité\nQuel aspect vous attire ?',

        // Questions sur les études et analyses
        'etude': 'Nos études de marché incluent :\n- Prix au m²\n- Tendances locales\n- Projets urbains\n- Perspectives\nQuelle analyse souhaitez-vous ?',
        'prediction': 'Nos prévisions se basent sur :\n- Données historiques\n- Projets locaux\n- Tendances économiques\n- Évolutions démographiques\nQuel horizon vous intéresse ?',

        // Questions sur les aspects techniques
        'isolation': 'L\'isolation d\'un bien est cruciale pour :\n- Économies d\'énergie\n- Confort thermique\n- Isolation phonique\n- Valeur du bien\nSouhaitez-vous une analyse technique ?',
        'chauffage': 'Les systèmes de chauffage disponibles :\n- Gaz condensation\n- Pompe à chaleur\n- Électrique nouvelle génération\n- Géothermie\nQuel système vous intéresse ?',
        'climatisation': 'Les solutions de climatisation incluent :\n- Réversible\n- Multi-split\n- Gainable\n- Naturelle\nBesoin de conseils spécifiques ?',

        // Questions sur la sécurité
        'securite': 'La sécurité d\'un bien comprend :\n- Système d\'alarme\n- Vidéosurveillance\n- Porte blindée\n- Digicode\nQuels aspects vous préoccupent ?',
        'alarme': 'Nos solutions de sécurité proposent :\n- Détection intrusion\n- Télésurveillance\n- Contrôle à distance\n- Application mobile\nQuel système recherchez-vous ?',

        // Questions sur l'aménagement
        'amenagement': 'L\'aménagement optimal inclut :\n- Optimisation des espaces\n- Rangements intégrés\n- Luminosité naturelle\n- Circulation fluide\nQuel aspect vous intéresse ?',
        'domotique': 'La domotique permet de gérer :\n- Éclairage\n- Chauffage\n- Volets\n- Sécurité\nQuelles fonctionnalités souhaitez-vous ?',

        // Questions sur les extérieurs
        'jardin': 'Pour l\'aménagement du jardin :\n- Orientation\n- Entretien\n- Arrosage automatique\n- Terrasse\nQuel aspect vous intéresse ?',
        'piscine': 'Pour les piscines, nous considérons :\n- Type de construction\n- Traitement de l\'eau\n- Sécurité\n- Entretien\nQuel type de piscine envisagez-vous ?',

        // Questions sur les normes
        'normes': 'Les normes actuelles concernent :\n- Sécurité électrique\n- Performance énergétique\n- Accessibilité\n- Environnement\nQuel aspect vous préoccupe ?',
        'reglementation': 'La réglementation couvre :\n- Urbanisme\n- Construction\n- Location\n- Copropriété\nQuel domaine vous intéresse ?',

        // Questions sur les services annexes
        'demenagement': 'Pour votre déménagement :\n- Entreprises partenaires\n- Devis gratuits\n- Assurance\n- Stockage\nBesoin d\'aide pour l\'organisation ?',
        'decoration': 'Nos services de décoration incluent :\n- Conseil couleurs\n- Agencement\n- Home staging\n- Shopping list\nQuel service vous intéresse ?',

        // Questions sur les aspects juridiques spécifiques
        'succession': 'En cas de succession immobilière :\n- Évaluation du bien\n- Aspects fiscaux\n- Partage\n- Vente\nQuel aspect vous concerne ?',
        'donation': 'Pour une donation immobilière :\n- Optimisation fiscale\n- Droits de mutation\n- Réserve d\'usufruit\n- Protection familiale\nBesoin de conseils ?',

        // Questions sur les projets spéciaux
        'viager': 'Le viager propose :\n- Rente viagère\n- Bouquet\n- Occupation\n- Réversion\nSouhaitez-vous plus d\'informations ?',
        'colocation': 'La colocation implique :\n- Bail spécifique\n- Garanties\n- Charges partagées\n- Assurance\nQuel aspect vous intéresse ?',

        // Questions sur les services professionnels
        'architecte': 'Nos architectes partenaires pour :\n- Plans\n- Permis de construire\n- Suivi de chantier\n- Décoration\nQuel service recherchez-vous ?',
        'geometre': 'Le géomètre intervient pour :\n- Bornage\n- Métrage\n- Division\n- Copropriété\nQuel type d\'intervention nécessitez-vous ?',

        // Questions sur les aspects environnementaux
        'biodiversite': 'Nos critères environnementaux :\n- Espaces verts\n- Matériaux écologiques\n- Gestion de l\'eau\n- Biodiversité\nQuel aspect vous intéresse ?',
        'recyclage': 'Gestion des déchets et recyclage :\n- Tri sélectif\n- Compostage\n- Récupération d\'eau\n- Matériaux recyclés\nQuelles solutions recherchez-vous ?',

        // Questions sur les investissements spécifiques
        'scpi': 'Les SCPI (Sociétés Civiles de Placement Immobilier) offrent :\n- Investissement indirect\n- Mutualisation des risques\n- Revenus réguliers\n- Gestion déléguée\nSouhaitez-vous une analyse détaillée ?',
        'parking': 'L\'investissement en parking présente :\n- Gestion simple\n- Rendement stable\n- Peu d\'entretien\n- Forte demande urbaine\nVoulez-vous connaître les opportunités ?',
        'commerce': 'L\'immobilier commercial comprend :\n- Boutiques\n- Bureaux\n- Locaux d\'activité\n- Entrepôts\nQuel type de local recherchez-vous ?',

        // Questions sur les prêts spécifiques
        'sci': 'La Société Civile Immobilière permet :\n- Gestion patrimoniale\n- Optimisation fiscale\n- Transmission facilitée\n- Protection du patrimoine\nQuel aspect vous intéresse ?',
        'credit-bail': 'Le crédit-bail immobilier offre :\n- Location avec option d\'achat\n- Avantages fiscaux\n- Préservation de trésorerie\n- Flexibilité\nEst-ce adapté à votre projet ?',

        // Questions sur l'international
        'etranger': 'L\'investissement à l\'étranger nécessite :\n- Étude du marché local\n- Aspects juridiques spécifiques\n- Fiscalité internationale\n- Gestion à distance\nQuel pays vous intéresse ?',
        'expatriation': 'Pour les expatriés, nous gérons :\n- Recherche à distance\n- Visites virtuelles\n- Gestion locative\n- Aspects fiscaux\nQuel service vous intéresse ?',

        // Questions sur les nouvelles technologies
        'visite-virtuelle': 'Nos visites virtuelles permettent :\n- Visite à 360°\n- Pré-sélection efficace\n- Gain de temps\n- Accès 24/7\nSouhaitez-vous une démonstration ?',
        'smart-home': 'La maison connectée inclut :\n- Contrôle à distance\n- Économies d\'énergie\n- Sécurité renforcée\n- Confort optimisé\nQuelles fonctionnalités recherchez-vous ?',

        // Questions sur les situations particulières
        'divorce': 'En cas de divorce, nous gérons :\n- Estimation du bien commun\n- Rachat de soulte\n- Vente partagée\n- Relogement\nQuelle est votre situation ?',
        'succession-complexe': 'Pour les successions complexes :\n- Expertise juridique\n- Évaluation précise\n- Médiation familiale\n- Solutions sur mesure\nQuel est votre cas ?',

        // Questions sur les services premium
        'conciergerie': 'Notre service de conciergerie propose :\n- Gestion complète\n- Services sur mesure\n- Maintenance 24/7\n- Reporting régulier\nQuels services souhaitez-vous ?',
        'luxe': 'Notre département luxe offre :\n- Biens d\'exception\n- Discrétion totale\n- Service personnalisé\n- Accès off-market\nQuel type de bien recherchez-vous ?',

        // Questions sur les aspects techniques avancés
        'domotique-avancee': 'La domotique avancée comprend :\n- IA prédictive\n- Gestion énergétique\n- Sécurité biométrique\n- Automatisation complète\nQuelles fonctionnalités vous intéressent ?',
        'renovation-ecologique': 'La rénovation écologique inclut :\n- Matériaux biosourcés\n- Énergies renouvelables\n- Récupération d\'eau\n- Isolation naturelle\nQuel aspect vous intéresse ?',

        // Questions sur les services spécialisés
        'chasseur-immobilier': 'Notre service de chasseur immobilier propose :\n- Recherche personnalisée\n- Négociation experte\n- Accès privilégié\n- Gain de temps\nSouhaitez-vous en savoir plus ?',
        'home-staging-virtuel': 'Le home staging virtuel permet :\n- Visualisation du potentiel\n- Coût optimisé\n- Modifications illimitées\n- Rendu réaliste\nVoulez-vous voir des exemples ?'
    };

    // Ouvrir le chatbot
    chatbotToggle.addEventListener('click', function() {
        chatbotBox.style.display = 'flex';
        setTimeout(() => {
            chatbotBox.classList.add('visible');
        }, 10);
        chatbotToggle.style.display = 'none';
    });

    // Fermer le chatbot
    closeChat.addEventListener('click', function() {
        chatbotBox.classList.remove('visible');
        setTimeout(() => {
            chatbotBox.style.display = 'none';
        }, 300);
        chatbotToggle.style.display = 'flex';
    });

    // Envoyer un message
    function sendMessageHandler() {
        const message = messageInput.value.trim();
        if (message) {
            // Ajouter le message de l'utilisateur
            addMessage('user', message);
            
            // Répondre
            setTimeout(() => {
                respondToMessage(message);
            }, 500);

            // Vider l'input
            messageInput.value = '';
        }
    }

    // Gérer l'envoi par clic sur le bouton
    sendMessage.addEventListener('click', sendMessageHandler);

    // Gérer l'envoi par touche Entrée
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessageHandler();
        }
    });

    // Ajouter un message dans la conversation
    function addMessage(type, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type, 'message-animation');
        
        // Animation de typing pour les messages du bot
        if (type === 'bot') {
            messageDiv.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
            messagesContainer.appendChild(messageDiv);
            
            setTimeout(() => {
                messageDiv.innerHTML = text;
                messageDiv.classList.add('show');
            }, 1000);
        } else {
            messageDiv.textContent = text;
            messageDiv.classList.add('show');
            messagesContainer.appendChild(messageDiv);
        }
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Trouver la meilleure réponse
    function findBestResponse(message) {
        message = message.toLowerCase();
        
        // Chercher une correspondance exacte
        for (let key in botResponses) {
            if (message.includes(key)) {
                return botResponses[key];
            }
        }

        // Réponse par défaut
        return "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ou contacter directement notre équipe ?";
    }

    // Répondre au message
    function respondToMessage(message) {
        const response = findBestResponse(message);
        addMessage('bot', response);
    }

    // Ajouter les styles CSS
    const styles = `
        .chatbot-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
            font-family: 'Arial', sans-serif;
        }

        .chatbot-toggle {
            background-color: var(--primary-color, #4CAF50);
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
            position: fixed;
            bottom: 30px;
            right: 30px;
            animation: pulse 2s infinite;
        }

        .chatbot-toggle:hover {
            animation: none;
            transform: scale(1.1);
        }

        .chatbot-toggle i {
            font-size: 24px;
        }

        .chatbot-box {
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 350px;
            height: 500px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(20px);
            animation: slideIn 0.3s ease;
        }

        .chatbot-box.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .chatbot-header {
            background: var(--primary-color, #4CAF50);
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            position: relative;
            overflow: hidden;
        }

        .chatbot-header h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
        }

        .close-chat {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            line-height: 1;
            transition: all 0.3s ease;
        }

        .close-chat:hover {
            transform: rotate(90deg);
            opacity: 0.8;
        }

        .chatbot-messages {
            flex-grow: 1;
            padding: 20px;
            overflow-y: auto;
            background: #f8f9fa;
            scroll-behavior: smooth;
        }

        .message {
            margin-bottom: 15px;
            padding: 12px 16px;
            border-radius: 15px;
            max-width: 85%;
            font-size: 14px;
            line-height: 1.4;
            position: relative;
            overflow: hidden;
        }

        .message::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                45deg,
                transparent,
                rgba(255,255,255,0.1),
                transparent
            );
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .message:hover::after {
            opacity: 1;
        }

        .message.bot {
            background: white;
            margin-right: auto;
            border: 1px solid #e0e0e0;
            color: #333;
        }

        .message.user {
            background: var(--primary-color, #4CAF50);
            color: white;
            margin-left: auto;
        }

        .chatbot-input {
            padding: 15px 20px;
            background: white;
            border-top: 1px solid #eee;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .chatbot-input input {
            flex-grow: 1;
            padding: 10px 15px;
            border: 1px solid #e0e0e0;
            border-radius: 25px;
            outline: none;
            font-size: 14px;
            transition: all 0.3s ease;
        }

        .chatbot-input input:focus {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .send-message {
            background: var(--primary-color, #4CAF50);
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            padding: 0;
        }

        .send-message:hover {
            transform: scale(1.1) rotate(10deg);
        }

        .send-message:active {
            transform: scale(0.95);
        }

        .send-message i {
            font-size: 16px;
        }

        /* Scrollbar personnalisée */
        .chatbot-messages::-webkit-scrollbar {
            width: 6px;
        }

        .chatbot-messages::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        .chatbot-messages::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 3px;
        }

        .chatbot-messages::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

        @media (max-width: 480px) {
            .chatbot-box {
                width: calc(100% - 40px);
                height: calc(100% - 120px);
                bottom: 90px;
                right: 20px;
                left: 20px;
            }

            .chatbot-toggle {
                bottom: 20px;
                right: 20px;
            }
        }

        /* Animation d'apparition du chatbot */
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Animation du bouton toggle */
        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            50% {
                transform: scale(1.05);
                box-shadow: 0 6px 16px rgba(0,0,0,0.2);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
        }

        .chatbot-toggle {
            animation: pulse 2s infinite;
        }

        .chatbot-toggle:hover {
            animation: none;
            transform: scale(1.1);
        }

        /* Animation des messages */
        .message-animation {
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s ease;
        }

        .message-animation.show {
            opacity: 1;
            transform: translateY(0);
        }

        /* Indicateur de typing */
        .typing-indicator {
            display: flex;
            gap: 4px;
            padding: 4px 8px;
            justify-content: center;
        }

        .typing-indicator span {
            width: 8px;
            height: 8px;
            background: var(--primary-color, #4CAF50);
            border-radius: 50%;
            animation: typing 1s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(1) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(2) { animation-delay: 0.4s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.6s; }

        @keyframes typing {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        /* Animation du bouton d'envoi */
        .send-message {
            transition: all 0.3s ease;
        }

        .send-message:hover {
            transform: scale(1.1) rotate(10deg);
        }

        .send-message:active {
            transform: scale(0.95);
        }

        /* Animation de l'input */
        .chatbot-input input {
            transition: all 0.3s ease;
        }

        .chatbot-input input:focus {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* Animation du header */
        .chatbot-header {
            position: relative;
            overflow: hidden;
        }

        .chatbot-header::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255,255,255,0.2),
                transparent
            );
            animation: shine 8s infinite;
        }

        @keyframes shine {
            0% { left: -100%; }
            20% { left: 100%; }
            100% { left: 100%; }
        }

        /* Animation de fermeture */
        .close-chat {
            transition: all 0.3s ease;
        }

        .close-chat:hover {
            transform: rotate(90deg);
            opacity: 0.8;
        }

        /* Animation des bulles de message */
        .message {
            position: relative;
            overflow: hidden;
        }

        .message::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                45deg,
                transparent,
                rgba(255,255,255,0.1),
                transparent
            );
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .message:hover::after {
            opacity: 1;
        }

        /* Animation de scroll smooth */
        .chatbot-messages {
            scroll-behavior: smooth;
        }

        /* Animation du placeholder */
        @keyframes placeholderWave {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        .chatbot-input input::placeholder {
            position: relative;
            overflow: hidden;
        }

        .chatbot-input input:focus::placeholder {
            animation: placeholderWave 2s infinite;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
});