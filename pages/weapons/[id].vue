<script setup lang="ts">
definePageMeta({
  validate: ({ params }) => {
    const weapons = useWeapons();
    return weapons.all.find(weapon => weapons.toUrl(weapon) == params.id) !== undefined;
  }
});
</script>

<template>
  <v-page />
</template>
