import React, { useState } from 'react';
import Link from 'next/link';

import { Collapse, ListItem, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import { ChevronDownIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';

import type { RouteType } from '@/interface/router';

function Items({ route }: { route: RouteType[] }) {
  return (
    <>
      {route?.map(({ icon, path, name }) => (
        <Link href={path} key={path}>
          <MenuItem className='flex items-center gap-1 rounded-md'>
            <div className='rounded-md md:p-0 p-5'>
              {icon &&
                React.createElement(icon, {
                  strokeWidth: 2,
                  className: 'h-6 w-6',
                })}
            </div>
            <div>
              <Typography variant='h6' color='blue-gray' className='flex items-center text-sm'>
                {name}
              </Typography>
            </div>
          </MenuItem>
        </Link>
      ))}
    </>
  );
}

export default function NavListMenu({ route }: { route: RouteType }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!route?.children) return null;

  return (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement='bottom' allowHover>
        <MenuHandler>
          <Typography as='div' variant='small' className='font-normal'>
            <ListItem
              className='flex items-center gap-2 py-2 pr-4'
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
              <Square3Stack3DIcon className='h-[18px] w-[18px]' />
              {route.name}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform md:block ${isMenuOpen ? 'rotate-180' : ''}`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden max-w-screen-xl rounded-xl md:block'>
          <Items route={route?.children} />
        </MenuList>
      </Menu>
      <div className='block md:hidden'>
        <Collapse open={isMobileMenuOpen}>
          <Items route={route?.children} />
        </Collapse>
      </div>
    </>
  );
}
