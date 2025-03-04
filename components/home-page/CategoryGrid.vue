<template>
  <div class="text-white px-12">
    <div class="flex flex-row items-center gap-10 pb-12">
      <div class="text-4xl">
        {{ category.name }}
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-12">
      <PageCard
        v-for="page in pages.filter((page) => page.category === category)"
        :page="page"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { pages } from "~/data/page.data";
import type { Category } from "~/types/category";

interface Props {
  category: Category;
}

defineProps<Props>();
</script>
