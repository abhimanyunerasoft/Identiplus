interface MenuData {
  id: number;
  title: string;
  link: string;
}

export const menuData: MenuData[] = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Action Required",
    link: "/dashboard/action-required",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog",
  },
];
