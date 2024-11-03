interface Project {
    title: string;
    start: string;
    end?: string;
    pretext: string;
    p1: string;
    p2: string;
    techStack: string[];
    imgUrl: string[];
    gitHub: string;
    devpost?: string;
}

const projectData: Project[] = [
    {
        title: 'Overcharged',
        start: 'Oct. 2024',
        pretext: 'Overcharged is a game promoting energy sustainability by challenging players to reduce electricity bills. Built in 36 hours, it won 3rd place in the Next Era challenge at Knight Hacks VII. I developed user login, signup, and leaderboard features with MongoDB.',
        p1: 'Overcharged is a game designed to promote energy sustainability. In this fast-paced game, players dash around their home, turning off the electronics to avoid a costly electricity bill. Players can also view a leaderboard to track top scores. Overcharged was developed in just 36 hours during the Knight Hacks VII hackathon at UCF. I\’m incredibly proud of the work my team and I put into this project, and we were thrilled to place 3rd in the Next Era: Energy Sustainability Challenge!',
        p2: 'Though I had limited prior experience with Unity, I embraced the learning curve, picking up essential skills like creating game objects, designing scenes, and incorporating assets. With my background in backend development, I wrote scripts to connect and communicate with our MongoDB database, which I used to make the login, signup, and leaderboard pages. I learned a lot from my teammates who had more Unity experience, making it a rewarding and educational experience.',
        techStack: ['Unity', 'C#', 'MongoDB'],
        imgUrl: ['./assets/overcharged1.png', './assets/overcharged2.png', './assets/overcharged3.png', './assets/overcharged4.png'],
        gitHub: 'https://github.com/KnightHacksOvercharged/Overcharged',
        devpost: 'https://devpost.com/software/overcharged',
    },
    {
        title: 'Cohab',
        start: 'Feb. 2024',
        end: 'Apr. 2024',
        pretext: 'CoHab is a roommate communication app with features like a shared calendar, group chat, and task dashboard. I developed backend functionality, adding CRUD operations, JWT authentication, and real-time updates. This experience expanded my backend skills for future projects.',
        p1: 'CoHab is a web and mobile app designed to streamline communication for roommates, featuring a calendar, group chat, real-time location sharing, task list, and a dashboard for recent messages, tasks, and events. Cohab was developed during my Spring 2024 Processes for Object Oriented Software Development class and was hosted on Heroku.',
        p2: 'As one of the backend developers, I created endpoints to perform CRUD operations on users and roommate groups, implemented JSON Web Tokens (JWTs) to authenticate user requests, configured Socket.io for real time communication, and set up Nodemailer to send verification codes to users. This was my first experience working with these libraries, broadening my understanding of backend capabilities I can incorporate in future projects.',
        techStack: ['Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
        imgUrl: ['./assets/cohab1.gif', './assets/cohab2.mp4'],
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
        imgUrl: ['./assets/contact-manager.png'],
        gitHub: 'https://github.com/happysnail2357/Contact-Manager-Website',
    }
];

export type { Project };
export default projectData;