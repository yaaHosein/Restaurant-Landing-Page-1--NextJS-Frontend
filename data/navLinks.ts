/**
 * Desktop navigation config: section IDs (path) and scroll offset for react-scroll Link.
 * Used by components/Nav.tsx. offset compensates for fixed header when scrolling.
 */
import type { NavLinkConfig } from "@/types";

/** Desktop nav links: path = section id, offset for fixed header */
export const navLinks: NavLinkConfig[] = [
  { path: "contact", name: "اتصل بنا", offset: 0 },
  { path: "about", name: "حول", offset: -150 },
    { path: "menu", name: "القائمة", offset: -50 },
  { path: "home", name: "الرئيسة", offset: -50 },
];
