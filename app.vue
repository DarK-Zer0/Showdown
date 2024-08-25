<script setup lang="ts">
const description = 'A guide designed to help players progress in Naraka\'s Campaign mode.';

useHead({
  htmlAttrs: {
    lang: 'en'
  }
});

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Showdown Guide` : 'Naraka Bladepoint - Showdown Guide';
  },
  ogTitle: 'Naraka Bladepoint - Showdown Guide',
  twitterTitle: 'Naraka Bladepoint - Showdown Guide',
  description: description,
  ogDescription: description,
  twitterDescription: description
});
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
