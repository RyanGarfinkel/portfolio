'use client';

import { ChevronRightIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { TextNavButton } from './button';
import Dropdown from './dropdown';

const Navbar = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [shouldRotate, setShouldRotate] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [shouldFocus, setShouldFocus] = useState(false);

    const moreButtonRef = useRef<HTMLButtonElement>(null);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
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
            
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showDropdown]);

    const handleClose = () => {
        setShowDropdown(false);
        if (shouldFocus) {
            moreButtonRef.current?.focus();
        }
    };

    if (!mounted)
        return null;

    return (
        <div className='fixed top-16 left-0 w-full flex justify-center z-50'>
            <div className='sm:w-fit text-center container text-lg text-primary rounded-full shadow-lg px-6 py-3'>
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
                            ref={moreButtonRef}
                            className='dropdown flex items-center focus:underline underline-offset-4 focus:outline-none focus:ring-0'
                            onClick={() => {
                                setShowDropdown(!showDropdown);
                                setShouldFocus(false);
                            }}
                            onKeyDown={e => {
                                if(e.key !== 'Enter')
                                    return;

                                e.preventDefault();
                                setShowDropdown(!showDropdown);
                                setShouldFocus(true);
                            }}
                        >
                            More <ChevronRightIcon className={`inline-block ml-1 h-4 w-4 transition-transform duration-200 ${showDropdown || shouldRotate ? 'rotate-90' : ''}`} />
                        </button>
                        {
                            showDropdown && (
                                <Dropdown 
                                    onClose={handleClose} 
                                    shouldFocus={shouldFocus}
                                />
                            )
                        }
                    </div>
                    <button onClick={toggleTheme} className='p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background'>
                        {
                            resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
