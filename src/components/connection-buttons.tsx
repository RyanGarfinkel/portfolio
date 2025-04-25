import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const GitHubButton: React.FC = () => {

    const handleClick = () => {
        window.open('https://github.com/RyanGarfinkel', '_blank');
    };

    return (
        <button className='rounded-full w-12 h-12 flex items-center justify-center focus:outline-none bg-black' onClick={handleClick} aria-label='Visit my GitHub profile'>
            <GitHubLogoIcon className='text-white w-6 h-6' />
        </button>
    );
};

const LinkedInButton: React.FC = () => {
    const handleClick = () => {
        window.open('https://www.linkedin.com/in/ryan-garfinkel/', '_blank');
    };

    return (
        <button className='rounded-full w-12 h-12 flex items-center justify-center focus:outline-none bg-blue-700' onClick={handleClick} aria-label='Visit my LinkedIn profile'>
            <LinkedInLogoIcon className='w-6 h-6 text-white' />
        </button>
    );
};

export { GitHubButton, LinkedInButton };
