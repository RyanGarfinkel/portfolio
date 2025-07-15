'use client';

import { ChevronRightIcon, FileTextIcon, GitHubLogoIcon, LinkedInLogoIcon, MoonIcon, PaperPlaneIcon, PersonIcon, ReaderIcon, SunIcon, UpdateIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { TextNavButton } from './button';

interface OptionProps {
    icon: React.ReactNode;
    hoverIcon?: React.ReactNode;
    title: string;
    description: string;
    href: string;
    openInNewTab?: boolean;
    displayOnMobile?: boolean;
    showSpinner?: boolean;
    toggleShowSpinner?: () => void;
};

interface MoreDropdownProps {
    showSpinner: boolean;
    toggleShowSpinner: () => void;
};

const Option: React.FC<OptionProps> = ({ icon, hoverIcon, title, description, href, openInNewTab, displayOnMobile, showSpinner, toggleShowSpinner }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={href}
            target={openInNewTab ? '_blank' : '_self'}
            rel='noopener noreferrer'
            className={`group flex items-center px-4 py-2 text-primary rounded-2xl bg-card-background hover:bg-card-hover ${displayOnMobile ? 'sm:flex md:hidden' : ''}`}
            onClick={toggleShowSpinner}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='mr-2'>
                <div className='mr-4 bg-card-foreground rounded-2xl p-3'>
                    { hoverIcon && isHovered ? hoverIcon : icon }
                </div>
            </div>
            <div className='flex flex-col items-start'>
                <span className='font-semibold flex items-center gap-2'>
                    { title }
                    {
                        showSpinner && <UpdateIcon className='w-5 h-5 animate-spin'/>
                    }
                </span>
                <span className='text-sm'>{ description }</span>
            </div>
        </Link>
    );
};

const MoreDropdown: React.FC<MoreDropdownProps> = ({ showSpinner, toggleShowSpinner }) => {

    return (
        <div className='absolute left-1/2 transform -translate-x-1/2 mt-6 px-5 py-3 container rounded-2xl z-10 min-w-max w-auto'>
            <Option
                icon={<PersonIcon className='w-7 h-7' />}
                title='About Me'
                description='Learn more about my background.'
                href='/about'
                displayOnMobile
            />
            <Option
                icon={<GitHubLogoIcon className='w-7 h-7' />}
                title='My GitHub Profile'
                description='Explore my projects and contributions on GitHub.'
                href='https://github.com/RyanGarfinkel'
                openInNewTab
            />
            <Option
                icon={<LinkedInLogoIcon className='w-7 h-7' />}
                title='My LinkedIn Profile'
                description='Connect with me on LinkedIn.'
                href='https://www.linkedin.com/in/ryan-garfinkel/'
                openInNewTab
            />
            <Option
                icon={<FileTextIcon className='w-7 h-7' />}
                hoverIcon={<ReaderIcon className='w-7 h-7' />}
                title='My Resume'
                description='View my resume.'
                href='/resume'
                showSpinner={showSpinner}
                toggleShowSpinner={toggleShowSpinner}
            />
            <Option
                icon={<PaperPlaneIcon className='w-7 h-7 transition-transform duration-200 group-hover:-rotate-12' />}
                title='Contact Me'
                description='Send me a message to get in touch.'
                href='/contact'
            />
        </div>
    );
};

const Navbar = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [shouldRotate, setShouldRotate] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        
        const handleVisibilityChange = () => {
            if(document.visibilityState === 'visible')
                setShowSpinner(false);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
            setShowDropdown(false);
    };

    useEffect(() => {

        if(showDropdown)
            document.addEventListener('mousedown', handleClickOutside);
        else
            document.removeEventListener('mousedown', handleClickOutside);

    }, [showDropdown]);

    return (
        <div className='fixed top-16 left-0 w-full flex justify-center z-50'>
            <div className='sm:w-[375px] md:w-[650px] text-center container text-lg text-primary rounded-full shadow-lg px-6 py-4'>
                <div className='flex justify-evenly items-center sm:gap-4 md:gap-6'>
                    <TextNavButton text='Home' href='/' />
                    <TextNavButton text='About' href='/about' hideOnMobile />
                    <TextNavButton text='Projects' href='/projects' />
                    <TextNavButton text='Work' href='/work' />
                    <div
                        className='relative'
                        ref={dropdownRef}
                        onMouseEnter={() => setShouldRotate(true)}
                        onMouseLeave={() => setShouldRotate(false)}
                        onFocus={() => setShouldRotate(true)}
                        onBlur={() => setShouldRotate(false)}
                    >
                        <button
                            className='dropdown flex items-center focus:underline underline-offset-4 focus:outline-none focus:ring-0'
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            More <ChevronRightIcon className={`inline-block ml-1 h-4 w-4 transition-transform duration-200 ${showDropdown || shouldRotate ? 'rotate-90' : ''}`} />
                        </button>
                        {
                            showDropdown && <MoreDropdown showSpinner={showSpinner} toggleShowSpinner={() => setShowSpinner(true)} />
                        }
                    </div>
                    <button onClick={toggleTheme} className='blank-container focus:p-2'>
                        {
                            !mounted ? <MoonIcon /> : resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
