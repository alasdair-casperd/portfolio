<script setup lang="ts">
import GradientDivider from "~/components/home-page/GradientDivider.vue";
import PageCard from "~/components/home-page/PageCard.vue";
import { pages } from "~/data/page.data";
</script>

<template>
  <div class="p-20 flex flex-col gap-10 bg-base-900">
    <StyleguideSection title="Core - Typography">
      <div class="p-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xl">
        <div class="font-extralight">Host Grotesk Light</div>
        <div class="font-light">Host Grotesk Light</div>
        <div class="font-normal">Host Grotesk Regular</div>
        <div class="font-medium">Host Grotesk Medium</div>
        <div class="font-semibold">Host Grotesk Semibold</div>
        <div class="font-bold">Host Grotesk Bold</div>
        <div class="font-extrabold">Host Grotesk Extrabold</div>
        <div class="font-black">Host Grotesk Black</div>
      </div>
    </StyleguideSection>

    <StyleguideSection title="Core – Buttons">
      <div class="flex flex-row p-12 gap-4">
        <Button
          text="Primary Button"
          icon_name="tabler:chevron-right"
          variant="primary"
        />
        <Button
          text="Primary Button"
          icon_name="tabler:chevron-right"
          variant="secondary"
        />
      </div>
    </StyleguideSection>

    <StyleguideSection title="Homepage - Hero">
      <Hero />
    </StyleguideSection>

    <StyleguideSection title="Homepage - Gradient Dividers">
      <GradientDivider shadow_top />
      <GradientDivider shadow_bottom />
    </StyleguideSection>

    <StyleguideSection title="Homepage - Content Splash Sections">
      <ContentSplash
        title="Lorem Ipsum Dolor Sit Amet Polarsi"
        badge="Project Highlight"
        image="three-phone-splash.png"
        ><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          labore dolorem nobis earum quia et perferendis, numquam iusto facere
          adipisci, quasi impedit. Ratione, dolor. Cupiditate architecto placeat
          ut voluptas qui?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          labore dolorem nobis earum quia et perferendis, numquam iusto facere
          adipisci, quasi impedit. Ratione, dolor. Cupiditate architecto placeat
          ut voluptas qui?
        </p>
      </ContentSplash>
    </StyleguideSection>

    <StyleguideSection title="Home – Page Cards">
      <div class="p-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <PageCard :page="pages[0]" />
        <PageCard :page="pages[1]" />
        <PageCard :page="pages[2]" />
      </div>
    </StyleguideSection>
  </div>
</template>
