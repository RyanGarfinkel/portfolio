import { CodeIcon, ReaderIcon, RocketIcon } from '@radix-ui/react-icons';
import { IconDescButton } from '../button';

const QuickLinks = () => {

    return (
        <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Explore</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <IconDescButton
                    icon={
                            <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center'>
                                <CodeIcon className='w-6 h-6 text-white' />
                            </div>
                        }
                    title='Projects'
                    description='View my work and technical projects'
                    href='/projects'
                />
                <IconDescButton
                    icon={
                            <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-cyan-600 flex items-center justify-center'>
                                <ReaderIcon className='w-6 h-6 text-white' />
                            </div>
                        }
                    title='Experience'
                    description='Professional and academic background'
                    href='/work'
                />
                <IconDescButton
                    icon={
                            <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center'>
                                <span className='text-white text-lg'>👋</span>
                            </div>
                        }
                    title='About Me'
                    description='Learn more about my journey and interests'
                    href='/about'
                />
                <IconDescButton
                    icon={
                            <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center'>
                                <RocketIcon className='w-6 h-6 text-white' />
                            </div>
                        }
                    title='Contact'
                    description='Get in touch for opportunities'
                    href='/contact'
                />
            </div>
        </div>
    );
};

export default QuickLinks;
