<script setup lang="ts">
definePageMeta({
  validate: ({ params }) => {
    const setups = useSoulJadeSetups();
    return setups.all.find(setup => setups.toUrl(setup) == params.id) !== undefined;
  }
});
</script>

<template>
  <v-page />
</template>
