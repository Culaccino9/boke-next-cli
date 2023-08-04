```bash
npm run dev
npm run dev:test
npm run dev:prod
npm run dev:uat

npm run build
npm run build:test
npm run build:prod
npm run build:uat
```

# 三方库

- Material Tailwind [UI库](https://nextjs.org/docs/deployment)
- tailwindCSS [CSS解决方案](https://www.tailwindawesome.com/)
- heroicons/react [icon](https://www.tailwindawesome.com/)

# Lint规则

- airbnb

# husky

- 代码检测

# router

- src
  - enums // 路由枚举
  - routes // 路由文件
  - hooks
    - useRouterList // 路由规则过滤

# 配置文件

- config
  - seo // seo优化
  - theme // Material Tailwind 主题皮肤
  - layout // 默认baseLayout的配置详见ts文件配置项

# 环境变量

- .env.dev // dev 环境
- .env.test // test 环境
- .env.prod // prod 环境
- .env.uat // uat 环境
