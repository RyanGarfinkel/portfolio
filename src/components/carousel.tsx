import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { IconNavButton } from './button';
import '@/styles/components.css';

interface CarouselProps {
    basePath: string;
    images: string[];
};

const currentStyle = 'border-foreground w-8 h-4 shadow-lg rounded-full';
const inactiveStyle = 'border-foreground w-3 h-3 rounded-full';

const Carousel: React.FC<CarouselProps> = ({ basePath, images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const prevImage = () => sliderRef.current?.slickPrev();
    const nextImage = () => sliderRef.current?.slickNext();

    if(images.length === 1)
    {
        const filePath = `${basePath}${images[0]}`;
        const isVideo = filePath.endsWith('.mp4');

        return (
            <div className='relative flex flex-col items-center w-full max-w-4xl mx-auto'>
                <div className='relative w-full overflow-hidden rounded-2xl h-[500px] shadow-2xl'>
                    {
                        isVideo ? (
                            <video
                                src={filePath}
                                controls
                                className='object-contain w-full h-full bg-black/5'
                            />
                        ) : (
                            <Image
                                src={filePath}
                                alt='Project media'
                                fill
                                className='object-contain bg-black/5'
                                draggable={false}
                                unoptimized
                            />
                        )
                    }
                </div>
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_current: number, next: number) => setCurrentSlide(next),
        className: 'carousel-slider',
    };

    return (
        <div className='relative flex flex-col items-center w-full max-w-4xl mx-auto'>
            <div className='relative w-full mb-6'>
                <div className='relative w-full max-w-4xl h-[500px] overflow-hidden rounded-2xl mx-auto'>
                    <Slider ref={sliderRef} {...settings}>
                        {
                            images.map((file, index) => {
                            const filePath = `${basePath}${file}`;
                            const isVideo = filePath.endsWith('.mp4');

                            return (
                                <div key={index} className='relative h-[500px]'>
                                    {
                                        isVideo ? (
                                            <video
                                                src={filePath}
                                                controls
                                                className='object-contain w-full h-full bg-black/5'
                                            />
                                        ) : (
                                            <Image
                                                src={filePath}
                                                alt={`Project media ${index + 1}`}
                                                className='object-contain transition-all duration-500 ease-in-out bg-black/5'
                                                draggable={false}
                                                unoptimized
                                                fill
                                            />
                                        )
                                    }
                                </div>
                            );
                        })
                        }
                    </Slider>
                </div>
            </div>
            <div className='flex items-center justify-between w-full'>
                <IconNavButton
                    icon={<ChevronLeftIcon />}
                    onClick={prevImage}
                    ariaLabel='Previous media'
                />
                <div className='flex justify-center items-center gap-3'>
                    {
                        images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    sliderRef.current?.slickGoTo(idx);
                                    setCurrentSlide(idx);
                                }}
                                className={`transition-all duration-300 border focus-visible:outline-none focus-visible:ring-[0.5px] focus-visible:ring-foreground focus-visible:ring-offset-2 ${currentSlide === idx ? currentStyle : inactiveStyle}`}
                                aria-label={`Media ${idx + 1}`}
                            />
                        ))
                    }
                </div>
                <IconNavButton
                    icon={<ChevronRightIcon />}
                    onClick={nextImage}
                    ariaLabel='Next media'
                />
            </div>
        </div>
    );
};

export default Carousel;
