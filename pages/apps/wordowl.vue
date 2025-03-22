<template>
  <ArticleContainer
    title="WordOwl"
    subtitle="Word-Finding iOS App"
    icon="/apps/wordowl/app-icon.png"
    :category="categories.ios_development"
  >
    <ArticleSection title="App Concept">
      <p>
        WordOwl is word-finding tool and word game companion, capable of
        searching for words by starting letters, anagrams, letter quantities,
        contained strings and so much more. WordOwl can help with all kinds of
        searches, whether you're looking for words containing 'panda', anagrams
        of 'integral' or words with three pairs of double letters. Users can
        even build their own search tools using the sophisticated
        <i>Compound Search</i> mode.
      </p>
      <p>
        I decided to make WordOwl after becoming frustrated with the lack of
        available alternatives. Whilst you can find an ad-ridden online tool for
        most searches you'd want to perform, prior to WordOwl there were no
        solutions that combined all of these features into a single, elegant
        app. WordOwl aims to provide just such an app, and is available for free
        on the
        <a
          href="https://apps.apple.com/us/app/wordowl-the-word-finder/id6444069802"
          >AppStore</a
        >!
      </p>
      <ArticleImage
        src="/apps/wordowl/phone-splash.png"
        alt="WordOwl Display Image"
      />
    </ArticleSection>

    <ArticleSection title="The Ultimate Word-Finding Tool">
      <p>
        WordOwl is packed with features, including 16 highly-customizable
        searching tools, an advanced <i>Compound Search</i> mode, a wealth of
        sorting options and a detailed user guide. After performing a search,
        the app helps you to narrow down your search further by displaying
        details such as scrabble scores, filtering options with a checklist
        mode, and exporting your results for use in other apps.
      </p>
      <ArticleGallery :images="gallery_1_images" :columns="3" />
    </ArticleSection>

    <ArticleSection title="An Extensive Library of Tools">
      <p>
        WordOwl's 16 core tools are powerful enough to handle almost any search
        imaginable. The tools range from basic functions such as searching for
        anagrams, starting letters or contained strings to truly advanced tools
        such as the <i>Contains Quantities</i> tool or the
        <i>Matches Pattern</i> tool. These tools are capable of performing
        complex searches such as 'words containing two pairs of double letters
        that start and end with the same letter', or 'words containing at least
        five Es but no more than two Ts'.
      </p>
      <p>
        WordOwl also contains a selection of 'solver' tools, such as the
        <i>Crossword Solver</i> and the <i>Wordle Solver</i> which are designed
        specifically to help with popular word games and puzzles.
      </p>
      <ArticleGallery :images="gallery_2_images" :columns="3" />
    </ArticleSection>

    <ArticleSection title="Unparalleled Flexibility with Compound Search">
      <p>
        WordOwl's flagship feature is the Compound Search tool, an interface
        that allows users to build their own custom search functions by
        combining and inverting filters based the core built-in tools. This
        feature is what really sets WordOwl apart from other similar apps,
        opening up searching possibilities previously only accessible to
        programmers.
      </p>
      <ArticleImage
        src="/apps/wordowl/compound-search-splash.png"
        alt="WordOwl Display Image"
      />
    </ArticleSection>

    <ArticleSection title="Privacy Policy">
      <p>
        WordOwl does not collect or store any user data or information except
        for search parameters and user preferences which are stored on your
        device. No third parties have access to your data or perform analytics.
        The app does not provide any services that may be used to identify or
        track you.
      </p>
    </ArticleSection>

    <ArticleSection title="Download on the App Store">
      <p>
        WordOwl is available now on the AppStore for iPhone and iPad! It can
        also be used on some recent macs via 'designed for iPad'. Click the
        button below to visit the AppStore page!
      </p>
      <ArticleAppStoreLink
        href="https://apps.apple.com/us/app/wordowl-the-word-finder/id6444069802"
      />
    </ArticleSection>
  </ArticleContainer>
</template>

<script setup lang="ts">
import { categories } from "~/data/category.data";

const gallery_1_images = [
  { src: "/apps/wordowl/phones/tools-list-1.png", caption: "Search Tools" },
  { src: "/apps/wordowl/phones/ending-letters.png", caption: "Example Search" },
  { src: "/apps/wordowl/phones/results.png", caption: "Results" },
  // {
  //   src: "/apps/wordowl/phones/compound-search.png",
  //   caption: "Compound Search",
  // },
  // { src: "/apps/wordowl/phones/checklist-mode.png", caption: "Checklist Mode" },
];

const gallery_2_images = [
  {
    src: "/apps/wordowl/phones/crossword-solver.png",
    caption: "Crossword Solver",
  },
  { src: "/apps/wordowl/phones/wordle-solver.png", caption: "Wordle Solver" },
  { src: "/apps/wordowl/phones/first-letter.png", caption: "First Letter" },
  // { src: "/apps/wordowl/phones/ending-letters.png", caption: "Ending Letters" },
  // {
  //   src: "/apps/wordowl/phones/contains-quantities.png",
  //   caption: "Contains Quantities",
  // },
  // { src: "/apps/wordowl/phones/anagrams.png", caption: "Anagrams" },
  // {
  //   src: "/apps/wordowl/phones/contains-string.png",
  //   caption: "Contains String",
  // },
  // {
  //   src: "/apps/wordowl/phones/matches-pattern-tool.png",
  //   caption: "Matches Pattern Tool",
  // },
];
</script>
