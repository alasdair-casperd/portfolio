<template>
  <ArticleContainer
    title="File Bookmarks"
    subtitle="Published VS Code Extension"
    icon="/other-projects/file-bookmarks-extension/logo.png"
    :page="pages.backtrack"
  >
    <ArticleSection title="Extension Concept">
      <p>
        My <b>File Bookmarks</b> extension for Visual Studio Code enables
        bookmarking of entire files and folders, with the aim of making large
        projects easier to navigate. The extension creates a new 'Bookmarks'
        sub-view within the Explorer tab, as well as contributing commands and
        context menus. I was inspired to create this extension while working on
        a work project with a large, deeply nested file structure, in which I
        often found myself wanting an easy way to bookmark files without going
        as far as pinning them to the tab bar.
      </p>
      <ArticleImage
        src="/other-projects/file-bookmarks-extension/bookmarks-screenshot-1.png"
        alt="Bookmarks View"
      />
    </ArticleSection>

    <ArticleSection title="Features">
      <ul>
        <li>
          Bookmark files and folders by right-clicking directly in the file
          explorer
        </li>
        <li>Bookmark files through the command palette</li>
        <li>Give each bookmark a friendly name via a pop-up dialogue</li>
        <li>Review, remove and rearrange your bookmarks</li>
        <li>
          Click on a bookmark to be taken straight to the relevant file or
          folder
        </li>
      </ul>
    </ArticleSection>
    <ArticleSection title="Install the Extension">
      <p>
        The extension is available on the Visual Studio Code Marketplace. You
        can find it by searching for <b>File Bookmarks</b>, or by following
        <a
          href="https://marketplace.visualstudio.com/items?itemName=alasdaircasperd.file-bookmarks"
          target="_blank"
          >this link</a
        >.
      </p>
    </ArticleSection>
    <ArticleSection title="Code Available on GitHub">
      <p>
        The extension is built in typescript using the Visual Studio Code
        Extensions API.
      </p>
      <ArticleCodeBlock :snippet="code_snippets.bookmarks_extension" />
    </ArticleSection>
  </ArticleContainer>
</template>

<script setup lang="ts">
useHead({
  title: "File Bookmarks • Alasdair Casperd Portfolio",
});

import { code_snippets } from "~/data/code-snippets.data";
import { pages } from "~/data/page.data";
</script>
