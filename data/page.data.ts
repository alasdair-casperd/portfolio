import type { Page } from "~/types/page";
import { categories } from "./category.data";
import { tags } from "./tag.data";

export const pages: Page[] = [
  {
    name: "WordOwl",
    caption: "Lorem ipsum dolor.",
    path: "wordowl",
    image: "page-previews/wordowl-page-preview.png",
    tags: [tags.typescript, tags.vue, tags.nuxt],
    category: categories.web_development,
  },
  {
    name: "Casperd Life Test",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/casperd-life-test-page-preview.png",
    tags: [tags.typescript, tags.react, tags.next],
    category: categories.web_development,
  },
  {
    name: "The Illusionist – Companion Sites",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/the-illusionist-page-preview.png",
    tags: [tags.typescript, tags.react, tags.next],
    category: categories.web_development,
  },
  {
    name: "WordOwl",
    caption: "Lorem ipsum dolor.",
    path: "apps/wordowl",
    image: "page-previews/wordowl-page-preview.png",
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "Domingo",
    caption: "Lorem ipsum dolor.",
    path: "apps/domingo",
    image: "page-previews/domingo-page-preview.png",
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "A Big Knight Out",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/tanks-arena-page-preview.png",
    tags: [tags.c_sharp, tags.unity],
    category: categories.games_development,
  },
  {
    name: "Tanks Arena",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/tanks-arena-page-preview.png",
    tags: [tags.c_sharp, tags.unity],
    category: categories.games_development,
  },
  {
    name: "Trace",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/trace-page-preview.png",
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "Backtrack",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/backtrack-page-preview.png",
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "Lessons",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/lessons-page-preview.png",
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },

  {
    name: "Bilingüe",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/bilingue-page-preview.png",
    tags: [tags.html, tags.css],
    category: categories.web_development,
  },
  {
    name: "Wilderness",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/wilderness-page-preview.png",
    tags: [tags.html, tags.css],
    category: categories.web_development,
  },
  {
    name: "Poolhullock Farm",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/poolhullock-page-preview.png",
    tags: [tags.html, tags.css],
    category: categories.web_development,
  },
  {
    name: "Domingo – Companion Website",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/domingo-website-page-preview.png",
    tags: [tags.html, tags.css],
    category: categories.web_development,
  },
  {
    name: "OxReady",
    caption: "Lorem ipsum dolor.",
    path: "casperd-life-test",
    image: "page-previews/oxready-page-preview.png",
    tags: [tags.html, tags.css],
    category: categories.web_development,
  },
];
