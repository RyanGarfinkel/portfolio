import ArrowLink from '@/components/arrow-link';

const linkedin = 'https://www.linkedin.com/in/ryan-garfinkel/';
const github = 'https://github.com/RyanGarfinkel';
const resume = '/resume';
const ucf = 'https://www.ucf.edu/';
const devpost = 'https://devpost.com/software/overcharged';

const Home = () => {

  return (
    <div className='flex flex-col w-full'>
      <div className='my-4 leading-loose'>
        <div className='mb-7'>
          I&apos;m an aspiring software engineer and third-year computer science student at <a href={ucf} className='underline underline-offset-[5px]'>UCF</a>. I currently work as an Undergraduate
          Learning Assistant for UCF&apos;s College of Engineering and Computer Science, helping students in Computer Science I. Over the past two summers, I gained valuable experience
          working as an IT Intern at Vertical Bridge, actively participating in the software development life cycle. This
          exposure to best practices allowed me to contribute to various projects, making me a better software developer. 
        </div>
        <div>
          I recently participated in the Knight Hacks VII hackathon at UCF, where my team won 3rd place in the NextEra: Energy Sustainability Challenge. We developed a game called
          <span className='italic ml-1'>Overcharged</span>, aimed at bringing awareness to the cost of energy consumption. This was my first time working with Unity, and I&apos;m incredibly
          proud of the work we accomplished in just 36 hours! You can check out our project on our <a href={devpost} className='underline underline-offset-[5px]'>devpost</a>.
        </div>
      </div>
      <div className='flex flex-row sm:gap-2 lg:gap-4 my-5 text-mono'>
        <ArrowLink url={linkedin} txt='LinkedIn'/>
        <ArrowLink url={github} txt='GitHub'/>
        <ArrowLink url={resume} txt='Resume'/>
      </div>
    </div>
  );
};

export default Home;
