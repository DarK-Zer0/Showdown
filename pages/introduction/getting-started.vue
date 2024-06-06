<template>
  <v-card variant="flat">
    <v-card-item>
      <v-card-title class="text-h5 text-md-h4 font-weight-medium">
        Getting Started
      </v-card-title>
    </v-card-item>

    <v-card-item class="text-body-1 text-justify">
      When starting to play <v-link-naraka />'s Showdown Mode, <span class="font-weight-bold">I recommended that you choose one <v-link to="/introduction/heroes">hero</v-link> to main and two secondary choices.</span>
      This is because when you pass Normal and Hard difficulty missions, Showdown does not allow duplicate heroes on the same team.
      Picking two secondary choices helps to ensure that you are not left in a tight spot because someone else locked in your favorite hero(es) first.
      <v-link to="/introduction/heroes">Kurumi</v-link> is recommended to be one of your main 3 because of her being the only hero that can heal & buff her teammates.
    </v-card-item>

    <v-card-item>
      <v-section name="Advancing through the Story" />
    </v-card-item>

    <v-card-item class="text-body-1 text-justify">
      There are a total of 5 chapters currently in the game.
      4 of those chapters are in Morus Isle and 1 is in Holoroth.
      In total, there are 13 missions among the regular story, with each mission having 3 difficulties.
      Each mission has 2 <v-link to="/introduction/heroes">heroes</v-link> that it wants you to beat it on a certain difficulty with to unlock their corresponding lore segment.
    </v-card-item>

    <v-card-item>
      <v-section name="Difficulty Levels" />
    </v-card-item>

    <v-card-item class="text-body-1 text-justify">
      As of right now there are 3 difficulty levels: Normal, Hard and Nightscream.
    </v-card-item>

    <v-list>
      <v-list-subheader title="Normal" class="text-subtitle-1 font-weight-bold" />
      <v-list-item class="text-body-1 text-justify">
        <span class="font-weight-medium">Normal difficulty</span> can be considered the tutorial of the game.
        Many of the missions will have limited mechanics, enemies will have smaller movesets and attack less often, and bosses are limited to 1 phase.
      </v-list-item>

      <v-list-subheader title="Hard" class="text-subtitle-1 font-weight-bold" />
      <v-list-item class="text-body-1 text-justify">
        <span class="font-weight-medium">Hard difficulty</span> introduces <v-link to="/">Omens</v-link>, semi-random events that can make certain enemies stronger or add hazards to the battlefield.
        Furthermore, it introduces more boss phases and more aggressive enemies.
      </v-list-item>

      <v-list-subheader title="Nightscream" class="text-subtitle-1 font-weight-bold" />
      <v-list-item class="text-body-1 text-justify">
        <span class="font-weight-medium">Nightscream difficulty</span> brings in mutliple <v-link to="/">Omens</v-link> per mission and significantly more aggressive enemies. This will be your first major difficulty spike that you'll face as everything hits harder and takes longer to kill.
        However, at this point the missions here will have better loot pools to complete your <v-link to="/progression/souljades">Souljade</v-link> builds with.
      </v-list-item>
    </v-list>
  </v-card>
</template>
