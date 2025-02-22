<template>
  <div
    :class="`text-xs font-semibold flex flex-row gap-1 items-center transition-colors cursor-pointer ${props.tag.hover_class}`"
  >
    <Icon :name="tag.icon" class="text-lg" />
    {{ tag.tag_text }}
  </div>
</template>

<script setup lang="ts">
import type { Tag } from "~/types/tag";

interface Props {
  tag: Tag;
}

const props = defineProps<Props>();
</script>
