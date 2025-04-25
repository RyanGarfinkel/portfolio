'use client';

import { GitHubButton, LinkedInButton } from './connection-buttons';
import Link from 'next/link';
import Seperator from './Seperator';

const Footer = () => {

    return (
        <div className='col w-full'>
            <Seperator />
            <div className='flex flex-row justify-between items-start w-full'>
                <div className='flex flex-col w-1/2'>
                    <div>
                        Reach out to me!
                    </div>
                    <div>
                        I’m always eager to connect, collaborate on projects, and explore new opportunities. Let’s connect!
                    </div>
                    <div className='flex flex-row my-[45px] space-x-4'>
                        <GitHubButton />
                        <LinkedInButton />
                    </div>
                </div>
                <div className='col w-[150px]'>
                    <div className='row items-center justify-start'>
                        <div className='underline mb-1'>Site Map</div>
                    </div>
                    <div className='row space-x-4'>
                        <div className='col'>
                            <Link href='/' className='text-primary hover:underline'>Home</Link>
                            <Link href='/work' className='text-primary hover:underline'>Work</Link>
                            <Link href='/projects' className='text-primary hover:underline'>Projects</Link>
                        </div>
                        <div className='col'>
                            <Link href='/resume' className='text-primary hover:underline'>Resume</Link>
                            <Link href='/contact' className='text-primary hover:underline'>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;