import type { Page } from "~/types/page";
import { categories } from "./category.data";
import { tags } from "./tag.data";

export const pages: Page[] = [
  {
    name: "WordOwl",
    caption: "Lorem ipsum dolor.",
    path: "wordowl",
    images: {
      card: "page-previews/wordowl-page-preview.png",
      list: "apps/wordowl/phones/tools-list-1.png",
      icon: "apps/wordowl/app-icon.png",
    },
    tags: [tags.typescript, tags.vue, tags.nuxt],
    category: categories.web_development,
  },
  {
    name: "Casperd Life Test",
    caption: "Interactive quiz site built with react and next.js",
    path: "casperd-life-test",
    images: {
      card: "page-previews/casperd-life-test-page-preview.png",
      list: "page-previews/casperd-life-test-page-preview.png",
    },
    tags: [tags.typescript, tags.react, tags.next],
    category: categories.web_development,
  },
  {
    name: "The Illusionist – Companion Sites",
    caption: "Websites built to support an envelope escape room",
    path: "casperd-life-test",
    images: {
      card: "page-previews/the-illusionist-page-preview.png",
      list: "page-previews/the-illusionist-page-preview.png",
    },
    tags: [tags.typescript, tags.react, tags.next],
    category: categories.web_development,
  },
  {
    name: "WordOwl",
    caption: "Published iOS word-game companion app",
    path: "apps/wordowl",
    images: {
      card: "page-previews/wordowl-page-preview.png",
      list: "page-previews/wordowl-page-preview.png",
      icon: "apps/wordowl/app-icon.png",
    },
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "Domingo",
    caption: "Published iOS daily word puzzle app",
    path: "apps/domingo",
    images: {
      card: "page-previews/domingo-page-preview.png",
      list: "page-previews/domingo-page-preview.png",
      icon: "apps/domingo/app-icon.png",
    },
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "A Big Knight Out",
    caption: "Work-in-progress puzzle video game",
    path: "casperd-life-test",
    images: {
      card: "page-previews/tanks-arena-page-preview.png",
      list: "page-previews/tanks-arena-page-preview.png",
    },
    tags: [tags.c_sharp, tags.unity],
    category: categories.games_development,
  },
  {
    name: "Tanks Arena",
    caption: "Video game with multiplayer and level editor",
    path: "casperd-life-test",
    images: {
      card: "page-previews/tanks-arena-page-preview.png",
      list: "page-previews/tanks-arena-page-preview.png",
    },
    tags: [tags.c_sharp, tags.unity],
    category: categories.games_development,
  },
  {
    name: "Trace",
    caption: "iOS mathematical graphing app concept",
    path: "casperd-life-test",
    images: {
      card: "page-previews/trace-page-preview.png",
      list: "page-previews/trace-page-preview.png",
      icon: "apps/trace/app-icon.png",
    },
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "Backtrack",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    images: {
      card: "page-previews/backtrack-page-preview.png",
      list: "page-previews/backtrack-page-preview.png",
      icon: "apps/backtrack/app-icon.png",
    },
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "Lessons",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    images: {
      card: "page-previews/lessons-page-preview.png",
      list: "page-previews/lessons-page-preview.png",
      icon: "apps/lessons/app-icon.png",
    },
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },

  {
    name: "Bilingüe",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    images: {
      card: "page-previews/bilingue-page-preview.png",
      list: "page-previews/bilingue-page-preview.png",
    },
    tags: [tags.html, tags.css],
    category: categories.web_development,
  },
  {
    name: "Wilderness",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    images: {
      card: "page-previews/wilderness-page-preview.png",
      list: "page-previews/wilderness-page-preview.png",
    },
    tags: [tags.html, tags.css],
    category: categories.web_development,
  },
  {
    name: "Poolhullock Farm",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    images: {
      card: "page-previews/poolhullock-page-preview.png",
      list: "page-previews/poolhullock-page-preview.png",
    },
    tags: [tags.html, tags.css],
    category: categories.web_development,
  },
  {
    name: "Domingo – Companion Website",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    images: {
      card: "page-previews/domingo-website-page-preview.png",
      list: "page-previews/domingo-website-page-preview.png",
    },
    tags: [tags.html, tags.css],
    category: categories.web_development,
  },
  {
    name: "OxReady",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    images: {
      card: "page-previews/oxready-page-preview.png",
      list: "page-previews/oxready-page-preview.png",
    },
    tags: [tags.html, tags.css],
    category: categories.web_development,
  },
];
