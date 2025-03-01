<template>
  <NuxtLink :to="page.path" class="group">
    <div
      class="flex flex-row gap-4 rounded-2xl bg-base-900 border border-base-700 p-4 items-center"
    >
      <img
        v-if="page.images.icon"
        class="w-12 h-12 m-4 rounded-xl object-contain"
        :src="page.images.icon"
        :alt="page.name"
      />
      <img
        v-else
        class="w-20 h-20 object-contain"
        :src="page.images.list"
        :alt="page.name"
      />
      <div class="w-full flex flex-row justify-between items-center">
        <div>
          <div class="text-xl">
            {{ page.name }}
          </div>
          <div class="text-base-500">
            {{ page.caption }}
          </div>
        </div>
        <div class="flex flex-row gap-4 items-center">
          <BadgeTag v-for="tag in page.tags" :tag="tag" />
          <Icon name="mdi:chevron-right" class="text-white text-2xl" />
        </div>
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
