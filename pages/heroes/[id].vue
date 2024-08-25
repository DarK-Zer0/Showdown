<script setup lang="ts">
import type { Hero } from '~/@types';

definePageMeta({
  validate: ({ params }) => {
    const heroes = useHeroes();
    return heroes.all.find(hero => hero.name.toLowerCase().replace(' ','-') == params.id) !== undefined;
  }
});

const { id } = useRoute().params;
const heroes = useHeroes();
const hero = computed<Hero | undefined>(() => heroes.all.find(hero => hero.name.toLowerCase().replace(' ','-') == id));
</script>

<template>
  <v-page class="page-offset">
    {{ hero.name }}
  </v-page>
</template>
