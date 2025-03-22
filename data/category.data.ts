import type { Category } from "~/types/category";

export const categories: Record<string, Category> = {
  ios_development: {
    name: "iOS Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    path: "/apps",
  },

  web_development: {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    path: "/web-development",
  },

  web_design: {
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    path: "/web-design",
  },

  games_development: {
    name: "Games Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    path: "/games-development",
  },
};
