<template>
  <div
    class="text-xs font-semibold flex flex-row gap-1 items-center transition-colors cursor-pointer px-2 py-1 rounded-full"
    :style="{
      color: `var(--color-${tag.colour}-600)`,
      border: '1px solid ' + `var(--color-${tag.colour}-700)`,
      backgroundColor: `var(--color-${tag.colour}-950)`,
    }"
  >
    <Icon :name="tag.icon" class="text-lg" />
    {{ tag.tag_text }}
  </div>
</template>

<script setup lang="ts">
import type { Tag } from "~/types/tag";

interface Props {
  tag: Tag;
  bold?: boolean;
}

const props = defineProps<Props>();
</script>
