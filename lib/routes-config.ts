// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    items: [
      {
        title: "Prerequisites",
        href: "/prerequisites",
      },
      {
        title: "Installation",
        href: "/installation",
      }
    ],
  },
  {
    title: "Gameplay",
    href: "/gameplay",
    noLink: true,
    items: [
      {
        title: "Gameplay Settings",
        href: "/settings",
      },
      {
        title: "Gameplay Tips",
        href: "/tips",
      },
      {
        title: "Skill Progression",
        href: "/skill-progression",
      },
    ],
  },
  {
    title: "Customization",
    href: "/customization",
    noLink: true,
    items: [
      {
        title: "Safe Mods",
        href: "/safe-mods",
      },
      {
        title: "No Support If Modded",
        href: "/no-support-if-modded",
      },
      {
        title: "Synthesis Patchers",
        href: "/synthesis-patchers",
      },
      {
        title: "Load Order",
        href: "/load-order",
      },
    ],
  }
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
