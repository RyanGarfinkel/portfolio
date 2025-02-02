import Navbar from '@/components/navbar';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '@/styles/globals.css';
import MobileNavbar from '@/components/mobile-navar';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isDarkMode, toggleDarkMode }) => {

  const path = usePathname();

  const getHeader = () => {
    switch(path)
    {
      case '/':
        return 'Hey, I\'m Ryan 👋';
      case '/work':
        return 'Work Experience';
      case '/projects':
        return 'Projects';
      case '/contact':
        return 'Contact';
      default:
        return '';
    }
  }

  return (
    <div className='flex flex-col justify-center mx-auto sm:w-[375px] md:w-[750px] sm:px-5 md:px-8 lg:px-0 mb-10'>
          <title>Ryan Garfinkel</title>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
          <MobileNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
          
          <div className='font-semibold sm:text-[22px] md:text-[26px]'>
              { getHeader() }
          </div>
          { children }
      </div>
  );
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if(savedTheme === 'dark')
    {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
    else
    {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {

    if(isDarkMode)
    {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    }
    else
    {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <Component { ...pageProps } />
    </Layout>
  );
};

export default App;
