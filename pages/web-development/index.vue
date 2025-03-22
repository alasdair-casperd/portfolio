<template>
  <CategoryPage :category="category" />
</template>

<script setup lang="ts">
import { categories } from "~/data/category.data";

const category = categories.web_development;
definePageMeta({ title: "Web Development" });
</script>
