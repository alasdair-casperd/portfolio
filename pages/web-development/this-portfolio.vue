<template>
  <ArticleContainer
    title="This Portfolio Site"
    subtitle="Vue + Tailwind Portfolio"
    :page="pages.portfolio"
  >
    <ArticleSection title="Overview">
      <p>
        Perhaps this is a bit meta, but one of my most recent web development
        projects was this portfolio itself. The portfolio was built entirely
        from scratch with Vue, using Nuxt and Tailwind.
      </p>
    </ArticleSection>
    <ArticleSection title="Code Available on GitHub">
      <ArticleCodeBlock :snippet="code_snippets.portfolio" />
    </ArticleSection>
  </ArticleContainer>
</template>

<script setup lang="ts">
useHead({ title: "This Portfolio • Alasdair Casperd Portfolio" });

import { code_snippets } from "~/data/code-snippets.data";
import { pages } from "~/data/page.data";
</script>
