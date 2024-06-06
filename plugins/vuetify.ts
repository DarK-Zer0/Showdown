import 'vuetify/styles';
import { createVuetify } from 'vuetify';

// noinspection JSUnusedGlobalSymbols
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults: {
      VCardTitle: {
        class: "text-wrap"
      }
    },
    ssr: true
  });
  app.vueApp.use(vuetify);
});
