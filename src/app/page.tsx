'use client';

import FeaturedProjects from '@/components/home/featured-projects';
import TechStack from '@/components/home/tech-stack';
import About from '@/components/home/about';
import Stats from '@/components/home/stats';
import QuickLinks from '@/components/home/quick-links';
import Hero from '@/components/home/hero';

const Home = () => {

    return (
        <div className='flex flex-col'>
            <Hero />
            <Stats />
            <div className='mt-10' />
            <About />
            <div className='mt-10' />
            <QuickLinks />
            <FeaturedProjects />
            <TechStack />
        </div>
    );
};

export default Home;
