import { ArrowLeftIcon, ArrowRightIcon, PauseIcon, PlayIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface CarouselProps {
    title: string;
    urls: string[];
}

const Carousel: React.FC<CarouselProps> = ({ title, urls }) => {

    const n = urls.length;
    const [index, setIndex] = useState(0);

    const shiftLeft = () => setIndex((index - 1 + n) % n);
    const shiftRight = () => setIndex((index + 1) % n);

    const movieRef = useRef<HTMLVideoElement>(null);

    if(urls.length == 1)
        return <Image src={urls[0]} alt={title} width={350} height={192} className='w-full sm:h-48 md:h-[288px] rounded-lg mb-4'/>;

    const togglePlayPause = () => {
        if(!movieRef || !movieRef.current)
            return;

        if(movieRef.current.paused)
            movieRef.current.play();
        else
            movieRef.current.pause();
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-full flex flex-row items-center justify-center'>
                <button onClick={shiftLeft}>
                    <ArrowLeftIcon width={25} height={25}/>
                </button>
                {
                    urls[index].includes('.mp4') ? (
                        <button onClick={togglePlayPause}>
                            <video width={320} height={192} className='sm:w-[275px] md:w-[650px] sm:h-48 md:h-[288px]  rounded-lg mx-4 mb-4' src={urls[index]} ref={movieRef} />
                        </button>
                    ) :
                    (
                        <Image src={urls[index]} alt={title} width={320} height={192} className='sm:w-[275px] md:w-[650px] sm:h-48 md:h-[288px]  rounded-lg mx-4 mb-4'/>
                    )
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