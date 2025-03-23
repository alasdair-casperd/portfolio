<template>
  <ArticleContainer
    title="Poolhullock Farm"
    subtitle="Farm Website Design"
    :page="pages.poolhullock_farm"
  >
    <ArticleSection title="Overview">
      <p>
        One of my most recent web-design projects was designing a website for a
        farm in England. I attempted to create a simple but elegant site using
        photos taken by the farm workers of the farmland, crops and animals.
      </p>
      <ArticleImage
        src="/web-development/poolhullock-farm/poolhullock-splash-uniform.png"
        alt="Farm Display Image"
      />
      <ArticleImage
        src="/web-development/poolhullock-farm/poolhullock-splash-uniform-2.png"
        alt="Farm Display Image"
      />
    </ArticleSection>
    <!-- <ArticleSection title="View the Site">
      <ArticleAlert variant="link"
        >I've made an archived version of the site available
        <a href="https://breakaway-33aa7.web.app">here</a>.</ArticleAlert
      >
    </ArticleSection> -->
  </ArticleContainer>
</template>

<script setup lang="ts">
useHead({ title: "Poolhullock Farm • Alasdair Casperd Portfolio" });

import { pages } from "~/data/page.data";
</script>
