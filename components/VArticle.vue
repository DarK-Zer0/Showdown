<script setup lang="ts">
const props = defineProps<{ title: string; }>();
</script>

<template>
  <v-container class="pa-0">
    <v-article-title>
      {{ props.title }}
    </v-article-title>

    <v-card variant="tonal" rounded="lg">
      <slot />
    </v-card>
  </v-container>
</template>
