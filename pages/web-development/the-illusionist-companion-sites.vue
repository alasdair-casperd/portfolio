<template>
  <ArticleContainer
    title="The Illusionist Companion Sites"
    subtitle="Envelope Escape Room Components"
    :page="pages.casperd_life_test"
  >
    <ArticleSection title="An Envelope Escape Room Project">
      <p>
        Last year, I spent a month creating an 'envelope escape room', which I
        called <i>The Illusionist</i>. If you haven't played one of these
        before, the idea is that players receive an envelope of puzzles,
        simulating the problem-solving experience of an escape room. The game
        involved creating two supporting websites, both of which were built
        using React and Next.js.
      </p>

      <ArticleImage
        src="/web-development/the-illusionist/the-illusionist-materials.png"
        alt="WordOwl Display Image"
      />
    </ArticleSection>
    <ArticleSection title="The Online Vault">
      <p>
        The first supporting website was the 'online vault' which players would
        have to try to access by solving each of the puzzles. The landing page
        for the vault was a 10-digit keypad, which players could use to enter
        the five codes they had deciphered from the puzzles. Once the correct
        code was entered, the vault would open, and the players would be able to
        access the final set of puzzles in the form of file downloads.
      </p>
      <ArticleImage
        src="/web-development/the-illusionist/the-illusionist-vault.png"
        alt="WordOwl Display Image"
      />
    </ArticleSection>
  </ArticleContainer>
</template>

<script setup lang="ts">
useHead({ title: "The Illusionist Sites • Alasdair Casperd Portfolio" });

import { code_snippets } from "~/data/code-snippets.data";
import { pages } from "~/data/page.data";
</script>
