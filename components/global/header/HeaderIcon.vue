<template>
  <component
    :is="href === undefined ? 'div' : 'a'"
    :href="href"
    target="_blank"
    class="text-lg flex flex-col items-center hover:bg-base-800 p-2 rounded-lg transition-colors duration-100 cursor-pointer"
  >
    <Icon :name="icon_name" />
  </component>
</template>

<script setup lang="ts">
interface Props {
  icon_name: string;
  href?: string;
}

defineProps<Props>();
</script>
