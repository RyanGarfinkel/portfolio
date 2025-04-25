import Footer from '@/components/footer';
import MobileNavbar from '@/components/mobile-navar';
import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/utils/theme-context';
import '@/styles/globals.css';

interface Props {
  children: React.ReactNode;
}

const metadata = {
    title: 'Ryan Garfinkel',
    desc: 'Ryan Garfinkel\'s personal portfolio website showcasing projects and skills in software development.',
    keywords: 'Ryan Garfinkel',
    author: 'Ryan Garfinkel',
    url: 'https://www.ryangarfinkel.dev',
}

const RootLayout: React.FC<Props> = ({ children }) => {

    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta charSet='utf-8' />
                <meta name='description' content={metadata.desc} />
                <meta name='keywords' content={metadata.keywords} />
                <meta name='author' content={metadata.author} />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='url' content={metadata.url} />
                <link rel='icon' href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>"/>
            </head>
            <body className='col justify-center mx-auto sm:w-[375px] md:w-[750px] lg:w-[1100px] xl:w-[1250px] sm:px-5 md:px-8 xl:px-0 my-10'>
                <ThemeProvider>
                    <Navbar/>

                    <MobileNavbar/>

                    { children }

                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;