
# Modification des couleurs sur les pages Ebook et Tarifs

## Modifications a effectuer

### 1. Page Ebook - Boutons "Telecharger gratuitement"

**Fichier** : `src/pages/Ebook.tsx`

Changer la couleur de fond des boutons "Telecharger gratuitement" de la section "Ebooks gratuits" :

- Couleur actuelle : `bg-[#f2a202]` (orange)
- Nouvelle couleur : `bg-[#f79073]` (corail)

La couleur du texte reste `text-[#0d1b2a]` (bleu fonce).

### 2. Page Tarifs - Section "Paiement securise"

**Fichier** : `src/pages/Tarifs.tsx`

Changer la couleur de fond de la section "Paiement securise" :

- Couleur actuelle : `bg-navy`
- Nouvelle couleur : `bg-[#0d1b2a]` (bleu fonce)

---

## Resume technique

| Element | Fichier | Ligne | Avant | Apres |
|---------|---------|-------|-------|-------|
| Bouton "Telecharger gratuitement" | Ebook.tsx | 150 | `bg-[#f2a202]` | `bg-[#f79073]` |
| Section "Paiement securise" | Tarifs.tsx | 170 | `bg-navy` | `bg-[#0d1b2a]` |

## Resultat attendu

- Les 3 boutons "Telecharger gratuitement" de la section Ebooks gratuits auront un fond corail (#f79073)
- La section "Paiement securise" sur la page Tarifs aura un fond bleu fonce (#0d1b2a) pour une meilleure coherence visuelle avec les autres sections sombres du site
