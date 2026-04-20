// globe-loader — a tiny web component.
// <globe-loader size="260" lang="nl" speed="normal"></globe-loader>
// Silhouettes derived from Natural Earth 50m (public domain).

(function () {
  const NL_PATH = "M63.38 94.00 L61.51 93.95 L59.76 93.89 L58.82 93.73 L57.82 93.26 L57.35 92.30 L56.81 91.18 L56.94 90.44 L58.62 88.47 L58.89 87.89 L58.69 87.62 L58.89 86.72 L60.16 83.74 L60.30 82.52 L59.76 81.67 L58.89 81.19 L56.21 80.29 L54.93 79.07 L54.39 77.95 L53.79 77.63 L52.92 78.00 L50.70 78.43 L48.89 77.85 L46.75 75.77 L46.28 73.91 L46.01 72.53 L45.47 72.00 L44.73 72.74 L43.86 73.91 L42.05 74.02 L41.58 73.75 L41.45 73.12 L41.38 72.53 L40.84 71.79 L40.37 71.36 L38.09 73.49 L37.22 73.43 L36.15 72.64 L35.61 71.84 L34.47 72.32 L33.40 73.28 L33.80 75.14 L33.20 75.45 L31.92 75.29 L30.44 74.55 L28.83 74.07 L26.35 72.80 L22.93 73.86 L20.52 72.58 L18.57 72.48 L17.30 71.47 L16.02 69.82 L16.96 68.71 L17.83 68.33 L21.46 68.12 L24.14 68.81 L28.90 72.43 L30.11 72.37 L31.38 71.95 L30.71 70.94 L29.51 70.46 L27.76 69.50 L26.35 68.12 L29.64 67.70 L29.17 67.00 L28.77 65.78 L25.28 61.58 L25.88 60.42 L26.76 57.97 L27.83 55.95 L28.70 55.42 L30.18 53.99 L33.26 49.73 L35.27 46.28 L36.75 42.24 L38.90 30.98 L39.57 29.06 L40.57 26.94 L41.92 27.36 L42.79 27.95 L46.01 26.35 L51.58 22.21 L53.19 18.59 L54.80 16.95 L61.17 13.65 L64.66 12.70 L70.09 12.43 L74.05 11.85 L78.75 11.63 L80.56 13.65 L81.56 15.14 L83.24 15.94 L85.86 16.52 L85.66 19.44 L85.72 25.18 L85.52 26.19 L84.31 28.64 L83.11 32.94 L82.77 35.81 L82.44 36.40 L77.47 36.34 L76.80 36.87 L76.67 37.46 L76.93 38.20 L76.80 38.95 L76.40 39.53 L76.60 40.49 L77.47 41.55 L79.01 42.24 L80.69 42.29 L81.56 42.19 L82.17 42.93 L82.84 44.10 L82.77 45.64 L82.50 47.61 L81.76 49.47 L79.48 51.59 L78.41 52.34 L77.47 52.76 L77.00 53.29 L76.80 54.04 L76.87 54.68 L78.48 56.38 L78.41 56.75 L77.94 57.65 L77.34 58.50 L73.18 60.26 L71.43 60.10 L70.49 60.95 L70.16 61.16 L69.09 60.31 L66.60 59.41 L65.73 59.72 L65.19 60.26 L63.65 60.84 L62.58 61.80 L62.58 63.02 L64.52 66.21 L65.19 66.85 L65.19 68.07 L66.13 69.56 L67.14 71.42 L67.21 72.58 L67.14 73.81 L66.60 75.51 L64.93 79.49 L64.93 80.29 L65.06 80.87 L65.66 81.03 L66.07 81.35 L65.93 81.88 L62.78 84.65 L62.38 85.13 L61.10 84.97 L60.90 85.44 L61.04 86.19 L61.57 86.88 L62.71 87.20 L63.65 87.89 L64.46 89.27 L63.38 94.00 Z M30.44 74.55 L30.18 75.72 L29.51 77.00 L27.02 78.80 L24.41 80.02 L23.13 79.86 L22.19 79.23 L21.72 78.59 L20.31 77.95 L18.44 77.63 L17.23 78.32 L16.42 78.96 L15.69 78.86 L15.15 78.32 L14.68 77.47 L14.14 74.82 L15.55 74.34 L18.64 74.13 L20.99 75.08 L24.07 75.51 L26.49 74.23 L28.37 75.35 L30.44 74.55 Z M69.76 9.51 L67.14 10.57 L66.47 10.36 L66.67 10.04 L68.95 9.40 L69.76 9.51 Z M62.24 11.10 L58.55 11.58 L57.28 11.21 L57.08 10.89 L58.08 10.68 L61.24 10.62 L62.18 10.94 L62.24 11.10 Z M46.95 15.72 L43.46 17.96 L43.19 17.64 L45.40 15.67 L46.95 15.72 Z M50.97 13.33 L49.23 13.60 L48.42 13.17 L52.65 11.95 L55.27 11.58 L55.74 11.74 L50.97 13.33 Z M42.79 23.00 L40.91 25.18 L39.77 24.55 L39.50 24.07 L40.04 22.37 L42.79 19.55 L42.79 23.00 Z M25.28 63.76 L27.16 65.41 L27.49 65.94 L27.63 66.53 L25.35 67.16 L22.86 65.14 L21.25 65.62 L20.65 64.67 L20.65 64.03 L22.33 63.55 L25.28 63.76 Z M77.20 7.33 L75.53 7.43 L76.00 6.64 L77.61 6.00 L78.48 6.00 L77.20 7.33 Z";
  const FR_PATH = "M93.54 80.68 L93.38 81.98 L93.49 82.37 L93.71 82.65 L93.82 82.94 L94.00 86.43 L93.96 86.71 L93.20 88.12 L93.05 88.52 L93.00 90.27 L92.87 90.74 L92.61 91.20 L92.14 92.69 L91.72 93.36 L90.59 92.53 L89.93 92.19 L89.62 91.81 L89.40 91.54 L89.53 91.19 L89.84 90.83 L89.88 90.54 L89.18 90.21 L88.84 89.99 L88.84 89.62 L89.09 89.03 L88.98 88.54 L88.58 88.57 L88.25 88.49 L88.22 88.23 L88.45 87.90 L88.76 87.48 L88.73 87.02 L88.38 86.81 L88.05 86.43 L87.92 85.92 L88.18 85.56 L88.58 85.33 L88.29 84.80 L88.07 84.78 L87.92 84.68 L88.05 84.43 L88.36 84.06 L88.82 82.96 L89.44 82.44 L90.55 82.10 L90.86 81.96 L91.12 81.58 L91.43 81.33 L91.79 81.36 L92.14 81.50 L92.34 81.67 L92.52 81.50 L92.65 81.02 L92.56 80.60 L92.61 79.44 L92.81 78.79 L93.14 78.74 L93.42 79.11 L93.40 79.42 L93.51 80.18 L93.54 80.68 Z M82.07 37.92 L81.32 38.33 L81.17 38.68 L80.88 39.15 L80.39 39.35 L79.93 39.41 L79.53 39.35 L79.31 39.16 L79.33 38.99 L79.13 38.85 L78.62 38.85 L78.09 39.18 L77.67 39.71 L77.80 40.00 L78.20 40.08 L78.29 40.19 L78.29 40.34 L78.16 40.53 L78.00 40.84 L77.18 41.77 L76.36 42.70 L76.23 42.98 L75.99 43.18 L74.95 43.68 L74.84 43.88 L74.77 44.71 L74.66 45.41 L73.89 46.05 L73.13 46.70 L72.93 47.09 L72.80 47.54 L72.56 48.06 L72.51 48.33 L72.89 48.78 L72.85 49.13 L72.74 49.66 L72.36 50.03 L71.96 50.23 L71.96 50.81 L72.18 50.88 L72.67 50.84 L73.38 50.43 L73.82 49.89 L73.55 49.40 L73.51 49.30 L73.58 49.18 L74.13 48.64 L74.77 48.31 L75.70 48.25 L76.81 48.43 L76.92 48.51 L76.85 48.85 L76.96 49.35 L77.16 49.69 L76.90 50.68 L77.09 50.98 L77.40 51.35 L77.65 51.69 L78.00 52.00 L78.31 52.51 L78.42 52.81 L77.91 53.33 L77.09 53.81 L76.98 54.11 L77.01 54.46 L77.09 54.74 L77.56 55.10 L78.05 55.89 L78.38 56.60 L79.06 57.30 L79.24 57.50 L79.20 57.67 L79.00 57.97 L78.78 58.94 L78.49 59.10 L78.18 59.16 L77.32 59.87 L76.94 59.78 L76.39 59.80 L76.01 60.03 L76.03 60.46 L76.39 60.88 L76.59 61.32 L76.67 61.78 L77.07 62.12 L77.60 62.32 L77.91 62.34 L78.11 62.46 L78.25 62.62 L78.47 63.61 L78.33 63.86 L78.05 63.97 L77.87 64.37 L77.52 64.97 L77.32 65.45 L77.54 65.87 L77.63 66.18 L77.52 66.51 L77.67 67.00 L78.09 67.50 L79.20 68.21 L80.24 68.77 L80.57 68.86 L81.96 68.51 L82.21 68.54 L82.38 68.97 L82.45 69.27 L82.29 69.70 L81.92 70.32 L81.50 70.80 L81.25 71.22 L81.30 71.59 L81.32 72.09 L80.99 72.24 L80.97 72.14 L80.83 72.06 L80.72 72.10 L80.64 72.21 L80.61 72.40 L79.90 72.72 L79.40 73.05 L77.45 75.02 L76.54 75.61 L76.36 75.95 L76.19 76.60 L75.66 77.16 L75.17 77.42 L74.02 77.70 L72.85 78.29 L72.34 78.04 L70.97 78.06 L70.12 77.34 L68.49 76.89 L67.96 75.86 L67.23 75.79 L66.74 75.82 L66.45 75.67 L66.36 75.31 L66.36 74.97 L65.85 75.13 L65.46 75.13 L65.21 75.27 L65.04 75.42 L64.81 75.31 L64.68 75.36 L64.70 75.56 L64.22 75.61 L63.71 75.48 L62.36 74.94 L62.16 74.86 L61.23 74.66 L60.85 74.45 L60.54 73.90 L60.30 73.75 L60.17 73.64 L59.30 73.90 L58.99 74.32 L58.53 74.82 L55.30 77.22 L54.70 78.21 L54.02 79.70 L53.97 80.38 L54.26 82.58 L54.92 83.75 L55.01 84.02 L54.64 84.02 L54.02 83.87 L53.51 83.70 L53.04 83.79 L52.58 84.04 L52.16 84.18 L51.87 84.23 L51.67 84.35 L51.58 84.63 L51.56 84.83 L51.05 84.78 L49.86 84.38 L48.79 84.10 L48.15 84.41 L47.75 84.71 L47.47 84.66 L47.27 84.37 L47.11 84.06 L46.69 83.79 L45.74 83.37 L45.81 83.17 L45.96 82.89 L45.96 82.72 L45.76 82.47 L44.90 82.20 L44.50 82.13 L44.24 82.32 L44.04 82.55 L43.55 81.70 L43.22 81.53 L42.69 81.50 L42.09 81.23 L41.47 80.91 L39.97 80.38 L39.54 80.32 L39.39 80.40 L39.28 80.72 L39.21 81.61 L39.15 81.71 L38.44 81.75 L37.58 81.62 L37.18 81.68 L36.82 81.68 L36.49 81.44 L35.01 81.71 L34.77 81.58 L34.41 81.17 L33.99 80.85 L33.68 80.69 L33.42 80.49 L33.17 80.46 L32.82 80.65 L32.31 80.72 L31.89 80.71 L31.67 80.74 L30.72 79.75 L30.58 79.48 L30.10 79.41 L29.52 79.39 L28.04 78.75 L27.35 78.40 L27.26 78.20 L27.26 78.04 L27.15 78.07 L26.95 78.37 L26.84 78.60 L26.69 78.65 L26.49 78.61 L26.29 78.48 L26.16 78.30 L26.29 77.99 L26.51 77.61 L26.62 77.17 L26.60 76.80 L26.22 76.55 L25.67 76.44 L25.27 76.41 L24.74 76.20 L24.48 76.04 L24.25 75.61 L24.23 75.30 L25.23 75.03 L26.14 73.90 L27.00 69.83 L27.62 65.00 L28.06 64.11 L28.64 63.84 L28.17 63.19 L27.88 63.52 L27.77 63.87 L27.62 64.06 L27.95 59.64 L28.19 58.01 L28.61 56.32 L29.48 56.99 L30.19 57.67 L30.56 58.28 L31.03 60.25 L31.36 60.66 L31.89 61.07 L31.69 60.62 L31.31 60.28 L30.76 57.64 L30.41 56.90 L29.85 56.28 L28.08 54.96 L27.91 54.70 L27.82 54.20 L28.41 54.22 L28.92 54.46 L28.86 54.19 L28.70 53.89 L28.48 52.82 L28.28 50.33 L28.30 49.89 L28.22 49.36 L27.64 49.26 L27.20 49.22 L26.71 49.02 L24.28 47.55 L23.46 46.03 L22.60 44.92 L22.40 44.42 L22.42 43.92 L22.86 42.89 L22.46 42.22 L22.09 42.09 L21.75 41.77 L22.06 41.23 L22.31 40.87 L22.79 40.78 L23.46 40.90 L24.08 41.21 L24.54 41.29 L23.13 40.45 L20.80 40.73 L20.29 40.62 L19.87 40.44 L19.72 39.82 L20.05 39.54 L20.34 39.01 L20.01 38.65 L19.56 38.51 L18.88 38.53 L18.24 38.64 L18.08 38.42 L18.46 37.85 L18.13 37.63 L17.68 37.74 L17.04 37.85 L16.42 37.68 L15.85 37.03 L15.47 37.03 L15.20 37.10 L14.81 36.86 L14.39 36.79 L14.10 36.87 L13.70 36.50 L11.29 35.74 L10.25 35.65 L9.30 35.99 L8.77 35.88 L8.37 35.38 L8.06 34.58 L6.51 33.94 L6.82 33.52 L7.53 33.43 L8.35 33.13 L8.66 32.78 L8.01 32.34 L7.53 32.24 L7.33 32.08 L7.13 31.71 L7.42 31.52 L7.62 31.62 L8.19 31.68 L9.19 31.58 L8.83 31.20 L8.43 31.10 L8.26 31.01 L7.46 30.96 L7.08 31.10 L6.27 31.04 L6.07 30.62 L6.00 30.27 L6.24 29.48 L7.42 28.76 L10.31 27.97 L11.55 28.08 L12.44 27.94 L13.48 27.46 L13.92 27.03 L15.40 26.78 L16.80 27.23 L18.10 28.92 L18.72 29.49 L20.23 28.50 L22.48 28.53 L22.95 29.09 L23.13 28.62 L23.55 28.07 L23.88 28.31 L24.06 28.66 L26.42 28.56 L26.80 28.47 L26.16 28.07 L25.65 27.11 L25.54 23.56 L24.87 22.56 L24.12 20.98 L23.77 20.05 L23.75 19.73 L23.86 19.26 L24.79 19.28 L25.49 19.40 L26.87 19.04 L27.53 19.29 L27.49 20.02 L27.68 20.95 L27.93 21.39 L28.26 21.90 L29.37 21.85 L30.56 22.14 L32.07 22.19 L34.26 22.72 L35.19 22.41 L36.09 21.77 L37.82 21.35 L37.97 21.14 L36.98 21.23 L36.05 20.83 L35.94 20.38 L36.05 19.99 L36.40 19.09 L39.06 17.66 L40.94 17.23 L42.91 16.46 L43.90 15.65 L44.57 14.60 L44.79 14.38 L45.05 14.18 L44.79 13.81 L44.97 9.84 L45.17 9.12 L45.54 8.53 L46.14 8.09 L47.02 7.59 L50.30 6.91 L50.79 6.64 L50.85 7.06 L51.10 7.60 L51.25 7.90 L51.12 8.29 L51.23 8.61 L51.67 9.19 L52.22 9.73 L52.71 10.09 L52.87 10.04 L53.22 9.95 L53.84 9.59 L54.37 9.48 L54.66 9.74 L54.81 9.90 L55.14 10.52 L55.23 11.15 L55.39 11.68 L55.65 11.90 L56.63 11.98 L57.36 12.18 L57.56 12.35 L57.80 13.53 L57.93 13.70 L58.13 13.56 L58.31 13.37 L58.55 13.34 L58.97 13.42 L59.55 13.43 L60.12 13.56 L60.92 14.24 L60.90 14.46 L60.74 14.84 L60.68 15.15 L60.81 15.28 L61.03 15.59 L60.99 15.96 L60.76 16.22 L60.70 16.44 L60.70 16.58 L60.76 16.69 L60.94 16.78 L62.11 16.92 L63.20 16.78 L63.88 16.41 L64.00 16.02 L64.19 15.57 L64.59 15.18 L64.88 15.06 L65.15 15.22 L64.70 16.80 L65.01 17.20 L65.06 17.80 L65.19 18.33 L65.57 18.32 L66.03 18.41 L66.36 18.61 L66.76 18.92 L67.31 19.22 L67.71 19.31 L67.85 19.56 L68.18 19.84 L68.66 20.41 L69.11 20.80 L69.33 20.80 L69.75 20.64 L70.37 20.55 L70.85 20.56 L71.05 20.86 L71.54 20.98 L71.70 21.11 L71.89 21.31 L72.20 21.39 L72.60 21.31 L72.87 21.03 L73.24 20.90 L73.62 20.95 L73.84 21.11 L74.26 21.32 L74.48 21.28 L74.95 21.42 L75.44 21.83 L75.61 22.27 L75.68 22.50 L75.88 22.76 L76.65 23.93 L76.92 23.99 L77.18 23.80 L77.36 23.56 L77.63 23.51 L78.02 23.62 L78.29 23.76 L78.42 24.27 L78.51 24.36 L78.69 24.25 L79.02 24.22 L79.51 24.35 L80.21 24.21 L80.77 23.99 L81.06 24.00 L81.52 24.59 L82.05 24.81 L83.20 24.98 L84.44 25.26 L84.93 25.49 L85.26 25.60 L85.30 26.38 L85.19 26.50 L83.95 28.05 L83.45 28.61 L83.18 29.41 L82.98 30.62 L82.63 31.79 L82.07 32.89 L81.87 33.72 L82.03 34.27 L81.94 35.13 L81.61 36.31 L81.54 37.21 L81.76 37.80 L82.07 37.92 Z";

  const COPY = {
    nl: {
      tag: "Route synchroniseren",
      title: "De lage landen en de hexagoon draaien rond",
      statuses: [
        "Verbinding opbouwen",
        "Rijndelta oversteken",
        "Grensprotocollen afstemmen",
        "Baansnelheid bijstellen",
        "Bijna daar"
      ],
      origin: "Vertrek",
      dest: "Aankomst",
      originCity: "Amsterdam",
      destCity: "Parijs",
      eta: "ETA"
    },
    en: {
      tag: "Syncing route",
      title: "Orbiting the lowlands and the hexagon",
      statuses: [
        "Establishing connection",
        "Crossing the Rhine delta",
        "Negotiating border protocols",
        "Tuning orbital velocity",
        "Almost there"
      ],
      origin: "Origin",
      dest: "Destination",
      originCity: "Amsterdam",
      destCity: "Paris",
      eta: "ETA"
    }
  };

  const SPEEDS = { slow: 6.4, normal: 4.2, fast: 2.8 };

  class GlobeLoader extends HTMLElement {
    static get observedAttributes() {
      return ["size", "lang", "speed", "compact", "color"];
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._timer = null;
    }

    connectedCallback() {
      this.render();
      this.startTicker();
    }

    disconnectedCallback() {
      if (this._timer) clearInterval(this._timer);
    }

    attributeChangedCallback() {
      if (this.shadowRoot.firstChild) this.render();
    }

    startTicker() {
      if (this._timer) clearInterval(this._timer);
      this._timer = setInterval(() => {
        const pctEl = this.shadowRoot.getElementById("pct");
        const fillEl = this.shadowRoot.getElementById("fill");
        const etaEl = this.shadowRoot.getElementById("eta");
        const statusEl = this.shadowRoot.getElementById("status");
        if (!pctEl) return;
        this._p = ((this._p || 0) + 1) % 101;
        const p = this._p;
        pctEl.textContent = String(p).padStart(2, "0") + "%";
        fillEl.style.width = p + "%";
        if (etaEl) etaEl.textContent = Math.max(0, 6 - Math.floor(p / 17));
        if (p % 20 === 0 && statusEl) {
          this._i = ((this._i || 0) + 1) % this._copy.statuses.length;
          statusEl.textContent = this._copy.statuses[this._i];
        }
      }, 80);
    }

    render() {
      const size = parseInt(this.getAttribute("size") || "260", 10);
      const lang = (this.getAttribute("lang") || "nl").toLowerCase();
      const speedKey = this.getAttribute("speed") || "normal";
      const compact = this.hasAttribute("compact");
      const color = this.getAttribute("color") || "#800000";
      const copy = COPY[lang] || COPY.en;
      this._copy = copy;
      const spin = SPEEDS[speedKey] || SPEEDS.normal;

      const stageW = compact ? size + 24 : Math.max(size + 180, 360);
      const loaderSize = size;
      const planetSize = Math.round(size * 0.3);
      const systemSize = Math.round(size * 0.78);
      const axisOffset = Math.round((systemSize - planetSize) / 2);

      this.shadowRoot.innerHTML = `
<style>
  :host {
    --maroon: ${color};
    --bg: #f6f2ec;
    --ink: #1a1512;
    --muted: #8a8078;
    --rule: rgba(0,0,0,0.12);
    display: inline-block;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: var(--ink);
  }
  .stage {
    width: ${stageW}px;
    background: var(--bg);
    border: 1px solid var(--rule);
    border-radius: 18px;
    padding: ${compact ? "16px" : "40px 40px 32px"};
    box-sizing: border-box;
  }
  .head {
    display: flex; justify-content: space-between; align-items: baseline;
    font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--maroon); font-weight: 600;
  }
  .tag { display: flex; align-items: center; gap: 10px; }
  .dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--maroon); box-shadow: 0 0 0 4px rgba(0,0,0,0.06);
    animation: gl-pulse 1.6s ease-in-out infinite;
  }
  @keyframes gl-pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
  .pair { color: var(--muted); font-variant-numeric: tabular-nums; letter-spacing: .08em; }

  .loader {
    margin: ${compact ? "0 auto" : "32px auto 28px"};
    width: ${loaderSize}px; height: ${loaderSize}px;
    position: relative; display: grid; place-items: center;
  }
  .ring { position: absolute; inset: 0; transform: rotate(-90deg); }
  .ring circle { fill: none; stroke-width: 1.5; }
  .ring .track { stroke: var(--rule); }
  .ring .bar {
    stroke: var(--maroon); stroke-linecap: round;
    stroke-dasharray: 60 740;
    animation: gl-sweep 2.4s cubic-bezier(.6,0,.4,1) infinite;
  }
  @keyframes gl-sweep { from { stroke-dashoffset: 800 } to { stroke-dashoffset: 0 } }

  .system {
    width: ${systemSize}px; height: ${systemSize}px;
    position: relative;
    animation: gl-spin ${spin}s linear infinite;
  }
  @keyframes gl-spin { to { transform: rotate(360deg) } }
  .orbit {
    position: absolute; inset: ${Math.round(planetSize/2 - 4)}px;
    border: 1px dashed rgba(0,0,0,0.14); border-radius: 50%;
  }
  .country {
    position: absolute; top: 50%;
    width: ${planetSize}px; height: ${planetSize}px;
    transform: translate(-50%, -50%);
    animation: gl-counter ${spin}s linear infinite;
    display: grid; place-items: center;
  }
  @keyframes gl-counter { to { transform: translate(-50%, -50%) rotate(-360deg) } }
  .country.nl { left: ${planetSize/2}px; }
  .country.fr { left: calc(100% - ${planetSize/2}px); }
  .country svg { width: 100%; height: 100%; }
  .silhouette {
    fill: var(--maroon); stroke: var(--maroon);
    stroke-width: .6; stroke-linejoin: round;
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.18));
  }
  .label {
    position: absolute; bottom: ${-Math.round(planetSize*0.2)}px;
    left: 50%; transform: translateX(-50%);
    font-size: 9px; letter-spacing: .22em;
    color: var(--maroon); font-weight: 600;
  }
  .core {
    position: absolute; width: 8px; height: 8px; border-radius: 50%;
    background: var(--maroon); box-shadow: 0 0 0 5px rgba(0,0,0,0.06);
  }

  .copy { text-align: center; }
  .title {
    font-size: 18px; font-weight: 500; letter-spacing: -0.01em;
    margin: 0 0 4px;
  }
  .sub { margin: 0; font-size: 13px; color: var(--muted); min-height: 1.2em; }
  .sub .caret::after {
    content: "▍"; margin-left: 2px; color: var(--maroon);
    animation: gl-blink 1s steps(1) infinite;
  }
  @keyframes gl-blink { 50% { opacity: 0 } }

  .meter {
    margin-top: 20px; display: flex; align-items: center; gap: 12px;
    font-size: 11px; color: var(--muted);
    letter-spacing: .14em; text-transform: uppercase;
    font-variant-numeric: tabular-nums;
  }
  .bar-wrap { flex: 1; height: 2px; background: var(--rule); border-radius: 2px; overflow: hidden; }
  .bar-fill { height: 100%; width: 0%; background: var(--maroon); }

  .legend {
    margin-top: 20px; display: flex; justify-content: space-between;
    border-top: 1px solid var(--rule); padding-top: 12px;
    font-size: 11px; letter-spacing: .14em; text-transform: uppercase;
    color: var(--muted);
  }
  .legend b {
    display: block; color: var(--ink); font-weight: 600;
    letter-spacing: .08em; text-transform: none; font-size: 13px; margin-top: 4px;
  }

  :host([compact]) .head, :host([compact]) .copy,
  :host([compact]) .meter, :host([compact]) .legend { display: none; }
</style>
<div class="stage" role="status" aria-live="polite">
  ${compact ? "" : `
    <div class="head">
      <div class="tag"><span class="dot"></span>${copy.tag}</div>
      <div class="pair">NL ⇌ FR</div>
    </div>
  `}
  <div class="loader" aria-hidden="true">
    <svg class="ring" viewBox="0 0 ${loaderSize} ${loaderSize}">
      <circle class="track" cx="${loaderSize/2}" cy="${loaderSize/2}" r="${loaderSize/2 - 3}" />
      <circle class="bar"   cx="${loaderSize/2}" cy="${loaderSize/2}" r="${loaderSize/2 - 3}" pathLength="800" />
    </svg>
    <div class="system">
      <div class="orbit"></div>
      <div class="country nl">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path class="silhouette" fill-rule="evenodd" d="${NL_PATH}" />
        </svg>
        <span class="label">NL</span>
      </div>
      <div class="country fr">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path class="silhouette" fill-rule="evenodd" d="${FR_PATH}" />
        </svg>
        <span class="label">FR</span>
      </div>
    </div>
    <div class="core"></div>
  </div>
  ${compact ? "" : `
    <div class="copy">
      <h1 class="title">${copy.title}</h1>
      <p class="sub"><span id="status">${copy.statuses[0]}</span><span class="caret"></span></p>
    </div>
    <div class="meter">
      <span id="pct">00%</span>
      <div class="bar-wrap"><div class="bar-fill" id="fill"></div></div>
      <span>${copy.eta} 00:0<span id="eta">6</span></span>
    </div>
    <div class="legend">
      <div>${copy.origin}<b>${copy.originCity}</b></div>
      <div style="text-align:right">${copy.dest}<b>${copy.destCity}</b></div>
    </div>
  `}
</div>`;
    }
  }

  if (!customElements.get("globe-loader")) {
    customElements.define("globe-loader", GlobeLoader);
  }
})();
