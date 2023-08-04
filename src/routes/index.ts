import { About, Blocks, Docs, Home, Other } from "@/enums/routes";

import { CubeTransparentIcon } from "@heroicons/react/20/solid";
import { PuzzlePieceIcon, UserCircleIcon } from "@heroicons/react/24/outline";

import type { RouteType } from "@/interface/router";

const routes:RouteType[] = [
  {
    path: Home.BASE,
    name: '首页',
    icon: UserCircleIcon,
  },
  {
    path: About.BASE,
    name: '关于',
    icon: CubeTransparentIcon,
  },
  {
    path: Blocks.BASE,
    name: '博客',
    hidden: true,
    icon: UserCircleIcon,
  },
  {
    path: Other.BASE,
    name: '其他平台',
    children: [
      {
        path: Other.DY,
        name: '抖音',
      },
      {
        path: Other.WB,
        name: '微博',
      },
      {
        path: Other.XHS,
        name: '小红书',
      },
    ],
  },
  {
    path: Docs.BASE,
    name: '文档',
    icon: PuzzlePieceIcon,
  },
];
export default routes;