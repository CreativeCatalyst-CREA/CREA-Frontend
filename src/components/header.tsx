'use client';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Menu from '@/assets/icon/menu.svg';
import MenuOpen from '@/assets/icon/menu-open.svg';
import X from '@/assets/icon/x.svg';
import {useEffect, useState} from 'react';

const navbarLinks = [
  {name: 'Home', url: '/'},
  {name: 'White Paper', url: '/white-paper'},
  {name: 'Invest', url: '/invest'},
  {name: 'Blog', url: '/blog'},
  {name: 'Statistics', url: '/statistics'},
  {name: 'Team', url: '/team'},
  {name: 'FAQ', url: '/faq'},
  {name: 'Contact Us', url: '/contact-us'},
];

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <header className="w-full bg-white">
      <nav className="container flex h-16 flex-row items-center justify-between">
        <div>
          <Image src="/img/logo.png" alt="Creative Catalyst Logo" title="Logo" width={123} height={37} />
        </div>
        <div>
          <ul className="hidden flex-row items-center gap-x-10 lg:flex">
            {navbarLinks.map((item) => (
              <li key={item.url}>
                <Link href={item.url} className={`app-base-transform text-sm font-medium underline-offset-4 hover:underline ${pathname === item.url && 'text-primary decoration-primary'}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button onClick={() => setOpenMenu(!openMenu)} className="block lg:hidden">
            {!openMenu ? <Menu /> : <MenuOpen />}
          </button>
        </div>
        {openMenu && (
          <div className="fixed inset-0 z-50 h-screen w-full bg-black/50 p-6 backdrop-blur">
            <div className="h-16"></div>
            <div className="w-full rounded-lg bg-white/90 px-6 py-10 shadow-2xl">
              <div className="flex flex-row items-center justify-end">
                <button onClick={() => setOpenMenu(false)}>
                  <X className="size-6 stroke-black" />
                </button>
              </div>
              <ul className="mt-6 flex flex-col items-center divide-y divide-red-500">
                {navbarLinks.map((item) => (
                  <li key={item.url} className="flex h-16 w-full items-center">
                    <Link href={item.url} className={`app-base-transform w-full text-left text-xl underline-offset-4 hover:underline ${pathname === item.url && 'text-primary decoration-primary'}`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
