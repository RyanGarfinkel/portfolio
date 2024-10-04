import Navbar from '@/components/navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className='flex flex-col justify-center mx-auto sm:full lg:w-[750px] sm:px-3 md:px-8 lg:px-0'>
          <title>Ryan Garfinkel</title>
          <Navbar/>
          { children }
      </div>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  );
};

export default App;
