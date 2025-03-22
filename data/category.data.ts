import type { Category } from "~/types/category";

export const categories: Record<string, Category> = {
  ios_development: {
    name: "iOS Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    path: "/apps",
    more_text: "More iOS Apps",
  },

  web_development: {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    path: "/web-development",
    more_text: "More Web Apps",
  },

  web_design: {
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    path: "/web-design",
    more_text: "More Web Design Projects",
  },

  games_development: {
    name: "Games Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.",
    path: "/games-development",
    more_text: "Other Games Projects",
  },
};
