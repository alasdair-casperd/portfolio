<template>
  <ArticleContainer
    title="Domingo"
    subtitle="iOS Puzzle App"
    icon="/apps/domingo/app-icon.png"
    :category="categories.ios_development"
  >
    <ArticleSection title="App Concept">
      <p>
        Domingo is an iOS puzzle app drawing inspiration from Wordle with a new
        'Daily Puzzle' available each day, as well as 30+ categories playable
        anytime. It's published on the AppStore –
        <a href="https://apps.apple.com/gb/app/domingo/id6444321221"
          >download it here</a
        >!
      </p>
      <ArticleImage
        src="/apps/domingo/layout.png"
        alt="Domingo Display Image"
      />
    </ArticleSection>

    <ArticleSection title="App Store Description">
      <p>
        Challenge your brain with Domingo's creative daily puzzles. With a new
        theme everyday, there's no better way to engage your brain over
        breakfast or brighten up your commute!
      </p>
      <ul>
        <li>A new daily puzzle every single day</li>
        <li>Over 30 categories to explore at your leisure</li>
        <li>Replay any past daily puzzle with Archive Mode</li>
        <li>Get competitive by tracking your statistics</li>
        <li>Enable hard mode for a more demanding experience</li>
      </ul>
      <p>
        The daily puzzle and the first two categories are free to enjoy forever,
        with Archive Mode and the remaining categories unlockable through a
        small one-off purchase.
      </p>
      <ArticleGallery :images="gallery_1_images" :columns="3" />
    </ArticleSection>

    <ArticleSection title="How to Play">
      <p>
        Domingo is a game about words within words. In this example the theme is
        <strong>animals</strong>. To solve the puzzle, replace each '❖' with an
        animal to form a word. For example, Ex ❖ ble =
        Ex<strong>panda</strong>ble!
      </p>
      <ul>
        <li>Un ❖ able</li>
        <li>Dism ❖ le</li>
        <li>A ❖ t</li>
        <li>Bene ❖ nt</li>
      </ul>
    </ArticleSection>

    <ArticleSection title="Play Online">
      <p>
        For Android users or those who simply prefer a larger screen, the daily
        puzzle can also be played online through the official Domingo
        <a href="https://domingo-app.com" target="blank">website</a>!
      </p>
      <ArticleImage
        src="/web-development/domingo/domingo-splash-uniform-2.png"
        alt="Domingo Website"
      />
    </ArticleSection>

    <ArticleSection title="Privacy Policy">
      <p>
        The app does not provide any services that may be used to identify or
        track you. No third parties have access to your data or perform
        analytics. The only data stored by the Domingo app is the following,
        which is stored exclusively on-device:
      </p>
      <ul>
        <li>Progress on the puzzles included in the app</li>
        <li>Simple statistics such as total number of guesses made</li>
        <li>User preferences</li>
      </ul>
    </ArticleSection>

    <ArticleSection title="Code Available on GitHub">
      <ArticleCodeBlock :snippet="code_snippets.domingo" />
    </ArticleSection>

    <ArticleSection title="Download on the App Store">
      <p>
        Domingo is available now on the AppStore for iPhone and iPad. Click the
        button below to visit the AppStore page!
      </p>
      <ArticleAppStoreLink
        href="https://apps.apple.com/gb/app/domingo/id6444321221"
      />
    </ArticleSection>
  </ArticleContainer>
</template>

<script setup lang="ts">
definePageMeta({ title: "Domingo" });
import { categories } from "~/data/category.data";
import { code_snippets } from "~/data/code-snippets.data";

const gallery_1_images = [
  { src: "/apps/domingo/phones/main-menu.png", caption: "Main Menu" },
  { src: "/apps/domingo/phones/daily-puzzle-1.png", caption: "Daily Puzzle" },
  {
    src: "/apps/domingo/phones/daily-puzzle-launcher.png",
    caption: "Puzzle Launcher",
  },
];
</script>
