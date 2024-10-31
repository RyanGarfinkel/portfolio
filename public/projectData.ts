interface Project {
    title: string;
    start: string;
    end?: string;
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
        p1: 'Overcharged is a game designed to bring awareness to the cost of electricity. This project was made during Knight Hacks VII and submitted to the Next Era: Energy Sustainability Challenge, where my team and I won 3rd place. Inspired by the game Overcooked, users are tasked to reduce their electricity bill by turning off the lights.',
        p2: 'We only had 36 hours to complete this project. We used Unity to make the game and MongoDB to store our users’ login data and best score. I only had one prior experience with Unity, so this was a huge learning experience for me. Luckily one of my teammates had a lot of prior experience and I was able to learn a lot from him. On this project, I was successfully able to make the login, signup, and leaderboard pages, as well as set up communication with MongoDB.',
        techStack: ['Unity', 'C#', 'MongoDB'],
        imgUrl: './assets/overcharged.png',
        gitHub: 'https://github.com/KnightHacksOvercharged/Overcharged',
        devpost: 'https://devpost.com/software/overcharged',
    },
    {
        title: 'Cohab',
        start: 'Feb. 2024',
        end: 'Apr. 2024',
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
        p1: 'This was a project for my Processes for Object Oriented Software Development class during the Spring 2024 semester. My team and I worked together to create a web app that could add, update, or delete a user’s contacts. We hosted our application on Digital Ocean, and our data in a MySQL database. I worked on the backend of this web app in PHP, creating endpoints to fetch data, login, signup, and maintain data.',
        p2: '',
        techStack: ['PHP', 'MySQL'],
        imgUrl: './assets/contact-manager.png',
        gitHub: 'https://github.com/happysnail2357/Contact-Manager-Website',
    }
];

export type { Project };
export default projectData;