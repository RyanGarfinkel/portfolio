import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useState } from 'react';
import ReactPlayer from 'react-player';

interface CarouselProps {
    title: string;
    urls: string[];
}

const getDisplay = (url: string, alt: string) => url.includes('.mp4') ? (
    <ReactPlayer url={url} controls pip={false} playbackRate={1}/>
) : (
    <Image src={url} alt={alt} width={350} height={192} className='w-full sm:h-48 md:h-[288px] rounded-lg mb-4'/>
)

const Carousel: React.FC<CarouselProps> = ({ title, urls }) => {

    const n = urls.length;
    const [index, setIndex] = useState(0);

    const shiftLeft = () => setIndex((index - 1 + n) % n);
    const shiftRight = () => setIndex((index + 1) % n);

    if(n === 0)
        return null;
    else if(n === 1)
        return getDisplay(urls[0], title);

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-full flex flex-row items-center justify-center'>
                <button onClick={shiftLeft}>
                    <ArrowLeftIcon width={25} height={25}/>
                </button>
                {
                    getDisplay(urls[index], title)
                }
                <button onClick={shiftRight}>
                    <ArrowRightIcon width={25} height={25}/>
                </button>
            </div>
            <div className='flex flex-row justify-center items-center'>
                {
                    urls.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full mx-1 ${i === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Carousel;