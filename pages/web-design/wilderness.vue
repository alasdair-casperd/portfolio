<template>
  <ArticleContainer
    title="Wilderness"
    subtitle="Nature-themed Web Design"
    :page="pages.wilderness"
  >
    <ArticleSection title="Overview">
      <p>
        I designed and built this website as a purely personal project back when
        I was learning the fundamentals of web-design with HTML and CSS. It was
        a nice excuse to use some beautiful nature photos from Unsplash!
      </p>
      <ArticleImage
        src="/web-development/wilderness/wilderness-splash-uniform.png"
        alt="Wilderness Display Image"
      />
      <ArticleImage
        src="/web-development/wilderness/wilderness-splash-uniform-2.png"
        alt="Wilderness Display Image"
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
import { pages } from "~/data/page.data";
</script>
