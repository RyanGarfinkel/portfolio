import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface NavbarProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const options = [
    { path: '/', title: 'Home' },
    { path: '/work', title: 'Work' },
    { path: '/projects', title: 'Projects' },
    { path: '/contact', title: 'Contact' }
];

const MobileNavbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {

    const path = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if(ref.current && !ref.current.contains(e.target as Node))
            setIsOpen(false);
    }

    useEffect(() => {
        if(isOpen)
            document.addEventListener('mousedown', handleClickOutside);
        else
            document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className='relative sm:flex md:hidden flex-row justify-between items-center w-full mx-auto my-6 font-mono'>
            <div className='font-semibold text-[22px]'>
                { '<RG/>'}
            </div>
            <div className='flex flex-row items-center gap-3'>
                <div className='relative' ref={ref}>
                    <button onClick={toggleMenu}>
                        <HamburgerMenuIcon width={20} height={20} aria-label='Page Options.'/>
                    </button>
                    {
                        isOpen && (
                            <div className='absolute w-[150px] flex flex-col right-0 mt-2 bg-background shadow-lg border rounded-md text-sm py-2'>
                                {
                                    options.map((option, i) => (
                                        <div key={i} className='flex flex-col'>
                                            <Link href={option.path} onClick={toggleMenu}>
                                                <div className={`px-4 py-2 ${option.path === path ? 'underline underline-offset-2' : ''}`}>
                                                    {option.title}
                                                </div>
                                            </Link>
                                            <hr className='border-t my-2' />
                                        </div>
                                    ))
                                }
                                <div className='flex items-center justify-between px-4 py-2'>
                                    <span>Dark Mode</span>
                                    <label className='relative inline-flex items-center cursor-pointer'>
                                        <input type='checkbox' className='sr-only peer' checked={isDarkMode} onChange={toggleDarkMode} />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"></div>
                                    </label>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
