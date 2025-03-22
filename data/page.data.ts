import type { Page } from "~/types/page";
import { categories } from "./category.data";
import { tags } from "./tag.data";

export const pages: Page[] = [
  {
    name: "Bookshelf",
    caption: "Book tracking web app",
    path: "/work-in-progress",
    page_preview_image: "/page-previews/bookshelf-page-preview.png",
    tags: [tags.typescript, tags.vue, tags.tailwind, tags.nuxt],
    category: categories.web_development,
  },
  {
    name: "Casperd Life Test",
    caption: "Interactive quiz site built with react and next.js",
    path: "/web-development/casperd-life-test",
    page_preview_image: "/page-previews/casperd-life-test-page-preview.png",
    tags: [tags.typescript, tags.react, tags.tailwind, tags.next],
    category: categories.web_development,
  },
  {
    name: "The Illusionist – Companion Sites",
    caption: "Websites built to support an envelope escape room",
    path: "/casperd-life-test",
    page_preview_image: "/page-previews/the-illusionist-page-preview.png",
    tags: [tags.typescript, tags.react, tags.tailwind, tags.next],
    category: categories.web_development,
  },
  {
    name: "WordOwl",
    caption: "Published iOS word-game companion app",
    path: "/apps/wordowl",
    page_preview_image: "/page-previews/wordowl-page-preview.png",
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "Domingo",
    caption: "Published iOS daily word puzzle app",
    path: "/apps/domingo",
    page_preview_image: "/page-previews/domingo-page-preview.png",
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "A Big Knight Out",
    caption: "Work-in-progress puzzle video game",
    path: "/games-development/a-big-knight-out",
    page_preview_image: "/page-previews/a-big-knight-out-page-preview.png",
    tags: [tags.c_sharp, tags.unity],
    category: categories.games_development,
  },
  {
    name: "Tanks Arena",
    caption: "Video game with multiplayer and level editor",
    path: "/games-development/tanks-arena",
    page_preview_image: "/page-previews/tanks-arena-page-preview.png",
    tags: [tags.c_sharp, tags.unity],
    category: categories.games_development,
  },
  {
    name: "Trace",
    caption: "iOS mathematical graphing app concept",
    path: "/apps/trace",
    page_preview_image: "/page-previews/trace-page-preview.png",
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "Backtrack",
    caption: "Lorem ipsum dolor.",
    path: "/apps/backtrack",
    page_preview_image: "/page-previews/backtrack-page-preview.png",
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "Lessons",
    caption: "Lorem ipsum dolor.",
    path: "/apps/lessons",
    page_preview_image: "/page-previews/lessons-page-preview.png",
    tags: [tags.swift, tags.swift_ui],
    category: categories.ios_development,
  },
  {
    name: "Breakaway Languages",
    caption: "Lorem ipsum dolor.",
    path: "/web-development/breakaway-languages",
    page_preview_image: "/page-previews/breakaway-page-preview.png",
    tags: [tags.javascript, tags.react, tags.tailwind, tags.next],
    category: categories.web_development,
  },
  {
    name: "Bilingüe",
    caption: "Lorem ipsum dolor.",
    path: "/casperd-life-test",
    page_preview_image: "/page-previews/bilingue-page-preview.png",
    tags: [tags.html, tags.css],
    category: categories.web_design,
  },
  {
    name: "Wilderness",
    caption: "Lorem ipsum dolor.",
    path: "/casperd-life-test",
    page_preview_image: "/page-previews/wilderness-page-preview.png",
    tags: [tags.html, tags.css],
    category: categories.web_design,
  },
  {
    name: "Poolhullock Farm",
    caption: "Lorem ipsum dolor.",
    path: "/casperd-life-test",
    page_preview_image: "/page-previews/poolhullock-page-preview.png",
    tags: [tags.html, tags.css],
    category: categories.web_design,
  },
  {
    name: "Domingo – Companion Website",
    caption: "Lorem ipsum dolor.",
    path: "/casperd-life-test",
    page_preview_image: "/page-previews/domingo-website-page-preview.png",
    tags: [tags.html, tags.css],
    category: categories.web_design,
  },
  {
    name: "OxReady",
    caption: "Lorem ipsum dolor.",
    path: "/casperd-life-test",
    page_preview_image: "/page-previews/oxready-page-preview.png",
    tags: [tags.html, tags.css],
    category: categories.web_design,
  },
];
