<template>
  <div class="w-full sticky top-0 z-100 text-white/80">
    <div
      class="bg-black/70 border-b -z-100 backdrop-blur-lg w-full h-full absolute border-base-700"
      :style="{ opacity: background_opacity }"
    />
    <div class="px-4 p-2 flex flex-row items-center justify-between">
      <div class="flex flex-row gap-3">
        <NuxtLink to="/" class="font-bold flex flex-row gap-3 items-center">
          <div class="w-[10px] h-[10px] rounded-xs rotate-45 bg-accent" />
          <span>Alasdair Casperd</span>
        </NuxtLink>
        <div class="text-base-500 hidden sm:flex">Portfolio</div>
      </div>
      <div class="flex flex-row gap-3 items-center">
        <HeaderIcon
          icon_name="tabler:brand-github"
          class="hidden sm:flex"
          href="https://github.com/alasdair-casperd"
        />
        <HeaderIcon
          icon_name="tabler:brand-linkedin"
          class="hidden sm:flex"
          href="https://www.linkedin.com/in/alasdair-casperd-105383231/"
        />
        <HeaderIcon
          icon_name="tabler:mail"
          href="mailto:hello@alasdaircasperd.com"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderIcon from "./HeaderIcon.vue";

const scroll_distance = ref(0);

const background_opacity = computed(() => {
  const opacity = scroll_distance.value / 100;
  return opacity > 1 ? 1 : opacity;
});

const updateScrollDistance = () => {
  if (window?.scrollY) scroll_distance.value = window.scrollY;
  else console.log("No window");
};

onMounted(() => {
  window.addEventListener("scroll", updateScrollDistance);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollDistance);
});
</script>
