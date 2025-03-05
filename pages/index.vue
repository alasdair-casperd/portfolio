<script setup lang="ts">
import AboutGrid from "~/components/home-page/about/AboutGrid.vue";
import GradientDivider from "~/components/home-page/GradientDivider.vue";
import { categories } from "~/data/category.data";
</script>

<template>
  <LightRaysHero />

  <div class="flex flex-col gap-24 py-24 z-[50000]" id="projects">
    <CategoryGrid v-for="category in categories" :category="category" />
  </div>
</template>
