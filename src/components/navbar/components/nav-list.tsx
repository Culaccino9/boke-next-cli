import React from 'react';
import Link from 'next/link';

import useRouterList from '@/hooks/useRouterList';

import { List, ListItem, Typography } from '@material-tailwind/react';
import NavListMenu from './nav-mune';

export default function NavList({ setOpenNav }: { setOpenNav: (open: boolean) => void }) {
  const routes = useRouterList();
  return (
    <List className='mt-4 mb-6 p-0 md:mt-0 md:mb-0 md:flex-row md:p-1' onClick={() => setOpenNav(false)}>
      {routes.map((route) =>
        route?.children ? (
          <NavListMenu key={route.path} route={route} />
        ) : (
          <Typography key={route.path} as='div' variant='small' color='blue-gray' className='font-normal'>
            <Link href={route.path}>
              <ListItem className='flex items-center gap-2 py-2 pr-4'>
                {route?.icon && React.createElement(route.icon, { className: 'h-[18px] w-[18px]' })}
                {route.name}
              </ListItem>
            </Link>
          </Typography>
        ),
      )}
    </List>
  );
}
