interface NavItem {
  name: "home" | "about" | "post";
  href: "/" | "/about" | "/post";
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "post",
    href: "/post",
  },
];
