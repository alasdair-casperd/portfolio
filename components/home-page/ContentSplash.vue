<template>
  <div class="pb-24 pt-40 px-36 flex gap-28 bg-base-950" :class="flex_class">
    <div
      class="h-[400px] overflow-hidden w-1/2"
      :style="{
        backgroundImage:
          'repeating-linear-gradient(-45deg, #222222 0 1px, transparent 1px 10px)',
      }"
    >
      <img
        :src="image"
        alt="Splash Image"
        class="w-full translate-y-[120px] scale-[1.4] h-full z-[500] object-top object-scale-down"
      />
    </div>
    <div class="flex flex-col justify-center w-1/2">
      <div class="flex flex-row">
        <p
          class="rounded-full border border-white/50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white opacity-50 mb-5"
        >
          {{ badge }}
        </p>
      </div>
      <h2 class="text-5xl font-bold mb-8">{{ title }}</h2>
      <div class="text-gray-500 flex flex-col gap-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  badge: string;
  image: string;
  reversed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  reversed: false,
});

const flex_class = props.reversed ? "flex-row" : "flex-row-reverse";
</script>
