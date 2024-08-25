<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>

<template>
  <nuxt-link :to class="text-decoration-none text-primary">
    <slot />
  </nuxt-link>
</template>
