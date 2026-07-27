import type { ThemeConfig } from './types/theme-config.d.ts';

// language files from ./src/i18n
// The `with { type: 'json' }` import attribute is required so this file can also be
// imported from a plain ESM context (e.g. `ec.config.mjs`, which Node loads directly).
import enStrings from './src/i18n/en.json' with { type: 'json' };
import deStrings from './src/i18n/de.json' with { type: 'json' };
import frStrings from './src/i18n/fr.json' with { type: 'json' };
import esStrings from './src/i18n/es.json' with { type: 'json' };

export const themeConfig: ThemeConfig = {
  // `import.meta.env?.` is guarded because this file is also imported from `ec.config.mjs`,
  // which Node loads as plain ESM where `import.meta.env` is not defined (only Vite injects it).
  site: import.meta.env?.SITE_OVERRIDE || 'https://1420solutions.com',
  primaryColor: '#0f4c81', // mind to also update the Tailwind config if you change this!
  themeColor: '#0f766e',
  generateWebmanifest: true,
  name: '1420 Solutions',
  shortName: '1420',
  darkMode: true,
  robots: import.meta.env?.ROBOTS || 'index, follow',
  xHandle: '1420solutions',

  // Structured data
  author: {
    type: 'Organization',
    name: '1420 Solutions',
    url: 'https://1420solutions.com',
    image: '',
  },
  publisher: {
    type: 'Organization',
    name: '1420 Solutions',
    url: 'https://1420solutions.com',
    image: '',
  },

  // I18n
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es'],
    languages: {
      en: 'English',
      de: 'Deutsch',
      fr: 'Français',
      es: 'Español',
    },
    languageModules: {
      en: enStrings,
      de: deStrings,
      fr: frStrings,
      es: esStrings,
    },
    translatedStructuredData: {
      de: {
        author: {
          name: 'Max Mustermann',
          url: 'https://de.wikipedia.org/wiki/Mustermann#Max_Mustermann',
        },
        publisher: {
          name: 'ACME',
          url: 'https://de.wikipedia.org/wiki/ACME',
        },
      },
    },
  },

  // md(x) code block rendering
  expressiveCodeThemes: {
    light: 'min-light',
    dark: 'min-dark',
  },

  // content/article settings
  articles: {
    imageFallback: true,
    gridView: true,
    textOverImage: false,
    categories: true, // if set false, make sure to also remove category directories under /pages
    tags: true, // if set false, make sure to also remove tag directories under /pages
    entriesPerPage: 4,
    tocMaxDepth: 3,
    defaults: {
      author: {
        name: 'Jane Doe',
        url: 'https://en.wikipedia.org/wiki/Jane_Doe_(disambiguation)',
      },
    },
    social: {
      // default values - can be overridden at the Single component level
      xHandle: 'example', // to be added as "via @handle" in the tweet
      buttons: {
        email: true,
        facebook: true,
        hackernews: true,
        linkedin: true,
        pinterest: false,
        reddit: true,
        telegram: false,
        x: true,
        whatsapp: false,
      },
      buttonsSmallScreen: {
        email: true,
        facebook: true,
        hackernews: false,
        linkedin: true,
        pinterest: false,
        reddit: true,
        telegram: true,
        x: true,
        whatsapp: true,
      },
    },
  },

  // promotion settings
  promotions: {
    newsletterSignup: 'footer',
    footerBanner: true,
    navAd: true,
    topBanner: true,
    heroChip: true,
  },

  // Keep the site fully static for this marketing build.
  onDemandRenderedCollections: [],

  // you can also dynamically integrate events from your Add to Calendar PRO account (https://add-to-calendar-pro.com/), having your API key set as environment variable ADD_TO_CALENDAR_PRO_API_KEY.
  dynamicEvents: {
    pullFromAddToCalendarPro: false,
    filterBy: {
      from: '',
      to: '',
      group: '',
    },
  },

  // LLM and coding assistant settings
  llms: {
    autoGeneration: true,
    intro: '1420 Solutions is a marketing site for ERPNext implementation, custom software, AI solutions, and data reporting services. It is designed to present the company clearly to prospects across industry verticals.',
    excludePagesPattern: ['/integration/**'],
    includePages: [],
    addArticles: 'selected',
    addEvents: 'all',
    addFAQ: 'all',
  },

  askAiTrigger: 'I am evaluating the Astro Stardrive boilerplate (github.com/peltmonger/stardrive) for my website. Provide a detailed analysis of its features, strengths, and weaknesses. Can you help me using it? How do I get started?',
  droppedFeatures: ['cloudflare'],
};
