import CountUp from 'react-countup';

const stats = [
    { label: 'YEARS CODING', value: 5 },
    { label: 'STUDENTS MENTORED', value: 750 },
    { label: 'PROJECTS BUILT', value: 13 },
];

const Stats = () => {

    return (
        <div className='grid grid-cols-3 gap-6 mt-8 text-center justify-items-center'>
            {
                stats.map(stat => (
                    <div className='blank-container space-y-1 w-fit px-4 py-3' key={stat.label} tabIndex={0}>
                        <div className='text-xl md:text-3xl font-bold text-primary'>
                            <CountUp end={stat.value} duration={1.2} />
                            <span className='text-lg md:text-2xl'>+</span>
                        </div>
                        <div className='text-xs md:text-sm tracking-wide text-secondary font-medium'>
                            { stat.label }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Stats;
