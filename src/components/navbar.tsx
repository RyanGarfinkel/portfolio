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
        <div className='sm:hidden md:flex flex-row justify-between items-center w-full mx-auto sm:my-6 md:my-8 font-mono'>
            <div className='font-semibold sm:text-[22px] md:text-[26px]'>
                { '<RG/>'}
            </div>
            <div className='flex flex-row items-center gap-3 sm:text-[15px] lg:text-[16px]'>
                <button onClick={toggleDarkMode}>
                    { isDarkMode ? ( <SunIcon/> ) : ( <MoonIcon/> ) }
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
