<template>
  <ArticleContainer
    title="Breakaway Languages"
    subtitle="React + Tailwind Website"
    :page="pages.breakaway_languages"
  >
    <ArticleSection title="Overview">
      <p>
        I created the website below to host a French language course created by
        a friend. In the design, I tried to create something fully distinct from
        previous web design work, using a serif font for the headings in an
        attempt to create a classy, academic feel. The website was built with
        React, Next.js and Tailwind CSS. I enjoyed adding a number of
        technological flourishes, including animated underlines and scroll-based
        animations
      </p>
      <ArticleImage
        src="/web-development/breakaway-languages/breakaway-splash-uniform.png"
        alt="WordOwl Display Image"
      />
      <ArticleImage
        src="/web-development/breakaway-languages/breakaway-splash-uniform-2.png"
        alt="WordOwl Display Image"
      />
    </ArticleSection>
    <ArticleSection title="View the Site">
      <ArticleAlert variant="link"
        >I've made an archived version of the site available
        <a href="https://breakaway-33aa7.web.app">here</a>.</ArticleAlert
      >
    </ArticleSection>
  </ArticleContainer>
</template>

<script setup lang="ts">
useHead({ title: "Breakaway Languages • Alasdair Casperd Portfolio" });

import { pages } from "~/data/page.data";
</script>
