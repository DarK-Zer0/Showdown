<script setup lang="ts">
definePageMeta({
  validate: ({ params }) => {
    const setups = useSoulJadeSetups();
    return setups.all.find(setup => setups.toUrl(setup) == params.id) !== undefined;
  }
});

const { id } = useRoute().params;
const setups = useSoulJadeSetups();
const jades = useSoulJades();

const build = computed(() => setups.all.find(setup => setups.toUrl(setup) === id));

const showElementWieldingInformation = ref(false);

if (build.value) useSeoMeta({
  title: build.value.name,
  ogTitle: `${build.value.name} - Showdown Guide`,
  twitterTitle: `${build.value.name} - Showdown Guide`
});
</script>

<template>
  <v-page class="page-offset">

    <v-container v-if="build" class="d-flex flex-column align-center">
      <v-chip text="Builds" to="/builds" size="large" />

      <h1 class="text-center text-h3 mt-4">
        {{ build.name }}
      </h1>

      <h2 class="text-subtitle-1 d-flex align-center">
        Part of
        <v-icon :icon="build.category.icon" class="mx-2" />
        {{ build.category.name }} Set
      </h2>

    </v-container>

    <v-container v-if="build">

      <h3 class="text-h5 mb-4">
        Build Details
      </h3>

      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12" md="6">
              <v-card variant="tonal" color="primary" :flat="true">
                <template #title>
                  <p class="text-h6 text-center font-weight-medium me-n14">
                    Element Wielding
                  </p>
                </template>

                <template #append>
                  <v-btn
                    icon="$info" size="small" variant="text" @click="showElementWieldingInformation = !showElementWieldingInformation"
                  />
                </template>

                <v-expand-transition>
                  <v-card-text v-if="showElementWieldingInformation" class="text-body-2 text-center">
                    Element Wielding is the acquisition of Souljades with either <span class="font-weight-medium">Ice-wielding</span>,
                    <span class="font-weight-medium">Thunder-wielding</span>, or <span class="font-weight-medium">Poison-wielding</span>.
                    By equipping one with an element, it gives you unique effects that can stack up to +6
                  </v-card-text>
                </v-expand-transition>

                <v-card-text class="text-body-1 text-center">
                  {{ build.wieldingType }}
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card variant="tonal" color="primary" :flat="true">
                <v-card-item>
                  <v-card-title class="text-h6 font-weight-medium text-center">
                    Potential
                  </v-card-title>
                </v-card-item>

                <v-card-text class="text-body-1 d-flex align-center justify-center">
                  <v-icon v-if="'path' in build.potential" :icon="build.potential.path.icon" class="me-2" />
                  {{ 'path' in build.potential ? `${build.potential.path.name} - ${build.potential.name}` : build.potential.name }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-text class="text-h6 font-weight-medium">
              Strengths
            </v-card-text>

            <v-list lines="two">
              <v-list-item
                v-for="(strength, index) in build.strengths" :key="`strength-${index}`" role="option"
              >
                <template #prepend>
                  <v-icon icon="$next" class="me-n6" />
                </template>
                <v-list-item-title class="text-wrap">
                  {{ strength }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-text class="text-h6 font-weight-medium">
              Weaknesses
            </v-card-text>

            <v-list lines="two">
              <v-list-item
                v-for="(weakness, index) in build.weaknesses" :key="`strength-${index}`" role="option"
              >
                <template #prepend>
                  <v-icon icon="$next" class="me-n6" />
                </template>
                <v-list-item-title class="text-wrap">
                  {{ weakness }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="build">

      <h3 class="text-h5 mb-4">
        Souljades
      </h3>

      <v-card>
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
    </v-container>

  </v-page>
</template>
