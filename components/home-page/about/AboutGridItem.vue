<template>
  <div class="rounded-xl border border-base-800 p-6">
    <Icon :name="icon" class="text-3xl mb-4" />
    <h3 class="text-xl">{{ title }}</h3>
    <p class="text-base-500 mt-4">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  icon: string;
}

defineProps<Props>();
</script>
