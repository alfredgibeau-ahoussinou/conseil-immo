// Réponses du chatbot
const responses = {
    // Accueil et politesse
    'bonjour': 'Bonjour ! Je suis là pour vous guider dans tous vos projets immobiliers. Comment puis-je vous aider ?',
    'salut': 'Salut ! Je peux vous aider pour l\'achat, la vente, la location ou l\'investissement. Que souhaitez-vous savoir ?',
    'merci': 'Je vous en prie ! N\'hésitez pas si vous avez d\'autres questions sur l\'immobilier.',
    'au revoir': 'Au revoir et bonne continuation dans votre projet immobilier !',

    // Contact et informations pratiques
    'contact': 'On est joignables au 06 95 36 88 93 ou par email. Suivez-nous sur Instagram pour plus de news !',
    'horaires': 'Notre agence est ouverte du lundi au vendredi de 9h à 18h, et le samedi sur rendez-vous.',
    'rendez-vous': 'Pour un rendez-vous, vous pouvez soit utiliser notre calendrier en ligne, soit nous appeler au 06 95 36 88 93.',
    'adresse': 'Notre agence est située au centre-ville. L\'adresse exacte vous sera communiquée lors de la prise de rendez-vous.',

    // Types de biens spécifiques
    'appartement': 'Pour les appartements, nous vérifions :\n- Surface habitable\n- Étage et ascenseur\n- Charges de copropriété\n- État des parties communes\n- Isolation phonique\n- Exposition et luminosité\n- Cave ou parking inclus',
    
    'maison': 'Pour les maisons, nous analysons :\n- Surface habitable et terrain\n- État général et toiture\n- Isolation et chauffage\n- Conformité aux normes\n- Assainissement\n- Mitoyenneté\n- Extensions possibles',
    
    'studio': 'Pour les studios, nous étudions :\n- Agencement optimal\n- Rangements\n- Cuisine équipée\n- Charges mensuelles\n- Facilités du quartier\n- Potentiel locatif',

    // Questions sur le financement
    'pret': 'Pour votre prêt immobilier :\n- Simulation personnalisée\n- Comparatif des banques\n- Optimisation de l\'apport\n- Assurance emprunteur\n- Garanties bancaires\n- Frais de dossier',
    
    'apport': 'L\'apport personnel :\n- Minimum recommandé : 10%\n- Idéal : 20% ou plus\n- Sources possibles :\n  • Épargne personnelle\n  • Donation\n  • Prêt familial\n  • Plan épargne logement',
    
    'taux': 'Les taux actuels varient selon :\n- Durée du prêt\n- Apport personnel\n- Profil emprunteur\n- Type de taux (fixe/variable)\n- Assurance incluse\nContactez-nous pour une simulation personnalisée.',

    // Questions sur l'investissement
    'investissement': 'Stratégies d\'investissement :\n- Locatif classique\n- LMNP (Location meublée)\n- Pinel\n- Déficit foncier\n- SCPI\n- Viager',
    
    'rentabilité': 'Calcul de la rentabilité :\n- Loyer annuel brut\n- Charges propriétaire\n- Taxe foncière\n- Frais de gestion\n- Travaux prévisionnels\n- Vacance locative',
    
    'defiscalisation': 'Options de défiscalisation :\n- Pinel\n- Malraux\n- Monuments historiques\n- Denormandie\n- LMNP avec amortissement\n- Déficit foncier',

    // Questions juridiques
    'compromis': 'Le compromis de vente :\n- Conditions suspensives\n- Délai de rétractation\n- Dépôt de garantie\n- Clauses particulières\n- Signatures requises',
    
    'notaire': 'Le rôle du notaire :\n- Vérification juridique\n- Rédaction des actes\n- Calcul des frais\n- Conservation des documents\n- Conseil aux parties',

    // Questions techniques
    'diagnostic': 'Diagnostics obligatoires :\n- DPE énergie\n- Amiante\n- Plomb\n- Électricité\n- Gaz\n- Termites selon zones',
    
    'travaux': 'Pour les travaux :\n- Devis détaillés\n- Artisans certifiés\n- Autorisations nécessaires\n- Suivi de chantier\n- Garanties décennales',

    // Aspects pratiques
    'demenagement': 'Conseils déménagement :\n- Planification anticipée\n- Devis déménageurs\n- Changement d\'adresse\n- Assurance habitation\n- Relevés compteurs',
    
    'assurance': 'Assurances nécessaires :\n- Multirisque habitation\n- Protection juridique\n- Assurance emprunteur\n- Garantie dommages-ouvrage',

    // Questions spécifiques location
    'bail': 'Le contrat de location :\n- Durée légale\n- Clauses obligatoires\n- État des lieux\n- Dépôt de garantie\n- Charges locatives',
    
    'caution': 'Les garanties locatives :\n- Caution personne physique\n- Garantie Visale\n- GLI (assurance)\n- Caution bancaire\n- Dépôt de garantie',

    // Questions fiscales
    'impots': 'Aspects fiscaux :\n- Taxe foncière\n- Taxe d\'habitation\n- Revenus locatifs\n- Plus-values\n- Réductions d\'impôts',
    
    'taxes': 'Taxes immobilières :\n- Calcul taxe foncière\n- Exonérations possibles\n- Taxes locales\n- Ordures ménagères\n- Contribution économique',

    // Conseils achat/vente
    'achat': 'Conseils pour l\'achat :\n- Définir ses critères\n- Visiter plusieurs biens\n- Vérifier le quartier\n- Étudier les diagnostics\n- Négocier le prix',
    
    'vente': 'Conseils pour la vente :\n- Estimation précise\n- Préparation du bien\n- Photos professionnelles\n- Annonces ciblées\n- Négociation efficace',

    // Questions sur les types de biens spécifiques
    'loft': 'Pour les lofts, nous vérifions :\n- Volume et hauteur sous plafond\n- Luminosité naturelle\n- Possibilités d\'aménagement\n- Isolation phonique\n- Charges spécifiques\n- Conformité aux normes\n- Histoire du bâtiment',
    
    'duplex': 'Pour les duplex, nous analysons :\n- Communication entre les niveaux\n- Répartition des espaces\n- Isolation entre étages\n- Solidité de l\'escalier\n- Hauteur sous plafond\n- Aération des pièces\n- Optimisation thermique',
    
    'attique': 'Pour les appartements en attique :\n- Terrasse et vue\n- Exposition solaire\n- Isolation thermique\n- Étanchéité toiture\n- Accès privatif\n- Charges spécifiques\n- Autorisation d\'aménagement',

    // Questions sur le financement avancé
    'credit': 'Options de crédit immobilier :\n- Taux fixe ou variable\n- Durée optimale\n- Assurance emprunteur\n- Garanties bancaires\n- Frais de dossier\n- Conditions de remboursement anticipé\n- Modulation des mensualités',
    
    'courtier': 'Le courtier immobilier :\n- Comparaison des offres\n- Négociation des taux\n- Optimisation du dossier\n- Suivi personnalisé\n- Relation avec les banques\n- Conseils d\'experts\n- Gain de temps',
    
    'capacite emprunt': 'Calcul de la capacité d\'emprunt :\n- Revenus mensuels\n- Charges actuelles\n- Apport personnel\n- Taux d\'endettement\n- Reste à vivre\n- Projets futurs\n- Stabilité professionnelle',

    // Questions sur l'investissement avancé
    'rendement': 'Calcul du rendement locatif :\n- Loyer annuel brut\n- Charges propriétaire\n- Taxe foncière\n- Frais de gestion\n- Travaux prévisionnels\n- Vacance locative\n- Plus-value potentielle',
    
    'defiscalisation immobiliere': 'Stratégies de défiscalisation :\n- Pinel optimisé\n- LMNP amortissement\n- Déficit foncier\n- Monument historique\n- Malraux\n- Denormandie\n- Censi-Bouvard',
    
    'investissement locatif': 'Conseils investissement locatif :\n- Choix de l\'emplacement\n- Type de location\n- Gestion locative\n- Optimisation fiscale\n- Financement adapté\n- Rentabilité prévisionnelle\n- Stratégie patrimoniale',

    // Questions sur la rénovation avancée
    'renovation complete': 'Pour une rénovation complète :\n- Diagnostic initial\n- Budget détaillé\n- Planning travaux\n- Choix des artisans\n- Suivi de chantier\n- Conformité normes\n- Optimisation énergétique',
    
    'renovation cuisine': 'Rénovation de cuisine :\n- Plan d\'aménagement\n- Plomberie\n- Électricité\n- Revêtements\n- Équipements\n- Ventilation\n- Budget moyen',
    
    'renovation salle de bain': 'Rénovation salle de bain :\n- Étanchéité\n- Ventilation\n- Plomberie\n- Électricité aux normes\n- Revêtements adaptés\n- Sanitaires\n- Optimisation espace',

    // Questions sur la gestion locative avancée
    'gestion complete': 'Notre gestion locative complète :\n- Recherche locataires\n- Étude des dossiers\n- États des lieux\n- Quittancement\n- Suivi des travaux\n- Gestion administrative\n- Contentieux éventuel',
    
    'impayés': 'Gestion des impayés :\n- Relance amiable\n- Procédure contentieuse\n- Assurance loyers impayés\n- Protection juridique\n- Recouvrement\n- Expulsion si nécessaire\n- Prévention',
    
    'fiscalite location': 'Fiscalité locative :\n- Régime fiscal adapté\n- Charges déductibles\n- Amortissements possibles\n- Déclarations obligatoires\n- Optimisation fiscale\n- TVA si applicable\n- Plus-values',

    // Questions sur les aspects juridiques avancés
    'servitude': 'Les servitudes immobilières :\n- Types de servitudes\n- Droits et obligations\n- Impact sur la valeur\n- Modification possible\n- Extinction\n- Contentieux\n- Inscription cadastrale',
    
    'urbanisme': 'Règles d\'urbanisme :\n- PLU applicable\n- COS et emprise\n- Hauteur autorisée\n- Distances limites\n- Zones protégées\n- Permis nécessaires\n- Recours possibles',
    
    'mitoyennete': 'Règles de mitoyenneté :\n- Droits et devoirs\n- Entretien mur mitoyen\n- Surélévation\n- Charges partagées\n- Abandon mitoyenneté\n- Contentieux\n- Solutions amiables',

    // Message par défaut encore plus complet
    'default': 'Je peux vous renseigner sur de nombreux aspects :\n- Achat et vente de biens\n- Types de biens spécifiques\n- Financement et fiscalité\n- Investissement et rentabilité\n- Rénovation et travaux\n- Gestion locative\n- Aspects juridiques\n- Urbanisme et règlementation\nQuel sujet vous intéresse ?',

    // Questions sur les prêts spéciaux
    'ptz': 'Le Prêt à Taux Zéro (PTZ) :\n- Pour les primo-accédants\n- Conditions de ressources\n- Zones éligibles\n- Montant maximum selon zone\n- Durée de remboursement\n- Cumul possible avec d\'autres prêts',
    
    'pinel': 'La Loi Pinel :\n- Réduction d\'impôts\n- Zones éligibles (A, A bis, B1)\n- Engagement de location 6, 9 ou 12 ans\n- Plafonds de loyers\n- Conditions de ressources des locataires\n- Avantages fiscaux selon durée',

    // Questions sur les assurances
    'assurance pret': 'L\'assurance prêt immobilier :\n- Garanties obligatoires\n- Garanties facultatives\n- Délégation d\'assurance\n- Comparaison des offres\n- Questionnaire médical\n- Coût et impact sur le prêt',
    
    'assurance habitation': 'L\'assurance habitation :\n- Garanties essentielles\n- Options recommandées\n- Franchise\n- Valeur à neuf\n- Protection juridique\n- Assistance 24/7',

    // Questions sur la fiscalité
    'taxe fonciere': 'La taxe foncière :\n- Calcul de la base\n- Taux communaux\n- Exonérations possibles\n- Abattements\n- Échéances\n- Mensualisation possible',
    
    'plus value': 'L\'imposition des plus-values :\n- Calcul de la plus-value\n- Abattements pour durée\n- Cas d\'exonération\n- Résidence principale\n- Taux d\'imposition\n- Prélèvements sociaux',

    // Questions sur la copropriété
    'syndic': 'Le syndic de copropriété :\n- Rôle et missions\n- Choix du syndic\n- Honoraires\n- Assemblée générale\n- Compte séparé\n- Changement de syndic',
    
    'charges': 'Les charges de copropriété :\n- Charges courantes\n- Fonds de travaux\n- Provisions\n- Régularisation annuelle\n- Répartition\n- Budget prévisionnel',

    // Questions sur la construction
    'terrain': 'Pour l\'achat d\'un terrain :\n- Étude de sol\n- Viabilisation\n- PLU et règles\n- Bornage\n- Servitudes\n- Orientation',
    
    'maison neuve': 'Construction maison neuve :\n- Contrat CCMI\n- Garanties obligatoires\n- Étapes clés\n- Délais\n- Assurance dommages-ouvrage\n- Réception des travaux',

    // Questions sur la rénovation
    'aides renovation': 'Les aides à la rénovation :\n- MaPrimeRénov\n- CEE\n- Éco-PTZ\n- Aides locales\n- TVA réduite\n- Conditions d\'éligibilité',
    
    'artisans': 'Choix des artisans :\n- Certification RGE\n- Devis détaillés\n- Assurances\n- Références\n- Planning\n- Garanties',

    // Questions sur la location
    'meuble': 'Location meublée :\n- Avantages fiscaux\n- Inventaire obligatoire\n- Durée du bail\n- Mobilier requis\n- Charges récupérables\n- Régime LMNP',
    
    'colocation': 'La colocation :\n- Bail unique ou multiple\n- Clause de solidarité\n- Assurance habitation\n- Charges\n- Dépôt de garantie\n- Règles de vie',

    // Questions sur l'investissement
    'scpi': 'Investir en SCPI :\n- Fonctionnement\n- Types de SCPI\n- Rendement moyen\n- Fiscalité applicable\n- Frais de gestion\n- Liquidité',
    
    'parking investissement': 'Investir dans un parking :\n- Rentabilité moyenne\n- Zones porteuses\n- Gestion locative\n- Fiscalité\n- Charges\n- Revente',

    // Questions sur le viager
    'viager': 'Le viager :\n- Calcul du bouquet\n- Rente mensuelle\n- Viager occupé/libre\n- Fiscalité\n- Risques et garanties\n- Financement',
    
    'bouquet': 'Le bouquet en viager :\n- Montant conseillé\n- Négociation\n- Impact sur la rente\n- Financement possible\n- Fiscalité\n- Garanties',

    // Questions sur les diagnostics
    'termites': 'Diagnostic termites :\n- Zones concernées\n- Validité\n- Obligations\n- Traitement\n- Garanties\n- Coût moyen',
    
    'amiante': 'Diagnostic amiante :\n- Obligations légales\n- Parties concernées\n- Validité\n- Travaux nécessaires\n- Risques\n- Désamiantage',

    // Message par défaut encore plus détaillé
    'default': 'Je peux vous renseigner sur de nombreux aspects :\n- Achat et vente de biens\n- Location et gestion locative\n- Financement et fiscalité\n- Construction et rénovation\n- Diagnostics et travaux\n- Investissement et patrimoine\n- Assurances et garanties\n- Copropriété et charges\nQuel sujet vous intéresse ?',

    // Questions sur les quartiers et localisation
    'quartier recherché': 'Pour choisir un quartier :\n- Proximité des transports\n- Écoles et crèches\n- Commerces de proximité\n- Espaces verts\n- Sécurité du secteur\n- Projets urbains\n- Évolution des prix',
    
    'transport': 'Accessibilité transport :\n- Métro/RER/Bus\n- Temps de trajet\n- Fréquence des passages\n- Projets de transport\n- Parking disponible\n- Pistes cyclables\n- Zones piétonnes',

    // Questions sur les aspects énergétiques
    'dpe': 'Le DPE (Diagnostic Performance Énergétique) :\n- Classes énergétiques A à G\n- Consommation annuelle\n- Émissions de CO2\n- Impact sur la valeur\n- Obligations 2025\n- Travaux recommandés',
    
    'renovation energetique': 'Rénovation énergétique :\n- Isolation thermique\n- Changement des fenêtres\n- Système de chauffage\n- Ventilation\n- Aides disponibles\n- Artisans RGE',

    // Questions sur le financement détaillé
    'simulation pret': 'Simulation de prêt :\n- Montant empruntable\n- Durée optimale\n- Taux proposés\n- Assurance prêt\n- Garanties bancaires\n- Frais de dossier\n- Conditions particulières',
    
    'apport minimum': 'Apport minimum conseillé :\n- 10% du prix minimum\n- Frais de notaire\n- Frais de garantie\n- Frais de dossier\n- Frais d\'agence\n- Travaux éventuels',

    // Questions sur les aspects juridiques détaillés
    'promesse vente': 'La promesse de vente :\n- Conditions suspensives\n- Délai de rétractation\n- Indemnité d\'immobilisation\n- Clauses particulières\n- Obligations des parties\n- Délais légaux',
    
    'copropriete': 'La copropriété en détail :\n- Règlement de copropriété\n- Assemblées générales\n- Charges courantes\n- Fonds travaux\n- Décisions collectives\n- Droits et devoirs',

    // Questions sur les assurances
    'assurance pret detail': 'Assurance prêt en détail :\n- Décès/Invalidité\n- Incapacité de travail\n- Perte d\'emploi\n- Délégation possible\n- Comparaison des offres\n- Questionnaire médical',
    
    'assurance habitation detail': 'Assurance habitation détaillée :\n- Dégâts des eaux\n- Incendie\n- Vol/Vandalisme\n- Catastrophes naturelles\n- Responsabilité civile\n- Options recommandées',

    // Questions sur les travaux
    'renovation complete detail': 'Rénovation complète :\n- Évaluation initiale\n- Permis nécessaires\n- Choix des matériaux\n- Coordination travaux\n- Suivi de chantier\n- Réception finale',
    
    'renovation cuisine detail': 'Rénovation cuisine détaillée :\n- Plans et design\n- Électricité aux normes\n- Plomberie\n- Ventilation\n- Revêtements\n- Électroménager',

    // Questions sur la location détaillée
    'location meublee detail': 'Location meublée détaillée :\n- Liste mobilier obligatoire\n- Fiscalité LMNP\n- Durée du bail\n- État des lieux\n- Inventaire précis\n- Entretien mobilier',
    
    'gestion locative detail': 'Gestion locative complète :\n- Recherche locataires\n- Visites organisées\n- Dossiers locatifs\n- Quittancement\n- Suivi technique\n- Contentieux éventuel',

    // Questions sur l'investissement détaillé
    'investissement detail': 'Stratégies d\'investissement détaillées :\n- Études de marché\n- Rentabilité attendue\n- Optimisation fiscale\n- Financement adapté\n- Gestion future\n- Plus-value potentielle',
    
    'defiscalisation detail': 'Défiscalisation détaillée :\n- Dispositifs disponibles\n- Conditions d\'éligibilité\n- Engagements requis\n- Avantages fiscaux\n- Contraintes légales\n- Accompagnement juridique',

    // Message par défaut encore plus élaboré
    'default': 'Je peux vous renseigner sur de nombreux aspects :\n- Recherche et choix de bien\n- Financement et assurances\n- Aspects juridiques et fiscaux\n- Travaux et rénovation\n- Location et gestion\n- Investissement et stratégie\n- Quartiers et localisation\n- Diagnostics et normes\nQuel sujet vous intéresse ?',

    // Questions sur les aspects environnementaux
    'environnement': 'Aspects environnementaux :\n- Performance énergétique\n- Matériaux écologiques\n- Énergies renouvelables\n- Isolation thermique\n- Gestion des déchets\n- Impact carbone\n- Certification environnementale',
    
    'energie renouvelable': 'Solutions énergies renouvelables :\n- Panneaux solaires\n- Pompe à chaleur\n- Géothermie\n- Chauffe-eau solaire\n- Éolien domestique\n- Aides disponibles\n- Retour sur investissement',

    // Questions sur la smart home
    'maison connectée': 'Solutions domotiques :\n- Thermostat intelligent\n- Éclairage connecté\n- Sécurité intelligente\n- Gestion à distance\n- Économies d\'énergie\n- Installation\n- Compatibilité',
    
    'sécurité': 'Systèmes de sécurité :\n- Alarme connectée\n- Vidéosurveillance\n- Serrures intelligentes\n- Détecteurs\n- Télésurveillance\n- Assurance habitation\n- Maintenance',

    // Questions sur l'aménagement
    'aménagement intérieur': 'Conseils aménagement :\n- Optimisation espace\n- Rangements\n- Lumière naturelle\n- Acoustique\n- Matériaux\n- Tendances déco\n- Budget estimatif',
    
    'extérieur': 'Aménagement extérieur :\n- Jardin paysager\n- Terrasse\n- Piscine\n- Clôture\n- Éclairage\n- Permis nécessaires\n- Entretien',

    // Questions sur les prêts spéciaux
    'prêt action logement': 'Action Logement :\n- Conditions d\'éligibilité\n- Montant maximum\n- Taux préférentiel\n- Cumul possible\n- Documents requis\n- Délais\n- Garanties',
    
    'prêt fonctionnaire': 'Prêt fonction publique :\n- Avantages spécifiques\n- Organismes prêteurs\n- Conditions d\'octroi\n- Taux proposés\n- Durée possible\n- Garanties\n- Assurances',

    // Questions sur les aspects techniques
    'humidité': 'Problèmes d\'humidité :\n- Détection\n- Causes possibles\n- Solutions\n- Ventilation\n- Traitement\n- Prévention\n- Garanties travaux',
    
    'isolation': 'Solutions isolation :\n- Types d\'isolants\n- Performance thermique\n- Isolation phonique\n- Mise en œuvre\n- Coûts moyens\n- Aides disponibles\n- ROI',

    // Questions sur les aspects juridiques spécifiques
    'vices cachés': 'Vices cachés :\n- Définition légale\n- Recours possibles\n- Délais\n- Expertise\n- Procédure\n- Garanties\n- Jurisprudence',
    
    'permis construire': 'Permis de construire :\n- Cas nécessaires\n- Constitution dossier\n- Délais instruction\n- Affichage\n- Recours\n- Modifications\n- Validité',

    // Questions sur les professionnels
    'architecte': 'Services architecte :\n- Missions possibles\n- Honoraires\n- Contrat\n- Assurance\n- Garanties\n- Suivi chantier\n- Réception travaux',
    
    'geometre': 'Géomètre-expert :\n- Interventions\n- Bornage\n- Métrage\n- Tarifs\n- Documents fournis\n- Délais\n- Obligations',

    // Questions sur les aspects financiers avancés
    'sci familiale': 'SCI familiale :\n- Avantages\n- Constitution\n- Gestion\n- Fiscalité\n- Transmission\n- Dissolution\n- Comptabilité',
    
    'démembrement': 'Démembrement propriété :\n- Usufruit\n- Nue-propriété\n- Avantages fiscaux\n- Valorisation\n- Durée\n- Droits\n- Obligations',

    // Questions sur les situations spécifiques
    'succession': 'Gestion succession :\n- Droits héritiers\n- Fiscalité\n- Indivision\n- Partage\n- Vente\n- Délais\n- Frais',
    
    'divorce': 'Immobilier et divorce :\n- Partage bien\n- Occupation\n- Crédit en cours\n- Rachat parts\n- Fiscalité\n- Procédures\n- Solutions',

    // Message par défaut encore plus complet
    'default': 'Je peux vous renseigner sur de nombreux aspects :\n- Aspects techniques et juridiques\n- Financement et fiscalité\n- Environnement et énergie\n- Aménagement et travaux\n- Professionnels de l\'immobilier\n- Situations particulières\n- Smart home et sécurité\nQuel sujet vous intéresse ?',

    // Questions sur les types de prêts spécifiques
    'prêt relais': 'Le prêt relais :\n- Financement temporaire\n- Durée maximale\n- Taux spécifiques\n- Conditions d\'octroi\n- Garanties nécessaires\n- Remboursement anticipé\n- Risques à considérer',
    
    'prêt in fine': 'Le prêt in fine :\n- Fonctionnement spécifique\n- Avantages fiscaux\n- Profils concernés\n- Calcul des intérêts\n- Garanties exigées\n- Stratégie patrimoniale\n- Comparaison solutions',

    // Questions sur les garanties bancaires
    'caution bancaire': 'La caution bancaire :\n- Organismes cautionneurs\n- Coût et durée\n- Conditions d\'obtention\n- Avantages/Inconvénients\n- Comparaison hypothèque\n- Procédure mainlevée\n- Cas de refus',
    
    'hypotheque': 'L\'hypothèque :\n- Inscription hypothécaire\n- Frais associés\n- Durée de validité\n- Mainlevée\n- Protection créancier\n- Impact revente\n- Radiation',

    // Questions sur les aspects techniques spécifiques
    'chaudiere': 'Installation chaudière :\n- Types disponibles\n- Performance énergétique\n- Coût installation\n- Entretien annuel\n- Aides disponibles\n- Normes actuelles\n- ROI estimé',
    
    'climatisation': 'Installation climatisation :\n- Systèmes existants\n- Dimensionnement\n- Réglementation\n- Coût installation\n- Consommation énergétique\n- Entretien nécessaire\n- Impact DPE',

    // Questions sur l'aménagement spécifique
    'veranda': 'Construction véranda :\n- Permis nécessaires\n- Matériaux possibles\n- Isolation thermique\n- Budget moyen\n- Impact fiscal\n- Plus-value\n- Réglementation',
    
    'extension': 'Projet extension :\n- Faisabilité technique\n- Autorisations requises\n- Coût au m²\n- Délais travaux\n- Professionnels nécessaires\n- Impact valeur\n- Assurances',

    // Questions sur les normes et réglementations
    'accessibilite': 'Normes accessibilité :\n- Réglementation PMR\n- Travaux nécessaires\n- Dérogations possibles\n- Coûts adaptation\n- Aides financières\n- Certification\n- Contrôles',
    
    'securite incendie': 'Sécurité incendie :\n- Normes en vigueur\n- Équipements requis\n- Vérifications périodiques\n- Responsabilités\n- Assurance spécifique\n- Sanctions\n- Mise aux normes',

    // Questions sur les aspects environnementaux spécifiques
    'panneaux solaires': 'Installation panneaux solaires :\n- Types disponibles\n- Rendement attendu\n- Coût installation\n- Aides financières\n- Raccordement réseau\n- Entretien\n- Amortissement',
    
    'recuperation eau': 'Récupération eau pluie :\n- Systèmes existants\n- Volume nécessaire\n- Usages autorisés\n- Réglementation\n- Économies possibles\n- Installation\n- Entretien',

    // Questions sur les aspects juridiques spécifiques
    'bail commercial': 'Bail commercial :\n- Durée légale\n- Droits locataire\n- Obligations bailleur\n- Révision loyer\n- Cession bail\n- Résiliation\n- Renouvellement',
    
    'bail professionnel': 'Bail professionnel :\n- Spécificités\n- Durée minimale\n- Conditions résiliation\n- Charges locatives\n- Garanties demandées\n- Travaux autorisés\n- Sous-location',

    // Questions sur les situations particulières
    'saisie immobiliere': 'Procédure saisie :\n- Étapes légales\n- Droits débiteur\n- Recours possibles\n- Délais procédure\n- Vente forcée\n- Conséquences\n- Solutions amiables',
    
    'expropriation': 'Procédure expropriation :\n- Motifs légaux\n- Indemnisation\n- Recours possibles\n- Expertise valeur\n- Négociation\n- Relogement\n- Délais légaux',

    // Questions sur les professions immobilières
    'agent immobilier': 'Métier agent immobilier :\n- Formation requise\n- Carte professionnelle\n- Responsabilités\n- Honoraires légaux\n- Déontologie\n- Assurances\n- Obligations',
    
    'diagnostiqueur': 'Métier diagnostiqueur :\n- Certifications\n- Domaines intervention\n- Responsabilité\n- Tarifs moyens\n- Assurance pro\n- Formation continue\n- Obligations',

    // Message par défaut encore plus élaboré
    'default': 'Je peux vous renseigner sur de nombreux aspects :\n- Questions techniques et juridiques\n- Financement et garanties\n- Normes et réglementations\n- Travaux et aménagements\n- Professions immobilières\n- Situations spéciales\n- Aspects environnementaux\nQuel sujet vous intéresse ?'
};

// Fonction pour trouver la meilleure réponse
function findBestResponse(userMessage) {
    const message = userMessage.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    for (const [key, value] of Object.entries(responses)) {
        const score = calculateMatchScore(message, key);
        if (score > highestScore) {
            highestScore = score;
            bestMatch = value;
        }
    }

    return highestScore > 0.3 ? bestMatch : responses.default;
}

// Fonction pour calculer le score de correspondance
function calculateMatchScore(message, key) {
    const words = message.split(' ');
    const keyWords = key.split(' ');
    let matches = 0;

    for (const word of words) {
        if (keyWords.includes(word) || key.includes(word)) {
            matches++;
        }
    }

    return matches / Math.max(words.length, keyWords.length);
}

// Fonction pour initialiser le chatbot
function initChatbot() {
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotBox = document.querySelector('.chatbot-box');
    const closeChat = document.querySelector('.close-chat');
    const sendMessage = document.querySelector('.send-message');
    const messageInput = document.querySelector('.chatbot-input input');
    const messagesContainer = document.querySelector('.chatbot-messages');

    // Gestionnaire pour le bouton d'ouverture/fermeture
    chatbotToggle.addEventListener('click', () => {
        chatbotBox.style.display = chatbotBox.style.display === 'none' ? 'flex' : 'none';
    });

    // Gestionnaire pour le bouton de fermeture
    closeChat.addEventListener('click', () => {
        chatbotBox.style.display = 'none';
    });

    // Gestionnaire pour l'envoi de message
    function handleMessage() {
        const message = messageInput.value.trim();
        if (message) {
            // Ajouter le message de l'utilisateur
            addMessage(message, true);
            messageInput.value = '';

            // Obtenir et ajouter la réponse du chatbot
            setTimeout(() => {
                const response = findBestResponse(message);
                addMessage(response);
            }, 500);
        }
    }

    // Gestionnaire pour le bouton d'envoi
    sendMessage.addEventListener('click', handleMessage);

    // Gestionnaire pour la touche Entrée
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleMessage();
        }
    });

    // Fonction pour ajouter un message
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        messageDiv.textContent = message;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialiser le chatbot quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initChatbot); 