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
      class="p-4 sm:p-8 rounded-xl border border-base-700 bg-base-900 w-full max-w-[800px] flex flex-col gap-8"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  icon?: string;
  subtitle?: string;
}
defineProps<Props>();
</script>
