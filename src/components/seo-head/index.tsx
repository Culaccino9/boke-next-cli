import Head from 'next/head';
import { useRouter } from 'next/router';

import { seoMeta } from '@/config/seo';

export default function SeoHead() {
  const router = useRouter();

  return (
    <Head>
      <title>{seoMeta.title}</title>
      <meta name='robots' content={seoMeta.robots} />
      <meta content={seoMeta.description} name='description' />
      <meta property='og:url' content={`${seoMeta.url}${router.asPath}`} />
      <link rel='canonical' href={`${seoMeta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={seoMeta.type} />
      <meta property='og:site_name' content={seoMeta.siteName} />
      <meta property='og:description' content={seoMeta.description} />
      <meta property='og:title' content={seoMeta.title} />
      <meta name='image' property='og:image' content={seoMeta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@F2aldi' />
      <meta name='twitter:title' content={seoMeta.title} />
      <meta name='twitter:description' content={seoMeta.description} />
      <meta name='twitter:image' content={seoMeta.image} />
      <meta name='author' property='article:author' content={seoMeta.author} />
      {/* Favicons */}
      <link rel='icon' href='your href' sizes='your size' type='image/x-icon' />
      {/* Windows 8 app icon */}
      <meta name='msapplication-TileColor' content='#F53838' />
      <meta name='msapplication-TileImage' content='/favicon/ms-icon-144x144.png' />
      {/* Accent color on supported browser */}
      <meta name='theme-color' content='#F53838' />
    </Head>
  );
}
