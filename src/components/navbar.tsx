import { useTheme } from '@/utils/theme-context';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Navbar: React.FC = () => {

    const { isDarkMode, toggleDarkMode } = useTheme();
    
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
                <Link href='/' className='hover:underline hover:underline-offset-4'>Home</Link>
                <Link href='/work' className='hover:underline hover:underline-offset-4'>Work</Link>
                <Link href='/projects' className='hover:underline hover:underline-offset-4'>Projects</Link> 
                <Link href='/contact' className='hover:underline hover:underline-offset-4'>Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;
