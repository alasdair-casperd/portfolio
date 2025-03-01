<template>
  <div :style="styles" class="tag">
    <div
      class="text-xs font-semibold flex flex-row gap-1 items-center transition-colors cursor-pointer"
    >
      <Icon :name="tag.icon" class="text-lg" />
      {{ tag.tag_text }}
    </div>
  </div>
</template>

<style>
.tag {
  color: var(--color);
}

.tag:hover {
  color: var(--color-hover);
}
</style>

<script setup lang="ts">
import type { Tag } from "~/types/tag";

interface Props {
  tag: Tag;
  bold?: boolean;
}

const props = defineProps<Props>();

const styles = computed(() => ({
  "--color": `var(--color-base-600)`,
  "--color-hover": `var(--color-${props.tag.colour}-600)`,
}));
</script>
