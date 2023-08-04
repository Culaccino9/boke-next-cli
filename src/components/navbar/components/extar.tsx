import { Button, IconButton } from '@material-tailwind/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function ExtarPC({
  openNav,
  setOpenNav,
}: {
  openNav: boolean;
  setOpenNav: (callback: (flag: boolean) => void) => void;
}) {
  return (
    <>
      <div className='hidden gap-2 md:flex'>
        <Button variant='text' size='sm' color='blue-gray'>
          Sign In
        </Button>
        <Button variant='gradient' size='sm'>
          Sign Up
        </Button>
      </div>
      <IconButton variant='text' color='blue-gray' className='md:hidden' onClick={() => setOpenNav((old) => !old)}>
        {openNav ? (
          <XMarkIcon className='h-6 w-6' strokeWidth={2} />
        ) : (
          <Bars3Icon className='h-6 w-6' strokeWidth={2} />
        )}
      </IconButton>
    </>
  );
}

export function ExtarPhone() {
  return (
    <div className='flex w-full flex-nowrap items-center gap-2 md:hidden'>
      <Button variant='outlined' size='sm' color='blue-gray' fullWidth>
        Sign In
      </Button>
      <Button variant='gradient' size='sm' fullWidth>
        Sign Up
      </Button>
    </div>
  );
}
