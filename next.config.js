/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');

module.exports = (phase, config) => {
  const temp_env = process.env.NEXT_PUBLIC_ENV;
  let distDir;
  let assetPrefix;
  let env;

  switch (temp_env) {
    case 'dev':
      env = dotenv.config({ path: '.env.dev' }).parsed
      break;
    case 'test':
      env = dotenv.config({ path: '.env.test' }).parsed
      break;
    case 'prod':
      env = dotenv.config({ path: '.env.prod' }).parsed
      break;
    case 'uat':
      env = dotenv.config({ path: '.env.uat' }).parsed
      break;
    default:
      break;
  }
  distDir = env.DISTDIR;
  assetPrefix = env.ASSETPREFIX;

  return {
    output: 'export', // 静态页面输出
    distDir, // 指定输出目录
    assetPrefix, // CDN
    images: { unoptimized: true },
    trailingSlash: false, // 自动添加 /
    compress: true,
    reactStrictMode: true, // React.StrictMode
    env
  }
}
