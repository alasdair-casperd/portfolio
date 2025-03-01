<template>
  <component
    :is="href === undefined ? 'div' : 'a'"
    :href="href"
    class="text-white text-sm"
  >
    {{ text }}
  </component>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  href?: string;
}

defineProps<Props>();
</script>
