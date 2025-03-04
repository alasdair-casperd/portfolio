<template>
  <div class="relative h-[600px] overflow-hidden">
    <div
      class="absolute z-50 h-full w-full flex flex-col justify-center items-center px-5"
    >
      <h1
        class="mt-8 bg-linear-to-br from-base-100/90 via-sky-50 to-white bg-clip-text text-center text-2xl text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Lorem Ipsum Dolor Sit <br />Amet Consectetur Polarsi
      </h1>

      <p class="text-base-500 mt-6 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint
        iure amet repellat vero quasi <br />a animi placeat fugit eos. Tenetur
        quo quis eius, fugiat blanditiis fuga! Ipsam, vel rerum.
      </p>

      <div class="flex flex-col sm:flex-row gap-5 mt-7">
        <Button
          text="Read More"
          variant="primary"
          icon_name="tabler:chevron-right"
        />
        <Button
          text="Contact"
          variant="secondary"
          icon_name="tabler:chevron-right"
        />
      </div>
    </div>
    <LightRays
      streak-color="#f7ffff"
      class="absolute top-0 -translate-y-[50px] bg-gradient-to-br from-zinc-800/50 to-black z-20"
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
