import { HamburgerMenuIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface NavbarProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const MobileNavbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {

    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        console.log('toggle menu:', isOpen);
        
        if(!isOpen)
            menuRef.current?.focus();

        setIsOpen(!isOpen);
    }

    const handleOutsideClick = (e: MouseEvent) => {
        if(menuRef.current && !menuRef.current.contains(e.target as Node))
            setIsOpen(false);
    };

    useEffect(() => {
        if(isOpen)
            document.addEventListener('mousedown', handleOutsideClick);
        else
            document.removeEventListener('mousedown', handleOutsideClick);
    }, [isOpen]);

    return (
        <div className='relative sm:flex md:hidden flex-row justify-between items-center w-full mx-auto my-6 font-mono'>
            <div className='font-semibold text-[22px]'>
                { '<RG/>'}
            </div>
            <button onClick={toggleMenu}>
                <HamburgerMenuIcon width={20} height={20}/>
            </button>
            {
                isOpen && (
                    <div className='absolute top-0 right-0 bg-background border rounded-lg shadow-md' ref={menuRef}>
                        <div className='flex flex-col items-center py-4'>
                            <Link href='/' className={path === '/' ? 'underline underline-offset-4' : ''} onClick={toggleMenu}>Home</Link>
                            <Link href='/work' className={path === '/work' ? 'underline underline-offset-4' : ''} onClick={toggleMenu}>Work</Link>
                            <Link href='/projects' className={path === '/projects' ? 'underline underline-offset-4' : ''} onClick={toggleMenu}>Projects</Link> 
                            <Link href='/contact' className={path === '/contact' ? 'underline underline-offset-4' : ''} onClick={toggleMenu}>Contact</Link>
                            <button onClick={toggleDarkMode} className='mb-2'>
                                {
                                    isDarkMode ? (
                                        <div className='flex flex-row'>
                                            <SunIcon width={20} height={20} />
                                            { 'Light Mode' }
                                        </div>
                                    ) : (
                                        <div className='flex flex-row'>
                                            <MoonIcon width={20} height={20} />
                                            { 'Dark Mode' }
                                        </div>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MobileNavbar;
