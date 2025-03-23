<template>
  <div class="text-white scroll-mt-24" :id="category.name">
    <div class="flex flex-row items-center gap-6 sm:gap-10 pb-6 sm:pb-12">
      <div class="font-bold text-3xl sm:font-normal sm:text-4xl w-full">
        <template v-if="title === undefined">{{ category.name }}</template>
        <template v-else-if="title !== null">{{ title }}</template>
      </div>
    </div>
    <ResponsiveGrid ref="el">
      <PageCard v-for="page in category_pages" :page="page" />
    </ResponsiveGrid>
  </div>
</template>

<script setup lang="ts">
import { pages } from "~/data/page.data";
import type { Category } from "~/types/category";
import type { Page } from "~/types/page";

interface Props {
  category: Category;
  title?: string | null;
}

const props = defineProps<Props>();

const category_pages = Object.values(pages).filter(
  (p) => p.category.name === props.category.name
);
</script>
