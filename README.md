# shop-manager
US 1 — Interface et Structure Globale
En tant qu'utilisateur, je souhaite naviguer sur une interface moderne, colorée et en pleine largeur (sans barre latérale) afin d'avoir une navigation agréable et fluide.
- Configuration du thème, des couleurs et des polices personnalisées via `tailwind.config.js`.
- Mise en place du design "Mobile-First" grâce aux préfixes responsives (`md:`, `lg:`, `xl:`).
- Utilisation des classes utilitaires pour concevoir un Header vibrant avec une grande barre de recherche.

US 2 — Grille de Produits et Cartes (Tailwind Grid)
En tant qu'utilisateur, je souhaite voir les produits disposés dans une grille responsive avec des cartes attractives afin de consulter facilement les articles.
- Utilisation des classes `grid`, `grid-cols-1` à `lg:grid-cols-4` pour un affichage adaptatif du catalogue.
- Conception de cartes produits modernes avec les utilitaires d'ombre (`shadow-lg`) et de bordures arrondies (`rounded-2xl`).
- Intégration d'interactions fluides au survol des cartes à l'aide des classes d'état (`hover:-translate-y-1`, `transition-all`).

US 3 — Barre de Filtres Horizontale
En tant qu'utilisateur, je souhaite utiliser une barre de filtres horizontale placée au-dessus des produits afin de maximiser l'espace d'affichage.
- Stylisation des catégories sous forme de boutons pilules avec les classes `rounded-full`, `px-4`, et `py-2`.
- Alignement parfait des menus déroulants et des filtres via les utilitaires Flexbox (`flex`, `items-center`, `gap-4`).
- Création d'un bouton "Toggle Switch" pour le stock en utilisant l'état `peer-checked:` de Tailwind.

US 4 — Consulter le catalogue des produits (List)
En tant qu'utilisateur, je souhaite consulter la liste des produits disponibles dans la boutique afin de découvrir les articles proposés.
- Récupération de la liste des produits via l'API REST (Fetch API).
- Affichage dynamique sous forme de cartes (Nom, Description, Prix, Stock, Catégorie).
- Gestion des états : chargement (loading), succès, et erreurs de connexion.

US 5 — Rechercher des produits (Search)
En tant qu'utilisateur, je souhaite rechercher un produit par son nom ou sa description afin de retrouver rapidement un article.
- Barre de recherche en temps réel.
- Affichage d'un message clair si aucun produit ne correspond.

US 6 — Filtrer les produits (Filter)
En tant qu'utilisateur, je souhaite filtrer les produits selon différents critères afin de trouver les articles qui correspondent à mes besoins.
- Filtrer par catégorie, prix maximum, et disponibilité en stock.
- Combinaison de plusieurs filtres simultanément.
- Bouton pour réinitialiser tous les filtres.

🌟 Bonus (Implémentés)
- Indicateur de chargement (Skeleton/Spinner) pendant les requêtes.
- Affichage du nombre exact de produits trouvés.
- Sauvegarde des derniers critères de recherche (via `localStorage`).
- Protection contre les failles XSS lors de l'affichage des données.

 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique du document.
- **Tailwind CSS** : Framework CSS avec approche Utility-First pour un style rapide, responsive et sans fichiers CSS externes.
- **JavaScript (ES6+)** : 
  - `Fetch API` pour les requêtes HTTP.
  - `Async/Await` et `Promises` pour la gestion asynchrone et l'Event Loop.
  - Manipulation avancée et dynamique du DOM.

  
