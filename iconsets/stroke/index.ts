import type { IconAliases } from 'vuetify';
import type { IconValue } from '~/iconsets';

const circlePath = (cx: number, cy: number, r: number, transform?: string): IconValue =>
  `M:circle:${cx},${cy},${r}${transform ? `,${transform}` : ''}`;

export const hiArrowRight01: IconValue = 'M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18';
export const hiCloudAngledZap: IconValue = 'M7 17.5C4.23858 17.5 2 15.336 2 12.6667C2 10.1537 3.98398 8.0886 6.52042 7.85528M17.5 17.5C19.9853 17.5 22 15.5524 22 13.15C22 10.7476 19.9853 8.8 17.5 8.8C17.4925 8.8 17.485 8.80002 17.4776 8.80005M17.4776 8.80005C17.4924 8.64084 17.5 8.47961 17.5 8.31667C17.5 5.38035 15.0376 3 12 3C9.12324 3 6.76233 5.135 6.52042 7.85528M17.4776 8.80005C17.3753 9.89668 16.9286 10.8973 16.2428 11.7M6.52042 7.85528C6.67826 7.84076 6.83823 7.83333 7 7.83333C8.12582 7.83333 9.16474 8.19302 10.0005 8.8 M12.5784 14L10.8043 16.6838C10.5668 17.0431 10.4481 17.2227 10.5217 17.3614C10.5952 17.5 10.8093 17.5 11.2375 17.5H12.7625C13.1907 17.5 13.4048 17.5 13.4783 17.6386C13.5519 17.7773 13.4332 17.9569 13.1957 18.3162L11.4216 21';
export const hiDice: IconValue = 'M10.341 13.159C9.68198 12.5 8.62132 12.5 6.5 12.5C4.37868 12.5 3.31802 12.5 2.65901 13.159M10.341 13.159C11 13.818 11 14.8787 11 17C11 19.1213 11 20.182 10.341 20.841M10.341 13.159V13.159ZM2.65901 13.159C2 13.818 2 14.8787 2 17C2 19.1213 2 20.182 2.65901 20.841M2.65901 13.159V13.159ZM2.65901 20.841C3.31802 21.5 4.37868 21.5 6.5 21.5C8.62132 21.5 9.68198 21.5 10.341 20.841M2.65901 20.841V20.841ZM10.341 20.841V20.841Z M15.2218 4.77817C16.7406 6.29696 17.5 7.05635 17.5 8C17.5 8.94365 16.7406 9.70304 15.2218 11.2218C13.703 12.7406 12.9436 13.5 12 13.5C11.0563 13.5 10.297 12.7406 8.77817 11.2218C7.25939 9.70304 6.5 8.94365 6.5 8C6.5 7.05635 7.25939 6.29696 8.77817 4.77817C10.297 3.25939 11.0563 2.5 12 2.5C12.9437 2.5 13.703 3.25939 15.2218 4.77817Z M21.341 13.159C20.682 12.5 19.6213 12.5 17.5 12.5C15.3787 12.5 14.318 12.5 13.659 13.159M21.341 13.159C22 13.818 22 14.8787 22 17C22 19.1213 22 20.182 21.341 20.841M21.341 13.159V13.159ZM13.659 13.159C13 13.818 13 14.8787 13 17C13 19.1213 13 20.182 13.659 20.841M13.659 13.159V13.159ZM13.659 20.841C14.318 21.5 15.3787 21.5 17.5 21.5C19.6213 21.5 20.682 21.5 21.341 20.841M13.659 20.841V20.841ZM21.341 20.841V20.841Z M12.0082 8L11.9992 8';
export const hiFire: IconValue = 'M13.8561 22C26.0783 19 19.2338 7 10.9227 2C9.9453 5.5 8.47838 6.5 5.54497 10C1.66121 14.6339 3.5895 20 8.96719 22C8.1524 21 6.04958 18.9008 7.5 16C8 15 9 14 8.5 12C9.47778 12.5 11.5 13 12 15.5C12.8148 14.5 13.6604 12.4 12.8783 10C19 14.5 16.5 19 13.8561 22Z';
export const hiMenu01: IconValue = 'M4 5L20 5 M4 12L20 12 M4 19L20 19';
export const hiMoon02: IconValue = 'M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z';

export const hiPaintBoard: IconValue = `M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z M7 15.0024L7.00868 15.0001 ${circlePath(9.5, 8.5, 1.5)} ${circlePath(16.5, 9.5, 1.5)}`;

export const hiSnow: IconValue = 'M21 14.25L20.1689 13.591C19.223 12.841 18.75 12.466 18.75 12C18.75 11.534 19.223 11.159 20.1689 10.409L21 9.75M3 9.75L3.83115 10.409C4.77705 11.159 5.25 11.534 5.25 12C5.25 12.466 4.77705 12.841 3.83115 13.591L3 14.25 M14.5718 21L14.7282 19.9412C14.9062 18.7362 14.9951 18.1337 15.4019 17.8986C15.8087 17.6635 16.3744 17.8876 17.5058 18.3358L18.5 18.7296M9.4282 3L9.27182 4.0588C9.09384 5.26379 9.00486 5.86629 8.59808 6.10139C8.1913 6.3365 7.62558 6.1124 6.49416 5.6642L5.5 5.27038 M5 18.7317L6.07032 18.3375C7.2884 17.8889 7.89747 17.6645 8.33521 17.8994C8.77295 18.1343 8.86844 18.7367 9.05941 19.9414L9.22722 21M19 5.26825L17.9297 5.66249C16.7116 6.11115 16.1025 6.33548 15.6648 6.1006C15.2271 5.86571 15.1316 5.26333 14.9406 4.05859L14.7728 3 M19 12.0003H5M15.5 17.9998L8.5 6M15.5 6.00025L8.5 18';
export const hiStar: IconValue = 'M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z';
export const hiStarHalf: IconValue = 'M12 2L12.0034 19.4032C11.643 19.4025 11.2835 19.4831 11.0123 19.6452L8.02261 21.4296C5.87285 22.71 4.58299 21.7623 5.14293 19.3125L5.85285 16.2175C5.98284 15.6327 5.75286 14.8161 5.33291 14.3927L2.85318 11.8925C1.38335 10.4206 1.86329 8.92853 3.90307 8.58575L7.09271 8.05143C7.63266 7.9607 8.27258 7.48687 8.51256 6.99288L10.2724 3.44418C10.7464 2.48314 11.3725 2.00174 12 2ZM12 2H12.0034M15 20.8437L15.9817 21.4296C18.1215 22.71 19.4214 21.7522 18.8614 19.3125L18.1515 16.2175C18.0215 15.6327 18.2515 14.8161 18.6714 14.3927L21.1512 11.8925C22.611 10.4206 22.1411 8.92853 20.1013 8.58575L16.9116 8.05143C16.3817 7.9607 15.7418 7.48687 15.5018 6.99288L15 5.98101';
export const hiStarOff: IconValue = 'M18.5038 14.5L21.1477 11.8925C22.616 10.4206 22.1366 8.92853 20.099 8.58575L16.9128 8.05143C16.3734 7.9607 15.7342 7.48687 15.4945 6.99288L13.7366 3.44418C12.7877 1.51861 11.2296 1.51861 10.2707 3.44418L9.5 5 M7.29561 7.99998C7.22668 8.02267 7.15848 8.04006 7.09201 8.05144L3.90008 8.58576C1.85885 8.92853 1.38856 10.4206 2.84945 11.8925L5.33095 14.3927C5.7512 14.8161 5.98134 15.6327 5.85126 16.2175L5.14083 19.3125C4.58049 21.7522 5.88128 22.7099 8.02257 21.4296L11.0144 19.6452C11.5647 19.3226 12.4553 19.3226 12.9956 19.6452L15.9874 21.4296C18.1387 22.7099 19.4295 21.7623 18.8691 19.3125L18.7974 19 M2 2L22 22';
export const hiSun03: IconValue = 'M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714';
export const hiUserGroup: IconValue = 'M20.774 18C21.5233 18 22.1193 17.5285 22.6545 16.8691C23.7499 15.5194 21.9513 14.4408 21.2654 13.9126C20.568 13.3756 19.7894 13.0714 19 13M18 11C19.3807 11 20.5 9.88071 20.5 8.5C20.5 7.11929 19.3807 6 18 6 M3.22596 18C2.47666 18 1.88067 17.5285 1.34555 16.8691C0.250089 15.5194 2.04867 14.4408 2.73465 13.9126C3.43197 13.3756 4.21058 13.0714 5 13M5.5 11C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6 M8.0838 15.1112C7.06203 15.743 4.38299 17.0331 6.0147 18.6474C6.81178 19.436 7.69952 20 8.81563 20H15.1844C16.3005 20 17.1882 19.436 17.9853 18.6474C19.617 17.0331 16.938 15.743 15.9162 15.1112C13.5201 13.6296 10.4799 13.6296 8.0838 15.1112Z M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z';
export const hiZap: IconValue = 'M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z';

const aliases: Partial<IconAliases> = {
  menu: hiMenu01,
  next: hiArrowRight01,
  ratingFull: hiStar,
  ratingHalf: hiStarHalf,
  ratingEmpty: hiStarOff
};

export default aliases;