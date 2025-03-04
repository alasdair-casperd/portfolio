<template>
  <div class="article">
    <h2 class="mb-4">{{ title }}</h2>
    <div class="flex flex-col gap-3 article">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>
