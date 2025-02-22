<template>
  <div>
    <div v-if="title" class="m-2 font-mono">{{ title }}</div>
    <div class="overflow-hidden border border-base-400 rounded-xl bg-base-950">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
}
defineProps<Props>();
</script>
