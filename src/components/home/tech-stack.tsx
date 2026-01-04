import ItemList from '../item-list';

const TechStack = () => {

    return (
        <div className='mt-16 space-y-8'>
            <h2 className='text-3xl font-semibold'>Technologies I Use</h2>
            <div className='space-y-6'>
                <ItemList title='Languages' items={['JavaScript', 'TypeScript', 'Python', 'C#', 'Java']} type='tools' />
                <ItemList title='Frameworks & Libraries' items={['React', 'Node.js', 'Next.js', 'Express.js', 'Unity', 'Socket.io']} type='tools' />
                <ItemList title='Tools & Platforms' items={['Git', 'Docker', 'MongoDB', 'Vercel', 'Digital Ocean', 'Postman']} type='tools' />
            </div>
        </div>
    );
};

export default TechStack;
