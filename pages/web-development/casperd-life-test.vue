<template>
  <ArticleContainer
    title="Casperd Life Test"
    subtitle="React-powered Online Quiz"
    :page="pages.casperd_life_test"
  >
    <ArticleSection title="Overview">
      <p>
        The Casperd Life Test is an online quiz I created with the aim of
        quantifying how much of 'life' the respondent has experienced. The user
        is presented with a wide range of experiences, including everything from
        holding a baby to losing a loved one. The quiz anonymously collects
        aggregated response statistics, allowing it to present interesting data
        upon completion, such as your five 'rarest experiences'.
      </p>
      <p>
        The quiz is built with React and Next.js, and can be played
        <a href="https://casperd-life-test.web.app" target="_blank">here</a>.
      </p>
      <ArticleImage
        src="/web-development/casperd-life-test/casperd-life-test-splash-uniform.png"
        alt="WordOwl Display Image"
      />
      <ArticleImage
        src="/web-development/casperd-life-test/casperd-life-test-splash-uniform-1.png"
        alt="WordOwl Display Image"
      />
    </ArticleSection>
    <ArticleSection title="Code Available on GitHub">
      <ArticleCodeBlock :snippet="code_snippets.casperd_life_test" />
    </ArticleSection>
  </ArticleContainer>
</template>

<script setup lang="ts">
useHead({ title: "Casperd Life Test • Alasdair Casperd Portfolio" });

import { code_snippets } from "~/data/code-snippets.data";
import { pages } from "~/data/page.data";
</script>
