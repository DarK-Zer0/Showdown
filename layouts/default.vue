<script lang="ts" setup>
import { useTheme } from 'vuetify';
import { hiDice, hiMoon02, hiPaintBoard, hiSun03, hiUserGroup } from '~/iconsets/stroke';
import type { IconValue } from '~/iconsets';

interface Route {
  title: string;
  to: string;
  icon: IconValue;
}

const theme = useTheme();
const colorMode = useColorMode({ storageKey: 'theme' });
const nav = ref(false);

const toggleTheme = () =>
  colorMode.value = theme.global.name.value = theme.current.value.dark ? 'light' : 'dark';

const routes: Route[] = [
  { title: 'Heroes', to: '/heroes', icon: hiUserGroup },
  { title: 'Builds', to: '/builds', icon: hiDice }
];

onMounted(() => theme.global.name.value = (colorMode.value === 'auto' ? colorMode.system.value : colorMode.value));
</script>

<template>
  <v-app>

    <v-navigation-drawer v-model="nav" :disable-resize-watcher="true" :temporary="true">

      <v-list
        :nav="true" aria-label="Navigation links" color="primary"
      >
        <v-list-item
          v-for="route in routes" :key="route.to" append-icon="$next"
          rounded="xl s-lg" :title="route.title" :to="route.to" role="option"
        >
          <template #prepend>
            <v-icon :icon="route.icon" class="me-n4"/>
          </template>
        </v-list-item>
      </v-list>

      <template #append>
        <v-list :nav="true" aria-label="Website options">
          <v-list-item
            title="Theme" rounded="xl s-lg" role="option" @click.prevent="toggleTheme"
          >
            <template #prepend>
              <v-icon :icon="hiPaintBoard" class="me-n4"/>
            </template>

            <template #append>
              <span class="text-subtitle-2 me-2">
                {{ theme.current.value.dark ? 'Dark' : 'Light' }}
              </span>
              <v-icon icon="$next"/>
            </template>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main class="min-h-page">

      <div class="position-fixed w-100 z-100">
        <v-container class="px-2 px-lg-4">
          <v-toolbar
              :elevation="4" rounded="xl" color="surface" class="frosted"
          >
            <template #prepend>
              <nuxt-link to="/" class="d-flex align-center text-decoration-none on-background">
                <v-avatar :size="48" class="ml-1 mr-4">
                  <v-logo />
                </v-avatar>

                <v-app-bar-title class="text-h6 font-weight-bold">
                  Showdown Guide
                </v-app-bar-title>
              </nuxt-link>
            </template>

            <template #append>
              <v-app-bar-nav-icon
                rounded="xl" class="mr-1 d-md-none"
                :aria-label="nav ? 'Close navigation drawer' : 'Open navigation drawer'" @click="nav = !nav"
              />

              <v-tabs class="d-none d-md-flex" :mandatory="true">
                <v-tab
                  text="Heroes" :rounded="0" :prepend-icon="hiUserGroup" to="/heroes"
                  class="font-weight-bold"
                />
                <v-tab
                  text="Builds" :rounded="0" :prepend-icon="hiDice" to="/builds"
                  class="font-weight-bold"
                />
              </v-tabs>

              <v-app-bar-nav-icon
                  :icon="theme.current.value.dark ? hiSun03 : hiMoon02"
                  :aria-label="theme.current.value.dark ? 'Change to light theme' : 'Change to dark theme'"
                  class="mx-2 d-none d-md-inline-flex" @click.prevent="toggleTheme"
              />
            </template>
          </v-toolbar>
        </v-container>
      </div>

      <slot/>
    </v-main>

    <v-footer color="background" class="pb-0">
      <v-container class="py-0">
        <v-card
          variant="tonal" :flat="true" color="primary" rounded="xl t-pill-sm b-0"
        >
          <v-card-item class="mx-8">
            <v-card-title class="text-center py-4 px-2">
              Showdown Guide
              <v-card-subtitle>
                &copy; {{ new Date().getFullYear() }} All rights reserved.
              </v-card-subtitle>
            </v-card-title>
          </v-card-item>

          <v-card-text class="text-center">
            We are not affiliated with
            <a
              class="text-primary" rel="nofollow" target="_blank" href="https://www.24-ent.com/"
            >
              24 Entertainment
            </a>
            or
            <a
              class="text-primary" rel="nofollow" target="_blank" href="https://www.neteasegames.com/"
            >
              NetEase
            </a>
          </v-card-text>
        </v-card>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
.rounded-t-pill-sm {
  @media (min-width: 600px) {
    border-top-left-radius: 9999px !important;
    border-top-right-radius: 9999px !important;
  }
}

.z-100 {
  z-index: 100 !important;
}

.min-h-page {
  min-height: calc(100vh - 64px);
}
</style>
