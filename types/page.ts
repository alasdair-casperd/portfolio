import type { Category } from "./category";
import type { Tag } from "./tag";

export type Page = {
  name: string;
  caption: string;
  path: string;
  image: string;
  tags: Tag[];
  category: Category;
};
