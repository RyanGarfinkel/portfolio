import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { MailIcon } from './icons';
import Link from 'next/link';
import '@/styles/components.css';

const links = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Experience', href: '/work' },
    { title: 'Contact', href: '/contact' }
];

const currentYear = new Date().getFullYear();

const Footer = () => {

    return (
        <footer className='flex items-center w-full mt-20 px-4 py-8'>
            <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
                <div className='space-y-3'>
                    <h4 className='font-semibold text-lg'>Quick Links</h4>
                    <div className='flex flex-wrap gap-6'>
                        {
                            links.map((link, index) => (
                                <Link 
                                    key={index} 
                                    href={link.href} 
                                    className='text-secondary hover:text-primary focus:text-primary focus:outline-none focus:border focus:border-primary rounded px-1 transition-colors text-lg'
                                >
                                    { link.title }
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='space-y-3'>
                    <h4 className='font-semibold text-lg'>Connect</h4>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6'>
                        <div className='flex space-x-3'>
                            <Link 
                                href='https://github.com/RyanGarfinkel' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='w-10 h-10 rounded-lg flex items-center justify-center text-secondary hover:text-primary focus:text-primary focus:outline-none focus:border focus:border-primary focus:rounded-full transition-all'
                            >
                                <GitHubLogoIcon className='w-5 h-5' />
                            </Link>
                            <Link 
                                href='https://www.linkedin.com/in/ryan-garfinkel/' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                className='w-10 h-10 rounded-lg flex items-center justify-center text-secondary hover:text-primary focus:text-primary focus:outline-none focus:border focus:border-primary focus:rounded-full transition-all'
                            >
                                <LinkedInLogoIcon className='w-5 h-5' />
                            </Link>
                            <Link 
                                href='/contact'
                                className='group w-10 h-10 rounded-lg flex items-center justify-center text-secondary hover:text-primary focus:text-primary focus:outline-none focus:border focus:border-primary focus:rounded-full transition-all'
                            >
                                <MailIcon className='w-5 h-5' />
                            </Link>
                        </div>
                        <p className='text-secondary text-lg mt-3 md:mt-0 md:ml-6'>
                            © { currentYear } Ryan Garfinkel
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
