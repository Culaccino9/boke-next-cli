/**
 * @description
 * @author Huang Wenjie
 * @createDate 2023-08-02
 */

import Link from 'next/link';
import type { ReactElement } from 'react';

export default function NoFind() {
  return (
    <div className='flex h-[100vh] w-[100vw]'>
      <div className='max-w-[50rem] flex flex-col mx-auto w-full h-full'>
        <header className='mb-auto flex justify-center z-50 w-full py-4'>
          <nav className='px-4 sm:px-6 lg:px-8' aria-label='Global'>
            <a className='flex-none text-xl font-semibold sm:text-3xl dark:text-white' href='#' aria-label='Brand'>
              Pone next cli
            </a>
          </nav>
        </header>
        <div className='text-center py-10 px-4 sm:px-6 lg:px-8'>
          <h1 className='block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white'>404</h1>
          <p className='mt-3 text-gray-600 dark:text-gray-400'>发生错误</p>
          <p className='text-gray-600 dark:text-gray-400'>抱歉，无法找到页面</p>
          <div className='mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3'>
            <span className='w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'>
              跳转其他
            </span>
            <Link
              className='w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:ring-offset-slate-900'
              href='/'>
              <svg className='w-2.5 h-2.5' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
              回到主页
            </Link>
          </div>
        </div>
        <footer className='mt-auto text-center py-5'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <p className='text-sm text-gray-500'>Pone next cli. © All Rights Reserved. 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

NoFind.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
