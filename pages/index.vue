<script lang="ts" setup>
const img = useImage();
const lazySource = img('/images/banner.jpg');

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/banner.webp',
      type: 'image/webp'
    }
  ]
});
</script>

<template>
  <v-page :fluid="true" class="pa-0">

    <v-parallax
      src="/images/banner.webp" :lazy-src="lazySource" class="h-page"
    />

    <v-container class="h-page">
      <div class="py-8 text-center">
        <h1 class="text-h2">
          Ready to up your game?
        </h1>
      </div>

      <div class="text-center">
        <v-btn
          variant="tonal" size="x-large" text="Get Started" append-icon="$next"
        />
      </div>
    </v-container>

  </v-page>
</template>

<style lang="scss" scoped>
.h-page {
  min-height: 100vh !important;
  height: 100vh !important;
  max-height: 100vh !important;
}
</style>
