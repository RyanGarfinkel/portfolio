import ToolList from '../tool-list';

const TechStack = () => {

    return (
        <div className='mt-16 space-y-8'>
            <h2 className='text-3xl font-semibold'>Technologies I Use</h2>
            <div className='space-y-6'>
                <ToolList title='Languages' tools={['JavaScript', 'TypeScript', 'Python', 'C#', 'Java']} />
                <ToolList title='Frameworks & Libraries' tools={['React', 'Node.js', 'Next.js', 'Express.js', 'Unity', 'Socket.io']} />
                <ToolList title='Tools & Platforms' tools={['Git', 'Docker', 'MongoDB', 'Vercel', 'Digital Ocean', 'Postman']} />
            </div>
        </div>
    );
};

export default TechStack;
