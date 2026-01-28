
interface Project {
    id: string;
    title: string;
    date: string;
    oneLiner: string;
    desc: string[];
    baseImgUrl: string;
    imageUrls: string[];
    tags: string[];
    gitHub: string;
    devpost?: string;
    liveDemo?: string;
    symbol: string;
    gradientFrom: string;
    gradientTo: string;
};

const projects: Project[] = [
    {
        id: 'pee',
        title: 'Performance Evaluation Engine',
        date: 'Oct. 20266',
        oneLiner: 'Clash Royale/GitHub tool to evaluate performance for busy software developers.',
        desc: [
            'Built performance scoring engine during KnightHacks VIII to rank GitHub commits with Clash Royale performance.',
            'Used Google Gemini and Clash Royale API to analyze gameplay and generate personalized deck optimizations.',
            'Integrated GitHub OAuth for secure user access and data retrieval.',
        ],
        baseImgUrl: '/assets/pee/',
        imageUrls: ['1.jpg', 'https://www.youtube.com/watch?v=MKeivAWZeEQ', '2.jpg', '3.jpg'],
        tags: ['Next.js', 'Vercel', 'React', 'Google Gemini'],
        gitHub: 'https://github.com/Jpw306/Performance-Evaluation-Engine',
        devpost: 'https://devpost.com/software/performance-evaluation-engine',
        symbol: '👑',
        gradientFrom: 'from-red-400',
        gradientTo: 'to-yellow-500',
    },
    {
        id: 'devtutor',
        title: 'DevTutor',
        date: 'June 2025',
        oneLiner: 'AI-powered coding tutor that provides personalized learning experiences and real-time feedback.',
        desc: [
            'Built AI tool in 12h at GemiKnights hackathon to teach devtools through interactive conversations.',
            'Integrated ReadableStream for real-time feedback, improving response speed and perceived interactivity.',
            'Improved explanation progression through iterative prompt engineering for better user understanding.',
            'Designed React Context to manage state and data flow across 4 pages, reducing prop drilling.',
        ],
        baseImgUrl: '/assets/devtutor/',
        imageUrls: ['1.png', '2.png', '3.png', '4.png'],
        tags: ['React', 'Next.js', 'Vercel', 'Google Gemini'],
        gitHub: 'https://github.com/RyanGarfinkel/DevTutor',
        devpost: 'https://devpost.com/software/devtutor-6rjthv',
        liveDemo: 'https://dev-tutor-ten.vercel.app/login',
        symbol: '🤖',
        gradientFrom: 'from-blue-400',
        gradientTo: 'to-purple-500',
    },
    {
        id: 'bridgly',
        title: 'Bridgly',
        date: 'April 2025',
        oneLiner: 'AI-powered college readiness training module that helps students prepare for college life.',
        desc: [
            'Built a full-stack app at HackDartmouth X to onboard university students with tailored courses to improve engagement.',
            'Implemented secure authentication using Auth0 with email/password and Google OAuth login, protecting user data.',
            'Finetuned Gemini prompts to reduce irrelevant responses by 30%, improving course quality.',
        ],
        baseImgUrl: '/assets/bridgly/',
        imageUrls: ['1.png', '2.png', '3.png', '4.png'],
        tags: ['React', 'Next.js', 'Vercel', 'Google Gemini'],
        gitHub: 'https://github.com/RyanGarfinkel/Bridgly',
        devpost: 'https://devpost.com/software/bridgly-ai-powered-college-readiness-training-module',
        symbol: '🎓',
        gradientFrom: 'from-teal-400',
        gradientTo: 'to-blue-500',
    },
    {
        id: 'digit-recognizer',
        title: 'Digit Recognizer',
        date: 'Nov. 2024',
        oneLiner: 'Deep learning project that classifies handwritten digits using a CNN with live prediction.',
        desc: [
            'Developed ML model using Tensorflow and Keras to recognize handwritten digits with 98% accuracy.',
            'Integrated real-time digit recognition in Pygame, providing an interactive demonstration of the model.',
            'Evaluated model performance with scikit-learn, showcasing the model’s accuracy and precision.',
        ],
        baseImgUrl: '/assets/digit-recognizer/',
        imageUrls: ['1.gif'],
        tags: ['TensorFlow', 'Python', 'ScikitLearn'],
        gitHub: 'https://github.com/RyanGarfinkel/DigitRecognizer',
        symbol: '🧠',
        gradientFrom: 'from-green-400',
        gradientTo: 'to-blue-500'
    },
    {
        id: 'overcharged',
        title: 'Overcharged',
        date: 'Oct. 2024',
        oneLiner: 'A Unity game promoting energy sustainability. Players dash around turning off electronics to avoid costly bills. Placed 3rd in Knight Hacks VII!',
        desc: [
            'Won 3rd Place in the Next Era: Energy Efficiency Challenge at Knight Hacks VII.',
            'Built login and leaderboard pages to enhance user engagement and promote competitive gameplay.',
            'Designed 4 endpoints in C# to facilitate data storage and retrieval between Unity and MongoDB.',
        ],
        baseImgUrl: '/assets/overcharged/',
        imageUrls: ['1.png', '2.png', '3.png', '4.png'],
        tags: ['Unity', 'MongoDB', 'C#'],
        gitHub: 'https://github.com/KnightHacksOvercharged/Overcharged',
        devpost: 'https://devpost.com/software/overcharged',
        symbol: '⚡',
        gradientFrom: 'from-yellow-400',
        gradientTo: 'to-orange-500'
    },
    {
        id: 'cohab',
        title: 'Cohab',
        date: 'Feb. 2024 - Apr. 2024',
        oneLiner: 'Web app that streamlines communication and task management for roommates.',
        desc: [
            'Developed instant messaging feature with Socket.io, enabling real-time conversations between users.',
            'Built RESTful API endpoints in Express for authenticating user requests and managing data.',
            'Implemented email verification with Nodemailer to improve signup security.',
        ],
        baseImgUrl: '/assets/cohab/',
        imageUrls: ['1.gif', '2.mp4'],
        tags: ['Node.js', 'React', 'Express.js', 'Socket.io', 'MongoDB'],
        gitHub: 'https://github.com/PG-002/CoHab',
        symbol: '🏠',
        gradientFrom: 'from-blue-400',
        gradientTo: 'to-purple-500'
    },
    {
        id: 'contact-manager',
        title: 'Contact Manager',
        date: 'Jan. 2024 - Feb. 2024',
        oneLiner: 'Web app to add, edit, and delete your contacts\' details through an accessible user interface.',
        desc: [
            'This contact manager was developed during my Spring 2024 Processes for Object-Oriented Software Development class. It allows users to store contact details, including names, emails, phone numbers, emojis, addresses, ages, birthdays, and was hosted on Digital Ocean.',
            'As one of the backend developers, I created API endpoints to perform CRUD operations on users and their contacts, working closely with the frontend and database teams to ensure smooth communication across components.',
        ],
        baseImgUrl: '/assets/contact-manager/',
        imageUrls: ['1.png'],
        tags: ['PHP', 'MySQL', 'Digital Ocean'],
        gitHub: 'https://github.com/happysnail2357/Contact-Manager-Website',
        symbol: '📋',
        gradientFrom: 'from-purple-400',
        gradientTo: 'to-pink-500'
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        date: 'Sep. 2024 - Present',
        oneLiner: 'Web app to showcase my projects, experience, and resume (the website you are on now!).',
        desc: [
            'My personal website highlights my skills and experiences by detailing my work history and showcasing my projects.  I focused on creating a user-friendly layout for easy navigation. Built with Next.js and styled with TailwindCSS, the site is responsive and performs seamlessly across devices. Hosted on Vercel, it also integrates libraries including Radix icons, React-Toastify, React-Player, and Nodemailer to enhance UI and functionality.',
            'PS – You’re on the website right now!',
        ],
        baseImgUrl: '/assets/portfolio/',
        imageUrls: ['1.png', '2.png'],
        tags: ['Next.js', 'TailwindCSS', 'Vercel'],
        gitHub: 'https://github.com/RyanGarfinkel/portfolio',
        symbol: '💼',
        gradientFrom: 'from-indigo-400',
        gradientTo: 'to-cyan-500'
    }
];

export type { Project };
export default projects;