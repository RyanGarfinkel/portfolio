import Navbar from '@/components/navbar';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '@/styles/globals.css';

interface LayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isDarkMode, toggleDarkMode }) => {

  return (
    <div className='flex flex-col justify-center mx-auto sm:full md:w-[750px] sm:px-5 md:px-8 lg:px-0 mb-10'>
          <title>Ryan Garfinkel</title>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
          { children }
      </div>
  );
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode)
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
