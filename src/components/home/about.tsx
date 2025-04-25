

import Image from 'next/image';

const About: React.FC = () => {

    return (
        <div className='flex sm:flex-col-reverse md:flex-row items-center w-full'>
            <div className='w-1/3'>
                <Image src="/assets/images/profile.png" alt="Profile" width={275} height={275} className="rounded-full" />
            </div>
            <div className='sm:w-full md:w-2/3'>
                <div className='title mt-3 mb-8'>
                    My elevator pitch
                </div>  
                <div className='text-lg sm:text-[18px] md:text-[20px]'>
                    A third year student at the University of Central Florida, I’ve gained hands-on experience developing code through classes, internships, and projects --mostly
                    in web development. I enjoy bridging the gap between data and user interfaces, building applications to support data driven decision making. I’m also deeply
                    fascinated by AI and machine learning and love creating impactful tools with emerging tech.
                </div>
                <div className='text-lg sm:text-[18px] md:text-[20px] mt-2'>
                    Beyond my coursework, I’ve been serving as an Undergraduate Learning Assistant (ULA) for 4 semesters now, supporting 250+ students taking Computer Science I.
                    This role has helped me grow significantly in communicating technical concepts and debugging code efficiently, sharpening my problem solving skills and attention
                    to detail. I’m always eager to learn and grow, and I’m excited to take on new challenges in the tech world. I’m looking for internships or co-op opportunities
                    where I can apply my skills and continue to learn.
                </div>
            </div>
        </div>
    );
};

export default About;