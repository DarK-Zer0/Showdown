<script setup lang="ts">
import { LinkIcon } from "@heroicons/vue/16/solid";

const attr = defineProps<{ name: string; }>();

const target = computed(() => attr.name.toLowerCase().replaceAll(" ", "-"));
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card-title v-bind="props" :id="target" class="font-weight-medium">
      <v-link :to="`#${target}`">
        {{ attr.name }}
        <v-slide-x-transition>
          <v-icon v-if="isHovering" :icon="LinkIcon" :size="20" />
        </v-slide-x-transition>
      </v-link>
    </v-card-title>
  </v-hover>
</template>
