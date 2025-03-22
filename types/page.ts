import type { Category } from "./category";
import type { Tag } from "./tag";

export type Page = {
  name: string;
  caption: string;
  path: string;
  page_preview_image: string;
  tags: Tag[];
  category: Category;
};
