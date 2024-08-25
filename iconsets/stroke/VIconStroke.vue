<script setup lang="ts">
import type { IconValue } from '~/iconsets';

interface DashedPath {
  path: string; array: string;
}

interface CirclePath {
  cx: number; cy: number; r: number; transform?: string;
}

const props = defineProps<{
  tag: string;
  icon?: IconValue;
  disabled?: boolean;
}>();

const extractPath = (path: string): CirclePath | DashedPath | string => {
  if (path.startsWith(':circle:') || path.startsWith('M:circle:')) {
    const properties = path.replace('M:circle:', '').replace(':circle:', '')
      .split(',').map(prop => isNaN(+(prop.trim())) ? prop.trim() : +(prop.trim())
      );

    return ({
      cx: (properties[0]) as number ?? 0, cy: properties[1] as number ?? 0, r: properties[2] as number ?? 0,
      transform: properties[3] as string ?? null
    });
  }

  else if (path.startsWith(':dashed:') || path.startsWith('M:dashed:')) {
    const properties = path.replace('M:dashed:', '').replace(':dashed:', '')
      .split(',').map(prop => prop.trim());
    return ({ path: properties[0], array: properties[1] });
  }

  return path.startsWith('M') ? path : `M${path}`;
};

const paths = computed(() => props.icon?.toString().split(' M').map((path) =>
  extractPath(path)
));
</script>

<template>
  <component v-bind="$attrs" :is="tag" :style="null">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        fill="none"
        class="v-icon__svg"
    >
      <template v-for="path in paths" :key="path">
        <path
            v-if="typeof path === 'string'"
            :d="path" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"
        />
        <circle
            v-else-if="'cx' in path" :cx="path.cx" :cy="path.cy" :r="path.r"
            :transform="path.transform" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
        />
        <path
            v-else-if="'path' in path" :d="path.path" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" :stroke-dasharray="path.array"
        />
      </template>
    </svg>
  </component>
</template>
