<script lang="ts" setup>
const setups = useSoulJadeSetups();
const heroes = useHeroes();
const jades = useSoulJades();

useSeoMeta({
  title: 'Builds - Showdown Guide',
  ogTitle: 'Builds - Showdown Guide',
  twitterTitle: 'Builds - Showdown Guide'
});
</script>

<template>
  <v-page class="page-offset">

    <v-container>
      <h1 class="text-h3">
        Builds
      </h1>
    </v-container>

    <v-container>

      <div class="text-body-1 text-justify">
        <p>
          This section will showcase the standard Souljade setups for each damage type, including their respective strengths and weaknesses.
        </p>

        <p class="py-4">
          Ensure you replace the (Ice/Thunder)-Wielding Souljade with the one corresponding to your hero's favored element.
        </p>

        <p>
          See <v-link to="/">Wielding Jades</v-link> for more info. In terms of damage output, right now Burn builds are at the top, followed by Thunder builds, and lastly Ice builds.
        </p>
      </div>

    </v-container>

    <v-row>
      <v-col v-for="category in setups.categories" :key="`category-${category.name}`" cols="12">
        <v-card
          :prepend-icon="category.icon" :title="`${category.name} Set`" :flat="true" color="background"
        >

          <v-container v-for="build in setups.byCategory(category.name)" :key="`build-${build.name}`" class="px-0 px-sm-8">
            <v-lazy>
              <v-card
                :title="build.name" :subtitle="build.wieldingType"
              >
                <template #append>
                  <v-btn
                    variant="text" size="large" text="Details" append-icon="$next"
                  />
                </template>

                <v-divider />

                <v-card-item>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card variant="outlined">

                        <v-card-text class="text-body-1">
                          Suggested Souljades
                        </v-card-text>

                        <v-card-item>
                          <v-list lines="two">
                            <v-list-item
                              v-for="jade in build.jades" :key="`build-${build.name}-jade-${jade.name}`" rounded="xl"
                              :title="jade.name" :subtitle="jade.description" append-icon="$next" @click.prevent
                            >
                              <template #prepend>
                                <v-img
                                  :src="jades.thumbnail(jade)" :alt="`Avatar for the ${jade.name} souljade`"
                                  :width="64" :height="64" class="mr-4"
                                />
                              </template>
                            </v-list-item>
                          </v-list>
                        </v-card-item>
                      </v-card>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-row>
                        <v-col cols="12">
                          <v-card variant="outlined">

                            <v-card-text class="text-body-1 d-flex align-center justify-space-between">
                              Difficulty

                              <div>
                                <v-rating
                                  :model-value="build.difficulty" :half-increments="true" :readonly="true"
                                  :length="build.difficulty" size="large" color="warning"
                                />
                              </div>
                            </v-card-text>

                          </v-card>
                        </v-col>
                        <v-col cols="12">
                          <v-card variant="outlined">

                            <v-card-text class="text-body-1">
                              Recommended Heroes
                            </v-card-text>

                            <v-card-item>

                              <v-row justify="center">
                                <v-col
                                  v-for="hero in build.heroes" :key="`build-${build.name}-hero-${hero.name}`" cols="6" lg="4"
                                >
                                  <v-card variant="outlined" :to="`/heroes/${heroes.toUrl(hero)}`">
                                    <v-card-item class="d-flex justify-center">
                                      <v-avatar
                                        :image="`/avatars/heroes/${hero.name}.webp`" :size="48" :alt="`Avatar for ${hero.name}`"
                                      />
                                    </v-card-item>

                                    <v-card-text class="text-body-1 text-center">
                                      {{ hero.name }}
                                    </v-card-text>
                                  </v-card>
                                </v-col>
                              </v-row>

                            </v-card-item>

                          </v-card>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-item>
              </v-card>
            </v-lazy>
          </v-container>

        </v-card>
      </v-col>
    </v-row>

  </v-page>
</template>