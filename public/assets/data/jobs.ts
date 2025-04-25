
interface Job {
    title: string;
    description: string[];
    date: string;
    note?: string;
}

const jobs: Job[] = [
    {
        title: 'Software Engineering Intern',
        description: [
            
        ],
        date: 'Summer 2025',
        note: 'Incoming',
    },
    {
        title: 'IT Intern',
        description: [
            'During my second summer at Vertical Bridge, I had the opportunity to further refine my frontend skills. I worked heavily with Angular and PrimeNG to build a site metrics page and implement various UI enhancements that improved the consistency and user experience across the platform. I also contributed to the backend, where I used the QuestPDF library to generate one-pagers for marketing sites.',
            'One of the initial challenges I faced was navigating a large, pre-existing codebase -- something I don\’t typically encounter in my classes, where projects get built from scratch. By working closely with the team, I developed strategies to understand prewritten code and quickly make changes I was responsible for.',
        ],
        date: 'Summer 2024',
    },
    {
        title: 'Undergraduate Learning Assistant',
        description: [
            'I\'ve been an Undergraduate Learning Assistant (ULA) for UCF\'s College of Engineering and Computer Science for 4 semesters now (Fall 2023, Spring 2024, Fall 2024, and Spring 2025). Each semester I\’ve supported students taking Computer Science I by holding weekly office hours to answer questions and clarify concepts. In some semesters, I\’ve led recitation sessions by walking through practice problems to reinforce key concepts. Additionally, I\’ve helped proctor exams to ensure academic integrity and a smooth testing process.',
            'This role has provided me with valuable experience in two areas that are vital for software engineers: attention to detail and the ability to clearly communicate technical concepts. I often help students debug their code, which requires me to quickly identify the bug and guide them to a solution they can learn from. Over time, this has become easier and has even helped me resolve bugs in my own projects.',
        ],
        date: 'Fall 2023',
        note: 'Ongoing',
    },
    {
        title: 'IT Intern',
        description: [
            'I had a great first internship at Vertical Bridge! I had the opportunity to learn about and engage in various stages of the software development life cycle. I participated in daily standups, collaborated with the team, and observed the types of interactions between IT and other departments in the company.',
            'Over the course of the summer, I drafted a template for requirements discussions in Excel, recording input fields. I also had the chance to work on my first full-stack application (Angular and .NET). I developed a webpage to project the tower cash flow of a given site using data from a SQL database in Azure. In my final few weeks, I learned about Robotic Process Automation (RPA) and worked on a script using UiPath to parse and upload documents into SharePoint, saving team members a few hours of work each morning. This project taught me how to communicate with the customer, ask clarifying questions, and put myself in their shoes to make sure I deliver an impactful solution.',
        ],
        date: 'Summer 2023',
    },
];

export type { Job };
export default jobs;