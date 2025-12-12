import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'Ryan Garfinkel',
    description: 'Ryan Garfinkel\'s personal portfolio website showcasing projects and skills in software development.',
    keywords: ['Ryan Garfinkel'],
    authors: [{ name: 'Ryan Garfinkel' }],
    metadataBase: new URL('https://www.ryangarfinkel.dev'),
    icons: [{ rel: 'icon', url: 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'.9em\' font-size=\'90\'>👋</text></svg>' }],
};

interface Props {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
    return (
        <html lang='en' suppressHydrationWarning>
            <body>
                <ThemeProvider attribute='data-theme' defaultTheme='light' enableSystem>
                    <Navbar/>
                    <div className='flex flex-col items-center justify-center sm:w-[375px] md:w-[750px] lg:w-[1024px] mt-[10rem] mb-64 mx-auto'>
                        { children }
                        <Footer/>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
