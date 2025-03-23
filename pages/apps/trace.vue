<template>
  <ArticleContainer
    title="Trace"
    subtitle="iOS Graphing App"
    icon="/apps/trace/app-icon.png"
    :page="pages.trace"
  >
    <ArticleSection title="App Concept">
      <p>
        Trace is a work-in-progress mathematical graphing app that I have been
        working on this year. The app allows users to plot graphs of a wide
        array of curves and functions with a wealth of styling and display
        options.
      </p>
    </ArticleSection>

    <ArticleSection title="A Beautiful Graphing Experience">
      <p>
        My goal with this app is to create a fully-featured graphing app that
        was native to iOS. Whilst there are many powerful graphing apps
        available, none feels truly at home in iOS, with many of the most
        popular apps not even adapting correctly to the available screen size on
        iPhones. Later down the line, I have plans to add many more original
        features such as support for complex (imaginary) numbers and recursively
        defined functions.
      </p>
      <ArticleGallery :images="gallery_images" :columns="3" />
    </ArticleSection>

    <ArticleSection title="How the App Works">
      <p>
        I built Trace from scratch using purely Swift and SwiftUI, without
        relying on any existing graphing software. This involved quite a number
        of challenges. The first of these involved converting textual
        descriptions of functions from the user (such as '<b class="font-mono"
          >-xsinx</b
        >' or '<b class="font-mono">-x(x-1)</b>') into a structured,
        mathematical object. A sample of code illustrating some of this
        structure is shown below.
      </p>
      <ArticleCodeBlock :snippet="code_snippets.trace" />
      <p>
        The biggest challenge of all was to actually plot the functions in an
        efficient but elegant manner. This involved a lot of head-scratching and
        the implementation of a great deal of algorithms, for example to handle
        asymptotes and to highlight turning points.
      </p>
    </ArticleSection>

    <ArticleSection title="Code Available on Github">
      <ArticleAlert variant="link"
        >I've made all of the code behind Trace is available on my
        <a href="https://github.com/alasdair-casperd/trace" target="_blank"
          >Github</a
        >.</ArticleAlert
      >
    </ArticleSection>
  </ArticleContainer>
</template>

<script setup lang="ts">
useHead({ title: "Trace • Alasdair Casperd Portfolio" });

import { code_snippets } from "~/data/code-snippets.data";
import { pages } from "~/data/page.data";

const gallery_images = [
  {
    src: "/apps/trace/phones/colourful-plot-view.png",
    caption: "Graphing View",
  },
  { src: "/apps/trace/phones/inverse-functions.png", caption: "Styled Curves" },
  // { src: "/apps/trace/phones/maths-keyboard.png", caption: "Custom Keyboard" },
  { src: "/apps/trace/phones/curve-style.png", caption: "Curve Style" },
  // {
  //   src: "/apps/trace/phones/menu-items-plot-view.png",
  //   caption: "Inline Menus",
  // },
];
</script>
