<template>
  <div
    class="bg-black/70 border-b border-base-900 px-4 p-2 w-full sticky top-0 z-10000 backdrop-blur-lg text-white/80 flex flex-row justify-between items-center"
  >
    <div class="flex flex-row gap-3">
      <NuxtLink to="/" class="font-bold">Alasdair Casperd</NuxtLink>
      <div class="text-base-500">Portfolio</div>
    </div>
    <div class="flex flex-row gap-3 items-center">
      <HeaderIcon icon_name="tabler:search" />
      <HeaderIcon
        icon_name="tabler:brand-github"
        href="https://github.com/alasdair-casperd"
      />
      <HeaderIcon
        icon_name="tabler:mail"
        href="mailto:hello@alasdaircasperd.com"
      />
    </div>
  </div>
</template>
