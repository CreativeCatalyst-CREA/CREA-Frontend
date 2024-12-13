import Image from 'next/image';
import Dl from '@/assets/icon/dl.svg';
import OlSteper from '@/assets/icon/ol-steper.svg';
import LiSteper from '@/assets/icon/li-steper.svg';
import Effect from '@/assets/icon/effect.svg';
import Link from 'next/link';

const steperList = [
  {
    title: 'Phase 1:Foundation',
    dateRange: '(August-October)',
    description: [
      'Objective: Establish a solid foundation for the project by developing an investor website and securing seed funding.',
      'Key Activities:',
      'Investor Website Development: Finalize investor website development, including all necessary features and functionality.',
      'Marketing and Outreach: Launch marketing campaigns to attract potential investors and raise awareness of the project.',
      'Fundraising: Secure seed funding through private investors or seed rounds.',
      'Create a Team: Assemble a core team of developers, designers, and marketers.',
    ],
  },
  {
    title: 'Phase 2: Platform Development',
    dateRange: '(August-October)',
    description: [
      'Objective: Develop core features of the Creative Catalyst platform, including the CREA token, DAO, and grant system.',
      'Key Activities:',
      'Development of Smart Contracts: Develop and implement smart contracts for the CREA token, DAO projects, and grant distribution mechanisms.',
      'Platform Development: Build the frontend and backend infrastructure for the Creative Catalyst platform, including user registration, project submission, and voting features.',
      'Token Distribution: Conduct an initial coin offering (ICO) to distribute CREA tokens to investors and early adopters.',
    ],
  },
  {
    title: 'Phase 3: Platform Launch and  Community Building',
    dateRange: '(January-April)',
    description: [
      'Objective: Launch the beta version of the Creative Catalyst platform and build an active community of creators, investors, and supporters.',
      'Main Events:',
      'Beta Launch: Launch the beta version of the Creative Catalyst platform, allowing users to test and provide feedback.',
      'Community Engagement: Actively engage with the community through social media, forums, and events to foster a strong and supportive environment.',
      'Project Funding: Begin accepting project proposals and funding creative projects through CREA token and DAO.',
    ],
  },
  {
    title: 'Phase 4: Platform Expansion and  Growth',
    dateRange: '(April-August)',
    description: [
      'Objective: Expand the functionality and reach of the platform, attract a wider audience, and establish Creative Catalyst as the leading platform for creative projects.',
      'Key Events:',
      'Public Launch: Launch the public version of the Creative Catalyst platform, making it available to all users.',
      'Partnership Development: Secure partnerships with creative organizations, festivals, galleries, and other stakeholders.',
      'Developing New Features: Introduce new features and functionality to enhance the capabilities of the platform, such as NFT integration, collaboration tools, and educational resources.',
      'Marketing and Promotion: Conduct ongoing marketing campaigns to promote the platform and attract new users.',
    ],
  },
  {
    title: 'Phase 5: Ecosystem  Expansion and Sustainability',
    dateRange: '(September - ongoing)',
    description: [
      'Objective: Ensure long-term sustainability and growth by expanding the ecosystem, fostering innovation, and supporting global creative initiatives.',
      'Key Focus Areas:',
      'Global Outreach: Expand CREA’s presence internationally by collaborating with creative communities and influencers worldwide.',
      'Sustainability Initiatives: Develop strategies to support sustainable practices within the creative industry, promoting green technologies and eco-friendly projects.',
      "Continuous Improvement: Establish a feedback loop to capture user input and continuously refine the platform's features and services to better meet community needs.",
      'Innovation and Research: Invest in continuous research and development to stay at the forefront of technological advances and creative methodologies.',
    ],
  },
];

const WhitePaper = () => {
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
      <section className="container relative mt-24 flex flex-col items-center">
        <Effect className="absolute right-0" />
        <div className="absolute bottom-0 right-40 w-12">
          <Effect className="ml-auto block rotate-12" />
          <Effect className="-rotate-180" />
        </div>
        <Effect className="absolute bottom-0 left-28" />
        <div className="absolute left-0 w-12">
          <Effect className="ml-auto block rotate-12" />
          <Effect className="-rotate-180" />
        </div>
        <h1 className="text-3xl font-bold text-white lg:text-8xl">THE WHITEPAPER</h1>
        <Link href="/Whitepaper_ Creative_Catalyst_(CREA).docx" className="mt-8 flex flex-row items-center gap-x-4 rounded-full bg-primary px-6 py-2 font-semibold text-white lg:mt-16 lg:text-2xl">
          <span>DOWNLOAD</span>
          <Dl />
        </Link>
      </section>
      <section className="mt-16 px-10 lg:mt-36 lg:px-16">
        <h2 className="text-3xl font-semibold text-white lg:text-6xl">The Roadmap</h2>
        <div className="mt-10 space-y-12 lg:mt-20 lg:space-y-8">
          {steperList.map((item) => (
            <div key={item.title} className="flex flex-row">
              <div className="flex flex-col items-center">
                <OlSteper />
                <LiSteper />
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="ml-6 flex flex-none flex-col lg:ml-11 lg:w-[450px]">
                  <h6 className="font-bold text-white lg:text-4xl">{item.title}</h6>
                  <span className="text-xs font-light text-white lg:text-3xl">{item.dateRange}</span>
                </div>
                <ul className="ml-10 mt-5 list-disc space-y-2 lg:ml-0 lg:mt-0 lg:pl-8">
                  {item.description.map((step) => (
                    <li key={step} className="text-xl font-light text-white">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WhitePaper;
