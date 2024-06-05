<script setup lang="ts">
const props = defineProps<{
    to: string;
}>();
</script>

<template>
    <nuxt-link :to="props.to" active-class="active">
        <slot />
    </nuxt-link>
</template>
