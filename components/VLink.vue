<script setup lang="ts">
const props = defineProps<{ to: string; }>();
</script>

<template>
  <nuxt-link :to="props.to" class="text-decoration-none text-primary">
    <slot />
  </nuxt-link>
</template>
