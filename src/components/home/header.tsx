'use client';

import { ArrowDownIcon } from '@radix-ui/react-icons';
import { GitHubButton, LinkedInButton } from '../connection-buttons'
import Image from 'next/image';

const Header: React.FC = () => {

    const handleContactClick = () => {
        window.location.href = '/contact';
    }

    const handleResumeClick = () => {
        window.location.href = '/resume';
    }

    return (
        <div id='about' className='flex sm:flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col flex-start sm:w-full md:w-2/3 sm:mb-8 md:mb-0'>
                <div className='font-semibold sm:text-[21px] md:text-[56px]'>
                    Hey, I&apos;m Ryan <span className="inline-block animate-wave">👋</span>
                </div>
                <div className='text-lg sm:text-[18px] md:text-[24px] mt-2'>
                    A computer science student at the University of Central Florida, passionate about building web apps and exploring new technologies. I love turning ideas into products and
                    bridging the gap between data and user-friendly interfaces.
                </div>
                
                <div className='flex flex-row my-[45px] space-x-4'>
                    <GitHubButton />
                    <LinkedInButton />
                </div>
                <div className='flex flex-row space-x-4'>
                    <button onClick={handleContactClick} className='py-2 px-4 bg-blue-700 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300 md:text-[16px] sm:text-[14px] whitespace-nowrap'>
                        Contact Me
                    </button>
                    <button onClick={handleResumeClick} className='py-2 px-4 bg-blue-700 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300 ml-2 md:text-[16px] sm:text-[14px] whitespace-nowrap'>
                        View Resume
                    </button>
                </div>
                <div className='sm:hidden md:block w-auto'>
                    <a href="#about" className="flex flex-row items-center animate-bounce text-primary transition-all duration-300 mt-10 w-fit">
                        <ArrowDownIcon className="w-6 h-6 mr-2" />
                        <span className="text-lg">Scroll down to continue</span>
                    </a>
                </div>
            </div>
            <div className="w-1/3 flex justify-end">
                <Image src="/assets/images/cartoon.png" alt="Cartoon of Ryan" width={350} height={350} className="rounded-full shadow-lg" />
            </div>
        </div>
    );
};

export default Header;