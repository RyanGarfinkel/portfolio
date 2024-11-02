interface Project {
    title: string;
    start: string;
    end?: string;
    pretext: string;
    p1: string;
    p2: string;
    techStack: string[];
    imgUrl: string;
    gitHub: string;
    devpost?: string;
}

const projectData: Project[] = [
    {
        title: 'Overcharged',
        start: 'Oct. 2024',
        pretext: 'Overcharged is a game promoting energy sustainability by challenging players to reduce electricity bills. Built in 36 hours, it won 3rd place at Knight Hacks VII. I developed user login, signup, and leaderboard features with MongoDB.',
        p1: 'Overcharged is a game designed to promote energy sustainability. In this fast-paced game, players dash around their home, turning off the electronics to avoid a costly electricity bill. Players can also view a leaderboard to track top scores. Overcharged was developed in just 36 hours during the Knight Hacks VII hackathon at UCF. I\’m incredibly proud of the work my team and I put into this project, and we were thrilled to place 3rd in the Next Era: Energy Sustainability Challenge!',
        p2: 'Though I had limited prior experience with Unity, I embraced the learning curve, picking up essential skills like creating game objects, designing scenes, and incorporating assets. With my background in backend development, I wrote scripts to connect and communicate with our MongoDB database, which I used to make the login, signup, and leaderboard pages. I learned a lot from my teammates who had more Unity experience, making it a rewarding and educational experience.',
        techStack: ['Unity', 'C#', 'MongoDB'],
        imgUrl: './assets/overcharged.png',
        gitHub: 'https://github.com/KnightHacksOvercharged/Overcharged',
        devpost: 'https://devpost.com/software/overcharged',
    },
    {
        title: 'Cohab',
        start: 'Feb. 2024',
        end: 'Apr. 2024',
        pretext: '',
        p1: 'CoHab is a web and mobile app designed to help facilitate communication between roommates. Some features include a calendar, group chat, real-time location sharing, task list, and dashboard to display recent messages, tasks, and upcoming events. This project was developed for my Processes for Object Oriented Software Development class during the Spring 2024 semester and hosted on Heroku.',
        p2: 'I worked on the backend of this application. In addition to making endpoints that performed CRUD operations on the users and roommate groups, I utilized Json Web Tokens to authenticate user requests, configured Socket.io to enable real time communication between roommates, and setup node mailer to email verification codes to users.',
        techStack: ['Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
        imgUrl: './assets/cohab.gif',
        gitHub: 'https://github.com/PG-002/CoHab',
    },
    {
        title: 'Contact Manager',
        start: 'Jan. 2024',
        end: 'Feb. 2024',
        pretext: '',
        p1: 'This was a project for my Processes for Object Oriented Software Development class during the Spring 2024 semester. My team and I worked together to create a web app that could add, update, or delete a user’s contacts. We hosted our application on Digital Ocean, and our data in a MySQL database. I worked on the backend of this web app in PHP, creating endpoints to fetch data, login, signup, and maintain data.',
        p2: '',
        techStack: ['PHP', 'MySQL'],
        imgUrl: './assets/contact-manager.png',
        gitHub: 'https://github.com/happysnail2357/Contact-Manager-Website',
    }
];

export type { Project };
export default projectData;