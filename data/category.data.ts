import type { Category } from "~/types/category";

export const categories: Record<string, Category> = {
  ios_development: {
    name: "iOS Development",
    description:
      "A collection of iOS apps I've developed, including two published apps (WordOwl and Domingo) and a number of work-in-progress projects.",
    path: "/apps",
    more_text: "More iOS Apps",
  },

  web_development: {
    name: "Web Development",
    description:
      "A collection of web development projects I've worked on, all built with modern web technologies such as React and Vue.",
    path: "/web-development",
    more_text: "More Web Apps",
  },

  web_design: {
    name: "Web Design",
    description:
      "A collection of some of my older web design work, with a focus on the design side of development.",
    path: "/web-design",
    more_text: "More Web Design Projects",
  },

  games_development: {
    name: "Games Development",
    description: "A collection of video games I've developed using Unity.",
    path: "/games-development",
    more_text: "Other Games Projects",
  },
};
