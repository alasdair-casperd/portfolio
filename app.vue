<script setup lang="ts">
import { NuxtLayout, NuxtPage } from "#components";
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
useSeoMeta({
  title: "Alasdair Casperd – Portfolio",
  ogTitle: "Alasdair Casperd – Portfolio",
  description:
    "Software development portfolio including iOS apps, web development and more.",
  ogDescription:
    "Software development portfolio including iOS apps, web development and more.",
});
</script>
