# Landing Page Visual Upgrade -- Futuristic Premium Redesign

## Problem Statement

The pvrpose.ai landing page is functional and well-structured but visually reads as a standard SaaS page -- white backgrounds, flat cards, no scroll animations. It doesn't feel premium, futuristic, or cutting-edge enough for a $15K-$40K AI product. The goal is to adopt visual patterns from futurevisionxprize.com (dark themes, depth, scroll reveals, ambient glows) while keeping the purple/pink brand, all existing content, mobile responsiveness, and WCAG AA compliance.

## Objectives

- Premium, futuristic first impression (dark hero, ambient glow)
- Visual depth and dimension (layered shadows, gradients, border glows)
- Scroll-triggered reveal animations (elements appear as you scroll)
- Deliberate dark/light section rhythm for visual drama
- Enhanced button and card interactions (glow, sweep, lift)
- Better breathing room (generous padding)
- Smooth section transitions (gradient fades between dark/light)

## Constraints

- Single HTML file + Tailwind CDN (no build tools)
- Must preserve ALL existing content, sections, and functionality
- Must maintain mobile responsiveness (recently fixed)
- Must preserve WCAG AA compliance (4.5:1 contrast minimum)
- Colors stay purple (#6d28d9) / pink (#ec4899) -- no cyan
- Must not break: ROI calculator, tab toggle, FAQ accordion, exit popup, cookie banner, mobile CTA bar, sticky CTA, form submissions
- `prefers-reduced-motion` must disable all new animations

## File

`index.html` -- single file containing all HTML (~2978 lines), CSS (~370 lines in `<style>`), and JS (~480 lines in `<script>`)

---

## Phase 1: CSS Foundation (add to `<style>` block)

Add all new CSS classes BEFORE any HTML changes. This ensures nothing breaks while classes don't yet exist on elements.

### 1A. Scroll Reveal Classes

```css
/* Scroll-triggered reveals */
.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal-left {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal-right {
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal-scale {
    opacity: 0;
    transform: scale(0.92);
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.visible, .reveal-left.visible, .reveal-right.visible, .reveal-scale.visible {
    opacity: 1;
    transform: translateY(0) translateX(0) scale(1);
}

/* Stagger delays for grid children */
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }
.reveal-delay-5 { transition-delay: 0.5s; }
```

### 1B. Dark Hero Gradient

```css
.gradient-hero-dark {
    background: linear-gradient(160deg, #0a0a0f 0%, #1a0a2e 40%, #150820 70%, #0a0a0f 100%);
}
```

### 1C. Deep Layered Shadows

```css
.shadow-deep {
    box-shadow: 0 4px 6px rgba(109, 40, 217, 0.04),
                0 12px 20px rgba(109, 40, 217, 0.06),
                0 42px 69px -18px rgba(109, 40, 217, 0.12);
}
.shadow-glow-purple {
    box-shadow: 0 0 20px rgba(109, 40, 217, 0.2),
                0 0 60px rgba(109, 40, 217, 0.08);
}
.shadow-glow-pink {
    box-shadow: 0 0 20px rgba(236, 72, 153, 0.2),
                0 0 60px rgba(236, 72, 153, 0.08);
}
```

### 1D. Card Border Glow (for dark sections)

```css
.card-glow {
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
@media (hover: hover) {
    .card-glow:hover {
        border-color: rgba(236, 72, 153, 0.3);
        box-shadow: 0 0 30px rgba(236, 72, 153, 0.08),
                    0 20px 40px -12px rgba(109, 40, 217, 0.15);
    }
}
```

### 1E. Button Sweep Effect (hero CTAs)

```css
.btn-sweep {
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.btn-sweep::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
    transition: left 0.6s ease;
    z-index: -1;
}
@media (hover: hover) {
    .btn-sweep:hover::before {
        left: 100%;
    }
}
```

### 1F. Section Gradient Transitions

```css
.section-fade-in-dark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, #0a0a0f, transparent);
    pointer-events: none;
    z-index: 1;
}
.section-fade-out-dark::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, #0a0a0f, transparent);
    pointer-events: none;
    z-index: 1;
}
```

### 1G. Dark Section Utility Classes

```css
/* Dark section styles for converted sections */
.section-dark {
    background: linear-gradient(160deg, #0a0a0f 0%, #110a1f 50%, #0a0a0f 100%);
    color: #fff;
}
.section-dark h2, .section-dark h3 {
    color: #fff;
}
.section-dark p {
    color: #d1d5db; /* gray-300 */
}
.section-dark .glass-dark {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### 1H. Enhanced Hover-Lift (update existing)

**Replace** the existing `.hover-lift:hover` shadow:
```css
/* OLD: box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1); */
/* NEW: */
@media (hover: hover) {
    .hover-lift:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 40px -12px rgba(109, 40, 217, 0.15),
                    0 8px 16px -8px rgba(0, 0, 0, 0.1);
    }
}
```

### 1I. Enhanced btn-primary (update existing)

**Replace** the existing `.btn-primary` and `.btn-primary:hover`:
```css
.btn-primary {
    background: linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 14px rgba(109, 40, 217, 0.4),
                0 0 40px rgba(109, 40, 217, 0.12);
}
.btn-primary:hover {
    box-shadow: 0 8px 25px rgba(109, 40, 217, 0.5),
                0 0 60px rgba(236, 72, 153, 0.15);
    transform: translateY(-3px) scale(1.02);
}
```

### 1J. Dark Nav (update existing)

**Replace** the existing `.main-nav` styles:
```css
.main-nav {
    position: fixed;
    top: 42px;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(10, 10, 15, 0.85);
    -webkit-backdrop-filter: blur(12px);
    -moz-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.3s ease;
}
```

### 1K. Accessibility: Disable All New Animations

**Add to the existing** `@media (prefers-reduced-motion: reduce)` block:
```css
.reveal, .reveal-left, .reveal-right, .reveal-scale {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
}
.btn-sweep::before {
    display: none !important;
}
```

---

## Phase 2: Dark Hero Conversion (~line 532)

### Changes to make:

1. **Section tag** (line 532): Replace `gradient-hero` with `gradient-hero-dark`
2. **Eyebrow pill** (line 535): Replace `bg-gradient-to-r from-pink-100 to-purple-100` with `bg-white/10 backdrop-blur border border-white/20`
3. **Eyebrow text** (line 536): Keep `gradient-accent bg-clip-text text-transparent` (works on both dark/light)
4. **Tab inactive buttons** (lines 548, 552): Replace `border-gray-400 bg-transparent text-gray-500 hover:border-pink-400 hover:text-pink-600` with `border-gray-600 bg-transparent text-gray-400 hover:border-pink-400 hover:text-pink-300`
5. **All H1 tags** (lines 559, 564, 569): Text is already bold white -- gradient accent span stays. No change needed.
6. **Tagline paragraphs** (lines 576, 580, 584): Replace `text-gray-600` with `text-gray-300`
7. **French notice** (line 588): Replace `color: #aaa` with `color: #9ca3af` (gray-400 equivalent)
8. **Hero CTAs**: Add `btn-sweep` class to all 6 CTA buttons (lines 596, 607, 621, 627, 636, 642). Replace `bg-pink-600 hover:bg-pink-700` with `bg-pink-600 hover:bg-pink-500` for the pink ones.
9. **Hero stat numbers** (lines 668, 678, 688): Keep gradient text. Replace surrounding text `text-gray-600`/`text-gray-700` with `text-gray-300`/`text-gray-400`
10. **Stat description text** (lines 670-690): Replace `text-gray-600` with `text-gray-400`
11. **Nav links** (lines 495-497): Replace `text-gray-700` with `text-gray-300`
12. **Mobile menu links** (lines 513-515): Replace `text-gray-700` with `text-gray-300`
13. **Mobile menu bg**: Add `bg-[#0a0a0f]/95` to the mobile menu div (line 512)

---

## Phase 3: Dark Section Conversions

### 3A. "Is This For You?" Section (~line 917)

1. **Section tag**: Replace `bg-white border-t border-b border-gray-200` with `section-dark relative`
2. **Heading** (line 919): Add `text-white` (handled by `.section-dark h2`)
3. **Subtitle** (line 922): Replace `text-gray-600` with `text-gray-400`
4. **Perfect Fit card** (line 928): Replace `glass-dark` with `bg-white/5 backdrop-blur border border-white/10 card-glow`
5. **Perfect Fit heading** (line 933): Add `text-white`
6. **Perfect Fit list items** (lines 935-960): Replace `text-base` with `text-base text-gray-200`. Bold spans get `text-white`.
7. **Not a Fit card** (line 964): Replace `bg-gray-50 border-2 border-gray-200` with `bg-white/5 backdrop-blur border border-white/10 card-glow`
8. **Not a Fit heading** (line 969): Replace `text-gray-600` with `text-gray-400`
9. **Not a Fit list items**: Replace `text-gray-600` with `text-gray-400`
10. **"Sound Like You?" CTA block** (~line 999): Replace `text-gray-800` with `text-white`, `text-gray-600` with `text-gray-300`
11. Add `section-fade-out-dark` to section for smooth transition to next white section

### 3B. DIY vs Professional Section (~line 1421)

1. **Section tag**: Replace `bg-white` with `section-dark relative`
2. **Heading** (line 1424): Handled by `.section-dark h2`
3. **Subtitle** (line 1427): Replace `text-gray-600` with `text-gray-400`
4. **DIY card** (line 1435): Replace `bg-gray-50 border-2 border-gray-200` with `bg-white/5 border border-white/10 card-glow`
5. **DIY card heading** (line 1443): Replace `text-gray-800` with `text-white`
6. **DIY card subtext**: Replace `text-gray-600` with `text-gray-400`
7. **DIY list items**: Replace `text-gray-700` with `text-gray-300`
8. **DIY hidden costs box** (line 1478): Replace `bg-white border-2 border-gray-200` with `bg-white/5 border border-white/20`
9. **DIY hidden costs text**: Replace `text-gray-800` with `text-white`, `text-gray-600` with `text-gray-400`
10. **Professional card** (line 1486): Replace `bg-gradient-to-br from-pink-50 to-purple-50 border-4 border-pink-500` with `bg-gradient-to-br from-pink-900/30 to-purple-900/30 border-2 border-pink-500 shadow-glow-pink`
11. **Professional card text colors**: All `text-gray-700` → `text-gray-200`, `text-gray-800` → `text-white`, `text-gray-900` → `text-white`
12. **Professional card price box**: Replace `bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-pink-300` with `bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30`
13. **Professional card price text**: Replace `text-gray-900` with `text-white`, `text-gray-700` with `text-gray-300`, `text-pink-700` with `text-pink-300`
14. **Bottom comparison stats** (line 1548): This block is ALREADY dark (`bg-gradient-to-br from-[#0a0a0f] to-gray-800`) -- no changes needed
15. Add `section-fade-in-dark` to section

### 3C. FAQ Section (~line 2265)

1. **Section tag**: Replace `bg-white` with `section-dark relative`
2. **Heading/subtitle**: Handled by `.section-dark`
3. **FAQ cards** (`.glass-dark`): Already styled -- `.section-dark .glass-dark` override in CSS handles this
4. **FAQ question text** (h3 tags): Replace `text-gray-900` with `text-white` -- do this by adding a `.section-dark .faq-question h3 { color: #fff; }` CSS rule instead of editing 15+ h3 tags
5. **FAQ answer text**: Replace `text-gray-700` with `text-gray-300` -- add `.section-dark .faq-answer { color: #d1d5db; }` CSS rule
6. **FAQ answer links**: `text-pink-600` works fine on dark
7. **FAQ answer tables**: Replace `bg-gray-100` headers with `bg-white/10`, `border-gray-300` with `border-white/10`, `bg-green-50` with `bg-green-900/20`
8. **"Still Have Questions?" block** (~line 2718): Replace `text-gray-900` with `text-white`, `text-gray-600` with `text-gray-300`
9. Add `.section-dark table { color: #d1d5db; }`, `.section-dark th { color: #fff; }` CSS rules
10. Add `section-fade-in-dark` to section

### 3D. Final CTA Section (~line 2942)

1. **Section tag**: Replace `gradient-hero` with `gradient-hero-dark`
2. **Heading**: Already dark-compatible (no color class)
3. **Subtitle** (line 2948): Replace `text-gray-700` with `text-gray-300`
4. **CTA button**: Add `btn-sweep` class
5. **Delivery guarantee text** (line 2960): Replace `text-gray-600` with `text-gray-400`
6. **Border divider** (line 2963): Replace `border-gray-200` with `border-white/10`
7. **"Or reach out" text**: Add `text-white`
8. **Email/LinkedIn links**: Replace `text-deep-blue` with `text-pink-400 hover:text-pink-300`

---

## Phase 4: Scroll Reveal Application

Add `reveal` classes to these elements (approximately 45-50 elements total):

### Section headings (every `<h2>`)
Add `reveal` to every section `<h2>` wrapper or the `<h2>` itself. Approximately 12-14 headings.

### Card grids (staggered children)
For every grid of cards, add `reveal reveal-delay-N` to each child where N increments:

- **Hero stats grid** (line 661): 3 children → delay-1, delay-2, delay-3
- **Day-in-life timeline** (~lines 700-912): Each timeline step gets `reveal`
- **Is This For You grid** (line 926): 2 columns → delay-1, delay-2
- **ROI calculator result grid**: 4 children → delay-1 through delay-4
- **DIY comparison grid** (line 1433): 2 columns → reveal-left, reveal-right
- **Product tier cards** (line 1716): 3 cards → delay-1, delay-2, delay-3
- **EA Superpowers framework cards** (line 2065): 3 cards → delay-1, delay-2, delay-3
- **What Powers Your AI OS grid** (line 2110): Each item gets `reveal`
- **Credentials grid** (line 1974): 9 cards → stagger with delays
- **FAQ accordion items**: Each FAQ card gets `reveal` with stagger
- **Pioneer boxes** (line 2858): 2 boxes → delay-1, delay-2

### CTA blocks
Add `reveal-scale` to every major CTA button group.

### Standalone elements
- Social proof bar quote (line 1019): `reveal`
- ROI calculator form container: `reveal-scale`
- Video testimonial blocks: `reveal`
- About section photo + bio: `reveal-left` (photo), `reveal-right` (bio)
- Pioneer "Why Pioneer Spots?" explanation box: `reveal`

---

## Phase 5: JavaScript Additions

### 5A. Intersection Observer for Scroll Reveals

Add this block at the END of the existing `<script>` section (before `</script>`):

```javascript
// Scroll-triggered reveal animations
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function(el) {
        revealObserver.observe(el);
    });
} else {
    // Immediately show all reveal elements for reduced-motion users
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function(el) {
        el.classList.add('visible');
    });
}
```

### 5B. Nav Scroll Enhancement

Add to the existing scroll listener (piggyback on the throttled scroll handler at line 3200):

Inside the `requestAnimationFrame` callback, after the sticky CTA logic, add:

```javascript
// Nav scroll state
const nav = document.querySelector('.main-nav');
if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
} else {
    nav.style.boxShadow = 'none';
    nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
}
```

### 5C. Stat Counter Animation (optional polish)

For the ROI calculator results, when the `.active` class is added (line 3192), animate the numbers counting up:

```javascript
function animateCounter(elementId, targetValue, prefix, suffix) {
    const el = document.getElementById(elementId);
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return; // Skip animation for reduced motion
    }
    const duration = 1200;
    const startTime = performance.now();
    const numericTarget = parseInt(targetValue.replace(/[^0-9]/g, ''));

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.round(numericTarget * eased);
        el.textContent = (prefix || '') + current.toLocaleString() + (suffix || '');
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}
```

---

## Phase 6: Enhanced Padding and Spacing

Tailwind class changes only (no custom CSS):

1. **Hero section** (line 532): `py-20` → `py-24 md:py-32`
2. **Section headings `mb-*`**: Where `mb-10` or `mb-12` exists on section heading blocks, increase to `mb-16`
3. **Card grid gaps**: Where `gap-6` exists on major card grids, add `md:gap-8`
4. **Product tiers section** (line 1699): `py-20` → `py-24 md:py-28`
5. **Pioneer section** (line 2830): `py-20` → `py-24 md:py-28`

---

## Phase 7: Apply Deep Shadows and Glows

1. **Product tier cards** (lines 1719, 1751, 1787): Add `shadow-deep` class
2. **Featured tier card** (line 1751, EA Amplify): Add `shadow-glow-pink` instead of `shadow-deep`
3. **Pioneer free build box** (line 2861): Add `shadow-glow-purple`
4. **ROI calculator result container** (line 1069): Add `shadow-glow-purple` when `.active`
5. **About section card**: Add `shadow-deep`

---

## Phase 8: Gradient Section Transitions

Add `relative` (if not already) and transition classes to sections that border dark/light:

1. Hero (dark) → Day-in-life (light): Add `section-fade-out-dark` to hero section
2. Day-in-life (light) → Is This For You (dark): Add `section-fade-in-dark` to "Is This For You"
3. Is This For You (dark) → Social proof (light): Add `section-fade-out-dark` to "Is This For You"
4. Video section (light) → DIY Comparison (dark): Add `section-fade-in-dark` to DIY section
5. DIY Comparison (dark) → Timeline (light): Add `section-fade-out-dark` to DIY section
6. Credentials (light) → PVRPOSE AI OS (dark): Already dark section, transition exists
7. FAQ (dark) → Pioneer FAQ (dark): Both dark, no transition needed
8. Final CTA (dark) → Footer (dark): Both dark, no transition needed

---

## Testing Checklist

### Functionality (must not break)
- [ ] Hero tab toggle (3 tabs switch headline, tagline, CTAs)
- [ ] ROI calculator form submission and results display
- [ ] FAQ accordion expand/collapse (all 15 items)
- [ ] Exit popup triggers on mouse leave
- [ ] Exit form submission with honeypot + rate limiting
- [ ] Cookie consent banner display and dismiss
- [ ] Mobile CTA bar (visible on mobile, hidden on tablet+)
- [ ] Sticky CTA pill (appears after 50% scroll on desktop)
- [ ] Mobile hamburger menu open/close
- [ ] All navigation links scroll to correct sections
- [ ] All external links (Calendly, LinkedIn, email) open correctly
- [ ] Video thumbnail click → YouTube iframe load

### Visual (must look correct)
- [ ] Dark hero renders correctly on all 3 tab states
- [ ] Gradient text (`.gradient-accent`) is legible on dark backgrounds
- [ ] All dark section text has sufficient contrast (white on #0a0a0f = 19.3:1)
- [ ] FAQ table is readable on dark background
- [ ] Pioneer boxes (white bg) still look correct (they're inside a dark section already)
- [ ] "RECOMMENDED" badge on Professional card is visible on dark
- [ ] "Most Popular" badge on EA Amplify tier card is visible
- [ ] Green checkmark SVG icons visible on dark "Is This For You"
- [ ] Red X marks visible on dark "Not a Fit" column

### Responsive (must work on all sizes)
- [ ] iPhone SE (375px) -- all text readable, no overflow
- [ ] iPhone 14 (390px) -- cards stack properly
- [ ] iPad (768px) -- grid layouts transition correctly
- [ ] iPad Pro (1024px) -- all content fits
- [ ] Desktop (1440px) -- full layout
- [ ] Ultra-wide (1920px+) -- max-width constraints hold

### Accessibility
- [ ] `prefers-reduced-motion: reduce` disables all animations
- [ ] All reveal elements are visible without JS (add `.visible` via CSS fallback or noscript)
- [ ] Color contrast ratios meet WCAG AA on all dark sections
- [ ] Focus states visible on all interactive elements in dark sections
- [ ] Screen reader: no content hidden by reveal animations (only visual opacity)

### Performance
- [ ] No layout shift from reveal animations (elements have space reserved)
- [ ] Intersection Observer uses `unobserve` after reveal (no memory leak)
- [ ] No additional HTTP requests (all CSS/JS inline)
- [ ] Total added CSS < 3KB, JS < 1KB

---

## Sync Protocol (after all changes)

1. Copy `index.html` to Google Drive: `H:\My Drive\PVRPOSE_AI-BUSINESS_OPS_HUB\16 - WEBSITE & DIGITAL PRESENCE\index.html`
2. Copy `index.html` to Vercel repo: `C:\Users\Juan Gonzalez\Documents\PVRPOSE_AI\PVRPOSE_AI_OS\pvrpose-ai-landing-page\index.html`
3. Commit + push claudeclaw repo
4. Commit + push Vercel repo (triggers auto-deploy)
5. Verify live at https://pvrpose.ai

---

## Implementation Order Summary

| Step | What | Risk | Lines affected |
|------|------|------|----------------|
| 1 | Add all new CSS classes | None (unused until applied) | ~80 lines added to `<style>` |
| 2 | Update existing CSS (btn-primary, hover-lift, main-nav) | Low (visual-only) | ~15 lines modified |
| 3 | Dark hero conversion | Medium (many class swaps) | ~30 elements in lines 532-696 |
| 4 | Dark "Is This For You?" | Medium | ~20 elements in lines 917-1014 |
| 5 | Dark DIY Comparison | Medium | ~25 elements in lines 1421-1590 |
| 6 | Dark FAQ | Medium | ~20 elements in lines 2265-2740 |
| 7 | Dark Final CTA | Low | ~8 elements in lines 2942-2978 |
| 8 | Add gradient transitions | Low | ~6 section tags |
| 9 | Add reveal classes to elements | Low (additive) | ~50 elements throughout |
| 10 | Add JS (observer + nav scroll) | Low | ~25 lines added to `<script>` |
| 11 | Apply shadows and glows | Low (additive) | ~8 elements |
| 12 | Increase padding | Low | ~10 Tailwind class changes |
| 13 | QA + fix | -- | -- |
| 14 | Sync all 3 locations | -- | -- |

**Estimated total: ~200 edits across the file. No structural HTML changes. No content changes.**
