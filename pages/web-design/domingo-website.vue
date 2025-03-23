<template>
  <ArticleContainer
    title="Domingo Website"
    subtitle="Companion Site for my iOS App"
    :page="pages.domingo_website"
  >
    <ArticleSection title="Overview">
      <p>
        After releasing my first iOS app <a href="/apps/domingo">Domingo</a>, I
        was thrilled that its daily puzzle became part of the daily routines of
        so many of my friends and family. However, as the app was only available
        on iOS, its audience was limited to Apple users. I experimented with
        making an android version of the app, but wasn't ultimately happy with
        it, so ended up releasing a simple web-version of the game instead along
        with the landing page seen below.
      </p>
      <ArticleImage
        src="/web-development/domingo/domingo-splash-uniform.png"
        alt="Domingo Website Display Image"
      />
      <ArticleImage
        src="/web-development/domingo/domingo-splash-uniform-2.png"
        alt="Domingo Website Display Image"
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
useHead({ title: "Domingo Companion Site • Alasdair Casperd Portfolio" });

import { pages } from "~/data/page.data";
</script>
