<script setup lang="ts">
import AboutGrid from "~/components/home-page/about/AboutGrid.vue";
import GradientDivider from "~/components/home-page/GradientDivider.vue";
import { categories } from "~/data/category.data";
</script>

<template>
  <LightRaysHero />

  <GradientDivider shadow_bottom />
  <AboutGrid />
  <!-- <div class="flex flex-col gap-10">
    <ContentSplash
      title="Tanks Arena : Multiplayer Video Game with Level Editor"
      badge="Project Highlight"
      image="page-previews/tanks-arena-page-preview.png"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        deleniti deserunt similique possimus quo quam unde necessitatibus. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deleniti
        deserunt similique possimus quo quam unde necessitatibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        deleniti deserunt similique possimus quo quam unde necessitatibus. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deleniti
        deserunt similique possimus quo quam unde necessitatibus.
      </p>
    </ContentSplash>

    <ContentSplash
      title="WordOwl : Published iOS Word Game Companion App"
      badge="Project Highlight"
      image="apps/wordowl/phones/tools-list-1.png"
      :reversed="true"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        deleniti deserunt similique possimus quo quam unde necessitatibus. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deleniti
        deserunt similique possimus quo quam unde necessitatibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        deleniti deserunt similique possimus quo quam unde necessitatibus. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deleniti
        deserunt similique possimus quo quam unde necessitatibus.
      </p>
    </ContentSplash>
  </div> -->

  <GradientDivider shadow_top />

  <!-- <div class="px-12 flex flex-col gap-6">
    <PageRow v-for="page in pages" :page="page" />
  </div> -->
  <div class="flex flex-col gap-24 py-24">
    <CategoryGrid v-for="category in categories" :category="category" />
  </div>
</template>
