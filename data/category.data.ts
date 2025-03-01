import type { Category } from "~/types/category";

export const categories: Record<string, Category> = {
  web_development: {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    path: "web-development",
  },

  ios_development: {
    name: "iOS Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    path: "ios-development",
  },

  games_development: {
    name: "Games Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    path: "games-development",
  },
};
