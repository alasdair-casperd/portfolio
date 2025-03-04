<template>
  <div
    class="flex flex-col items-center gap-6 w-full bg-black p-12 text-sm border-t border-base-800"
  >
    <Icon name="icon-park-solid:diamond-two" class="text-2xl text-violet-400" />
    <div
      class="flex flex-col min-[350px]:flex-row justify-center gap-2 sm:gap-8 text-center"
    >
      <FooterLink
        v-for="link in links"
        :key="link.text"
        :text="link.text"
        :href="link.href"
      />
    </div>
    <div class="text-base-600">&copy; Alasdair Casperd 2025</div>
  </div>
</template>

<script setup lang="ts">
const links = [
  { text: "Lorem", href: "/" },
  { text: "Ipsum", href: "/" },
  { text: "Dolor", href: "/" },
  { text: "Sit", href: "/" },
  { text: "Amet", href: "/" },
];
</script>
