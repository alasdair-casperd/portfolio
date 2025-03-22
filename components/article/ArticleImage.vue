<template>
  <div
    class="rounded-xl border border-base-700 bg-base-800 overflow-hidden my-4"
  >
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string;
  alt: string;
}

defineProps<Props>();
</script>
