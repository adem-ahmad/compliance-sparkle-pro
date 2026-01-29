
# Plan de Modification de la Palette de Couleurs

## Situation Actuelle
La palette actuelle utilise :
- **Navy (Bleu marine)** `#061B5C` - couleur principale du texte (foreground)
- **Cream (Blanc casse)** `#FFF8F0` - couleur de fond (background)
- **Blanc pur** `#FFFFFF` - pour les cartes et popovers

## Nouvelle Palette Proposee

### Remplacement du Bleu Marine
Le bleu marine sera remplace par un **beige chaud / taupe** qui reste lisible tout en etant plus doux :
- **Taupe fonce** `#4A4238` (HSL: 35 10% 25%)

### Remplacement du Blanc
Le blanc pur des cartes sera remplace par un **beige dore clair** pour creer plus de chaleur :
- **Beige dore** `#F5EBE0` (HSL: 30 45% 92%)

### Palette Complete Mise a Jour

| Element | Ancienne Couleur | Nouvelle Couleur |
|---------|------------------|------------------|
| Texte principal (foreground) | Navy `#061B5C` | Taupe `#4A4238` |
| Cartes/Popovers | Blanc `#FFFFFF` | Beige dore `#F5EBE0` |
| Fond (background) | Cream `#FFF8F0` | Reste identique |
| Boutons (primary) | Gold `#FFCB00` | Reste identique |
| Accent | Coral `#F88379` | Reste identique |

## Fichier a Modifier

### `src/index.css`

Modifications dans la section `:root` :

```css
:root {
  /* Background reste identique */
  --background: 30 100% 98%; /* Creme #FFF8F0 */
  
  /* Foreground : Navy -> Taupe */
  --foreground: 35 10% 25%; /* Taupe #4A4238 */

  /* Cards et Popovers : Blanc -> Beige dore */
  --card: 30 45% 92%; /* Beige dore #F5EBE0 */
  --card-foreground: 35 10% 25%;
  --popover: 30 45% 92%;
  --popover-foreground: 35 10% 25%;

  /* Primary foreground */
  --primary-foreground: 35 10% 25%;
  
  /* Secondary foreground */
  --secondary-foreground: 35 10% 25%;
  
  /* Muted */
  --muted-foreground: 35 10% 40%;
  
  /* Accent foreground */
  --accent-foreground: 35 10% 25%;
  
  /* Borders - ton neutre */
  --border: 35 15% 80%;
  --input: 35 15% 80%;

  /* Custom colors */
  --taupe: 35 10% 25%; /* Nouvelle couleur remplacant navy */
  --beige: 30 45% 92%; /* Nouvelle couleur remplacant blanc */
}
```

### `tailwind.config.ts`

Ajout des nouvelles couleurs custom :
```typescript
colors: {
  // ... existing colors ...
  taupe: "hsl(var(--taupe))",
  beige: "hsl(var(--beige))",
}
```

## Resultat Visuel Attendu
- Textes en taupe fonce sur fond creme = contraste doux mais lisible
- Cartes en beige dore = harmonie chaude avec le fond creme
- Les boutons jaune/or et accents corail restent identiques pour le dynamisme
- Ambiance generale plus chaleureuse et moins contrastee

## Details Techniques
- Une seule modification dans `src/index.css` (variables CSS)
- Une petite modification dans `tailwind.config.ts` (couleurs custom)
- Aucun changement necessaire dans les composants car ils utilisent les variables CSS
