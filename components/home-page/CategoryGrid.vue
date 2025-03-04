<template>
  <div class="text-white px-4 sm:px-12">
    <div class="flex flex-row items-center gap-6 sm:gap-10 pb-6 sm:pb-12">
      <div class="font-bold text-3xl sm:font-normal sm:text-4xl w-full">
        {{ category.name }}
      </div>
    </div>

    <div
      class="grid grid-cols-1 min-[880px]:grid-cols-2 min-[1317px]:grid-cols-3 min-[1823px]:grid-cols-4 min-[2310px]:grid-cols-5 gap-10 sm:gap-12"
    >
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
