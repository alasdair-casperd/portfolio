<template>
  <CategoryPage :category="category" />
</template>

<script setup lang="ts">
import { categories } from "~/data/category.data";

const category = categories.ios_development;
definePageMeta({ title: "iOS Apps" });
</script>
