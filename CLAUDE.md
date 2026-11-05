# CLAUDE.md

Repo: anton-ui-blocks

## Wat dit is
Herbruikbare UI-bouwstenen voor Infofrankrijk-tools en projecten van Communities Abroad (README.md).

## Live adres
Geen eigen site. Het script van globe-loader wordt volgens de README via jsDelivr geladen: https://cdn.jsdelivr.net/gh/antonnoe/anton-ui-blocks@main/globe-loader/globe-loader.js

## Opbouw
- globe-loader/: webcomponent met draaiende silhouetten van NL en FR (globe-loader.js, demo.html, README.md)
- belastinggids-2026/index.html: blok Belastinggids Frankrijk 2026, met link naar het Infofrankrijk-artikel over de belastingaangifte
- cc-banner-220x280/index.html: pagina "Tijdelijke weergave-storing" met een knop naar https://www.nederlanders.fr/m (geen Café Claude-banner, ondanks de mapnaam)
- README.md: catalogus (noemt alleen globe-loader; belastinggids-2026 en cc-banner-220x280 staan er niet in)

## Techniek
Plain HTML en JavaScript, geen build, geen package.json. Webcomponents met Shadow DOM. Lettertypen Poppins en Mulish via Google Fonts.

## Externe diensten en namen van omgevingsvariabelen
jsDelivr (levering van het script), Google Fonts. Geen omgevingsvariabelen.

## Hoe het live gaat
Via jsDelivr rechtstreeks uit GitHub (tak main), of door de map te kopiëren naar een tool (README.md).

## Regels en besluiten
Uit README.md:
- Huisstijl: #800000 primair, Helvetica, Poppins en Mulish.
- Elk blok krijgt een eigen map met <blok-naam>.js, README.md en demo.html.
- Eén bestand per blok, geen build-stap.
- Shadow DOM gebruiken zodat het niet botst met host-styles.
- Configuratie via attributen (size, lang, color en dergelijke).
- Nederlandse standaardcopy, lang="en" als optie.

Laatst nagelopen: 5 november 2026
