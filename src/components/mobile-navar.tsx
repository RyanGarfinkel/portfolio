import { useTheme } from '@/utils/theme-context';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const MobileNavbar: React.FC = () => {

    const { isDarkMode, toggleDarkMode } = useTheme();
    
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
                { '<RG/>' }
            </div>
            <div className='flex flex-row items-center gap-3'>
                <div className='relative' ref={ref}>
                    <button onClick={toggleMenu}>
                        <HamburgerMenuIcon width={20} height={20} aria-label='Pages'/>
                    </button>
                    {
                        isOpen && (
                            <div className='absolute w-[150px] flex flex-col right-0 mt-2 bg-background shadow-lg border rounded-md text-sm py-2'>
                                <Link href='/' className={path === '/' ? 'px-4 py-2 underline underline-offset-4' : 'px-4 py-2'} onClick={() =>  setIsOpen(false)}>Home</Link>
                                <hr className='border-t my-2' />
                                <Link href='/work' className={path === '/work' ? 'px-4 py-2 underline underline-offset-4' : 'px-4 py-2'} onClick={() =>  setIsOpen(false)}>Work</Link>
                                <hr className='border-t my-2' />
                                <Link href='/projects' className={path === '/projects' ? 'px-4 py-2 underline underline-offset-4' : 'px-4 py-2'} onClick={() =>  setIsOpen(false)}>Projects</Link> 
                                <hr className='border-t my-2' />
                                <Link href='/contact' className={path === '/contact' ? 'px-4 py-2 underline underline-offset-4' : 'px-4 py-2'} onClick={() =>  setIsOpen(false)}>Contact</Link>
                                <hr className='border-t my-2' />
                                <div className='flex items-center justify-between px-4 py-2'>
                                    <span>Dark Mode</span>
                                    <label className='relative inline-flex items-center cursor-pointer'>
                                        <input type='checkbox' className='sr-only peer' checked={isDarkMode} onChange={toggleDarkMode} />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"/>
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
