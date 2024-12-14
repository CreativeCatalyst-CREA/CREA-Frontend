import Discord from '@/assets/icon/discord.svg';
import Instagram from '@/assets/icon/instagram.svg';
import Linkedin from '@/assets/icon/linkedin.svg';
import Telegram from '@/assets/icon/telegram.svg';
import Twitter from '@/assets/icon/twitter.svg';
import Vk from '@/assets/icon/vk.svg';
import Link from 'next/link';

const socialMediaLinks = [
  {
    title: 'Discord',
    link: 'https://discord.com/invite/c7hBh426',
    icon: <Discord />,
  },
  {
    title: 'Telegram',
    link: 'https://t.me/mycreativecatalyst',
    icon: <Telegram />,
  },
  {
    title: 'Vk',
    link: 'https://vk.com/creative_catalyst',
    icon: <Vk />,
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/company/creative-catalyst-crea',
    icon: <Linkedin />,
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/crea_web3/profilecard/?igsh=ZXl5ZHZlNXBhaDQw',
    icon: <Instagram />,
  },
  {
    title: 'Twitter',
    link: 'https://x.com/crea_catalyst?t=njikCzOCkFeYNmVLjfBtxA&s=09',
    icon: <Twitter />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white pb-7 pt-14">
      <div className="container flex flex-col">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-row items-center divide-x divide-black">
            <img src="/img/logo.png" alt="Creative Catalyst Logo" title="Logo" className="w-32 pr-4 lg:pr-7" />
            <h5 className="pl-4 text-left font-medium lg:pl-7 lg:text-2xl">CREATIVE CATALYST</h5>
          </div>
          <div className="mt-10 flex flex-row items-center justify-between gap-x-9 lg:mt-0 lg:justify-start">
            {socialMediaLinks.map((item) => (
              <Link href={item.link} key={item.link} title={item.title}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <hr className="mb-7 mt-16" />
        <div className="flex flex-col lg:flex-row lg:items-center">
          <span className="text-xs lg:mr-16">Copyright © 2024 . All rights reserved</span>
          <div className="space-x-6">
            <Link href="/" className="text-xs font-semibold">
              Privacy Policy
            </Link>
            <Link href="/" className="text-xs font-semibold">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
