import {IInvestPost} from '@/types/invest';
import Image from 'next/image';
import Link from 'next/link';

const InvestPost = ({description, id, imgUrl, title}: IInvestPost) => {
  return (
    <div
      style={{
        background: 'linear-gradient(102deg, rgba(29, 29, 29, 0.46) 3.3%, rgba(29, 29, 29, 0.20) 99.99%)',
        backdropFilter: 'blur(110px)',
      }}
      className="flex flex-col gap-x-10 rounded-3xl p-4 backdrop-blur-[110px] lg:flex-row lg:px-9 lg:py-8"
    >
      <Image src={imgUrl} alt={title} title={title} width={640} height={447} className="rounded-3xl" />
      <div className="flex flex-col items-start justify-between">
        <div>
          <h3 className="my-6 text-2xl font-bold text-white lg:text-8xl">{title}</h3>
          <p className="font-extralight leading-8 text-white">{description}</p>
        </div>
        <Link href={`invest/${id}`} className="app-base-transform mt-10 rounded-full border border-white px-8 py-2.5 text-xs font-semibold text-white outline-none hover:border-primary hover:bg-primary lg:mt-0 lg:py-4 lg:text-2xl">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default InvestPost;
