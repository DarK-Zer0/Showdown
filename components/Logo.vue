<script setup lang="ts">
interface LogoProps {
  size?: number;
}

const props = withDefaults(
  defineProps<LogoProps>(),
  {
    size: 48
  }
);

const source = computed(() => props.size > 48 ? '/favicon-64x64.png' : '/favicon-32x32.png');
</script>

<template>
  <v-img
    :src="source" alt="Showdown Guide Logo" :width="size" :height="size"
  />
</template>
