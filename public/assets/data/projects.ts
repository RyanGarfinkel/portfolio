
interface Project {
    title: string;
    date: string;
    oneLiner: string;
    desc: string[];
    baseImgUrl: string;
    imageUrls: string[];
    tags: string[];
    gitHub: string;
    devpost?: string;
}

const projects: Project[] = [
    {
        title: 'Digit Recognizer',
        date: 'Nov. 2024',
        oneLiner: 'Deep learning project that classifies handwritten digits using a CNN with live prediction.',
        desc: [
            ''
        ],
        baseImgUrl: '/assets/images/',
        imageUrls: ['digit-recognizer.gif'],
        tags: ['ML', 'TensorFlow', 'Python', 'sklearn'],
        gitHub: 'https://github.com/RyanGarfinkel/DigitRecognizer'
    },
    {
        title: 'Overcharged',
        date: 'Oct. 2024',
        oneLiner: 'Unity game that promotes energy sustainability through competitive and engaging gameplay.',
        desc: [
            'Overcharged is a game designed to promote energy sustainability. In this fast-paced game, players dash around their home, turning off the electronics to avoid a costly electricity bill. Players can also view a leaderboard to track top scores. Overcharged was developed in just 36 hours during the Knight Hacks VII hackathon at UCF. I\’m incredibly proud of the work my team and I put into this project, and we were thrilled to place 3rd in the Next Era: Energy Sustainability Challenge!',
            'Though I had limited prior experience with Unity, I embraced the learning curve, picking up essential skills like creating game objects, designing scenes, and incorporating assets. With my background in backend development, I wrote scripts to connect and communicate with our MongoDB database, which I used to make the login, signup, and leaderboard pages. I learned a lot from my teammates who had more Unity experience, making it a rewarding and educational experience.',
        ],
        baseImgUrl: '/assets/images/overcharged/',
        imageUrls: ['1.png', '2.png', '3.png', '4.png'],
        tags: ['Unity', 'MongoDB', 'Hackathon'],
        gitHub: 'https://github.com/KnightHacksOvercharged/Overcharged',
        devpost: 'https://devpost.com/software/overcharged',
    },
    {
        title: 'Cohab',
        date: 'Feb. 2024 - Apr. 2024',
        oneLiner: 'Web app that streamlines communication and task management for roommates.',
        desc: [
            'Cohab is a web and mobile app designed to streamline communication for roommates, featuring a calendar, group chat, real-time location sharing, task list, and a dashboard for recent messages, tasks, and events. Cohab was developed during my Spring 2024 Processes for Object-Oriented Software Development class and was hosted on Heroku.',
            'As one of the backend developers, I created endpoints to perform CRUD operations on users and roommate groups, implemented JSON Web Tokens (JWTs) to authenticate user requests, configured Socket.io for real time communication, and set up Nodemailer to send verification codes to users. This was my first experience working with these libraries, broadening my understanding of backend capabilities I can incorporate in future projects.',
        ],
        baseImgUrl: '/assets/images/cohab/',
        imageUrls: ['1.gif', '2.mp4'],
        tags: ['Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
        gitHub: 'https://github.com/PG-002/CoHab',
    },
    {
        title: 'Contact Manager',
        date: 'Jan. 2024 - Feb. 2024',
        oneLiner: 'Web app to add, edit, and delete your contacts\' details through an accessible user interface.',
        desc: [
            'This contact manager was developed during my Spring 2024 Processes for Object-Oriented Software Development class. It allows users to store contact details, including names, emails, phone numbers, emojis, addresses, ages, birthdays, and was hosted on Digital Ocean.',
            'As one of the backend developers, I created API endpoints to perform CRUD operations on users and their contacts, working closely with the frontend and database teams to ensure smooth communication across components.',
        ],
        baseImgUrl: '/assets/images/',
        imageUrls: ['contact-manager.png'],
        tags: ['PHP', 'MySQL', 'Digital Ocean'],
        gitHub: 'https://github.com/happysnail2357/Contact-Manager-Website',
    },
    {
        title: 'Portfolio',
        date: 'Sep. 2024 - Present',
        oneLiner: 'Web app to showcase my projects, experience, and resume (the website you are on now!).',
        desc: [
            'My personal website highlights my skills and experiences by detailing my work history and showcasing my projects.  I focused on creating a user-friendly layout for easy navigation. Built with Next.js and styled with TailwindCSS, the site is responsive and performs seamlessly across devices. Hosted on Vercel, it also integrates libraries including Radix icons, React-Toastify, React-Player, and Nodemailer to enhance UI and functionality.',
            'PS – You’re on the website right now!',
        ],
        baseImgUrl: '/assets/images/',
        imageUrls: ['portfolio.png'],
        tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
        gitHub: 'https://github.com/RyanGarfinkel/portfolio',    
    }
];

export type { Project };
export default projects;