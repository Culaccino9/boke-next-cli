import layoutSetting from '@/config/layout';

import SeoHead from '../seo-head';
import LayoutNavbar from '../navbar';
import Footer from '../footer';

import type { ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
}

const Layout: React.FC<PropsType> = ({ children }) => (
  <>
    <SeoHead />
    <LayoutNavbar />
    <main className={layoutSetting?.main?.style}>{children}</main>
    <Footer />
  </>
);

export default Layout;
