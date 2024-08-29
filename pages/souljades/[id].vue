<script setup lang="ts">
definePageMeta({
  validate: ({ params }) => {
    const jades = useSoulJades();
    return jades.all.find(jade => jades.toUrl(jade) == params.id) !== undefined;
  }
});
</script>

<template>
  <v-page />
</template>
