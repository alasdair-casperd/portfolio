<template>
  <ArticleContainer
    title="Lessons"
    subtitle="Invoicing Tool for Tutors"
    icon="/apps/lessons/app-icon.png"
    :page="pages.lessons"
  >
    <ArticleSection title="App Concept">
      <p>
        Lessons is an iOS app while working as a private tutor in Hong Kong to
        assist with the financial side of tutoring. The app syncs with an iOS
        calendar to display teaching schedules and automatically calculate total
        earnings, hours and more. The app can even export its data ready to be
        copied directly into an invoice.
      </p>
    </ArticleSection>

    <ArticleSection title="Tutoring Made Easy">
      <p>
        Once linked with you chosen calendar, lessons provides a plethora of
        useful functions:
      </p>
      <ul>
        <li>
          A monthly dashboard shows your upcoming lessons and monthly totals
          including hours, total students and income.
        </li>
        <li>
          Detailed views show trends in your income, hours and student counts
          over time with helpful charts.
        </li>
        <li>
          Comprehensive preferences allow for a range of contracts including
          13-month contracts.
        </li>
        <li>
          A month's lessons can be exported in invoice format for smoother and
          more reliable invoicing.
        </li>
      </ul>
      <ArticleGallery :images="gallery_images" :columns="3" />
      <p>
        I started working on Backtrack following the release of the new
        <b>SwiftData</b> framework, a new alternative to the traditional
        CoreData workflow for data management in iOS apps. The project allowed
        me to get to grips with the new way of working, and I'm a huge fan of
        the comparable simplicity it offers!
      </p>
    </ArticleSection>

    <ArticleSection title="Built with SwiftUI and EventKit">
      <p>
        Lessons is built using pure SwiftUI, taking advantage of the latest
        EventKit features released alongside iOS 17 in order to smoothly sync
        with the user's iOS calendar.
      </p>
      <!-- <ArticleCodeBlock :snippet="code_snippets.backtrack" /> -->
    </ArticleSection>
  </ArticleContainer>
</template>

<script setup lang="ts">
useHead({ title: "Lessons • Alasdair Casperd Portfolio" });

import { pages } from "~/data/page.data";

const gallery_images = [
  { src: "/apps/lessons/phones/calendar-view.png", caption: "Calendar View" },
  { src: "/apps/lessons/phones/hours.png", caption: "Hours View" },
  {
    src: "/apps/lessons/phones/settings.png",
    caption: "App Settings",
  },
];
</script>
