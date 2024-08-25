import type { IconSet } from 'vuetify';
import VIconStroke from '~/iconsets/stroke/VIconStroke.vue';

export type IconValue = string | (string | [path: string, opacity: number])[];

export const stroke: IconSet = {
  component: VIconStroke
};
