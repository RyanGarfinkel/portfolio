import { DrawingPinIcon, RocketIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

const Hero = () => {

    return (
        <div className='container p-8 rounded-3xl w-full mt-10'>
            <div className='flex flex-col lg:flex-row items-center gap-8'>
                <div className='flex-1 text-left space-y-6 order-2 lg:order-1'>
                    <div className='space-y-4'>
                        <h1 className='sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Hey, I&apos;m Ryan 👋</h1>
                        <p className='text-xl text-secondary leading-relaxed'>
                            Third-year Computer Science student at UCF, passionate about building innovative web applications and mentoring future developers.
                        </p>
                        <div className='flex items-center justify-center lg:justify-start gap-2'>
                            <DrawingPinIcon className='w-4 h-4 text-secondary' />
                            <span className='text-secondary'>Orlando, FL</span>
                        </div>
                    </div>
                    <div className='bg-primary/5 p-4 rounded-xl border border-primary/10'>
                        <div className='flex items-center gap-2 mb-3'>
                            <RocketIcon className='w-5 h-5 text-primary' />
                            <span className='text-sm font-semibold tracking-wide text-primary'>MISSION</span>
                        </div>
                        <p className='text-lg italic text-primary/80 leading-relaxed'>
                            &ldquo;Passionate about creating innovative solutions that make a real impact while helping others grow in their technical journey.&rdquo;
                        </p>
                    </div>
                </div>
                <div className='flex-shrink-0 order-1 lg:order-2'>
                    <div className='w-48 h-48 rounded-2xl overflow-hidden'>
                        <Image 
                            src='/assets/profile.png' 
                            alt='Ryan Garfinkel' 
                            width={192} 
                            height={192} 
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
