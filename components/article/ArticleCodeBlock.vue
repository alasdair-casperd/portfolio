<template>
  <ClientOnly>
    <div
      class="text-xs bg-base-800 border border-base-700 rounded-lg overflow-hidden group"
    >
      <div
        class="p-3 font-mono text-base-400 border-base-700 border-b flex flex-row items-center justify-between"
      >
        <div class="flex flex-row items-center gap-2">
          <Icon
            v-if="snippet.language in icons"
            :name="icons[snippet.language as keyof typeof icons]"
            class="text-base"
          />
          <Icon v-else name="tabler:code" class="text-base" />

          {{ snippet.file_name }}
        </div>
        <a :to="snippet.link" target="_blank" class="plain-link">
          <Icon
            name="tabler:external-link"
            class="cursor-pointer text-base hover:text-white"
          />
        </a>
      </div>
      <VCodeBlock
        :code="snippet.code"
        highlightjs
        theme="panda-syntax-dark"
        :lang="snippet.language"
        :copy-button="false"
        code-block-radius="0"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { VCodeBlock } from "@wdns/vue-code-block";
import type { CodeSnippet } from "~/types/code-snippet";

interface Props {
  snippet: CodeSnippet;
}

const icons = {
  swift: "tabler:brand-swift",
  "C#": "tabler:brand-csharp",
  typescript: "tabler:brand-typescript",
};
defineProps<Props>();
</script>
