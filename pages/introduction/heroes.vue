<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { mdiLaunch } from '@mdi/js';

const heroes = useHeroes();
const { mobile } = useDisplay();
</script>

<template>
  <v-article variant="flat" title="Heroes">
    <v-lazy v-for="hero in heroes.list" :key="hero.name">
      <v-card-item :id="`${hero.name.replaceAll(' ', '-').toLowerCase()}`">
        <v-card rounded="lg" variant="tonal">
          <v-card-item class="d-flex align-start hero-card">
            <template #prepend>
              <v-avatar :image="`/images/heroes/${hero.name}.webp`" :size="mobile ? 64 : 96" />
            </template>

            <v-hover v-slot="{ isHovering, props }">
              <v-card-title
                v-bind="props" tag="h2" class="ml-4 text-h6 text-md-h5 font-weight-medium"
              >
                <v-link :to="`#${hero.name.replaceAll(' ', '-').toLowerCase()}`">
                  {{ hero.name }}
                  <v-slide-x-transition>
                    <v-icon v-if="isHovering" :icon="mdiLaunch" :size="20" />
                  </v-slide-x-transition>
                </v-link>
              </v-card-title>
            </v-hover>
          </v-card-item>

          <v-card-text class="text-body-1">
            {{ hero.description }}
          </v-card-text>

          <v-card-item class="text-h6">
            Weapons
          </v-card-item>

          <v-card-item>
            <v-row>
              <v-col
                v-for="weapon in hero.weapons" :key="`${hero.name}-${weapon.name}`" cols="12" md="6"
              >
                <v-card variant="flat" :title="weapon.name" rounded="xl">
                  <v-img :aspect-ratio="4 / 3" :src="`/images/weapons/${weapon.name}.webp`" :max-height="250" />
                </v-card>
              </v-col>
            </v-row>
          </v-card-item>

          <v-card-item class="text-h6">
            Difficulty
          </v-card-item>

          <v-card-actions>
            <v-rating
              :model-value="hero.difficulty" :half-increments="true" :readonly="true" color="amber"
              size="large"
            />
          </v-card-actions>
        </v-card>
      </v-card-item>
    </v-lazy>
  </v-article>
</template>
