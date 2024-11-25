import {ITeamPerson} from '@/types/team';
import Image from 'next/image';

const TeamItem = ({img, name, postion}: ITeamPerson) => {
  return (
    <div
      style={{
        background: 'linear-gradient(102deg, rgba(29, 29, 29, 0.46) 3.3%, rgba(29, 29, 29, 0.20) 99.99%)',
        backdropFilter: 'blur(110px)',
      }}
      className="overflow-hidden rounded-3xl"
      key={name}
    >
      <div className="relative h-56 w-full lg:h-72">
        <Image src={img} alt={name} fill className="w-full bg-center object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h4 className="mt-3 text-center text-[10px] font-bold uppercase text-white lg:text-sm">{name}</h4>
        <span className="mb-3 mt-1.5 text-center text-[10px] capitalize text-primary lg:text-xs">{postion}</span>
      </div>
    </div>
  );
};

export default TeamItem;
