'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useState } from 'react';
import ReactPlayer from 'react-player';

interface CarouselProps {
    title: string;
    baseUrl: string;
    urls: string[];
}

const getDisplay = (url: string, alt: string) => url.includes('.mp4') ? (
        <ReactPlayer url={url} controls pip={false} playbackRate={1} width="100%" height="100%" className='aspect-video w-full h-full rounded-lg mb-4' />
    ) : (
        <Image src={url} alt={alt} width={1920} height={1080} className='aspect-video w-full h-full rounded-lg mb-4' priority />
    );

const Carousel: React.FC<CarouselProps> = ({ title, baseUrl, urls }) => {

    const n = urls.length;
    const [index, setIndex] = useState(0);

    const shiftLeft = () => setIndex((index - 1 + n) % n);
    const shiftRight = () => setIndex((index + 1) % n);

    if(n === 0)
        return null;
    else if(n === 1)
        return getDisplay(`${baseUrl}${urls[index]}`, title);

    return (
        <div className='col justify-center items-center space-y-4 w-full'>
            <div className='w-full sm:h-48 md:h-[288px]'>
                {
                    getDisplay(`${baseUrl}${urls[index]}`, title)
                }
            </div>
            <div className='row items-center justify-between w-full'>
                <button onClick={shiftLeft}>
                    <ArrowLeftIcon width={25} height={25}/>
                </button>
                <div className='row justify-center items-center'>
                    {
                        urls.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full mx-1 ${i === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                            />
                        ))
                    }
                </div>
                <button onClick={shiftRight}>
                    <ArrowRightIcon width={25} height={25}/>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
