<template>
  <div class="w-full flex flex-col justify-center">
    <div class="w-full h-20" :class="shadow_top_class"></div>
    <div
      class="w-full h-[1px] bg-gradient-to-r from-transparent to-transparent via-base-500"
    ></div>
    <div class="w-full h-20" :class="shadow_bottom_class"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  shadow_top?: boolean;
  shadow_bottom?: boolean;
}

const props = defineProps<Props>();

const shadow_top_class = {
  "bg-radial-[at_50%_100%] from-base-900 to-transparent to-40%":
    props.shadow_top,
};

const shadow_bottom_class = {
  "bg-radial-[at_50%_0%] from-base-900 to-transparent to-40%":
    props.shadow_bottom,
};
</script>
