<template>
  <ArticleContainer
    title="Backtrack"
    subtitle="Hiking Companion App"
    icon="/apps/backtrack/app-icon.png"
    :category="categories.ios_development"
  >
    <ArticleSection title="App Concept">
      <p>
        Backtrack is a work-in-progress iOS hiking app designed to help
        multi-day backpackers organise their hiking kit and minimize their pack
        weight on long hikes.
      </p>
      <ArticleGallery :images="gallery_images" :columns="3" />
    </ArticleSection>

    <ArticleSection title="The Ultimate Backpacking Companion">
      <p>
        Backtrack allows users to track the kit they are carrying on
        long-distance hiking trips and gain invaluable insights into their pack
        weight distribution. Key features include a kit library shared across
        trips, dynamic weight charts and iCloud sync.
      </p>
      <ArticleGallery :images="gallery_images_1" :columns="3" />
      <p>
        I started working on Backtrack following the release of the new
        <b>SwiftData</b> framework, a new alternative to the traditional
        CoreData workflow for data management in iOS apps. The project allowed
        me to get to grips with the new way of working, and I'm a huge fan of
        the comparable simplicity it offers!
      </p>
    </ArticleSection>

    <ArticleSection title="Code Available on GitHub">
      <p>
        Backtrack is built entirely in Swift and SwiftUI. A small sample of the
        code is shown below, and I've made the rest public on my
        <a href="https://github.com/alasdair-casperd/backtrack" target="_blank"
          >GitHub</a
        >.
      </p>
      <!-- <ArticleCodeBlock :snippet="code_snippets.backtrack" /> -->
    </ArticleSection>
  </ArticleContainer>
</template>

<script setup lang="ts">
import { categories } from "~/data/category.data";
import { code_snippets } from "~/data/code-snippets.data";

const gallery_images = [
  { src: "/apps/backtrack/phones/trip-view.png", caption: "Trip View" },
  { src: "/apps/backtrack/phones/kit-view.png", caption: "Kit Library" },
  {
    src: "/apps/backtrack/phones/weight-distribution-view.png",
    caption: "Weight Charts",
  },
];

const gallery_images_1 = [
  { src: "/apps/backtrack/phones/trips-view.png", caption: "Trips View" },
  { src: "/apps/backtrack/phones/welcome-view.png", caption: "Welcome View" },
  { src: "/apps/backtrack/phones/item-view.png", caption: "Item Details" },
];
</script>
