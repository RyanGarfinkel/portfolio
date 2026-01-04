
'use client';

import { ArrowLeftIcon, ArrowRightIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useState } from 'react';

interface NavButtonProps {
    icon?: React.ReactNode;
    hoverIcon?: React.ReactNode;
    title: string;
    href: string;
    openInSelf?: boolean;
    type?: 'primary' | 'secondary';
    className?: string;
};

interface BackButtonProps {
    href: string;
};

interface TextNavButtonProps {
    text: string;
    href: string;
    hideOnMobile?: boolean;
};

interface IconNavButton {
    icon: React.ReactNode;
    onClick: () => void;
    ariaLabel?: string;
};

interface IconDescButton {
    icon: React.ReactNode;
    hoverIcon?: React.ReactNode;
    title: string;
    href: string;
    description: string;
};
const NavButton: React.FC<NavButtonProps> = ({ icon, hoverIcon, title, href, openInSelf, type='primary', className='' }) => {

    const [isHovered, setIsHovered] = useState(false);
    const buttonStyles = type === 'secondary' ? 'bg-foreground text-background border border-transparent' : 'container';

    return (
        <Link
            href={href}
            target={openInSelf ? '_self' : '_blank'}
            rel='noopener noreferrer'
            className={`link flex items-center gap-2 p-3 rounded-lg group w-fit ${buttonStyles} ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {
                icon && <span className='text-xl'>{ isHovered && hoverIcon ? hoverIcon : icon }</span>
            }
            <span className='text-lg font-semibold'>{ title }</span>
            <ArrowRightIcon className='w-6 h-6 mr-2 transition-all duration-300 group-hover:ml-2 group-hover:mr-0' />
        </Link>
    );
};

const BackButton: React.FC<BackButtonProps> = ({ href }) => {

    return (
        <Link
            href={href}
        className='link inline-flex items-center gap-2 mb-8 p-3 rounded-full container group transition-all duration-300 w-fit'
        >
            <ArrowLeftIcon className='w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1' />
            <span className='font-medium'>Back to Projects</span>
        </Link>
    );
};

const TextNavButton: React.FC<TextNavButtonProps> = ({ text, href, hideOnMobile }) => {

    return (
        <Link href={href} className={`hover:underline focus:underline outline-none border-none shadow-none underline-offset-4 ${hideOnMobile ? 'hidden md:inline' : ''}`}>
            {text}
        </Link> 
    );
};

const IconNavButton = React.forwardRef<HTMLButtonElement, IconNavButton>(({ icon, onClick, ariaLabel }, ref) => {
    return (
        <button
            ref={ref}
            aria-label={ariaLabel}
            onClick={onClick}
            className='p-3 rounded-full container shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 z-10 w-fit'
        >
            { icon }
        </button>
    );
});
IconNavButton.displayName = 'IconNavButton';

const IconDescButton: React.FC<IconDescButton> = ({ icon, hoverIcon, title, href, description }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link 
            href={href}
            className='group container p-6 rounded-xl border border-primary/10'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='flex items-center gap-4'>
                { isHovered && hoverIcon ? hoverIcon : icon }
                <div>
                    <h3 className='font-semibold group-hover:text-primary transition-colors'>{ title }</h3>
                    <p className='text-sm text-secondary'>{ description }</p>
                </div>
            </div>
        </Link>
    );
};

const LightDarkModeToggle: React.FC = () => {
    
    const { setTheme, resolvedTheme } = useTheme();
    const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

    return (
        <button 
            className='p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background'
            onClick={toggleTheme}
        >   
            {
                resolvedTheme === 'dark' ? (
                    <SunIcon 
                        className='w-6 h-6 cursor-pointer hover:text-yellow-600 transition-colors' 
                    />
                ) : (
                    <MoonIcon 
                        className='w-6 h-6 cursor-pointer hover:text-gray-600 transition-colors' 
                    />
                )
            }
        </button>
    );
};

export { NavButton, BackButton, TextNavButton, IconNavButton, IconDescButton, LightDarkModeToggle };
