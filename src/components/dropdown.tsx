import { GitHubLogoIcon, LinkedInLogoIcon, PersonIcon, UpdateIcon } from '@radix-ui/react-icons';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { ResumeIcon, SendIcon } from './icons';
import Link from 'next/link';
import '@/styles/components.css';

interface OptionProps {
    Icon: React.ElementType;
    title: string;
    description: string;
    href: string;
    openInNewTab?: boolean;
    withSpinner?: boolean;
    onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement>;
};

interface DropdownProps {
    onClose: () => void;
    shouldFocus: boolean;
};

const Option = forwardRef<HTMLAnchorElement, OptionProps>(({ Icon, title, description, href, openInNewTab, withSpinner, onKeyDown }, ref) => {

    const [isLoading, setIsLoading] = useState(false);
    
    const handleClick = () => withSpinner && setIsLoading(true);

    return (
        <Link
            href={href}
            ref={ref}
            onKeyDown={onKeyDown}
            target={openInNewTab ? '_blank' : '_self'}
            rel='noopener noreferrer'
            className={'group flex items-center px-4 py-2 text-left text-primary rounded-2xl container-borderless relative focus:z-10 focus:outline-none focus:bg-foreground/5 focus:ring-2 focus:ring-foreground active:bg-foreground/5'}
            onClick={handleClick}
        >
            <div className='mr-4 container-foreground rounded-2xl p-3'>
                <Icon className='w-7 h-7'/>
            </div>
            <div className='flex flex-col items-start min-w-0'>
                <span className='dropdown-title font-semibold flex items-center gap-2'>
                    { title }
                    {
                        isLoading && <UpdateIcon className='w-4 h-4 animate-spin'/>
                    }
                </span>
                <span className='dropdown-description break-words w-full'>{ description }</span>
            </div>
        </Link>
    );
});
Option.displayName = 'Option';

const Dropdown: React.FC<DropdownProps> = ({ onClose, shouldFocus }) => {

    const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        if (!shouldFocus) return;

        const first = itemsRef.current.find(item => item && item.offsetParent !== null);
        if(first)
            setTimeout(() => first.focus(), 0);

    }, [shouldFocus]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {

        if(!(['ArrowDown', 'ArrowUp', 'Escape', 'Tab'].includes(e.key)))
            return;

        if(e.key === 'Escape' || e.key === 'Tab')
        {
            if (e.key === 'Escape') e.preventDefault();
            onClose();
            return;
        }

        e.preventDefault();
        const items = itemsRef.current;
        const len = items.length;

        if(e.key === 'ArrowDown')
        {
            let nextIndex = (index + 1) % len;
            while(nextIndex !== index)
            {
                const nextItem = items[nextIndex];
                if(nextItem && nextItem.offsetParent !== null)
                {
                    nextItem.focus();
                    break;
                }
                nextIndex = (nextIndex + 1) % len;
            }
        }
        else if(e.key === 'ArrowUp')
        {
            let prevIndex = (index - 1 + len) % len;
            while(prevIndex !== index)
            {
                const prevItem = items[prevIndex];
                if(prevItem && prevItem.offsetParent !== null)
                {
                    prevItem.focus();
                    break;
                }
                prevIndex = (prevIndex - 1 + len) % len;
            }
        }
    };

    return (
        <div className='fixed top-20 left-1/2 transform -translate-x-1/2 md:absolute md:top-auto md:left-1/2 md:mt-6 py-2 px-2 container-full rounded-2xl z-10 sm:w-full md:w-[19rem]'>
            <div className='md:hidden'>
                <Option
                    Icon={PersonIcon}
                    title='About Me'
                    description='Learn about me.'
                    href='/about'
                    onKeyDown={(e) => handleKeyDown(e, 0)}
                    ref={el => { itemsRef.current[0] = el; }}
                />
            </div>
            <Option
                Icon={GitHubLogoIcon}
                title='My GitHub Profile'
                description='Explore my projects.'
                href='https://github.com/RyanGarfinkel'
                onKeyDown={(e) => handleKeyDown(e, 1)}
                ref={el => { itemsRef.current[1] = el; }}
                openInNewTab
            />
            <Option
                Icon={LinkedInLogoIcon}
                title='My LinkedIn Profile'
                description='Connect with me.'
                href='https://www.linkedin.com/in/ryan-garfinkel/'
                onKeyDown={(e) => handleKeyDown(e, 2)}
                ref={el => { itemsRef.current[2] = el; }}
                openInNewTab
            />
            <Option
                Icon={ResumeIcon}
                title='My Resume'
                description='View my resume.'
                href='/resume'
                onKeyDown={(e) => handleKeyDown(e, 3)}
                ref={el => { itemsRef.current[3] = el; }}
                withSpinner
            />
            <Option
                Icon={SendIcon}
                title='Contact Me'
                description='Send me a message.'
                href='/contact'
                onKeyDown={(e) => handleKeyDown(e, 4)}
                ref={el => { itemsRef.current[4] = el; }}
            />
        </div>
    );
};

export default Dropdown;
