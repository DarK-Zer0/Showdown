<script setup lang="ts">
const props = defineProps<{ class?: string; }>();
</script>

<template>
  <v-card-text class="text-body-1" :class="props.class">
    <slot />
  </v-card-text>
</template>
