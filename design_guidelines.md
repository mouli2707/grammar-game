# Grammar Island Adventure - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based, inspired by successful educational games (Duolingo, Khan Academy Kids)

**Core Principles:**
- Playful and encouraging design that celebrates learning
- Clear visual hierarchy optimized for young readers
- Immediate, positive feedback systems
- Game-like progression that motivates continued engagement

---

## Typography System

**Font Selection:** 
- Primary: Fredoka (Google Fonts) - rounded, friendly, highly legible for children
- Fallback: Nunito for UI elements
- Monospace: Roboto Mono for code-like elements (rare use)

**Type Scale:**
- Hero/Island Names: text-4xl to text-5xl, font-bold (40-48px)
- Question Text: text-2xl to text-3xl, font-semibold (24-30px) 
- Answer Options: text-xl, font-medium (20px)
- Body/Instructions: text-lg, font-normal (18px)
- Labels/Metadata: text-sm, font-medium (14px)
- Micro-copy: text-xs (12px)

**Readability Rules:**
- Maximum line length: max-w-3xl for question text
- Line height: leading-relaxed (1.625) for all body text
- Letter spacing: tracking-wide for headings

---

## Layout & Spacing System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Tight spacing: p-2, gap-2 (buttons, compact elements)
- Standard spacing: p-4, gap-4, m-6 (most UI elements)
- Section spacing: p-8, py-12, my-16 (major containers)
- Generous spacing: p-12, py-20, gap-24 (hero areas, island map)

**Container Strategy:**
- Full-width map view: w-full h-screen
- Question container: max-w-4xl mx-auto
- Answer options: max-w-2xl mx-auto
- Cards/Islands: Fixed aspect ratios with responsive sizing

**Grid Systems:**
- Island Map: Absolute positioning based on percentage coordinates
- Answer Grid: grid-cols-1 md:grid-cols-2 with gap-4
- Progress Indicators: flex with gap-2

---

## Component Library

### Island Map
- Full viewport canvas (w-full h-screen relative)
- Islands as interactive circles/badges (w-24 h-24 md:w-32 md:h-32)
- Connecting paths with dashed SVG lines
- Ship icon animates along paths (transition-all duration-1000)
- Island hover: scale-110 transform with shadow-2xl
- Active island: ring-4 ring-offset-4 pulse animation

### Question Interface
- Card-based layout: rounded-3xl shadow-2xl p-8 md:p-12
- Question header with island emoji (text-6xl)
- Question text: centered, max-w-3xl
- Answer options: Large buttons (min-h-16 md:min-h-20) with rounded-2xl
- Option layout: Stack on mobile, 2-column grid on desktop
- Selected state: ring-4 transform scale-105
- Correct feedback: Checkmark icon appears, gentle scale bounce
- Wrong feedback: Shake animation (animate-shake keyframes)

### Progress Tracking
- Star display: flex gap-1 with text-3xl emoji stars
- Progress bar: h-3 rounded-full with animated width transition
- Level indicator: Badge with rounded-full px-4 py-2 font-bold
- Completion: Full-width celebration card with confetti overlay

### Navigation
- Top bar: Sticky navigation with flex justify-between
- Home button: Rounded-full p-4 with house icon
- Island name display: text-2xl font-bold truncate
- Back to map: Absolute positioned, top-8 left-8

### Feedback Elements
- Sound indicator: Fixed top-4 right-4, rounded-full p-4, shadow-2xl
- Confetti: Absolute positioned particles across viewport
- Victory modal: Centered overlay (fixed inset-0 flex items-center justify-center)
- Modal backdrop: bg-opacity-50 backdrop-blur-sm

### Buttons
- Primary CTA: Large rounded-2xl px-8 py-4 text-xl font-bold
- Secondary: Medium rounded-xl px-6 py-3 text-lg
- Icon buttons: Square aspect-ratio, rounded-full, p-3
- Hover: transform scale-105 shadow-xl transition-all duration-200
- Active: scale-95

---

## Animation Guidelines

**Purposeful Animations Only:**
- Island unlock: Scale in with spring animation (duration-500 ease-out)
- Answer feedback: Quick bounce (duration-300) for correct, shake (duration-500) for incorrect
- Progress updates: Smooth bar fill (duration-700 ease-in-out)
- Ship movement: Linear path animation (duration-2000)
- Confetti: Staggered fall animations (random durations 2-4s)
- Modal entrance: Fade + scale from center (duration-300)

**No Animations:**
- Hover states (instant)
- Text rendering
- Background changes
- Map panning

---

## Asset Guidelines

**Icons:** 
- Use Heroicons (CDN) for UI elements
- Icon sizes: w-6 h-6 (standard), w-8 h-8 (prominent), w-4 h-4 (small)
- Icons within buttons: mr-2 alignment

**Emojis:**
- Island themes: 🏝️ 🌴 🏖️ ⛱️ 🗿
- Feedback: ⭐ ✅ ❌ 🎉 🎊 🔔
- Navigation: 🏠 ⬅️ ➡️ 🚢
- Size: text-4xl to text-6xl for emphasis

**Illustrations:**
- No custom illustrations required
- Use emoji combinations creatively
- CSS-based shapes for paths/connections

---

## Accessibility

**Interactive Elements:**
- Minimum touch target: 44×44px (mobile), 48×48px (desktop)
- Focus rings: ring-4 ring-offset-2 on all interactive elements
- Keyboard navigation: Full tab order through questions and answers
- Skip links: Hidden until focused for keyboard users

**Visual Clarity:**
- High contrast maintained throughout (WCAG AA minimum)
- Icons paired with text labels
- Multiple feedback channels (visual + audio + text)
- No color-only information (use icons/text too)
- Font sizes never below 16px for body text

**Screen Reader Support:**
- Semantic HTML (button, nav, main, section)
- ARIA labels for emoji-based elements
- Live regions for score updates and feedback
- Clear heading hierarchy (h1 → h2 → h3)

---

## Responsive Behavior

**Breakpoints:**
- Mobile-first: base (320px+)
- Tablet: md: (768px+)
- Desktop: lg: (1024px+)

**Adaptive Elements:**
- Island map: Scales proportionally, maintains aspect ratio
- Questions: Single column → Two column answers at md:
- Typography: Smaller scales on mobile (text-xl → text-3xl)
- Spacing: Reduces by 25-50% on mobile (p-12 → p-6)
- Navigation: Hamburger not needed (simple back button sufficient)