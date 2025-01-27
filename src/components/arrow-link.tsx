import { ArrowTopRightIcon } from '@radix-ui/react-icons';

interface ArrowLinkProps {
    url: string;
    txt: string;
};

const ArrowLink: React.FC<ArrowLinkProps> = ({ url, txt }) => {

    return (
        <a href={url} className='flex flex-row items-center hover:underline underline-offset-[5px]'>
            <ArrowTopRightIcon/>
            { txt }
        </a>
    );
};

export default ArrowLink;