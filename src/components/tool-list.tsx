import iconUrls from '@/data/icon-urls';
import Image from 'next/image';

interface ToolListProps {
    title?: string;
    tools: string[];
};

const ToolList: React.FC<ToolListProps> = ({ title, tools }) => {
    return (
        <div className='flex flex-col gap-2 mb-8'>
            { title && <p className='text-lg'>{ title }</p>}
            <div className='flex flex-wrap gap-6'>
                {
                    tools.map((tool, index) => (
                        <span key={index} className='flex items-center gap-2 p-3 my-4 rounded-lg container group w-fit'>
                            <Image src={iconUrls[tool]} width={24} height={24} alt={tool} className='w-4 h-4' />
                            <span>
                                { tool }
                            </span>
                        </span>
                    ))
                }
            </div>
        </div>
    );
};

export default ToolList;
