<template>
  <div class="text-white px-4 sm:px-12">
    <div class="flex flex-row items-center gap-6 sm:gap-10 pb-6 sm:pb-12">
      <div
        v-if="!hide_title"
        class="font-bold text-3xl sm:font-normal sm:text-4xl w-full"
      >
        {{ category.name }}
      </div>
    </div>

    <ResponsiveGrid>
      <PageCard
        v-for="page in pages.filter((page) => page.category === category)"
        :page="page"
      />
    </ResponsiveGrid>
  </div>
</template>

<script setup lang="ts">
import { pages } from "~/data/page.data";
import type { Category } from "~/types/category";

interface Props {
  category: Category;
  hide_title?: boolean;
}

defineProps<Props>();
</script>
