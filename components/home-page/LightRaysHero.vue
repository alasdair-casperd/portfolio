<template>
  <div class="relative h-[500px]">
    <div
      class="absolute z-40 h-full w-full flex flex-col justify-center items-center px-5"
    >
      <h1
        class="mt-8 bg-linear-to-br from-base-100/90 via-sky-100 to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Welcome to my Portfolio <br />
      </h1>

      <p class="text-base-500 mt-6 text-center md:max-w-[600px]">{{ body }}</p>

      <div class="flex flex-col sm:flex-row gap-5 mt-7">
        <Button
          @click="primary_action.action"
          :text="primary_action.text"
          variant="primary"
          icon_name="tabler:chevron-right"
        />
        <Button
          v-if="secondary_action"
          @click="secondary_action.action"
          :text="secondary_action.text"
          variant="secondary"
          icon_name="tabler:chevron-right"
        />
      </div>
    </div>
    <LightRays
      streak-color="#ffffff"
      class="top-0 -translate-y-[50px] bg-gradient-to-br from-zinc-800/80 via-base-950/70 to-base-950 -z-10"
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
interface Props {
  title: string;
  body: string;
  primary_action: {
    text: string;
    action: () => void;
  };
  secondary_action?: {
    text: string;
    action: () => void;
  };
}

defineProps<Props>();
</script>
