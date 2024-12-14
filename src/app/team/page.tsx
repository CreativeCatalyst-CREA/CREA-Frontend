import TeamDesktop from '@/components/team/team-desktop';
import TeamMobile from '@/components/team/team-mobile';
import {ITeamPersonList} from '@/types/team';
import Image from 'next/image';

const personList: ITeamPersonList = {
  teamPersonList: [
    {name: 'Nikolay Sharov', postion: 'ceo', img: '/img/team/nikolay-sharov.jpeg'},
    {name: 'Ngwu Tochukwu Ambrose', postion: 'Project Manager', img: '/img/team/ngwu-tochukwu-ambrose.jpeg'},
    {name: 'WAJDI ZOGHBI ', postion: 'ProDUct DESIGNER', img: '/img/team/wajdi-zoghbi.jpeg'},
    {name: 'Prathamesh Shedge', postion: 'gRAPHIC dESIGNER', img: '/img/team/prathamesh-shedge.jpeg'},
    {name: 'Jason CHANG', postion: 'blockchain engineer', img: '/img/team/jason-chang.jpeg'},
    {name: 'sara fanciulli', postion: 'UI UX Designer', img: '/img/team/sara-fanciulli.png'},
    {name: 'JUDE ABARA', postion: 'blockchain engineer', img: '/img/team/jude-abara.jpeg'},
    {name: 'HANGJUN LI', postion: 'frontend developer', img: '/img/team/hangjun-li.png'},
    {name: 'NATHAN GODWIN', postion: 'content writer', img: '/img/team/nathan-godwin.jpeg'},
    {name: 'IFEANYI KINGSLEY CHIKELU', postion: 'community manager', img: '/img/team/ifeanyi-kingsley-chikelu.jpeg'},
    {name: 'SUBHODIP GHOSH', postion: 'backend developer', img: '/img/team/subhodip-ghosh.jpeg'},
    {name: 'kiran s mulimani', postion: 'financial analyst', img: '/img/team/kiran-s-mulimani.png'},
    {name: 'hamed taherpour', postion: 'frontend developer', img: '/img/team/hamed-taherpour.jpeg'},
    {name: 'ethan chan', postion: 'frontend developer', img: '/img/team/ethan-chan.png'},
    {name: 'AYOSHIS SITAULA', postion: 'Business Development Manager', img: '/img/team/ayoshis-sitaula.jpeg'},
  ],
};

const Team = () => {
  return (
    <main
      className="overflow-hidden pb-80"
      style={{
        backdropFilter: 'blur(12px)',
        background: 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="fixed -z-10 size-[1000px] lg:right-[512px] lg:top-[512px]">
        <Image src="/img/noisy-gradients.png" fill alt="" className="rotate-90 blur-[400px]" />
      </div>
      <section className="container mt-24 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white lg:text-8xl">THE TEAM</h1>
      </section>
      <section className="mt-24 lg:container">
        <div className="hidden lg:block">
          <TeamDesktop teamPersonList={personList.teamPersonList} />
        </div>
        <div className="block lg:hidden">
          <TeamMobile teamPersonList={personList.teamPersonList} />
        </div>
      </section>
    </main>
  );
};

export default Team;
