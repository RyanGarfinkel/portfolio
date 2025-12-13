import iconUrls from '@/data/icon-urls';
import Image from 'next/image';
import '@/styles/components.css';

interface TechStackProps {
    tools: string[];
    showIcon?: boolean;
    limit?: number;
};

const TechStack: React.FC<TechStackProps> = ({ tools, showIcon = true, limit }) => {
    
    const displayTools = limit ? tools.slice(0, limit) : tools;
    const remaining = limit ? tools.length - limit : 0;

    return (
        <div className='flex flex-wrap gap-2'>
            {
                displayTools.map((tag) => (
                    <div 
                        key={tag} 
                        className='tech-tag'
                    >
                        { showIcon && iconUrls[tag] && <Image src={iconUrls[tag]} width={16} height={16} alt={tag} className='w-4 h-4' /> }
                        <span>{tag}</span>
                    </div>
                ))
            }
            {
                remaining > 0 && (
                    <span className='text-secondary flex items-center text-sm px-3 py-2'>
                        +{remaining} more
                    </span>
                )
            }
        </div>
    );
};

export default TechStack;
