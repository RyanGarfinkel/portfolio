import { ExternalLinkIcon } from '@radix-ui/react-icons';
import iconUrls from '@/data/icon-urls';
import '@/styles/components.css';
import Image from 'next/image';
import Link from 'next/link';

interface IconItem {
    label: string;
    icon: React.FC;
}

interface LinkItem {
    label: string;
    url: string;
}

interface ItemListProps {
    title?: string;
    items: (string | IconItem | LinkItem)[];
    type?: 'str' | 'icons' | 'tools' | 'links';
    limit?: number;
    compact?: boolean;
}

const stringItems = (items: string[]) => {
    return items.map((item, index) => (
        <span className='tech-tag' key={index}>
            <span>{ item }</span>
        </span>
    ));
};

const iconItems = (items: IconItem[]) => {
    return items.map((item, index) => (
        <span className='tech-tag' key={index}>
            <item.icon />
            <span>{ item.label }</span>
        </span>
    ));
};

const urlItems = (items: LinkItem[]) => {
    return items.map((item, index) => (
        <Link key={index} href={item.url} target='_blank' rel='noopener noreferrer' className='tech-tag link'>
            <ExternalLinkIcon className='w-4 h-4' aria-hidden='true' />
            <span>{ item.label }</span>
        </Link>
    ));
};

const toolItems = (items: string[]) => {
    return items.map((item, index) => (
        <span className='tech-tag' key={index}>
            <Image src={iconUrls[item]} width={24} height={24} alt={item} className='w-4 h-4' />
            <span>{ item }</span>
        </span>
    ));
};

const ItemList: React.FC<ItemListProps> = ({ title, items, type = 'str', limit, compact = false }) => {

    const remaining = limit ? items.length - limit : -1;
    const n = Math.min(limit ?? items.length, items.length);

    items = items.slice(0, n);

    let itemsHTML;

    if (type === 'icons')
        itemsHTML = iconItems(items as IconItem[]);
    else if (type === 'links')
        itemsHTML = urlItems(items as LinkItem[]);
    else if (type === 'tools')
        itemsHTML = toolItems(items as string[]);
    else
        itemsHTML = stringItems(items as string[]);

    return (
        <div className='flex flex-col gap-2'>
            { title && <p className='text-lg'>{ title }</p>}
            <div className={`flex flex-wrap${compact ? ' gap-2' : ' gap-4'}`}>
                { itemsHTML }
                {
                    remaining > 0 && <span className='text-secondary flex items-center text-sm px-3 py-2'>+{ remaining } more</span>
                }
            </div>
        </div>
    );
};

export default ItemList;
