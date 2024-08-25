<script setup lang="ts">
import type { Hero } from '~/@types';
import { useDisplay } from 'vuetify';

definePageMeta({
  validate: ({ params }) => {
    const heroes = useHeroes();
    return heroes.all.find(hero => hero.name.toLowerCase().replace(' ','-') == params.id) !== undefined;
  }
});

const { id } = useRoute().params;
const { mobile } = useDisplay();
const img = useImage();
const heroes = useHeroes();
const hero = computed<Hero | undefined>(() => heroes.all.find(hero => hero.name.toLowerCase().replace(' ','-') == id));
const lazySource = computed(() => hero.value === undefined ? undefined : img(`/banners/heroes/${hero.value.name}.webp`, { quality: 20 }));

if (lazySource.value !== undefined && !mobile.value)
  useHead({
    link: [
      {
        rel: 'preload',
        as: 'image',
        href: lazySource.value,
        type: 'image/webp'
      }
    ]
  });
</script>

<template>
  <v-page :fluid="!mobile" :class="[!mobile ? 'pa-0' : 'page-offset']">

    <template v-if="hero">

      <v-parallax
        v-if="!mobile" :src="`/banners/heroes/${hero.name}.webp`" :lazy-src="lazySource" :alt="`${hero.name}'s banner, from the Naraka Bladepoint game`"
        class="h-page"
      />

      <div class="d-flex justify-center align-center h-title">
        <h1 class="text-h2">
          {{ hero.name }}
        </h1>
      </div>

      <v-container>
        <p class="text-body-1 text-center">
          {{ hero.description }}
        </p>
      </v-container>

      <v-container class="d-flex flex-column align-center flex-md-row">
        <v-card rounded="xl" :flat="true" color="transparent">
          <v-img
            :src="`/stats/heroes/${hero.name}.png`" :lazy-src="img(`/stats/heroes/${hero.name}.png`, { quality: 20 })"
            :alt="`${hero.name}'s stats, from the Naraka Bladepoint game`" class="h-stats"
          />
        </v-card>
      </v-container>

    </template>

  </v-page>
</template>

<style lang="scss" scoped>
$height-title: 90px;
.h-title {
  min-height: $height-title !important;
  height: $height-title !important;
}

.h-page {
  $height: calc(100vh - $height-title);
  min-height: $height !important;
  height: $height !important;
  max-height: $height !important;
}

.h-stats {
  min-height: 742px !important;
  height: 742px !important;
  max-height: 742px !important;
  min-width: 272px !important;
  width: 272px !important;
  max-width: 272px !important;
}
</style>
