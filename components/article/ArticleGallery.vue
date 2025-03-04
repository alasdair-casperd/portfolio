<template>
  <div :class="`grid gap-4 ${grid_class} my-8`">
    <div v-for="image in images" class="flex flex-col items-center w-full">
      <img
        :key="image.src"
        :src="image.src"
        :alt="image.caption"
        class="w-full object-contain"
      />
      <div v-if="image.caption" class="text-sm">{{ image.caption }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface GalleryImage {
  src: string;
  caption?: string;
}

interface Props {
  images: GalleryImage[];
  columns: 1 | 2 | 3;
}

const props = defineProps<Props>();

const grid_class = computed(() => {
  if (props.columns === 1) return "grid-cols-1";
  if (props.columns === 2) return "grid-cols-2";
  if (props.columns === 3) return "grid-cols-3";
});
</script>
