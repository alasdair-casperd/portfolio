<template>
  <div
    :class="background_classes"
    class="border p-4 rounded-2xl flex flex-col sm:flex-row items-start gap-2 sm:items-center my-4"
  >
    <div class="w-10 min-w-10 flex items-center">
      <Icon :name="icon_name" :class="icon_classes" class="text-2xl" />
    </div>
    <div class="text-sm">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
type AlertVariant = "link" | "important";

interface Props {
  variant: AlertVariant;
}

const props = defineProps<Props>();

const icon_name = computed(() => {
  return props.variant === "important"
    ? "tabler:alert-triangle"
    : "tabler:link";
});

const background_classes = computed(() => {
  return {
    "bg-sky-950": props.variant === "important",
    "border-sky-800": props.variant === "important",
    "text-sky-200": props.variant === "important",
    "bg-base-950": props.variant === "link",
    "border-base-800": props.variant === "link",
    "text-base-200": props.variant === "link",
  };
});

const icon_classes = computed(() => {
  return {
    "text-sky-400": props.variant === "important",
    "text-base-400": props.variant === "link",
  };
});
</script>
