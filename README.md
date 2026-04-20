# anton-ui-blocks

Herbruikbare UI-bouwstenen voor InfoFrankrijk-tools en Communities Abroad projecten.
Elk blokje is een zelfstandig webcomponent of script dat je met één `<script src>` kunt laden — werkt in plain HTML, WordPress, React, overal.

**Huisstijl:** `#800000` primair, Helvetica/Poppins/Mulish. Zie `antonnoe/anton-ai-werkwijze` voor de generieke regels.

---

## Catalogus

| Blok | Beschrijving | Status |
|---|---|---|
| [`globe-loader/`](./globe-loader/) | Loader met draaiende silhouetten van NL + FR | ✅ klaar |
| _(toekomstig)_ save-dossier-button | "Opslaan in Dossier" knop (afsplitsing van `tool-templates`) | ⏳ |
| _(toekomstig)_ banners | Cafe Claude / InfoFrankrijk banners | ⏳ |
| _(toekomstig)_ infographics | Data-visualisaties voor marketing | ⏳ |

---

## Hoe te gebruiken

In elke tool:

```html
<script src="https://cdn.jsdelivr.net/gh/antonnoe/anton-ui-blocks@main/globe-loader/globe-loader.js"></script>
<globe-loader lang="nl"></globe-loader>
```

Of lokaal: kopieer de map naar je tool en laad het script relatief.

---

## Nieuw blok toevoegen

Elke component krijgt een eigen map:

```
anton-ui-blocks/
├── README.md              # deze catalogus
└── <blok-naam>/
    ├── <blok-naam>.js     # de component zelf
    ├── README.md          # attributen + voorbeelden
    └── demo.html          # visuele demo van alle varianten
```

Conventies:
- Eén bestand per blok — geen build-step nodig.
- Shadow DOM gebruiken zodat het niet botst met host-styles.
- Attributen voor configuratie (`size`, `lang`, `color`, etc.).
- Nederlandse standaardcopy; `lang="en"` als optie.

---

*Onderdeel van Communities Abroad / InfoFrankrijk ecosysteem.*
