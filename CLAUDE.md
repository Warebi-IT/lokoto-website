# CLAUDE.md - Lokoto

## Projet

Landing page pour **Lokoto**, une plateforme SaaS de gestion de flotte pour les entreprises de location de véhicules au Sénégal. Site vitrine avec animations scroll avancées (GSAP) et formulaire de contact.

## Stack technique

- **Framework** : React 19 + TypeScript 5.9 + Vite 7
- **Styling** : Tailwind CSS 3 + shadcn/ui (variante new-york) + Radix UI
- **Animations** : GSAP 3 avec ScrollTrigger (sections pinnées, parallax, scrub)
- **Formulaires** : React Hook Form + Zod
- **Icônes** : Lucide React
- **Charts** : Recharts

## Commandes

```bash
npm run dev       # Serveur de dev avec HMR
npm run build     # tsc -b && vite build
npm run lint      # ESLint
npm run preview   # Preview du build de production
```

## Structure du projet

```
src/
├── sections/       # Sections de la page (Hero, Problem, Feature*, Pricing, FAQ, Contact...)
├── components/
│   ├── Navbar.tsx   # Navigation principale
│   └── ui/          # 53 composants shadcn/ui
├── hooks/           # use-mobile.ts (détection mobile à 768px)
├── lib/             # utils.ts (cn() pour merge Tailwind classes)
├── App.tsx          # Composant principal avec scroll-snap
├── main.tsx         # Point d'entrée React
└── index.css        # Styles globaux + directives Tailwind
```

## Conventions de code

- **Composants** : Fonctionnels avec hooks, PascalCase
- **Utilitaires** : camelCase
- **Animations** : `useLayoutEffect` + `gsap.context()` avec cleanup (`ctx.revert()`)
- **Styling** : Tailwind utilities en priorité, `cn()` pour le merge de classes
- **État** : Local uniquement (`useState`), pas de store global
- **Alias** : `@/` pointe vers `./src/`

## Couleurs de la marque (Tailwind)

- Primary green : `#2ECC71`
- Dark green : `#1A8A4A`
- Light green : `#58D68D`
- Gold accent : `#F1C40F`

## Points importants

- Site statique SPA (pas de routing, navigation par smooth scroll)
- Pas de backend ni d'API connectée (formulaire de contact en placeholder)
- Pas de fichier .env ni de variables d'environnement
- Pas de tests configurés
- TypeScript en mode strict
- Dark mode supporté (class-based)
- Responsive mobile-first (breakpoint principal : 768px / md)
