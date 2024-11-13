import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {

    const path = usePathname();

    return (
        <div className='sm:hidden md:flex flex-row justify-between items-center w-full mx-auto my-8 font-mono'>
            <div className='font-semibold text-[26px]'>
                { '<RG/>'}
            </div>
            <div className='flex flex-row items-center gap-3 text-[16px]'>
                <button onClick={toggleDarkMode}>
                    { isDarkMode ? ( <SunIcon aria-label='Switch to light mode.'/> ) : ( <MoonIcon aria-label='Switch to dark mode.'/> ) }
                </button>
                <div>|</div>
                <Link href='/' className={path === '/' ? 'underline underline-offset-4' : ''}>Home</Link>
                <Link href='/work' className={path === '/work' ? 'underline underline-offset-4' : ''}>Work</Link>
                <Link href='/projects' className={path === '/projects' ? 'underline underline-offset-4' : ''}>Projects</Link> 
                <Link href='/contact' className={path === '/contact' ? 'underline underline-offset-4' : ''}>Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;
