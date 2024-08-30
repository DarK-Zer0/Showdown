<script lang="ts" setup>
import type { NuxtError } from '#app';
import { useTheme } from 'vuetify';

const description = 'A guide designed to help players progress in Naraka\'s Campaign mode';

const props = defineProps<{
  error: NuxtError;
}>();

const theme = useTheme();
const colorMode = useColorMode({ storageKey: 'theme' });

const headline = computed(() =>
  props.error.statusCode === 404
    ? 'We could not find what you were looking for'
    : 'Oops, we did it again'
);

const title = computed(() => `${props.error.statusCode} - Showdown Guide`);

useSeoMeta({
  title: title.value,
  ogTitle: 'Naraka Bladepoint - Showdown Guide',
  twitterTitle: 'Naraka Bladepoint - Showdown Guide',
  description: description,
  ogDescription: description,
  twitterDescription: description
});

onMounted(() => theme.global.name.value = (colorMode.value === 'auto' ? colorMode.system.value : colorMode.value));
</script>

<template>
  <v-app>
    <v-main class="d-flex flex-column flex-grow-1">
      <v-empty-state :headline title="Try these instead">
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn
              variant="tonal" rounded="lg" to="/" text="Go home"
              append-icon="$next" size="large"
            />
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn
              variant="tonal" rounded="lg" to="/heroes" text="View heroes"
              append-icon="$next" size="large"
            />
          </v-col>
        </v-row>
      </v-empty-state>
    </v-main>
  </v-app>
</template>
