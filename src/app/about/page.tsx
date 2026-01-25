import Link from 'next/link';
import Carousel from '@/components/carousel';

interface AboutSectionProps {
    title: string;
    children: React.ReactNode;
};

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

const codepathLink = (
    <Link
        href='https://codepath.org/'
        className='underline underline-offset-4 hover:text-primary/80 transition-colors focus:text-primary focus:ring-0 focus:outline-none'
        target='_blank'
        rel='noopener noreferrer'
    >
        CodePath
    </Link>
);

const AboutSection: React.FC<AboutSectionProps> = ({ title, children }) => {
    return (
        <div className='flex flex-col gap-2'>
            <h2 className='font-bold'>{title}</h2>
            <div className='flex sm:flex-col md:flex-row justify-between gap-8'>
                {children}
            </div>
        </div>
    );
};

const About = () => {

    return (
        <div className='flex flex-col'>
            <h1>
                About Me.
            </h1>
            <div className='flex flex-col my-8 gap-12'>
                <AboutSection title='Educational & Technical Foundation'>
                    <p className='text-lg text-secondary w-1/2'>
                        I’m currently working toward a Bachelor of Science in Computer Science at the {ucfLink},
                        where I’ve built a strong technical foundation in software engineering
                        principles and best practices. My coursework and projects emphasize understanding
                        how systems are designed, maintained, and improved over time, not just how to make
                        something work once. I focus on connecting clean implementation with real user needs
                        through both academic and practical work.
                    </p>
                    <div className='w-1/2 relative min-h-[250px]'>
                        <Carousel
                            basePath='/assets/about/'
                            images={['hd10.png', 'kh7.jpeg']}
                            className='absolute inset-0 h-full w-full'
                        />
                    </div>
                </AboutSection>
                <AboutSection title='Building Software in Practice'>
                    <p className='text-xl text-secondary'>
                        Through internships, group projects, and independent work, I’ve contributed production-level
                        code and operated within real development workflows. I’ve participated across the software
                        development lifecycle — from requirements gathering and planning to implementation and iteration
                        — which reinforced that writing code is only one part of building effective software. Clear
                        communication, thoughtful design, and collaboration consistently matter just as much.
                    </p>
                </AboutSection>
                <AboutSection title='Mentorship & Leadership'>
                    <p className='text-xl text-secondary'>
                        Alongside building software, I’ve spent multiple semesters mentoring other students in computer
                        science. I’ve served as an Undergraduate Learning Assistant at UCF and as a peer mentor through { codepathLink},
                        supporting new students as they worked through unfamiliar concepts, tools, and debugging
                        challenges. Teaching at scale has sharpened how I reason about problems, identify patterns, and
                        build systems that are understandable and resilient.
                    </p>
                </AboutSection>
                <div className="border-l-4 border-primary pl-6 py-4 my-8 bg-quote rounded-r-lg">
                    <p className="text-xl italic text-secondary mb-2">
                        &quot;You do not rise to the level of your goals. You fall to the level of your systems.&quot;
                    </p>
                    <p className="text-xl text-primary">James Clear</p>
                </div>
                <AboutSection title='How It Started'>
                    <p className='text-lg text-secondary w-1/2'>
                        My interest in building things began early through hands-on experiences like robotics programs
                        and programming coursework during middle and high school. Those early projects shaped how I
                        approach engineering today — learning by building, testing assumptions, and improving through
                        iteration rather than relying solely on theory.
                    </p>
                    <div className='w-1/2 relative min-h-[250px]'>
                        <Carousel
                            basePath='/assets/about/'
                            images={['robotics1.png', 'robotics2.jpg']}
                            className='absolute inset-0 h-full w-full'
                        />
                    </div>
                </AboutSection>
                <AboutSection title='Looking Forward'>
                    <p className='text-lg text-secondary'>
                        At UCF, I’ve paired that early curiosity with a clearer sense of direction and a growing technical
                        toolkit. I’m particularly interested in software that leverages data and intelligent systems to
                        support better decision-making. As AI continues to mature, I want to focus on building practical,
                        well-reasoned solutions that create real value rather than chasing trends.
                    </p>
                </AboutSection>
                <div className="border-l-4 border-primary pl-6 py-4 my-8 bg-quote rounded-r-lg">
                    <p className="text-xl italic text-secondary mb-2">
                        &quot;You have power over your mind — not outside events. Realize this, and you will find strength.&quot;
                    </p>
                    <p className="text-xl text-primary">Marcus Aurelius</p>
                </div>
                <AboutSection title='Guiding Principles'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <h3>
                                Systems Thinking
                            </h3>
                            <p className='text-lg text-secondary'>
                                I focus on creating systems where structure, behavior, and presentation tell the same story, while balancing
                                elegance and functionality according to stakes. A well-aligned system should be easy to interface with because
                                clarity and coherence allow it to be trusted, understood, and satisfying to interact with.
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <h3>
                                Continuous Learning
                            </h3>
                            <p className='text-lg text-secondary'>
                                In the ever-evolving field of technology, staying curious is essential. I believe comiting to a lifetime of
                                learning helps me stay humble and open to new ideas. I find there are always new ways to optimize systems and 
                                features to provide more efficient and valuable services.
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <h3>
                                Collaboration & Mentorship
                            </h3>
                            <p className='text-lg text-secondary'>
                                The collective wisdom of the teams I've been a part of have been vital to my success. In group settings, ideas
                                get to be challenged and tested, forcing us to think through solutions more deeply and produce better outcomes.
                            </p>
                        </div>
                    </div>
                </AboutSection>
            </div>
        </div>
    );
};

export default About;
