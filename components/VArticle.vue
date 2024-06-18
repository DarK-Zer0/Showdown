<script setup lang="ts">
const props = defineProps<{ title: string; variant?: 'flat' | 'tonal'; }>();
</script>

<template>
  <v-container class="pa-0">
    <v-article-title>
      {{ props.title }}
    </v-article-title>

    <v-card :variant="props.variant ?? 'tonal'" rounded="lg">
      <slot />
    </v-card>
  </v-container>
</template>
