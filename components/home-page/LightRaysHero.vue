<template>
  <div class="relative h-[600px]">
    <div
      class="absolute z-40 h-full w-full flex flex-col justify-center items-center px-5"
    >
      <h1
        class="mt-8 bg-linear-to-br from-base-100/90 via-sky-100 to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl leading-20"
      >
        Welcome to my Portfolio <br />
      </h1>

      <p class="text-base-500 mt-6 text-center md:max-w-[600px]">
        You've arrived at my software development portfolio. Below you'll find a
        selection of my personal projects, including iOS apps, web development
        and more.
      </p>

      <div class="flex flex-col sm:flex-row gap-5 mt-7">
        <Button
          @click="scrollToProjects"
          text="View Projects"
          variant="primary"
          icon_name="tabler:chevron-right"
        />
        <Button
          text="Get in Touch"
          variant="secondary"
          icon_name="tabler:chevron-right"
        />
      </div>
    </div>
    <LightRays
      streak-color="#f7ffff"
      class="top-0 -translate-y-[50px] bg-gradient-to-br from-zinc-800/50 to-black -z-10"
    >
      <template #particles>
        <Particles
          id="particles"
          :density="256"
          :size="1.8"
          :minSize="0.4"
          :speed="1"
          :minSpeed="0"
          :opacity="1"
          :minOpacity="0.1"
          color="#FFFFFF"
          background="transparent"
          :opacitySpeed="3"
          :options="() => ({})"
          class="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_100%)] z-30"
        /> </template
    ></LightRays>
  </div>
</template>

<script setup lang="ts">
const scrollToProjects = () => {
  const projects = document.getElementById("projects");
  projects?.scrollIntoView({ behavior: "smooth" });
};
</script>
