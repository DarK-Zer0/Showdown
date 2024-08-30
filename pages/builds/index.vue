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

    <v-expansion-panels
      v-for="(category, index) in setups.categories" :key="`category-${category.name}`"
      bg-color="transparent" :flat="true" :model-value="index === 0 ? category.name : undefined"
    >
      <v-expansion-panel :value="category.name">
        <v-expansion-panel-title>
          <v-card
            :prepend-icon="category.icon" :title="`${category.name} Set`" :flat="true" color="transparent"
          />
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <v-container v-for="build in setups.byCategory(category.name)" :key="`build-${build.name}`" class="px-0">
            <v-lazy :min-height="750">
              <v-card
                :title="build.name" :subtitle="build.wieldingType"
              >
                <template #append>
                  <v-btn
                    variant="text" size="large" text="Details" append-icon="$next"
                    :to="`/builds/${setups.toUrl(build)}`"
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
                              v-for="jade in build.jades" :key="`build-${build.name}-jade-${jade.name}`" rounded="xl" role="option"
                              :title="jade.name" :subtitle="jade.description" append-icon="$next" :to="`/souljades/${jades.toUrl(jade)}`"
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

                              <v-list>
                                <v-list-item
                                  v-for="hero in build.heroes" :key="`build-${build.name}-hero-${hero.name}`" role="option"
                                  :to="`/heroes/${heroes.toUrl(hero)}`" :title="hero.name" append-icon="$next" rounded="lg"
                                >
                                  <template #prepend>
                                    <v-avatar
                                      :image="`/avatars/heroes/${hero.name}.webp`" :alt="`Avatar for ${hero.name}`"
                                    />
                                  </template>
                                </v-list-item>
                              </v-list>

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
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

  </v-page>
</template>