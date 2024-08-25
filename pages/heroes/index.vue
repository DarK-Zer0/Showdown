<script setup lang="ts">
const heroes = useHeroes();

useSeoMeta({
  title: 'Heroes - Showdown Guide',
  ogTitle: 'Heroes - Showdown Guide',
  twitterTitle: 'Heroes - Showdown Guide'
});
</script>

<template>
  <v-page class="page-offset">

    <v-container>
      <h1 class="text-h3">
        Heroes
      </h1>
    </v-container>

    <v-row>
      <v-col v-for="hero in heroes.all" :key="hero.name" cols="12">
        <v-card class="d-flex flex-column flex-sm-row" :to="`/heroes/${heroes.toUrl(hero)}`">
          <v-card-text class="d-flex align-center justify-center flex-sm-grow-0">
            <v-card :flat="true">
              <v-img
                :src="`/cards/heroes/${hero.name}.webp`" :cover="true"
                :alt="`${hero.name}'s card image from the Naraka Bladepoint game.`" class="hero-card"
              />
            </v-card>
          </v-card-text>
          <v-card-text class="flex-grow-1 py-2 px-0 d-flex flex-column justify-space-between">
            <v-card-title>
              {{ hero.name }}
            </v-card-title>

            <v-card-subtitle class="text-high-emphasis">
              {{ hero.description }}
            </v-card-subtitle>

            <v-card-item>
              <v-btn
                variant="tonal" :block="true" text="Learn more" append-icon="$next"
                :readonly="true"
              />
            </v-card-item>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-page>
</template>

<style lang="scss" scoped>
.hero-card {
  width: 126px;
  height: 173px;
}
</style>
