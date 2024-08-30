<script setup lang="ts">
import type { Hero } from '~/@types';

definePageMeta({
  validate: ({ params }) => {
    const heroes = useHeroes();
    return heroes.all.find(hero => heroes.toUrl(hero) == params.id) !== undefined;
  }
});

const { id } = useRoute().params;
const img = useImage();
const weapons = useWeapons();
const heroes = useHeroes();
const setups = useSoulJadeSetups();
const hero = computed<Hero | undefined>(() => heroes.all.find(hero => hero.name.toLowerCase().replace(' ','-') == id));
const lazySource = computed(() => hero.value === undefined ? undefined : img(`/banners/heroes/${hero.value.name}.webp`, { quality: 20 }));
const builds = computed(() => setups.forHero(hero.value));
const heroWeapons = computed(() => hero.value === undefined ? [] : [{ weapon: hero.value.melee, title: 'Melee' }, { weapon: hero.value.ranged, title: 'Ranged' }]);

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

      <h2 class="text-h4 py-4 text-center">
        Hero Overview
      </h2>

      <v-container class="d-flex flex-column align-center align-md-start flex-md-row-reverse">

        <v-card
          rounded="xl" :flat="true" color="transparent" class="h-stats"
        >
          <v-img
            :src="`/stats/heroes/${hero.name}.webp`" :lazy-src="img(`/stats/heroes/${hero.name}.webp`, { quality: 20 })"
            :alt="`${hero.name}'s stats, from the Naraka Bladepoint game`"
          />
        </v-card>


        <v-container>

          <h3 class="text-h5 text-center">
            Hero Weapons
          </h3>

          <v-row class="py-4">
            <v-col
              v-for="({ weapon, title }) in heroWeapons" :key="`weapon-${weapon.name}`" cols="12" sm="6"
            >
              <v-card :title="`${title} Weapon`" class="d-flex flex-column align-center" :to="`/weapons/${weapons.toUrl(weapon)}`">
                <v-img
                  :src="`/avatars/weapons/${weapon.name}.svg`" :alt="weapon.name" class="weapon-size my-4"
                />

                <v-card-text class="text-center text-body-1">
                  {{ weapon.name }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <h4 class="text-h5 text-center py-4">
            Recommended Builds
          </h4>

          <v-expand-transition>
            <v-card v-if="builds.length > 0" rounded="lg">
              <v-card-text class="text-body-1">
                The following builds are listed with no particular order in mind aside from their main damage source:
              </v-card-text>
              <v-list lines="two">
                <v-list-item
                  v-for="build in builds" :key="`builds-${build.name}`"
                  :title="build.name" :subtitle="`${build.wieldingType} - ${build.category.name} Set`"
                  append-icon="$next" :to="`/builds/${setups.toUrl(build)}`"
                >
                  <template #prepend>
                    <v-icon :icon="build.category.icon" class="mr-n4" />
                  </template>
                </v-list-item>
              </v-list>
            </v-card>
          </v-expand-transition>

          <v-expand-transition>
            <v-empty-state
              v-if="builds.length <= 0" title="No builds for this hero yet"
              text="We are still working on this hero's builds, please check back later."
            />
          </v-expand-transition>
        </v-container>

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

.weapon-size {
  max-width: 75% !important;
  width: 100% !important;
  max-height: 100px !important;
  height: 100px !important;
  @media (min-width: 600px) {
    max-height: 150px !important;
    height: 150px !important;
  }
}
</style>
