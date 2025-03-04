<template>
  <div class="p-12 flex flex-col items-center gap-16">
    <div class="text-center text-3xl text-base-500">About this Portfolio</div>
    <div class="grid grid-cols-4 gap-12">
      <AboutGridItem v-for="item in items" v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    title: "Personal Projects Only",
    description:
      "This portfolio only features projects I've worked on outside of work",
    icon: "tabler:book",
  },
  {
    title: "My Own Designs",
    description:
      "While this portfolio is primarily software-focused, all of the graphic involved in the projects featured is my own work",
    icon: "tabler:palette",
  },
  {
    title: "Code Available on Github",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deleniti deserunt similique possimus quo quam unde necessitatibus.",
    icon: "tabler:brand-github",
  },
  {
    title: "Searchable and Filterable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deleniti deserunt similique possimus quo quam unde necessitatibus.",
    icon: "tabler:search",
  },
];
</script>
