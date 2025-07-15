import Image from 'next/image';
import Link from 'next/link';

const ucfLink = (
    <Link
        href='https://www.ucf.edu/'
        className='underline underline-offset-4 hover:text-primary/80 transition-colors focus:text-primary focus:ring-0 focus:outline-none'
        target='_blank'
        rel='noopener noreferrer'
    >
        University of Central Florida
    </Link>
);

const About = () => {

    return (
        <div className='flex flex-col'>
            <h1>
                About Me.
            </h1>
            <p className='text-xl text-secondary italic'>
                &ldquo;The only true wisdom is in knowing you know nothing&rdquo; — Socrates
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10'>
                <div className='container h-fit p-6 rounded-2xl space-y-4'>
                    <Image 
                        src='/assets/profile.png' 
                        alt='Professional headshot' 
                        width={300} 
                        height={300} 
                        className='w-full rounded-xl object-cover'
                    />
                    <p className='text-sm text-secondary text-center italic'>
                        My very professional headshot.
                    </p>
                </div>
                <div className='lg:col-span-2 space-y-8'>
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-bold'>Education & Current Focus</h2>
                        <p className='text-lg text-secondary'>
                            I&apos;m currently studying Computer Science at the { ucfLink }, focused on building a strong technical foundation in
                            software development principles and best practices. Beyond my coursework, I&apos;ve gained hands-on experience contributing
                            production-level code through internships and group projects.
                        </p>
                    </div>
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-bold'>Professional Experience</h2>
                        <p className='text-lg text-secondary'>
                            My industry experience as an intern has reinforced what I&apos;ve learned in the classroom and helped fill in the gaps,
                            giving me a front-row view of how software is built in practice. I&apos;ve had the opportunity to participate in the full
                            software development life cycle (SDLC)—from requirements gathering and sprint planning to deployment. It&apos;s shown me
                            that writing code is only one part of the process, and that clear communication and collaboration are vital to delivering
                            successful software solutions.
                        </p>
                    </div>
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-bold'>How It All Started</h2>
                        <p className='text-lg text-secondary'>
                            My passion for building things started early — with LEGOs and Lincoln Logs. During middle school, my parents sent me to a
                            robotics camp where I was first introduced to programming during a LEGO Mindstorms sumo bot competition. In high school, I
                            took introductory and AP-level programming classes, where my teachers inspired me and helped me realize that I wanted to
                            pursue a career in software development.
                        </p>
                    </div>
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-bold'>Looking Forward</h2>
                        <p className='text-lg text-secondary'>
                            During my time at UCF, I&apos;ve paired that early passion with a strong technical foundation and clearer sense of
                            direction. Building things is at the core of who I am, and I get excited about the future of technology and software
                            development. As AI becomes more dominant, I&apos;ve become increasingly curious about its potential to transform industries
                            and support data-driven decision making. I&apos;m eager to embrace and build AI-powered solutions to empower people and
                            drive innovation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
