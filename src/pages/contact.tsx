import { MutableRefObject, useRef } from 'react';

const labelClass = 'block mb-2';
const inputClass = 'w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none';

const Contact = () => {

    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    const handleKeyDown = (e: React.KeyboardEvent, nextRef: MutableRefObject<HTMLElement | null>) => {
        if(e.key !== 'Enter')
            return;

        e.preventDefault();
        nextRef.current?.focus();
    }

    return (
        <form>
            <div className='font-semibold sm:text-[22px] md:text-[26px] mb-5'>
                Contact
            </div>
            <div>
                <div className=''>
                    <div className='mb-4'>
                        <div className='flex gap-4'>
                            <div className='w-1/2'>
                                <label className={labelClass}>First Name</label>
                                <input className={inputClass}
                                       placeholder='Ryan'
                                       onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
                                />
                            </div>
                            <div className='w-1/2'>
                                <label className={labelClass}>Last Name</label>
                                <input className={inputClass}
                                       placeholder='Garfinkel'
                                       ref={lastNameRef}
                                       onKeyDown={(e) => handleKeyDown(e, emailRef)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className={labelClass}>Email</label>
                        <input className={inputClass}
                               placeholder='name@example.com'
                               ref={emailRef}
                               onKeyDown={(e) => handleKeyDown(e, subjectRef)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className={labelClass}>Subject</label>
                        <input className={inputClass}
                               placeholder='Inquiry'
                               ref={subjectRef}   
                               onKeyDown={(e) => handleKeyDown(e, messageRef)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2'>Message</label>
                        <textarea className={inputClass + ' h-32 max-h-[375px]'}
                                  ref={messageRef}
                                  placeholder='Enter your message here...'
                        />
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button 
                            className='bg-gradient-to-r from-blue-500 to-blue-600 
                                     text-white px-8 py-3 rounded-lg 
                                     hover:from-blue-600 hover:to-blue-700 
                                     transition-all duration-200 ease-in-out 
                                     font-medium shadow-lg hover:shadow-xl 
                                     transform hover:-translate-y-0.5'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Contact;