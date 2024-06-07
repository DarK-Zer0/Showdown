<script setup lang="ts">
import { Bars3Icon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/16/solid';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();

const drawer = ref(false);

const navigations = [
  {
    title: 'Introduction',
    routes: [
      {
        title: 'Getting Started',
        path: '/introduction/getting-started'
      },
      {
        title: 'Heroes',
        path: '/introduction/heroes'
      },
      {
        title: 'Glossary',
        path: '/introduction/glossary'
      }
    ]
  },
  {
    title: 'Progression',
    routes: [
      {
        title: 'Sense Level',
        path: '/progression/sense-level'
      },
      {
        title: 'Hero Level',
        path: '/progression/hero-level'
      },
      {
        title: 'Souljades',
        path: '/progression/souljades'
      },
      {
        title: 'Recasting',
        path: '/progression/recasting'
      }
    ]
  },
  {
    title: 'Builds',
    routes: [
      {
        title: 'Jade Setups',
        path: '/builds/souljades'
      },
      {
        title: 'Wielding Jades',
        path: '/builds/wielding'
      },
      {
        title: 'Potential Plans',
        path: '/builds/potential'
      }
    ]
  },
  {
    title: 'Strategies',
    routes: [
      {
        title: 'Dodge Cancelling',
        path: '/strategies/dodge-cancelling'
      },
      {
        title: 'Knowing Openings',
        path: '/strategies/knowing-openings'
      },
      {
        title: 'Parry Chains',
        path: '/strategies/parry-chains'
      }
    ]
  },
  {
    title: 'End Game',
    routes: [
      {
        title: 'Doom',
        path: '/end-game/doom'
      },
      {
        title: 'Speedrun',
        path: '/end-game/speedrun'
      },
      {
        title: 'Enigma Domain',
        path: '/end-game/enigma-domain'
      },
      {
        title: 'Yama\'s Abyss',
        path: '/end-game/yamas-abyss'
      },
      {
        title: 'Leaderboard',
        path: '/end-game/leaderboard'
      }
    ]
  }
];
</script>

<template>
  <v-app>
    <v-app-bar scroll-behavior="hide" :scroll-threshold="120">

      <v-app-bar-nav-icon v-if="mobile" :icon="Bars3Icon" @click="drawer = !drawer;" />

      <template v-if="!mobile">
        <template v-for="(navigation, index) in navigations" :key="navigation.title">
          <v-menu :open-on-hover="true">
            <template #activator="{ props }">
              <v-btn
                v-bind="props" :text="navigation.title" class="text-body-1" :append-icon="ChevronDownIcon"
              />
            </template>
            <v-card rounded="lg">
              <v-list density="compact">
                <v-list-item
                  v-for="route in navigation.routes" :key="route.path" :to="route.path" :title="route.title"
                />
              </v-list>
            </v-card>
          </v-menu>

          <v-divider
            v-if="index + 1 !== navigations.length" :vertical="true" :inset="true" class="mx-1 my-4"
          />
        </template>
      </template>

    </v-app-bar>

    <v-navigation-drawer v-if="mobile" v-model="drawer">
      <v-list color="primary">
        <v-list-item
          to="/" title="Home"
        />
        <template v-for="navigation in navigations" :key="navigation.title">
          <v-list-group>
            <template #activator="{ props, isOpen }">
              <v-list-item
                v-bind="props" :title="navigation.title" class="text-body-1"
                :append-icon="!isOpen ? ChevronDownIcon : ChevronUpIcon"
              />
            </template>
            <v-list-item
              v-for="route in navigation.routes" :key="route.path"
              :to="route.path" :title="route.title"
            />
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>

    <v-footer>
      &copy; {{ new Date().getFullYear() }} All rights reserved.
      <span class="text-medium-emphasis">
        We are not affiliated with <a class="text-decoration-none text-primary" href="https://www.neteasegames.com/" target="_blank" rel="nofollow">NetEase</a> or <a class="text-decoration-none text-primary" href="https://www.24-ent.com/" target="_blank" rel="nofollow">24 Entertainment</a>.
      </span>
    </v-footer>
  </v-app>
</template>
