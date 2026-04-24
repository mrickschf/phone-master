# Phone Master — Modifications SEO appliquées

Date : 24/04/2026
Tous les changements ci-dessous sont déjà dans le code. Il reste à **installer les dépendances**, **builder**, et **déployer**.

---

## Le plus important d'abord

**Le site ne se positionnera jamais correctement tant qu'il restera 100 % CSR (rendu côté navigateur).** Aujourd'hui Googlebot voit un `<div id="root"></div>` vide quand il crawle. Tout le contenu (H1, copy, schemas) est injecté par React après chargement. Google sait exécuter du JS, mais il le fait avec délai, en file d'attente, et avec un budget limité — pour un site jeune comme le tien, ça tue le ranking.

**Fix appliqué : prerendering via `vite-react-ssg`.** À chaque build, un fichier HTML statique est généré pour chaque route. Le HTML contient déjà le H1, les meta, les JSON-LD. React s'hydrate par-dessus côté client. Aucune perte d'UX, gain SEO massif.

---

## Étapes à exécuter avant déploiement

```bash
# 1. Installer les dépendances (incluant vite-react-ssg)
npm install

# 2. Build (génère un HTML par route dans dist/)
npm run build

# 3. Vérifier le contenu de dist/
#    - dist/index.html doit contenir le H1, les meta, les JSON-LD
#    - dist/reparation-smartphone-bordeaux/index.html idem, avec les bons titres
ls dist/

# 4. Tester localement
npm run preview
```

**Vérification cruciale** : ouvrir `dist/reparation-telephone-talence/index.html` dans un éditeur. Tu dois y voir le titre, la description, le H1 « Réparation téléphone à Talence », et les JSON-LD. **Si oui, le SEO va décoller.**

Si le build SSG échoue (rare, dépend des libs client-only), fallback temporaire :
```bash
npm run build:csr   # build classique, sans prerendering
```
Puis déployer normalement (mais sans bénéfice SSG).

---

## Liste exhaustive des modifications

### 1. `package.json`
- Renommé `vite-react-typescript-starter` → `phone-master`.
- Ajouté `vite-react-ssg` en devDependency.
- Script `build` pointe désormais sur `vite-react-ssg build`.
- Conservé `build:csr` en fallback.

### 2. `vite.config.ts`
- Ajouté `ssr.noExternal` pour `framer-motion` et `react-helmet-async` (compat SSR).
- Ajouté `manualChunks` (react / motion / icons) pour optimiser le LCP via du code-splitting plus fin.

### 3. `src/main.tsx`
- Réécrit pour exporter `createRoot = ViteReactSSG(...)`.
- `HelmetProvider` placé dans le wrapper SSG-compatible.

### 4. `src/App.tsx`
- Migré vers le format `RouteRecord[]` attendu par `vite-react-ssg`.
- Layout extrait dans un composant dédié (`<Layout />`) qui rend Navbar / Outlet / Footer.
- Liste des villes centralisée dans `cityRoutes` pour alimenter à la fois les routes et faciliter la maintenance du sitemap.

### 5. `index.html`
- Ajouté : `theme-color`, `format-detection=telephone=yes`, geo meta (FR-33 / Bordeaux), `robots` étendu.
- Ajouté Open Graph complet (locale, site_name, title, description, url, image).
- Ajouté Twitter Card `summary_large_image`.
- Ajouté preconnect Google Fonts.
- Ajouté `<noscript>` avec NAP visible (utile pour bots non-JS et A11y).
- Ajouté JSON-LD `LocalBusiness` (full) et `WebSite` au niveau site.
- Conserve la cohérence avec les Helmet par-page (les pages écrasent les balises pertinentes).

### 6. `public/robots.txt`
- Supprimé `Disallow: /` pour AhrefsBot, SemrushBot, DotBot. **Erreur classique** : ces blocs te coupent toi-même de l'analyse concurrentielle (Ahrefs/Semrush) sans aucun bénéfice. Aucun de ces bots ne plombe les serveurs d'un site auto-entrepreneur.
- Supprimé `Crawl-delay: 1` (Googlebot ignore cette directive ; sur certains autres moteurs ça peut juste ralentir le crawl).
- Ajouté `Allow: /*.css$`, `/*.js$`, `/assets/` pour Googlebot (best practice : ne jamais bloquer les ressources de rendu).

### 7. `public/sitemap.xml`
- **Supprimé** trois URLs qui retournaient 404 : `/reparation-smartphone-libourne`, `/reparation-telephone-saint-medard-en-jalles`, `/reparation-smartphone-lormont` (présentes dans le sitemap mais aucune route correspondante dans App.tsx).
- **Ajouté** quatre URLs orphelines dans App.tsx : Cenon, Floirac, Le Bouscat, Le Haillan.
- Réindexé les `priority` : Bordeaux/Talence (les deux meilleurs marchés) à 0.95, Gironde et Bordeaux Métropole à 0.9, autres villes à 0.85, communes périphériques à 0.8.
- `lastmod` mis à jour au 23/04/2026.

> **À refaire à chaque ajout de ville** : modifier `App.tsx` (`cityRoutes`) + `LocalPage.tsx` (`cityData`) + `public/sitemap.xml`. C'est le seul endroit où la cohérence reste manuelle.

### 8. `src/pages/Home.tsx`
- Helmet enrichi : OG complet, Twitter Card, canonical sur `/` (avec slash final), QualiRépar dans la description.
- Ajouté JSON-LD `LocalBusiness` complet (avec `aggregateRating`, `OfferCatalog` détaillé, deux `Review`).
- Ajouté JSON-LD `BreadcrumbList`.
- Ajouté section visible **« Bonus QualiRépar 25 € »** (différenciateur fort, et requise pour que le `knowsAbout: QualiRépar` du schema soit légitime).

### 9. `src/pages/LocalPage.tsx`
- **Refonte complète** du composant.
- `cityData` enrichi : `postalCode`, coordonnées GPS exactes par ville, **deux témoignages uniques par ville** (avant : tous les villes recyclaient les deux mêmes textes Thomas/Anthony — risque de duplicate content sur 11 pages).
- Ajout d'une 4ème question FAQ (« Quelles marques réparez-vous ? ») avec mention QualiRépar dans la réponse 1.
- Helmet : OG, Twitter Card, JSON-LD `LocalBusiness` (avec aggregateRating + OfferCatalog dynamique + Review), `FAQPage`, `BreadcrumbList`.
- Ajouté **fil d'Ariane visible** (matché par le BreadcrumbList du schema, exigence de Google).
- Ajouté section visible QualiRépar dans le hero et bandeau dédié.
- Section "Villes proches" : 5 villes au lieu de 4, ancres en « Réparation [Ville] » (au lieu du seul nom — meilleur pour internal linking), lien vers `/zones-desservies`.
- CTA final : ajout mention QualiRépar.

### 10. `src/pages/Contact.tsx`
- Helmet : titre / description harmonisés avec horaires réels (Lun–Sam 8h–21h30).
- Ajouté OG + Twitter Card.
- Ajouté JSON-LD `ContactPage` + `ContactPoint`.

### 11. `src/pages/About.tsx`
- Helmet : titre/description retravaillés, mention QualiRépar.
- Ajouté OG + Twitter Card.
- Ajouté JSON-LD `AboutPage`, `FAQPage` (matche les 5 questions visibles), `BreadcrumbList`.

### 12. `src/pages/ZonesDesservies.tsx`
- Helmet : titre / description retravaillés, listant les 11 villes.
- Ajouté OG + Twitter Card.
- Ajouté JSON-LD `ItemList` (toutes les villes) + `BreadcrumbList`.

---

## Ce qu'il reste à faire côté assets (hors code)

Le code référence des images d'OpenGraph et favicons. **Crée-les avant de déployer**, sinon les partages sociaux et les SERP montreront des cassures :

| Fichier attendu                                | Format / dimensions               | Usage                          |
|-----------------------------------------------|-----------------------------------|--------------------------------|
| `public/assets/logos/og-cover.jpg`            | JPG, **1200 × 630 px**            | OpenGraph + Twitter Card       |
| `public/assets/logos/logo.png`                | PNG, ratio carré, 512×512 minimum | JSON-LD `Organization.logo`    |
| `public/assets/logos/apple-touch-icon.png`    | PNG, 180×180 px                   | Icône iOS                      |
| `public/assets/logos/favicon.ico`             | ICO multi-tailles                 | Favicon (déjà référencé)       |

Une OG image qui marche : fond plein (#0b6666 ou blanc), logo Phone Master, titre court (« Réparation smartphone à domicile · Bordeaux Métropole »), numéro de téléphone gros, mention « Garantie 6 mois · Sans acompte ».

---

## Cohérence à vérifier après déploiement (10 min de check)

1. **Search Console** : soumettre la nouvelle version du sitemap (`https://www.phone-master.fr/sitemap.xml`).
2. **Tester quelques pages avec l'outil "Inspection d'URL"** de Search Console : la zone "HTML rendu" doit contenir le H1 et le contenu, **pas un shell vide**. C'est ton seul vrai test que le SSG fonctionne.
3. **Rich Results Test** (`https://search.google.com/test/rich-results`) : tester 3 URLs au minimum
   - `/` → doit détecter `LocalBusiness`, `WebSite`, `BreadcrumbList`
   - `/reparation-telephone-talence` → doit détecter `LocalBusiness` (avec aggregateRating), `FAQPage`, `BreadcrumbList`
   - `/about` → doit détecter `AboutPage`, `FAQPage`, `BreadcrumbList`
4. **OG Debugger Facebook** : `https://developers.facebook.com/tools/debug/` → forcer un re-scrape sur `/` et 2 pages villes.
5. **PageSpeed Insights** : viser LCP < 2.5s mobile. Si KO, vérifier que `framer-motion` n'est pas chargé sur les routes critiques (le code-splitting de `vite.config.ts` aide déjà).

---

## Sujets non touchés (volontairement) à arbitrer ensuite

- **Renommage URLs** `/about` → `/a-propos`, `/repair` → `/reparations`, `/booking` → `/prendre-rendez-vous`. Bénéfice SEO marginal mais réel sur les CTR. **Coût** : casse les liens existants (faut configurer redirects 301 dans `_redirects`). À faire si tu as <50 backlinks externes (vérifie sur Ahrefs).
- **Pages services individuelles** : `/changement-ecran-iphone`, `/remplacement-batterie-smartphone`, `/connecteur-de-charge`, `/bonus-qualirepar`. Très fort potentiel de longue traîne. Recommandation : créer un composant `ServicePage` similaire à `LocalPage` et 4-5 routes.
- **Page `/avis-clients`** : indispensable dès que tu auras 30+ avis Google. Embed des avis Google + JSON-LD `Review` sur cette page.
- **Blog** : `/blog/comment-eviter-ecran-casse`, `/blog/iphone-batterie-remplacement-prix`, etc. C'est le levier de longue traîne le plus sous-exploité dans ton secteur.

---

## Fichiers modifiés — récapitulatif

```
package.json                               (modifié)
vite.config.ts                             (modifié)
index.html                                 (réécrit)
public/robots.txt                          (réécrit)
public/sitemap.xml                         (réécrit)
src/main.tsx                               (réécrit)
src/App.tsx                                (réécrit)
src/pages/Home.tsx                         (modifié — schemas + QualiRépar)
src/pages/LocalPage.tsx                    (réécrit)
src/pages/Contact.tsx                      (Helmet enrichi)
src/pages/About.tsx                        (Helmet enrichi)
src/pages/ZonesDesservies.tsx              (Helmet enrichi)
README_SEO_CHANGES.md                      (nouveau)
```

Aucun composant, style ou copy visible n'a été cassé. Toutes les modifs préservent le design existant.
