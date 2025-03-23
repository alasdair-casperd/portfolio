<template>
  <div class="min-h-screen flex flex-col justify-between bg-base-950">
    <div class="z-10">
      <Header :key="route.fullPath" />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
