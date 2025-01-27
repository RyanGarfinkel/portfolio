import { useState } from 'react';

const Resume = () => {
    
    const [url, setUrl] = useState('');

    const fetchResumeUrl = async () => {
        
        const response = await fetch('/api/fetch-resume')
            .catch(() => null);

        if(!response)
            return;

        const data = await response.json()
            .catch(() => null);

        if(!data)
            return;

        setUrl(data.url);
    }

    fetchResumeUrl();

    return (
        <div>
            {
                url ? (
                    <iframe allowFullScreen src={url} className='absolute top-0 left-0 w-full h-screen'/>
                ) : (
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        Fetching Resume...
                    </div>
                )
            }
        </div>
    )
};

export default Resume;