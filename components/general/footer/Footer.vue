<template>
  <div
    class="flex flex-col items-center gap-6 w-full bg-black p-12 text-sm border-t border-base-800"
  >
    <div class="w-[14px] h-[14px] rounded-xs rotate-45 bg-accent mb-2" />
    <div
      class="flex flex-col min-[550px]:flex-row justify-center gap-4 sm:gap-8 text-center"
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
  { text: "Home", href: "/" },
  { text: "GitHub", href: "https://github.com/alasdair-casperd" },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/alasdair-casperd-105383231/",
  },
  { text: "Contact", href: "mailto:hello@alasdaircasperd.com" },
];
</script>
