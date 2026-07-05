# Character Creator — Vampiro: Edad Oscura — Context Document

> **Purpose:** Context for AI-assisted development. This file documents the current state of the character creation wizard so a new session can pick up exactly where we left off.

---

## Stack & Location

- **Repo:** `~/Documents/projects/white-wolf-character-sheet`
- **Framework:** Angular 13 + NgRx + ngx-translate (`@ngx-translate/core`) + Angular Material
- **Branch:** `feature/character-creator`
- **Route:** `/vampire-dark-ages/create`
- **Module:** `VampireDarkAgeModule` (declared inline — NOT a separate lazy module, so it shares the existing NgRx feature store)
- **Creation code root:** `src/app/vampire-dark-age/creation/`

---

## Creation Numbers (Edad Oscura, NOT classic V:tM)

| Pool | Points |
|------|--------|
| Attributes | 1 base + 7/5/3 to distribute |
| Abilities | 13/9/5 (cap 3 during creation) |
| Disciplines | 4 dots (clan disciplines only) |
| Backgrounds | 5 dots |
| Virtues | 1 base Courage + 1 each Road virtue + 7 to spread |
| Road | sum of its two virtues |
| Willpower | = Courage |
| Freebies | 15 |

### Freebie costs (book p.142)
| Trait | Cost |
|-------|------|
| Attribute | 5 |
| Ability | 2 |
| Specialty | 1 |
| Discipline | 7 |
| Background | 1 |
| Virtue | 2 |
| Road | 1 |
| Willpower | 1 |
| Experience field | 1 (first one free per ability) |

---

## File Map

### Data files
```
src/app/vampire-dark-age/creation/data/
  creation-rules.ts          — Freebie costs, point pools
  clans.data.ts              — 13 clans + Caitiff (disciplines, recommendedRoads)
  paths.data.ts              — 5 roads (firstVirtue/secondVirtue)
  traits.data.ts             — Attribute/ability groups with members
  generation.data.ts         — Generation table (bloodPool/bloodPerTurn/maxTrait)
  archetypes.data.ts         — 22 archetypes for Nature/Demeanor
  disciplines-content.data.ts — Per-level discipline content (Mortis + Thaumaturgy paths/rituals)
  roads-content.data.ts      — Full road content with Hierarchy of Sins tables (all 5 roads)
  specialties.data.ts        — ABILITY_SPECIALTIES (real book data, 30 abilities), EXPERIENCE_FIELDS (4), MAX_SPECIALTIES_PER_ABILITY=3
  languages.data.ts          — LANGUAGE_GROUPS by continent, LANGUAGES_BY_LINGUISTICS=[0,1,2,4,8,16]
```

### Services
```
src/app/vampire-dark-age/creation/services/
  creation-state.service.ts  — Single source of truth (priorities, points, disciplines, backgrounds,
                               virtues, freebies, generation, specialties, experiences, languages,
                               magic paths/rituals); build() produces the sheet
  creation-dialog.service.ts — Opens info/picker modals
  specialty.service.ts       — Manages specialties + experience fields (multi-select modals);
                               showChosenFor(member, specialties, experiences) for sheet view
  discipline.service.ts      — Opens discipline modals; chooseSenda/chooseRitual pickers
```

### Components
```
src/app/vampire-dark-age/creation/components/
  creation-dots/             — Controlled dot component (10×14px ellipse, [highlightFrom] for freebie red)
  info-icon/                 — Button that opens InfoDialog
  info-dialog/               — Universal modal (body/levels/paths/rituals/items/multiSelect; collapsible items)

src/app/vampire-dark-age/creation/
  creator.component.ts       — 5-step wizard shell; invalidates freebie baseline on back-nav
```

### Steps
```
src/app/vampire-dark-age/creation/steps/
  concept-step/     — Clan/road/nature/demeanor selection; clan descriptions; road info inline panel;
                      discipline modals; recommended road badges (★)
  attributes-step/  — Priority selection + 7/5/3 dot distribution (NO specialties on attributes)
  abilities-step/   — Priority selection + 13/9/5 dot distribution
  advantages-step/  — Disciplines (4pts), backgrounds (5pts), virtues (7pts);
                      magic path/ritual pickers for Tremere/Cappadocian;
                      language section (native text input + continent checkboxes)
  finishing-step/   — 15 freebie points; specialty buttons per ability (≥1 dot);
                      experience field buttons for generic abilities;
                      highlighted freebie dots in red (via highlightFrom baseline)
```

### Pipes
```
src/app/vampire-dark-age/creation/pipes/
  creation-label.pipe.ts     — Impure pipe translating stored IDs (clan/path/archetype/specialty/weakness)
                               to current language. Falls back to capitalised raw value.
                               weakness → '' if clan unknown.
```

### i18n
```
src/assets/i18n/
  es.json   — Primary (Spanish-first). Contains all creation keys.
  en.json   — Mirrors es.json structure; English values (some discipline/road content still Spanish).
```

---

## Key Design Decisions

### ID storage (not baked text)
`build()` stores clan id, road id, nature/demeanor archetype ids — NOT translated text. The sheet displays via `| creationLabel:'clan'` / `| creationLabel:'path'` / `| creationLabel:'archetype'` (impure pipe). If the user manually edits an `arm-input`, it becomes free text and loses the reactive translation — that's intentional.

### Generation
Generation background dot count → `generation.data.ts` lookup → auto-derives bloodPool, bloodPerTurn, maxTrait. Generation shown in concept step and advantages step. Sets `sheet.bloodPool.max` in `build()`.

### Specialties
- Abilities only (NOT attributes)
- Bought with freebies in the finishing step only (not gated by dots during creation)
- Max 3 per ability, 1 freebie each
- Real book data in `ABILITY_SPECIALTIES` (30 abilities × up to 3 names, from Capítulo Cinco)
- State: `specialties: Record<string, string[]>`
- Sheet: `VampireDarkAgesSheet.specialties?: Record<string, string[]>`
- `circle-input` shows ★ + count badge when specialties exist; click → modal listing them

### Experience fields
- Generic abilities only: `academics / commerce / performance / crafts`
- First one per ability is FREE, each additional costs 1 freebie
- Max = ability's dot value; combine with specialty for +2 dice max
- State: `experiences: Record<string, string[]>`
- Sheet: `VampireDarkAgesSheet.experiences?: Record<string, string[]>`

### Languages
- `state.nativeLanguage` (free text) — always free
- `state.selectedLanguages` (string ids from `LANGUAGE_GROUPS`) — capped by `languageAllowance()`
- Allowance = `LANGUAGES_BY_LINGUISTICS[linguisticsDots]` = `[0,1,2,4,8,16]`
- `build()` writes native + selected language names to `sheet.advantages.languages` as `{name, level:0}`

### Magic disciplines (Thaumaturgy / Mortis)
- Clan has a `magicDisciplineKey` — Tremere → thaumaturgy, Cappadocian → mortis
- When discipline ≥1 dot: two pickers appear (chooseSenda / chooseRitual)
- Senda picker = collapsible items (name + short text + 5 levels)
- Ritual picker = level-1 rituals only (novice starts with one)
- `build()` writes `disciplines[key].paths=[{name, level=disc, inBlood:true}]` + `.rituals=[{name, level:1}]`

### Road display
- Inline panel in concept step (not modal) — shows latin name, nickname, description, aura, ethics, hierarchy of sins table
- Recommended roads from `clans.data.ts.recommendedRoads` marked with ★ (soft recommendation, not auto-selected)

### Freebie dot highlighting
- `creation-dots` takes `[highlightFrom]` — dots above this baseline render in red (#c22626)
- Baseline captured at start of finishing step; invalidated on back-nav so it refreshes correctly

---

## Model Changes

```typescript
// VampireDarkAgesSheet
specialties?: Record<string, string[]>
experiences?: Record<string, string[]>

// VampireDABackground
weakness?: string   // auto-filled from clan by build(); derived via creationLabel pipe on sheet
```

---

## Sheet Components Modified

| Component | Change |
|-----------|--------|
| `player-data.component.html` | clan/nature/demeanor → `\| creationLabel:'clan'/'archetype'` |
| `road.component.html` | road name → `\| creationLabel:'path'` |
| `weakness.component.html` | shows `clan \| creationLabel:'weakness'` |
| `attributes.component.ts` | Removed SpecialtyService (attributes have no specialties) |
| `talents/skills/knowledges` | Added SpecialtyService; `[specialties]`, `[experiences]` bindings; `(onSpecialtyClick)` handler |
| `circle-input` | Added `[specialties]`, `[experiences]` inputs; ★ badge; `onSpecialtyClick` output |
| Header | Added "Crear personaje" menu item → `/vampire-dark-ages/create` |

---

## Pending Work (priority order)

### Later / backlog
- Custom (homebrew) backgrounds & abilities in creator (like `arm-add-custom-property-button`)
- Per-level backgrounds info modal
- Merits and flaws (flaws grant points, merits cost freebies)
- Non-clan discipline purchase with freebies
- English translations for discipline/road/specialty content (currently Spanish-only in TS)

---

## Visual Style Reference

- **Fonts:** "Property names font" = MrsEaves | "Section font" = Solemnity | "Titles font" = Mordred
- **Dots:** 10×14px ellipse, `border-radius: 100%`, freebie dots = `#c22626`
- **Selected chips:** dark-red `#b8302a` background, white text
- **Recommended road badge:** ★ inline
- **InfoDialog:** `max-height: 70vh; overflow-y: auto` inside `mat-dialog-content`; dialog config `width: 560px / maxWidth: 95vw / maxHeight: 90vh`

---

## Discipline Content Notes

`disciplines-content.data.ts` is Spanish-only. Each power has:
- `name` — power name
- `summary` — one-line mechanic description (dice pool / difficulty / effect), e.g. _"Manipulación + Intimidación, dif. = Fuerza de Voluntad del objetivo"_
- Or `passive: true` for Celerity/Potence/Fortitude

Mortis and Thaumaturgy use `paths[]` + `rituals[]` instead of flat levels. The `howItWorks` field on magic disciplines is shown as a "Cómo funciona" rules summary instead of dumping all paths in one modal.

The user noted that dice pools need verifying against the PDF (`/tmp/vda.txt` was the extracted text). They said they will fill in accurate effects themselves.
