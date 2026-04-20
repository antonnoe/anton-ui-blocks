# globe-loader

A tiny web component loading indicator with rotating silhouettes of the Netherlands and France. Zero dependencies, ~20KB, uses Shadow DOM so it can't conflict with host styles.

## Install

Copy `globe-loader.js` into your repo (e.g. `/public/globe-loader.js` or `/src/vendor/globe-loader.js`). Load it once on the page:

```html
<script src="./globe-loader.js"></script>
```

Works in any framework (React, Vue, Svelte, plain HTML) — it's a standard custom element.

## Usage

```html
<globe-loader></globe-loader>
```

### Attributes

| Attribute | Values | Default | Description |
|---|---|---|---|
| `size` | number (px) | `260` | Size of the circular loader |
| `lang` | `nl` \| `en` | `nl` | Copy language |
| `speed` | `slow` \| `normal` \| `fast` | `normal` | Rotation speed |
| `compact` | (boolean) | off | Only the spinner, no title/meter/legend |
| `color` | CSS color | `#800000` | Primary color |

### Examples

```html
<!-- Full card, Dutch copy -->
<globe-loader></globe-loader>

<!-- English, smaller -->
<globe-loader lang="en" size="200"></globe-loader>

<!-- Just the spinner, tiny -->
<globe-loader compact size="80"></globe-loader>

<!-- Custom color -->
<globe-loader color="#1a4d3a"></globe-loader>
```

### In React

```jsx
// Works out of the box — custom elements render as-is.
<globe-loader lang="en" size={240} />
```

## Attribution

Country silhouettes derived from [Natural Earth](https://www.naturalearthdata.com/) 50m data (public domain) via [world-atlas](https://github.com/topojson/world-atlas).
