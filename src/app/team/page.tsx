import Image from 'next/image';

const personList = [
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
];

const Team = () => {
  return (
    <main
      className="overflow-hidden pb-80"
      style={{
        backdropFilter: 'blur(12px)',
        background: 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="fixed right-[512px] top-[512px] -z-10 size-[1000px]">
        <Image src="/img/noisy-gradients.png" fill alt="" className="rotate-90 blur-[400px]" />
      </div>
      <section className="container mt-24 flex flex-col items-center">
        <h1 className="text-8xl font-bold text-white">THE TEAM</h1>
      </section>
      <section className="container mt-24">
        <div className="mt-10 grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4">
          {personList.map((item) => (
            <div
              style={{
                background: 'linear-gradient(102deg, rgba(29, 29, 29, 0.46) 3.3%, rgba(29, 29, 29, 0.20) 99.99%)',
                backdropFilter: 'blur(110px)',
              }}
              className="overflow-hidden rounded-3xl"
              key={item.name}
            >
              <div className="relative h-72 w-full">
                <Image src={item.img} alt={item.name} fill className="w-full bg-center object-cover" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="mt-3 text-center text-sm font-bold uppercase text-white">{item.name}</h4>
                <span className="mb-3 mt-1.5 text-center text-xs capitalize text-primary">{item.postion}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Team;
