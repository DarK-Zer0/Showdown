<script setup lang="ts">
import type { Hero } from '~/@types';

definePageMeta({
  validate: ({ params }) => {
    const heroes = useHeroes();
    return heroes.all.find(hero => hero.name.toLowerCase().replace(' ','-') == params.id) !== undefined;
  }
});

const { id } = useRoute().params;
const img = useImage();
const heroes = useHeroes();
const hero = computed<Hero | undefined>(() => heroes.all.find(hero => hero.name.toLowerCase().replace(' ','-') == id));
const lazySource = computed(() => hero.value === undefined ? undefined : img(`/banners/heroes/${hero.value.name}.webp`, { quality: 20 }));

if (hero.value && lazySource.value) {
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

  useSeoMeta({
    title: hero.value.name,
    description: hero.value.description,
    ogTitle: `${hero.value.name} - Showdown Guide`,
    ogDescription: hero.value.description,
    twitterTitle: `${hero.value.name} - Showdown Guide`,
    twitterDescription: hero.value.description,
    ogImage: `/banners/heroes/${hero.value.name}.webp`,
    twitterImage: `/banners/heroes/${hero.value.name}.webp`
  });
}
</script>

<template>
  <v-page :fluid="true" class="pa-sm-0 page-offset page-offset-sm-0">

    <template v-if="hero">

      <v-parallax
        :src="`/banners/heroes/${hero.name}.webp`" :lazy-src="lazySource" :alt="`${hero.name}'s banner, from the Naraka Bladepoint game`"
        class="h-page d-none d-sm-block"
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
            :src="`/stats/heroes/${hero.name}.webp`" :lazy-src="img(`/stats/heroes/${hero.name}.webp`, { quality: 20 })"
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
