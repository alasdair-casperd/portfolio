<template>
  <div class="flex flex-col items-center gap-8 sm:gap-20 pb-20">
    <div class="mt-16 sm:mt-32 flex flex-col items-center">
      <img
        v-if="icon"
        :src="icon"
        class="w-16 sm:w-24 mb-6 rounded-xl sm:rounded-3xl"
      />
      <h1 class="text-3xl sm:text-4xl md:text-5xl text-center px-6 sm:mb-4">
        {{ title }}
      </h1>
      <div
        v-if="subtitle"
        class="text-base-600 text-lg sm:text-xl md:text-2xl text-center mb-10"
      >
        {{ subtitle }}
      </div>
      <div class="text-2xl animate-bounce text-base-600">
        <Icon name="tabler:chevron-down" class="animate-bounce" />
      </div>
    </div>
    <div
      class="p-4 sm:p-8 sm:rounded-xl sm:border border-base-700 bg-base-900 w-full max-w-[800px] flex flex-col gap-8"
    >
      <slot />
    </div>
    <div
      class="sm:hidden flex flex-row text-center items-center justify-center gap-2 mt-10"
    >
      <Button
        text="Return Home"
        variant="secondary"
        @click="() => $router.push('/')"
        icon_name="tabler:arrow-back-up"
      />
    </div>
    <div class="mx-4 hidden sm:flex flex-col gap-14">
      <!-- More from this category -->
      <ArticleSuggestedPages
        class="w-full max-w-[800px]"
        v-if="same_category_pages.length > 2"
        :pages="same_category_pages"
        :title="props.page.category.more_text"
        :link="{ text: 'See All', href: `/#${props.page.category.name}` }"
      ></ArticleSuggestedPages>

      <!-- Featured pages -->
      <ArticleSuggestedPages
        class="w-full max-w-[800px]"
        v-if="distinct_featured_pages.length > 2"
        :pages="distinct_featured_pages"
        title="Featured Projects"
        :link="{ text: 'See All', href: '/' }"
      ></ArticleSuggestedPages>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleSuggestedPages from "./ArticleSuggestedPages.vue";
import { featured_pages, pages } from "~/data/page.data";
import type { Page } from "~/types/page";
import Button from "../general/Button.vue";

interface Props {
  page: Page;
  title: string;
  icon?: string;
  subtitle?: string;
}

const props = defineProps<Props>();

const same_category_pages = Object.values(pages).filter(
  (p) => p.category.name === props.page.category.name && p !== props.page
);

const distinct_featured_pages = featured_pages.filter((p) => p !== props.page);
</script>
