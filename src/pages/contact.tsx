import { isEmpty, isEmail, replaceCode } from '@/utils/input-sanitizer';
import { Cross2Icon } from '@radix-ui/react-icons';
import { MutableRefObject, useRef, useState } from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CloseButtonProps {
    closeToast: (e: React.MouseEvent<HTMLElement>) => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ closeToast }) => (

    <button className='absolute top-2 right-2' onClick={(e) => {
        e.preventDefault();
        closeToast(e);
    }}>
        <Cross2Icon/>
    </button>
);

const options: ToastOptions<unknown> = {
    position: 'bottom-right',
    autoClose: 3000,
    closeButton: CloseButton,
    pauseOnHover: false,
    style: {
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'var(--font-mono)',
    },
}

const Contact = () => {

    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSending, setIsSending] = useState(false);

    const handleKeyDown = (field: string, e: React.KeyboardEvent<HTMLInputElement>, nextRef: MutableRefObject<HTMLElement | null>) => {
        if(e.key !== 'Enter')
            return;

        handleChange(field, e.currentTarget.value);

        e.preventDefault();
        nextRef.current?.focus();
    };

    const handleChange = (field: string, value: string) => {
        
        if(isEmpty(value))
            setErrors(prev => ({ ...prev, [field]: 'Field cannot be empty' }));
        else if(field === 'email' && !isEmail(value))
            setErrors(prev => ({ ...prev, [field]: 'Must enter in valid email.' }));
        else
            setErrors(prev => ({ ...prev, [field]: '' }));

        setValues(({ ...values, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if(isSending)
            return;
        
        values.firstName = replaceCode(values.firstName);
        values.lastName = replaceCode(values.lastName);
        values.email = replaceCode(values.email);
        values.subject = replaceCode(values.subject);
        values.message = replaceCode(values.message);
        
        if(!values.firstName || !values.lastName || !values.email || !values.subject || !values.message)
            return !toast.isActive('missing_fields') ? toast.warning('Please fill out all fields.', { ...options, toastId: 'missing_fields'}) : null;
        else if(errors.email)
            return !toast.isActive('invalid_email') ? toast.warning('Please enter valid email.', { ...options, toastId: 'invalid_email'}) : null;

        toast.clearWaitingQueue();
        toast.dismiss('missing_fields');
        toast.dismiss('invalid_email');
        
        setIsSending(true);

        toast.info('Sending message...', { ...options, toastId: 'sending', autoClose: false });

        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        toast.dismiss('sending');

        setIsSending(false);
        
        if(res.status === 204)
        {
            toast.success('Message sent successfully!', options);
            resetForm();
        }
        else
            toast.error('Message failed to send.', options);
    };

    const resetForm = () => {
        setValues({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        });

        setErrors({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    return (
        <form>
            <div className='font-semibold sm:text-[22px] md:text-[26px] mb-5'>
                Contact
            </div>
            <div>
                <div className='mb-4'>
                <div className='flex gap-4'>
                    <div className='w-1/2'>
                        <label className='block mb-2'>First Name *</label>
                        <input className={`w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none ${errors.firstName ? 'border-red-500' : ''}`}
                            placeholder='Ryan'
                            value={values.firstName}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                            onKeyDown={(e) => handleKeyDown('firstName', e, lastNameRef)}
                        />
                        {
                            errors.firstName && <div className='text-red-500 text-sm mt-1'>{errors.firstName}</div>
                        }
                    </div>
                    <div className='w-1/2'>
                        <label className='block mb-2'>Last Name *</label>
                        <input className={`w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none ${errors.lastName ? 'border-red-500' : ''}`}
                            placeholder='Garfinkel'
                            value={values.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                            ref={lastNameRef}
                            onKeyDown={(e) => handleKeyDown('lastName', e, emailRef)}
                        />
                        {
                            errors.lastName && <div className='text-red-500 text-sm mt-1'>{errors.lastName}</div>
                        }
                    </div>
                </div>
                </div>
                <div className='mb-4'>
                    <label className='block mb-2'>Email *</label>
                    <input className={`w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                        placeholder='name@example.com'
                        value={values.email}
                        ref={emailRef}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onKeyDown={(e) => handleKeyDown('email', e, subjectRef)}
                    />
                    {
                        errors.email && <div className='text-red-500 text-sm mt-1'>{errors.email}</div>
                    }
                </div>
                <div className='mb-4'>
                    <label className='block mb-2'>Subject *</label>
                    <input className={`w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none ${errors.subject ? 'border-red-500' : ''}`}
                        placeholder='Inquiry'
                        ref={subjectRef}
                        value={values.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        onKeyDown={(e) => handleKeyDown('subject', e, messageRef)}
                    />
                    {
                        errors.subject && <div className='text-red-500 text-sm mt-1'>{errors.subject}</div>
                    }
                </div>
                <div className='mb-4'>
                    <label className='block mb-2'>Message *</label>
                    <textarea className={`w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none ${errors.message ? 'border-red-500' : ''} min-h-[100px] max-h-[250px]`}
                            placeholder='Your message...'
                            ref={messageRef}
                            value={values.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                    />
                    {
                        errors.message && <div className='text-red-500 text-sm mt-1'>{errors.message}</div>
                    }
                </div>
                <button className="w-full py-2 px-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            <ToastContainer limit={1}/>
        </form>
  );
};

export default Contact;