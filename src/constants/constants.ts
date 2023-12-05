interface NavItem {
  name: "나는?" | "게시글 보기";
  href: "/about" | "/posts";
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "나는?",
    href: "/about",
  },
  {
    name: "게시글 보기",
    href: "/posts",
  },
];
