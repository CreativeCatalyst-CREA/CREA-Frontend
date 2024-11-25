'use client';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Menu from '@/assets/icon/menu.svg';

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
          <button className="block lg:hidden">
            <Menu />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
