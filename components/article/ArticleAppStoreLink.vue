<template>
  <a :href="href" class="cursor-pointer">
    <img
      src="/download-on-the-app-store.svg"
      alt="App Store Badge"
      class="w-36 mt-2"
    />
  </a>
</template>

<script setup lang="ts">
interface Props {
  href: string;
}

defineProps<Props>();
</script>
