

# Plan : Changer le fond du Hero en #FBE7C6

## Situation actuelle
La section Hero utilise actuellement :
- Un fond avec dégradé bleu marine : `bg-gradient-to-br from-navy via-navy to-navy/90`
- Textes en blanc (`text-white`) pour contraster avec le fond sombre
- Éléments décoratifs avec opacités basées sur le fond sombre

## Modifications à effectuer

### 1. Fichier `src/components/HeroSection.tsx`

**Changement du fond (ligne 15)**
```
Avant : bg-gradient-to-br from-navy via-navy to-navy/90
Après : bg-[#FBE7C6]
```

**Adaptation des couleurs de texte**
Le texte blanc ne sera plus lisible sur fond pêche. Les textes seront modifiés :

| Élément | Avant | Après |
|---------|-------|-------|
| Titre principal (h1) | `text-white` | `text-foreground` |
| Sous-titre (p) | `text-white/80` | `text-foreground/80` |
| Indicateurs de confiance | `text-white/70` | `text-foreground/70` |
| Bouton secondaire | `border-white/30 text-white hover:bg-white/10` | `border-foreground/30 text-foreground hover:bg-foreground/10` |

**Éléments décoratifs (lignes 18-19)**
Les cercles flous resteront identiques car ils utilisent déjà les couleurs primary et accent qui contrastent bien avec le fond pêche.

## Résultat attendu
- Fond de la Hero section en couleur pêche `#FBE7C6` (identique au reste du site)
- Textes en couleur taupe/foreground pour assurer la lisibilité
- Harmonie visuelle avec le header et le reste du site

