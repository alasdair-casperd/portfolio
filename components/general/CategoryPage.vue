<template>
  <div class="flex flex-col py-24 z-50">
    <div class="px-12">
      <h1 class="text-5xl font-medium mb-4">{{ category.name }}</h1>
      <p class="text-base-500">{{ category.description }}</p>
    </div>
    <CategoryGrid :category="category" :title="null" class="px-4 sm:px-12" />
    <div class="px-12 mt-24 w-full">
      <div class="flex flex-row items-end justify-between mb-8">
        <div class="font-bold text-3xl sm:font-normal sm:text-4xl">
          Other Categories
        </div>
        <NuxtLink
          to="/"
          class="uppercase tracking-widest text-sm font-medium text-base-600 hover:text-base-300 transition-colors cursor-pointer"
        >
          See All
        </NuxtLink>
      </div>
      <div>
        <ResponsiveGrid>
          <NuxtLink
            v-for="category in other_categories"
            :to="category.path"
            class="bg-base-950 border border-base-700 p-4 rounded-lg flex items-center justify-between"
          >
            <div>{{ category.name }}</div>
            <Icon name="tabler:chevron-right" class="text-base-600 text-2xl" />
          </NuxtLink>
        </ResponsiveGrid>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories } from "~/data/category.data";
import type { Category } from "~/types/category";

interface Props {
  category: Category;
}

const props = defineProps<Props>();

const other_categories = Object.values(categories).filter(
  (c) => c.name !== props.category.name
);
</script>
