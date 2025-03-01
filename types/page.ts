import type { Category } from "./category";
import type { Tag } from "./tag";

export type Page = {
  name: string;
  caption: string;
  path: string;
  images: Record<string, string>;
  tags: Tag[];
  category: Category;
};
