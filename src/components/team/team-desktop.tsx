import {ITeamPersonList} from '@/types/team';
import TeamItem from './team-item';

const TeamDesktop = ({teamPersonList}: ITeamPersonList) => {
  return (
    <div className="mt-10 grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4">
      {teamPersonList.map((item) => (
        <TeamItem {...item} key={item.name} />
      ))}
    </div>
  );
};

export default TeamDesktop;
