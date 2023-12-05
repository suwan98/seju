interface NavItem {
  name: "About Me!" | "게시글 보기";
  href: "/about" | "/posts";
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "About Me!",
    href: "/about",
  },
  {
    name: "게시글 보기",
    href: "/posts",
  },
];
