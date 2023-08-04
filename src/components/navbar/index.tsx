import React from 'react';

import layoutSetting from '@/config/layout';
import { Navbar, Collapse } from '@material-tailwind/react';
import { ExtarPC, ExtarPhone } from './components/extar';
import Logo from './components/logo';
import NavList from './components/nav-list';

export default function LayoutNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className={`${layoutSetting?.header?.affix ? 'sticky' : ''} top-0 z-10 h-max max-w-full rounded-none py-2 px-4 md:px-8 md:py-4 bg-[#ffffffc9]`} style={{backdropFilter: 'blur(4px)'}}>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Logo />
        <div className='hidden md:block'>
          <NavList setOpenNav={setOpenNav} />
        </div>
        <ExtarPC openNav={openNav} setOpenNav={setOpenNav as any} />
      </div>
      <Collapse open={openNav}>
        <NavList setOpenNav={setOpenNav} />
        <ExtarPhone />
      </Collapse>
    </Navbar>
  );
}
