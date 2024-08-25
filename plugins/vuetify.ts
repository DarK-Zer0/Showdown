import type { ThemeDefinition } from 'vuetify';
import { createVuetify } from 'vuetify';
import { stroke } from '~/iconsets';
import aliases from '~/iconsets/stroke';
import { md3 } from 'vuetify/blueprints';
import { VContainer } from 'vuetify/components';

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    'on-background': '#282A30',
    surface: '#F4F5F8',
    'on-surface': '#3C4149'
  }
};

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#060606',
    'on-background': '#F7F8F8',
    surface: '#131315',
    'on-surface': '#D0D6E0'
  }
};

// noinspection JSUnusedGlobalSymbols
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    aliases: {
      VPage: VContainer
    },
    blueprint: md3,
    defaults: {
      VCardTitle: {
        class: 'text-wrap'
      },
      VPage: {
        class: 'd-flex flex-column flex-grow-1'
      }
    },
    display: {
      mobileBreakpoint: 'sm'
    },
    icons: {
      defaultSet: 'stroke',
      aliases,
      sets: {
        stroke
      }
    },
    ssr: true,
    theme: {
      themes: { light, dark }
    }
  });

  app.vueApp.use(vuetify);
});
