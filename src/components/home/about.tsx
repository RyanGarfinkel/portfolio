import { NavButton } from '../button';

const About = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='space-y-6'>
                <h2 className='text-2xl font-bold'>About</h2>
                <p className='text-lg text-secondary'>
                    I&apos;m currently studying Computer Science at UCF, focused on building a strong technical foundation in software development principles and best practices. I&apos;ve gained hands-on experience contributing production-level code through internships and group projects.
                </p>
                <p className='text-lg text-secondary'>
                    As an Undergraduate Learning Assistant, I&apos;ve had the privilege of mentoring over 250 students, which has strengthened my communication skills and deepened my understanding of complex concepts.
                </p>
                <div className='pt-4'>
                    <NavButton href='/about' title='Learn More About Me' type='secondary' />
                </div>
            </div>
            <div className='space-y-6'>
                <div className='container p-6 rounded-xl'>
                    <h2 className='text-2xl font-bold mb-4'>Education</h2>
                    <div className='mb-4'>
                        <h3 className='font-semibold text-lg mb-1'>University of Central Florida</h3>
                        <p className='text-sm text-secondary/80 mb-3 italic'>Expected Graduation: May 2026</p>
                        <div className='space-y-1'>
                            <p className='text-secondary ml-2'>Bachelor of Science in Computer Science</p>
                            <p className='text-secondary ml-2'>Minor in Data Science</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <h4 className='font-medium mb-2'>Relevant Coursework</h4>
                            <p className='text-secondary ml-2'>
                                Machine Learning, Software Engineering, Processes for Object-Oriented Software Development, Programming Languages, Enterprise Computing, Systems Software, Virtual Reality Engineering
                            </p>
                        </div>
                        <div>
                            <h4 className='font-medium mb-2'>Awards & Recognition</h4>
                            <ul className='space-y-1 text-secondary list-disc list-inside ml-2'>
                                <li>President&apos;s Honor Roll</li>
                                <li>Pegasus Bronze Scholarship</li>
                                <li>Florida Bright Futures Scholarship</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
