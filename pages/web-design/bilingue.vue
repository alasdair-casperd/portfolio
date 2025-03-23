<template>
  <ArticleContainer
    title="Bilingüe"
    subtitle="Language-Course Splash Page"
    :page="pages.bilingue"
  >
    <ArticleSection title="Overview">
      <p>
        The website below was created for a friend who was considering launching
        a language-exchange program aimed at pairing language learners with
        native speakers. Whilst the project never got off the ground, I really
        enjoyed creating the site and experimenting with various playful design
        features such as the hand-drawn underlines and accents.
      </p>
      <ArticleImage
        src="/web-development/bilingue/bilingue-splash-uniform.png"
        alt="Bilingue Display Image"
      />
      <ArticleImage
        src="/web-development/bilingue/bilingue-splash-uniform-2.png"
        alt="Bilingue Display Image"
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
