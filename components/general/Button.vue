<template>
  <div :class="classes">
    {{ text }}
    <Icon v-if="icon_name" :name="icon_name" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  icon_name?: string;
  variant: "primary" | "secondary";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});

const classes = [
  {
    "py-2 px-4 rounded-full font-bold flex flex-row items-center gap-2 cursor-pointer hover:scale-[1.02] transition-transform duration-100":
      true,
    "bg-white text-base-950": props.variant === "primary",
    "border border-white": props.variant === "secondary",
  },
];
</script>
