
# Plan : Configuration Supabase + Stripe Embedded Checkout

## Resume

Ce plan couvre deux étapes principales :
1. **Configuration de Supabase** - Activer Lovable Cloud pour utiliser les Edge Functions
2. **Implémentation de Stripe Embedded Checkout** - Formulaire de paiement dans une modale popup

---

## Pourquoi Supabase est nécessaire ?

La clé secrète Stripe (`STRIPE_SECRET_KEY`) ne doit **jamais** être exposée dans le code frontend. Supabase permet de :
- Stocker la clé secrète de manière sécurisée (elle est déjà configurée)
- Exécuter des Edge Functions côté serveur pour créer les sessions de paiement
- Communiquer avec Stripe sans exposer les credentials

---

## Étape 1 : Activer Lovable Cloud

Lovable Cloud fournit un backend Supabase managé sans avoir besoin de créer un compte externe.

**Action requise** : Je vais activer Lovable Cloud pour vous (cela nécessite votre approbation).

---

## Étape 2 : Modifier l'Edge Function pour Embedded Checkout

### Changements sur l'Edge Function `create-payment`

L'Edge Function actuelle retourne une URL de redirection. Pour l'Embedded Checkout, elle doit :
- Utiliser `ui_mode: "embedded"` au lieu du mode hosted
- Retourner `client_secret` au lieu de `url`
- Utiliser `return_url` au lieu de `success_url`

```text
Avant (mode hosted) :
- session = stripe.checkout.sessions.create({ mode: "payment", success_url, cancel_url })
- Retourne : { url: session.url }
- Frontend : window.open(url, '_blank')

Après (mode embedded) :
- session = stripe.checkout.sessions.create({ mode: "payment", ui_mode: "embedded", return_url })
- Retourne : { clientSecret: session.client_secret }
- Frontend : Affiche dans une modale
```

---

## Étape 3 : Créer le composant StripeCheckoutModal

### Nouvelles dépendances

```text
@stripe/react-stripe-js - Composants React officiels de Stripe
@stripe/stripe-js - Librairie Stripe.js
```

### Nouveau composant : `src/components/StripeCheckoutModal.tsx`

Ce composant :
- Utilise Radix UI Dialog (comme CalendlyModal)
- Intègre `EmbeddedCheckoutProvider` et `EmbeddedCheckout` de Stripe
- Récupère le `clientSecret` via l'Edge Function
- Affiche le formulaire de paiement directement dans la modale

### Structure du composant

```text
StripeCheckoutModal
├── Dialog (Radix UI)
│   └── EmbeddedCheckoutProvider (Stripe)
│       └── EmbeddedCheckout (formulaire de paiement)
```

---

## Étape 4 : Mettre à jour la page Tarifs

### Modifications sur `src/pages/Tarifs.tsx`

1. Remplacer l'import du client Supabase par une utilisation directe
2. Ajouter un state pour gérer la modale Stripe
3. Modifier `handleStripePayment` pour :
   - Ouvrir la modale au lieu de rediriger
   - Passer le `productKey` au composant modal
4. Intégrer `StripeCheckoutModal` dans le JSX

---

## Étape 5 : Configuration de la clé publique Stripe

La clé publique Stripe (`VITE_STRIPE_PUBLISHABLE_KEY`) est nécessaire côté frontend pour initialiser Stripe.js. Contrairement à la clé secrète, **la clé publique peut être stockée dans le code** car elle est conçue pour être visible.

Vous devrez me fournir votre clé publique Stripe (format : `pk_live_...` ou `pk_test_...`).

---

## Fichiers à modifier/créer

| Fichier | Action | Description |
|---------|--------|-------------|
| `supabase/functions/create-payment/index.ts` | Modifier | Ajouter `ui_mode: "embedded"`, retourner `clientSecret` |
| `src/components/StripeCheckoutModal.tsx` | Créer | Composant modale avec Embedded Checkout |
| `src/pages/Tarifs.tsx` | Modifier | Utiliser la modale au lieu de rediriger |
| `package.json` | Modifier | Ajouter les dépendances Stripe React |

---

## Flux utilisateur final

```text
1. L'utilisateur clique sur "Commander maintenant"
      ↓
2. Une modale s'ouvre avec un spinner
      ↓
3. L'Edge Function crée la session Stripe et retourne le clientSecret
      ↓
4. Le formulaire Stripe Embedded Checkout s'affiche dans la modale
      ↓
5. L'utilisateur entre ses informations de paiement
      ↓
6. Après paiement, Stripe redirige vers /paiement-reussi
```

---

## Prérequis avant implémentation

1. **Activer Lovable Cloud** (je vais le proposer)
2. **Fournir la clé publique Stripe** (format `pk_live_...` ou `pk_test_...`)

---

## Question

Avez-vous votre clé publique Stripe à portée de main ? Elle est visible dans Dashboard Stripe > Développeurs > Clés API (la clé "Publishable key").
