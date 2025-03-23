<template>
  <LightRaysHero
    title="Welcome to my Portfolio"
    body="You've arrived at my software development portfolio. Below you'll find a
        selection of my personal projects, including iOS apps, web development
        and more."
    :primary_action="{
      text: 'View Projects',
      action: scrollToProjects,
    }"
    :secondary_action="{
      text: 'Get in Touch',
      action: triggerEmail,
    }"
  />

  <div class="flex flex-col gap-24 py-24 z-50 px-4 sm:px-12" id="projects">
    <CategoryGrid v-for="category in categories" :category="category" />
  </div>
</template>

<script setup lang="ts">
import { categories } from "~/data/category.data";

useHead({ title: "Alasdair Casperd Portfolio" });

// Send an email to hello@alasdaircasperd.com
const triggerEmail = () => {
  window.location.href = "mailto:hello@alasdaircasperd.com";
};

// Scroll to the top of the projects section
const scrollToProjects = () => {
  const projects = document.getElementById("projects");
  projects?.scrollIntoView({ behavior: "smooth" });
};
</script>
