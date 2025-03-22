<template>
  <div class="text-white">
    <div class="flex flex-row items-center gap-6 sm:gap-10 pb-6 sm:pb-6">
      <div class="font-bold sm:font-normal text-2xl w-full">
        {{ category.more_text }}
      </div>
    </div>
    <div class="flex flex-row gap-4">
      <PageCard v-for="page in category_pages" :page="page" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { pages } from "~/data/page.data";
import type { Category } from "~/types/category";

interface Props {
  category: Category;
  title?: string | null;
}

const props = defineProps<Props>();

const category_pages = pages
  .filter((p) => p.category.name === props.category.name)
  .slice(0, 3);
</script>
