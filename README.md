# Portfolio Personnel

Ce portfolio est construit avec Next.js 14, TypeScript, et Tailwind CSS. Il présente mes projets, compétences, et articles de blog dans une interface moderne et responsive.

## 🚀 Fonctionnalités

- ⚡️ Next.js 14 avec App Router
- 🎨 Tailwind CSS pour le styling
- 🌙 Mode sombre/clair
- 📱 Design responsive
- 📝 Blog avec MDX
- 🎯 Section projets
- 🛠 Page outils
- 📊 Analytics intégrés
- ⚡️ Performance optimisée

## 🛠 Stack Technique

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** ContentLayer
- **Animations:** Framer Motion
- **UI Components:** Radix UI
- **Thème:** next-themes
- **Validation:** Zod
- **Date:** date-fns
- **Icons:** Lucide React

## 📦 Installation

1. Clonez le repository :
```bash
git clone [URL_DU_REPO]
cd my-portfolio
```

2. Installez les dépendances :
```bash
pnpm install
```

3. Créez un fichier `.env` à la racine du projet :
```env
# Ajoutez vos variables d'environnement ici
```

4. Lancez le serveur de développement :
```bash
pnpm dev
```

## 📁 Structure du Projet

```
my-portfolio/
├── app/                # Pages et routes de l'application
│   ├── a-propos/      # Page À propos
│   ├── blog/          # Section blog
│   ├── projets/       # Section projets
│   └── outil/         # Section outils
├── content/           # Contenu MDX (blog, projets)
├── public/           # Assets statiques
└── src/             # Code source
    ├── components/  # Composants réutilisables
    ├── lib/        # Utilitaires et configurations
    └── types/      # Types TypeScript
```

## 🔧 Scripts Disponibles

- `pnpm dev` - Lance le serveur de développement
- `pnpm build` - Crée une version de production
- `pnpm start` - Lance la version de production

## 🎨 Personnalisation

### Thème
Le thème peut être personnalisé dans `tailwind.config.ts`. Les variables de thème principales sont :

```typescript
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        // Vos couleurs personnalisées
      }
    }
  }
}
```

### Contenu
- Les articles de blog sont stockés dans `content/blog/`
- Les projets sont stockés dans `content/projects/`
- Chaque fichier MDX doit inclure un frontmatter avec les métadonnées appropriées

## 🎭 UI/UX

### Système de Thème
Le projet utilise `next-themes` pour gérer les thèmes clair/sombre :

```typescript
// Exemple d'utilisation dans un composant
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  )
}
```

### Animations avec Framer Motion
Les animations sont implémentées avec Framer Motion pour une expérience utilisateur fluide :

```typescript
// Exemples d'animations communes
// Dans vos composants :
import { motion } from 'framer-motion'

// Animation de fade-in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>

// Animation au scroll
<motion.div
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
>
```

### Accessibilité (A11y)
Le projet suit les meilleures pratiques d'accessibilité :

- Utilisation systématique des attributs ARIA
- Structure sémantique HTML5
- Navigation au clavier
- Messages d'erreur vocaux
- Contraste des couleurs conforme aux normes WCAG

Exemple d'implémentation :
```typescript
// Exemple de composant accessible
<button
  aria-label="Menu principal"
  role="navigation"
  aria-expanded={isOpen}
  onClick={toggleMenu}
>
  {/* Contenu du bouton */}
</button>
```

### Design Mobile-First
Le projet suit une approche mobile-first avec Tailwind CSS :

```typescript
// Exemple de classes Tailwind mobile-first
<div className="
  w-full          // Base (mobile)
  md:w-1/2       // Tablette
  lg:w-1/3       // Desktop
  p-4            // Padding sur tous les écrans
  md:p-6         // Padding plus grand sur tablette et plus
  lg:p-8         // Padding encore plus grand sur desktop
">
```

Breakpoints principaux :
- Mobile: < 768px
- Tablette: 768px - 1024px
- Desktop: > 1024px

## 📝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📜 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

[Votre Nom] - [@votre_twitter](https://twitter.com/votre_twitter)

Lien du projet: [https://github.com/votre_username/my-portfolio](https://github.com/votre_username/my-portfolio)
