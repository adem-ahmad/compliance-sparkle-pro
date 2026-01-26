
# Plan de modification complet du site Mériem Consultante Formation

## Resume des modifications demandées

Ce plan couvre 4 types de modifications :
1. **Restructuration des sections** (suppression, déplacement)
2. **Pop-up modale Calendly** (au lieu d'ouvrir un nouvel onglet)
3. **Animations au scroll** (fade-in sur les sections)
4. **Intégration Stripe** (paiements pour les packs à prix fixe)

---

## Partie 1 : Restructuration des sections

### 1.1 Sections à supprimer

| Section | Fichier | Action |
|---------|---------|--------|
| "Maîtrisez votre expertise" | `ProblemeSection.tsx` | Supprimer le composant |
| "Ma méthode" | `MethodeSection.tsx` | Supprimer le composant |
| "Formule horaire" dans Tarifs | `TarifsSection.tsx` | Supprimer la grille des formules |

### 1.2 Nouvel ordre des sections sur la page d'accueil

Ordre actuel :
```text
Hero → Probleme → Methode → Accompagnements → Tarifs → Apropos → Temoignages → FAQ → Contact
```

Nouvel ordre :
```text
Hero → Apropos (avec valeurs + bloc CTA) → Accompagnements → Tarifs → Temoignages → FAQ → Contact
```

### 1.3 Modifications du composant AproposSection

Ajouter le bloc "Prêt·e à structurer..." juste après la section "Les valeurs qui guident..." dans le même composant `AproposSection.tsx`.

Le bloc à ajouter contient :
- Titre : "Prêt·e à structurer votre activité de formation ?"
- Description de l'appel découverte
- Liste des 4 points abordés pendant l'appel
- Bouton CTA "Réserver mon appel découverte"
- Email de contact alternatif

---

## Partie 2 : Pop-up modale Calendly

### Fonctionnement
Au lieu d'ouvrir Calendly dans un nouvel onglet, une modale s'ouvrira directement sur le site avec un iframe Calendly intégré.

### Fichiers à créer/modifier

| Fichier | Action |
|---------|--------|
| `src/components/CalendlyModal.tsx` | **Créer** - Composant modale avec iframe Calendly |
| `src/components/Header.tsx` | Modifier pour utiliser la modale |
| `src/components/HeroSection.tsx` | Modifier pour utiliser la modale |
| `src/components/AccompagnementsSection.tsx` | Modifier pour utiliser la modale |
| `src/components/AproposSection.tsx` | Modifier pour utiliser la modale |
| `src/pages/Tarifs.tsx` | Modifier pour utiliser la modale |

### Spécifications de la modale
- Overlay sombre semi-transparent
- Animation d'entrée fluide (scale + fade)
- Bouton de fermeture visible
- Compatible mobile (responsive)
- Utilise Dialog de Radix UI (déjà installé)

---

## Partie 3 : Animations au scroll

### Approche technique
Utiliser l'API Intersection Observer pour détecter quand les sections entrent dans le viewport et déclencher des animations CSS.

### Fichiers à créer/modifier

| Fichier | Action |
|---------|--------|
| `src/hooks/useScrollAnimation.tsx` | **Créer** - Hook custom pour l'intersection observer |
| `src/index.css` | Ajouter les classes d'animation |
| Tous les composants de section | Ajouter les classes d'animation |

### Animations prévues
- `animate-fade-up` : Fade in + translation vers le haut (pour les sections)
- `animate-fade-in` : Simple fade in (pour les éléments individuels)
- Délai progressif pour les éléments en grille

---

## Partie 4 : Intégration Stripe

### Prérequis
- Activation de l'intégration Stripe Lovable (nécessite votre clé secrète Stripe)
- Création des produits dans Stripe

### Produits à créer

| Produit | Prix | Page |
|---------|------|------|
| Pack NDA | 380 EUR | /tarifs |
| Guide complet Qualiopi (ebook) | 47 EUR | /ebook |
| Répertoires Spécifiques (ebook) | 67 EUR | /ebook |
| Créer son organisme de formation (ebook) | 97 EUR | /ebook |

### Fichiers à modifier

| Fichier | Action |
|---------|--------|
| `src/pages/Tarifs.tsx` | Remplacer le bouton "Commander" par un checkout Stripe |
| `src/pages/Ebook.tsx` | Ajouter les boutons de paiement Stripe |
| `src/pages/PaymentSuccess.tsx` | **Créer** - Page de confirmation après paiement |
| `src/App.tsx` | Ajouter la route `/paiement-reussi` |

---

## Détails techniques

### Structure finale des fichiers

```text
src/
├── components/
│   ├── CalendlyModal.tsx (nouveau)
│   ├── Header.tsx (modifié)
│   ├── HeroSection.tsx (modifié)
│   ├── AccompagnementsSection.tsx (modifié)
│   ├── AproposSection.tsx (modifié - bloc CTA ajouté)
│   ├── TarifsSection.tsx (modifié - formules supprimées)
│   ├── TemoignagesSection.tsx
│   ├── FAQSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── hooks/
│   └── useScrollAnimation.tsx (nouveau)
├── pages/
│   ├── Index.tsx (modifié - ordre des sections)
│   ├── Tarifs.tsx (modifié - Stripe + formules)
│   ├── Ebook.tsx (modifié - Stripe)
│   └── PaymentSuccess.tsx (nouveau)
└── index.css (modifié - animations)
```

### Fichiers à supprimer
- `src/components/ProblemeSection.tsx`
- `src/components/MethodeSection.tsx`

---

## Étapes d'implémentation

1. **Suppression des sections** (ProblemeSection, MethodeSection)
2. **Réorganisation de Index.tsx** (nouvel ordre)
3. **Modification de AproposSection** (ajout du bloc CTA)
4. **Modification de TarifsSection** (suppression formules horaires)
5. **Création de CalendlyModal** (composant modale)
6. **Mise à jour de tous les boutons Calendly** (utiliser la modale)
7. **Création du hook useScrollAnimation**
8. **Ajout des animations CSS**
9. **Application des animations aux sections**
10. **Activation de Stripe** (nécessite interaction utilisateur)
11. **Création des produits Stripe**
12. **Intégration des boutons de paiement**
13. **Création de la page de succès**

---

## Prompt récapitulatif du site (à utiliser dans un autre projet Lovable)

Une fois les modifications effectuées, voici le prompt que vous pourrez utiliser :

```text
Créer un site web professionnel pour une consultante en formation (Mériem).

IDENTITÉ VISUELLE :
- Couleurs : Jaune/Or #FFCB00 (CTA), Crème #FFF8F0 (fond), Corail #F88379 (accent), Bleu marine #061B5C (textes/titres)
- Typographies : Baloo 2 Bold (titres), Poppins Medium (sous-titres), Open Sans Regular (corps)
- Style : Minimaliste moderne, beaucoup d'espace blanc, icônes épurées

STRUCTURE DU SITE :

Page Accueil (one-page) :
1. Hero : Titre accrocheur + CTA vers pop-up Calendly
2. À propos : Présentation de Mériem + 6 valeurs (Clarté, Rigueur, Fiabilité, Humanité, Engagement, Sérénité) + Bloc CTA appel découverte
3. Accompagnements : 4 cartes (NDA, Qualiopi, EDOF/CPF, Répertoires Spécifiques)
4. Tarifs : Récapitulatif des packs avec lien vers /tarifs
5. Témoignages : Carrousel de citations clients
6. FAQ : Accordéon avec questions fréquentes
7. Contact : Invitation finale + CTA Calendly

Page Tarifs (/tarifs) :
- 4 packs d'accompagnement détaillés (NDA, Qualiopi, EDOF/CPF, RS)
- 3 formules horaires (Essentielle, Avancée, Sur-mesure)
- Boutons Stripe pour prix fixes, Calendly pour devis

Page Ebook (/ebook) :
- Guide gratuit NDA (formulaire email)
- 3 ebooks gratuits
- 3 ebooks premium avec paiement Stripe

INTÉGRATIONS :
- Calendly : Pop-up modale (https://calendly.com/av-assistas/audit-de-ton-business)
- Stripe : Paiements sécurisés pour Pack NDA (380€) et ebooks (47€, 67€, 97€)

TECHNIQUE :
- React + Vite + Tailwind CSS + TypeScript
- Navigation sticky avec ancres
- Animations au scroll (fade-in)
- Mobile-first responsive
- Composants Shadcn/UI
```

---

## Note importante

Pour l'intégration Stripe, je devrai activer l'intégration Stripe de Lovable. Cela vous demandera de fournir votre clé secrète Stripe (disponible dans Dashboard Stripe > Développeurs > Clés API). Voulez-vous que je procède à l'activation ?
