<script setup lang="ts">
import { mdiLaunch } from '@mdi/js';

const attr = defineProps<{ name: string; }>();

const target = computed(() => attr.name.toLowerCase().replaceAll(' ', '-'));
</script>

<template>
  <v-card-text :id="target">
    <v-hover v-slot="{ isHovering, props }">
      <v-card-title
        v-bind="props" tag="h2" class="text-h6 text-md-h5 font-weight-medium"
      >
        <v-link :to="`#${target}`">
          {{ attr.name }}
          <v-slide-x-transition>
            <v-icon v-if="isHovering" :icon="mdiLaunch" :size="20" />
          </v-slide-x-transition>
        </v-link>
      </v-card-title>
    </v-hover>
  </v-card-text>
</template>
