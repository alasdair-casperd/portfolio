<template>
  <NuxtLink :to="page.path" class="group">
    <div
      class="aspect-16/9 w-full rounded-lg mb-4 overflow-hidden bg-base-900 border-base-700 border"
    >
      <img
        :src="page.images.card"
        :alt="page.name"
        class="object-cover hover:scale-[1.03] transition-transform duration-300 h-full w-full"
      />
    </div>
    <div>
      <div>
        <div class="font-bold text-xl text-white">{{ page.name }}</div>
        <!-- <div class="font-light text-base-500">{{ page.caption }}</div> -->
      </div>
      <div class="flex flex-wrap gap-4 mt-2 text-base-600">
        <SubtleTag v-for="tag in page.tags" :key="tag.name" :tag="tag" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Page } from "~/types/page";

interface Props {
  page: Page;
}

const props = defineProps<Props>();
</script>
