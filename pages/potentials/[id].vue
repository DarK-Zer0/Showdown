<script setup lang="ts">
definePageMeta({
  validate: ({ params }) => {
    const potentials = usePotentials();
    return potentials.all.find(jade => potentials.toUrl(jade) == params.id) !== undefined;
  }
});
</script>

<template>
  <v-page />
</template>
