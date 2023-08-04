import theme from '@/config/theme';

import { ThemeProvider } from '@material-tailwind/react';
import BaseLayout from '@/components/layout';

import '../styles/globals.css';
import '../styles/reset.css';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;

  const getLayout = Component?.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider value={theme}>
      {Component?.getLayout ? (
        <Component {...pageProps} />
      ) : (
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      )}
    </ThemeProvider>,
  );
}
