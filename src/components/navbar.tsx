'use client';

import { useTheme } from '@/utils/theme-context';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Navbar: React.FC = () => {

    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <div className='sm:hidden md:flex flex-row justify-between items-center w-full mb-4'>
            <div className='title'>
                { '<RG />' }
            </div>
            <div className='row items-center space-x-6'>
                <button onClick={toggleDarkMode} className='navbar-btn'>
                    { isDarkMode ? ( <SunIcon aria-label='Switch to light mode.' className='w-5 h-5'/> ) : ( <MoonIcon aria-label='Switch to dark mode.' className='w-5 h-5'/> ) }
                </button>
                <div className='w-[1.25px] h-6 bg-current'></div>
                <Link href='/' className='navbar-btn'>Home</Link>
                <Link href='/work' className='navbar-btn'>Work</Link>
                <Link href='/projects' className='navbar-btn'>Projects</Link> 
                <Link href='/resume' className='navbar-btn'>Resume</Link>
                <Link href='/contact' className='navbar-btn'>Contact</Link>
            </div>
        </div>
    );
};
export { Navbar };