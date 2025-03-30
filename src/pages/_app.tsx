import Navbar from '@/components/navbar';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import MobileNavbar from '@/components/mobile-navar';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from '@/utils/theme-context';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

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
          <Navbar/>
          <MobileNavbar/>
          
          <div className='font-semibold sm:text-[22px] md:text-[26px]'>
              { getHeader() }
          </div>
          { children }
      </div>
  );
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      <ThemeProvider>
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
