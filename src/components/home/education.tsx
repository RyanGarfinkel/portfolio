import Image from 'next/image';

const Education = () => {
    return (
        <div className='flex flex-col space-y-8 w-full'>
            <div className='title mt-3'>
                Education
            </div> 
            <div className="flex sm:flex-col md:flex-row sm:items-center md:items-start space-x-6 w-full">
                <Image src="/assets/images/ucf.png" alt="UCF Logo" width={55} height={55} className="rounded-full"/>
                <div className='col w-full text-lg sm:text-[18px] md:text-[20px]'>
                    <div className='flex sm:flex-col md:flex-row justify-between items-center w-full'>
                        <div className="font-semibold">
                            University of Central Florida
                        </div>
                        <div>
                            Expected Graduation: May 2026
                        </div>
                    </div>
                    <div className='flex sm:flex-col md:flex-row justify-between items-center w-full'>
                        <div className="italic">
                            Bachelor of Science in Computer Science
                        </div>
                        <div className='italic'>
                            Orlando, FL
                        </div>
                    </div>

                    <ul className="ml-5 list-disc w-2/3">
                        <li>
                            <span className="font-semibold">Coursework:</span> Software Engineering, Enterprise Computing, VR Engineering, Algorithms for Machine Learning, Object Oriented Programming, Systems Software, and Leadership in Engineering I, II.
                        </li>
                        <li>
                            <span className="font-semibold">Awards:</span> President&apos;s Honor Roll, Pegasus Bronze Scholarship, and Florida Bright Futures Scholarship.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;