<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/16/solid';
import { useDisplay } from 'vuetify';

const date = new Date();
date.setUTCHours(20, 0, 0, 0);
date.setUTCDate(date.getUTCDate() + ((3 - date.getUTCDay() + 7) % 7));

const { mobile } = useDisplay();
const missions = useMissions();

const mission = ref<string>(missions.list[0].name);
</script>

<template>
  <v-article title="Getting started">

    <v-article-text class="text-medium-emphasis">
      When starting to play <v-link-naraka />'s Showdown Mode, <v-bold>I recommended that you choose one <v-link to="/introduction/heroes">hero</v-link> to main and two secondary choices.</v-bold>
      This is because when you pass Normal and Hard difficulty missions, Showdown does not allow duplicate heroes on the same team.
      Picking two secondary choices helps to ensure that you are not left in a tight spot because someone else locked in your favorite hero(es) first.
      <v-link to="/introduction/heroes">Kurumi</v-link> is recommended to be one of your main 3 because of her being the only hero that can heal & buff her teammates.
    </v-article-text>

    <v-article-section name="Advancing through the Story" />

    <v-article-text>
      There are a total of 5 chapters currently in the game.
      4 of those chapters are in Morus Isle and 1 is in Holoroth.
      In total, there are 13 missions among the regular story, with each mission having 3 difficulties.
      Each mission has 2 <v-link to="/introduction/heroes">heroes</v-link> that it wants you to beat it on a certain difficulty with to unlock their corresponding lore segment.
    </v-article-text>

    <v-article-section name="Difficulty Levels" />

    <v-article-text>
      As of right now there are 3 difficulty levels: Normal, Hard and Nightscream.
    </v-article-text>

    <v-list density="comfortable">
      <v-list-subheader title="Normal" class="text-subtitle-1 font-weight-bold" />
      <v-list-item class="text-body-1">
        <span class="font-weight-medium">Normal difficulty</span> can be considered the tutorial of the game.
        Many of the missions will have limited mechanics, enemies will have smaller movesets and attack less often, and bosses are limited to 1 phase.
      </v-list-item>

      <v-list-subheader title="Hard" class="text-subtitle-1 font-weight-bold" />
      <v-list-item class="text-body-1">
        <span class="font-weight-medium">Hard difficulty</span> introduces <v-link to="/">Omens</v-link>, semi-random events that can make certain enemies stronger or add hazards to the battlefield.
        Furthermore, it introduces more boss phases and more aggressive enemies.
      </v-list-item>

      <v-list-subheader title="Nightscream" class="text-subtitle-1 font-weight-bold" />
      <v-list-item class="text-body-1">
        <span class="font-weight-medium">Nightscream difficulty</span> brings in mutliple <v-link to="/">Omens</v-link> per mission and significantly more aggressive enemies. This will be your first major difficulty spike that you'll face as everything hits harder and takes longer to kill.
        However, at this point the missions here will have better loot pools to complete your <v-link to="/progression/souljades">Souljade</v-link> builds with.
      </v-list-item>
    </v-list>

    <v-article-section name="Fatigue System" />

    <v-article-text>
      <v-bold>
        Next Reset: {{ date.toLocaleString() }}
      </v-bold>
    </v-article-text>

    <v-article-text>
      At the time of the date above, the fatigue system is reset back to 0 as well as the weekly quests you have.
    </v-article-text>

    <v-list density="compact">
      <v-list-item @click.prevent>
        At <v-bold>0 to 600 fatigue</v-bold>, <span class="text-medium-emphasis">you will receive <v-bold>150% rewards (50% more rewards)</v-bold></span>.
      </v-list-item>
      <v-list-item @click.prevent>
        At <v-bold>601 to 1800 fatigue</v-bold>, <span class="text-medium-emphasis">you will receive <v-bold>100% rewards</v-bold></span>.
      </v-list-item>
      <v-list-item @click.prevent>
        At <v-bold>1801 to 2400 fatigue</v-bold>, <span class="text-medium-emphasis">you will receive only <v-bold>75% rewards</v-bold></span>.
      </v-list-item>
      <v-list-item @click.prevent>
        Once you have reached <v-bold>2400 fatigue</v-bold>, <span class="text-medium-emphasis">you can <v-bold>no longer receive any Showdown-based rewards</v-bold> until the next reset</span>.
      </v-list-item>
    </v-list>

    <v-article-text>
<!--  TODO: Should we specify that we are able to disable fatigue before launching a mission?    -->
      Every mission consumes fatigue when ran, with the amount consumed depending on the type of mission and how much of it you completed.
    </v-article-text>

    <v-article-section name="Missions" />

    <v-article-text>
      As of right now, there are {{ missions.list.length }} different missions available, those being:
    </v-article-text>

    <v-card rounded="lg">

      <template #image>
        <v-img
          :src="`/images/missions/${mission}.jpg`" :cover="true"
        >
          <template #sources>
            <source :src="`/images/missions/${mission}.webp`">
          </template>
        </v-img>
      </template>

      <v-lazy>
        <v-expand-transition>
          <v-container v-if="mobile">
            <v-slide-group
              v-model="mission" :show-arrows="false" :mandatory="true" :mobile="true"
            >
              <v-slide-group-item
                v-for="level in missions.list" :key="`mobile-activator-${level.name}`" v-slot="{ isSelected, toggle }" :value="level.name"
              >
                <v-card
                  variant="tonal" :title="level.name" class="level-card me-1" :color="isSelected ? 'primary' : undefined"
                  @click="toggle"
                />
              </v-slide-group-item>
            </v-slide-group>
          </v-container>
        </v-expand-transition>
      </v-lazy>

      <v-card-text>
        <v-row>
          <v-expand-x-transition>
            <v-col v-if="!mobile" cols="4" xl="2">
              <v-list
                v-model:selected="mission" bg-color="transparent" color="primary" rounded="lg" :mandatory="true"
              >
                <v-list-item
                  v-for="level in missions.list" :key="`desktop-activator-${level.name}`" :value="level.name" class="level-card mb-1"
                  :title="level.name" :subtitle="level.chapter !== undefined ? `Chapter ${level.chapter}` : undefined" rounded="lg"
                  :append-icon="ChevronRightIcon"
                />
              </v-list>
            </v-col>
          </v-expand-x-transition>
          <v-col cols="12" lg="8" xl="10">

            <v-window
              v-model="mission"
            >
              <v-window-item
                v-for="level in missions.list" :key="`window-${level.name}`" :value="level.name"
              >
                <v-container>
                  <v-card
                    variant="tonal" :title="level.name" class="level-card" rounded="xl"
                  >
                    <v-list bg-color="transparent" density="comfortable">
                      <v-list-item class="text-body-1">
                        Level Map: <v-bold>{{ level.map }}</v-bold>
                      </v-list-item>
                      <v-list-item v-if="level.chapter" class="text-body-1">
                        Level Chapter: <v-bold>{{ level.chapter }}</v-bold>
                      </v-list-item>
                      <v-list-item class="text-body-1">
                        Level Type: <v-bold>{{ level.category.title }}</v-bold>
                      </v-list-item>
                      <v-list-item class="text-body-1">
                        Level Objective: <v-bold>{{ level.category.objective }}</v-bold>
                        <v-list-item-subtitle>
                          {{ level.category.description }}
                        </v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-container>
              </v-window-item>

            </v-window>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

  </v-article>
</template>

<style scoped>
.level-card {
  background: rgba(var(--v-theme-surface), .6);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
</style>
