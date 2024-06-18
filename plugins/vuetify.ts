import 'vuetify/styles';
import { mdiChevronDown } from '@mdi/js';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

// noinspection JSUnusedGlobalSymbols
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults: {
      VCardTitle: {
        class: 'text-wrap'
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        dropdown: mdiChevronDown
      },
      sets: {
        mdi
      }
    },
    ssr: true
  });
  app.vueApp.use(vuetify);
});
