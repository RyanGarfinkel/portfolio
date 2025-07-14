'use client';

import { CheckCircledIcon, EnvelopeClosedIcon, EnvelopeOpenIcon, ExclamationTriangleIcon, GitHubLogoIcon, LinkedInLogoIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { NavButton } from '@/components/button';
import '../../styles/contact.css';

interface InputLabelProps {
    label: string;
    htmlFor: string;
};

const InputLabel: React.FC<InputLabelProps> = ({ label, htmlFor }) => {

    return (
        <label htmlFor={htmlFor} className='ml-1 font-semibold text-lg'>
            {label} <span className='text-red-500 font-semibold text-lg'>*</span>
        </label>
    );
};

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const charCount = (message: string) => message.replace(/\s/g, '').length;
const MAX_MESSAGE_LENGTH = 1000;

const Contact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [isDisabled, setIsDisabled] = useState(true);
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [wasSentSuccessfully, setWasSentSuccessfully] = useState(false);

    useEffect(() => {

        setIsDisabled(!(firstName && lastName && email && isValidEmail(email) && subject && message && charCount(message) <= MAX_MESSAGE_LENGTH));

    }, [firstName, lastName, email, subject, message]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        
        e.preventDefault();

        const id = e.target.id;
        const value = e.target.value;

        if(id === 'firstName')
        {
            setFirstName(value);

            if(!value.trim())
                e.target.setCustomValidity('First name is required.');
            else
                e.target.setCustomValidity('');

            e.target.reportValidity();
        }
        else if(id === 'lastName')
        {
            setLastName(value);

            if(!value.trim())
                e.target.setCustomValidity('Last name is required.');
            else
                e.target.setCustomValidity('');

            e.target.reportValidity();
        }
        else if(id === 'email')
        {
            setEmail(value);

            if(!value.trim())
                e.target.setCustomValidity('Email is required.');
            else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                e.target.setCustomValidity('Invalid email address.');
            else
                e.target.setCustomValidity('');

            e.target.reportValidity();
        }
        else if(id === 'subject')
        {
            setSubject(value);

            if(!value.trim())
                e.target.setCustomValidity('Subject is required.');
            else
                e.target.setCustomValidity('');

            e.target.reportValidity();
        }
        else if(id === 'message')
        {
            setMessage(value);

            if(!value.trim())
                e.target.setCustomValidity('Message is required.');
            else if(charCount(value) > MAX_MESSAGE_LENGTH)
                e.target.setCustomValidity(`Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`);
            else
                e.target.setCustomValidity('');

            e.target.reportValidity();
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.NEXT_PUBLIC_SEND_KEY as string,
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                subject: subject,
                message: message,
            }),
        });

        const data = await response.json();

        setWasSubmitted(true);

        if(response.ok)
            setWasSentSuccessfully(true);
        else
        {
            setWasSentSuccessfully(false);
            console.error('Error sending email:', data.error || 'Unknown error');
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <div className='flex flex-col'>
            <h1>
                Contact Me.
            </h1>
            <p className='text-xl text-secondary'>
                I love connecting with people building cool things. Whether you have a project in mind, need a developer’s input, or just want to say hi, feel free to reach out.
            </p>
            <form className='container flex flex-col gap-8 p-8 my-10 rounded-2xl' onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row gap-6 w-full'>
                    <div className='flex flex-col gap-3 w-full'>
                        <InputLabel label='First Name' htmlFor='firstName' />
                        <input
                            id='firstName'
                            placeholder='Your first name'
                            className='w-full'
                            onChange={handleChange}
                            value={firstName}
                            onInvalid={e => e.preventDefault()}
                        />
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        <InputLabel label='Last Name' htmlFor='lastName' />
                        <input
                            id='lastName'
                            placeholder='Your last name'
                            className='w-full'
                            onChange={handleChange}
                            value={lastName}
                            onInvalid={e => e.preventDefault()}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <InputLabel label='Email' htmlFor='email' />
                    <input
                        id='email'
                        placeholder='name@example.com'
                        onChange={handleChange}
                        value={email}
                        onInvalid={e => e.preventDefault()}
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <InputLabel label='Subject' htmlFor='subject' />
                    <input
                        id='subject'
                        placeholder='Subject'
                        onChange={handleChange}
                        value={subject}
                        onInvalid={e => e.preventDefault()}
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <InputLabel label='Message' htmlFor='message' />
                    <textarea
                        id='message'
                        placeholder='Your message here...'
                        className='min-h-[5rem] h-[10rem] max-h-[30rem]'
                        onChange={handleChange}
                        value={message}
                        onInvalid={e => e.preventDefault()}
                    />
                    <span className='flex justify-end mt-1 text-md text-secondary'>
                        { charCount(message) } / {MAX_MESSAGE_LENGTH} characters
                    </span>
                </div>
                <div className='flex justify-end items-center'>
                    {
                        wasSubmitted && wasSentSuccessfully && (
                            <div className='success flex mr-auto'>
                                <CheckCircledIcon className='text-white mx-2' />
                                Thanks for your message – I&apos;m looking forward to chatting with you!
                            </div>
                        )
                    }
                    {
                        wasSubmitted && !wasSentSuccessfully && (
                            <div className='failure flex mr-auto'>
                                <ExclamationTriangleIcon className='text-white mx-2' />
                                Oops! Something went wrong. Please try again later.
                            </div>
                        )
                    }
                    <button type='submit' className='container flex items-center w-fit gap-2 p-3 rounded-2xl group' disabled={isDisabled}>
                        <PaperPlaneIcon className='transition-transform duration-200 group-hover:-rotate-12' />
                        Send
                    </button>
                </div>
            </form>
            <p className='mb-8 text-lg'>
                Or contact me through...
            </p>
            <div className='flex sm:flex-col md:flex-row gap-8'>
                <NavButton icon={<EnvelopeClosedIcon />} hoverIcon={<EnvelopeOpenIcon />} title='Email' href='mailto:ryan.garfinkel@gmail.com' />
                <NavButton icon={<LinkedInLogoIcon className='text-[#0077b5]' />} title='LinkedIn' href='https://www.linkedin.com/in/ryan-garfinkel/' />
                <NavButton icon={<GitHubLogoIcon />} title='GitHub' href='https://github.com/RyanGarfinkel' />
            </div>
        </div>
    );
};

export default Contact;
