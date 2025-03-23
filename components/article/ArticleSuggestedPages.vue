<template>
  <div class="text-white">
    <div
      v-if="title"
      class="flex flex-row items-end justify-between gap-6 sm:gap-10 pb-6 sm:pb-6 w-full"
    >
      <div class="font-bold sm:font-normal text-2xl">
        {{ title }}
      </div>
      <NuxtLink
        v-if="link"
        :to="link.href"
        class="uppercase tracking-widest text-sm font-medium text-base-600 hover:text-base-300 transition-colors cursor-pointer"
      >
        {{ link.text }}
      </NuxtLink>
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
  link?: {
    text: string;
    href: string;
  };
}

const props = defineProps<Props>();

const suggested_pages = props.pages.slice(0, 3);
</script>
