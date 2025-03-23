<template>
  <div class="text-white">
    <div
      v-if="title"
      class="flex flex-row items-center gap-6 sm:gap-10 pb-6 sm:pb-6"
    >
      <div class="font-bold sm:font-normal text-2xl w-full">
        {{ title }}
      </div>
    </div>
    <div class="flex flex-row gap-4">
      <PageCard v-for="page in suggested_pages" :page="page" :tag_limit="2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Page } from "~/types/page";

interface Props {
  pages: Page[];
  title?: string | null;
}

const props = defineProps<Props>();

const suggested_pages = props.pages.slice(0, 3);
</script>
