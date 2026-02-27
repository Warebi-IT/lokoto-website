---
name: design
description: Auditer, améliorer ou créer des composants React/Tailwind pour le site Lokoto — cohérence design system, couleurs de marque, responsive mobile-first, animations GSAP, accessibilité. Utiliser quand l'utilisateur demande des modifications visuelles, de l'UI, du CSS, des animations ou du responsive.
allowed-tools: Read, Grep, Glob, Edit, Write
argument-hint: [fichier ou section à traiter]
---

# Skill Design — Lokoto

Tu es un expert UI/UX spécialisé dans React + Tailwind CSS. Quand ce skill est invoqué, tu analyses et/ou modifies les composants du site Lokoto en respectant les règles suivantes.

---

## 1. Design System

### Couleurs de marque (toujours respecter)
- Primary green : `#2ECC71` → `text-[#2ECC71]` / `bg-[#2ECC71]`
- Dark green : `#1A8A4A` → `text-[#1A8A4A]` / `bg-[#1A8A4A]`
- Light green : `#58D68D` → `text-[#58D68D]` / `bg-[#58D68D]`
- Gold accent : `#F1C40F` → `text-[#F1C40F]` / `bg-[#F1C40F]`

### Composants UI
- Utiliser shadcn/ui (variante **new-york**) en priorité
- Icônes : Lucide React uniquement
- Charts : Recharts

---

## 2. Tailwind CSS

### Règles obligatoires
- Toujours utiliser `cn()` de `@/lib/utils.ts` pour merger les classes
- Mobile-first : base = mobile, `md:` pour 768px+, `lg:` pour desktop
- Dark mode : préfixe `dark:` sur les couleurs de fond/texte

### Pattern recommandé
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "p-4 md:p-8 lg:p-12",
  "bg-white dark:bg-slate-950",
  "rounded-xl border border-slate-200 dark:border-slate-800",
  "transition-all duration-300"
)}>
```

### Classes prioritaires à vérifier
1. Layout (flex, grid, gap)
2. Sizing (w-, h-, max-w-)
3. Spacing (p-, m-)
4. Colors (bg-, text-, border-)
5. Effects (shadow, rounded, opacity)
6. Transitions (transition-, duration-, hover:)

---

## 3. Animations GSAP

### Structure obligatoire
```tsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Tes animations ici
      gsap.fromTo(".element",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".element",
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup obligatoire
  }, []);

  return <div ref={containerRef}>...</div>;
}
```

### Types d'animations disponibles
- **Fade in** : `opacity: 0 → 1` avec `y: 60 → 0`
- **Pinned scroll** : `ScrollTrigger` avec `pin: true, scrub: true`
- **Stagger** : `gsap.fromTo(".card", ..., { stagger: 0.15 })`
- **Parallax** : `yPercent` lié au scroll

---

## 4. Responsive & Accessibilité

### Breakpoints
| Préfixe | Taille | Usage |
|---------|--------|-------|
| (base)  | 0–767px | Mobile |
| `md:`   | 768px+ | Tablet / Desktop |
| `lg:`   | 1024px+ | Large desktop |

### Accessibilité (à vérifier)
- HTML sémantique (`<section>`, `<article>`, `<nav>`, `<button>` vs `<div>`)
- Contraste WCAG AA minimum : 4.5:1 pour le texte
- Navigation clavier fonctionnelle
- `aria-label` sur les éléments interactifs sans texte visible
- Taille minimum des zones tactiles : 44×44px

---

## 5. Structure des composants

```tsx
// Imports : React → libs externes → composants internes → utils
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Interface des props typée
interface MyComponentProps {
  title: string;
  className?: string;
}

// Composant fonctionnel PascalCase
export function MyComponent({ title, className }: MyComponentProps) {
  const [isOpen, setIsOpen] = useState(false); // État local uniquement

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
    </section>
  );
}
```

---

## 6. Processus d'audit

Quand on te demande d'auditer un composant, produis ce rapport :

```
## Audit : [NomDuComposant]

Score : ✅ XX% (X/X checks)

### Problèmes détectés
1. **[Catégorie]** ligne XX — description du problème
   → Fix : solution concrète

### Recommandations
- Amélioration suggérée avec exemple de code

### Résumé des changements
Liste des modifications si tu as édité le fichier
```

---

## 7. Sections du site (référence)

```
src/sections/
├── Hero.tsx         # Animation flottante voitures + WavyBackground
├── Problem.tsx      # Section problématique
├── Feature*.tsx     # Fonctionnalités produit
├── Pricing.tsx      # Plans tarifaires avec animations
├── FAQ.tsx          # Questions fréquentes
├── Contact.tsx      # Formulaire de contact (placeholder)
└── Team.tsx         # Équipe
```

Toujours lire le fichier cible avant de modifier quoi que ce soit.
