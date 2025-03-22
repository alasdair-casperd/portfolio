<template>
  <CategoryPage :category="category" />
</template>

<script setup lang="ts">
import { categories } from "~/data/category.data";

const category = categories.games_development;
definePageMeta({ title: "Games Development" });
</script>
