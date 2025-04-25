import { ArrowTopRightIcon } from '@radix-ui/react-icons';

interface ArrowLinkProps {
    url: string;
    txt: string;
};

const ArrowLink: React.FC<ArrowLinkProps> = ({ url, txt }) => {

    return (
        <a href={url} className='row items-center hover:underline underline-offset-[5px] my-2 ml-1 text-lg sm:text-[18px] md:text-[20px]'>
            <ArrowTopRightIcon className='w-6 h-6' />
            { txt }
        </a>
    );
};

export default ArrowLink;