import { useEffect, useState } from 'react';

const Resume = () => {
    
    const [url, setUrl] = useState('');

    useEffect(() => {
        const fetchResumeUrl = async () => {
            try {
                const response = await fetch('/api/fetch-resume');
                const data = await response.json();

                setUrl(data.url);
            } catch (error) {
                console.error('Error fetching resume URL:', error);
            }
        };

        fetchResumeUrl();
    }, []);

    return (
        <div>
            {
                url ? (
                    <iframe allowFullScreen src={url} className='absolute top-0 left-0 w-full h-screen'/>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    )
};

export default Resume;