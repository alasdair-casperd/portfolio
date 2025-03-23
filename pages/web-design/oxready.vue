<template>
  <ArticleContainer
    title="OxReady"
    subtitle="Tutoring Site Splash Page"
    :page="pages.oxready"
  >
    <ArticleSection title="Overview">
      <p>
        This site was built for a proposed student-led tutoring company. My main
        aim here was to achieve a formal, academic look to the site whilst
        keeping the design modern and inviting. I was particularly pleased with
        the integration of the first image on the landing page – I wanted the
        text to be perfectly placed on the college lawn as seen below, which was
        a challenge when the site had to adapt to any possible screen width and
        zoom level, but in the end well worth the extra effort!
      </p>
      <ArticleImage
        src="/web-development/oxready/oxready-splash-uniform.png"
        alt="OxReady Display Image"
      />
      <ArticleImage
        src="/web-development/oxready/oxready-splash-uniform-2.png"
        alt="OxReady Display Image"
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
