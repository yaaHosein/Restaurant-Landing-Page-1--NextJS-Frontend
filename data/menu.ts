/**
 * Menu section data: featured dishes with image path, title, and price.
 * Consumed by components/Menu.tsx. Types from @/types (MenuItem).
 */
import type { MenuItem } from "@/types";

/** Menu items data - in a real app this would come from a CMS or API */
export const menuItems: MenuItem[] = [
  { img: "/menu/item-1.png", title: "بطاطا بالبيض", price: "250 دينار " },
  { img: "/menu/item-2.png", title: "لحم عجين", price: "250 دينار " },
  { img: "/menu/item-3.png", title: "فريز مع مربى", price: "250 دينار " },
  { img: "/menu/item-4.png", title: "بيض مع جزر", price: " دينار 250" },
];
