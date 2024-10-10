interface Job {
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    preDescription?: string;
    description?: string[];
    postDescription?: string;
}

const jobHistory: Job[] = [
    {
        position: 'Undergraduate Learning Assistant',
        company: 'University of Central Florida',
        location: 'Orlando, Florida',
        startDate: 'Aug. 2024',
        postDescription: 'So far during the Fall 2024 semester, I\'ve been held multiple office hours each week to address student inquiries, with debuggina being a common topic. I\'ve been able to quickly understand unfamilair code and guide student towards the changes they need to make.'
    },
    {
        position: 'IT Intern',
        company: 'Vertical Bridge',
        location: 'Boca Raton, Florida',
        startDate: 'June 2024',
        endDate: 'Aug. 2024',
        preDescription: 'During my second summer at Vertical Bridge, I had the chance to enhance my frontend skills. It was my first time working with a large, pre-existing codebase, which initially posed a challenge as I struggled to understand the architecture. However, with guidance from my team, I developed techniques for navigating large codebases to make the necessary changes. Over the course of the summer, I:',
        description: [
            'Developed a page to display site metrics, utilizing the PrimeNG component library and Google Maps API to enhance data visualization for other employees, aimed to support decision making.',
            'Made multiple UI edits across multiple pages to improve user experience and ensure consistency.',
            'Created a POC for generating PDFs in C# using QuestPDF, intended for marking sites.',
        ],
        postDescription: 'Throughout the summer, I worked extensively with Angular, HTML, CSS, and TypeScript, and I also gained significant experience with component libraries, particularly PrimeNG.',
    },
    {
        position: 'Undergraduate Learning Assistant',
        company: 'University of Central Florida',
        location: 'Orlando, Florida',
        startDate: 'Aug. 2023',
        endDate: 'April 2024',
        preDescription: 'I was an Undergraduate Learning Assistant (ULA) for UCF\'s Department of Engineering and Computer Science during the Fall 2023 and Spring 2024 semesters. This role provided a unique opportunity for me to practice communicating technical concepts. Notably, I:',
        description: [
            'Mentored over 250 students taking Computer Science I.',
            'Facilitated 3 recitations sessions on Fridays to reinforce course concepts and answer questions.',
            'Conducted 61 private tutoring sessions during the Fall semester and held office hours to address student inquiries.',
        ],
        postDescription: 'Throughout my time, I connected with students and helped guide them as they navigated the course.',
    },
    {
        position: 'IT Intern',
        company: 'Vertical Bridge',
        location: 'Boca Raton, Florida',
        startDate: 'June 2023',
        endDate: 'Aug. 2023',
        preDescription: 'This was my first internship experience, and it was great! I was introduced to the software development life cycle and actively engaged in it. I completed my first full-stack project and, by the end, was introduced to the concept of robotic process automation with UiPath. Notably, I:',
        description: [
            'Recorded input fields from a web application in Excel to initiate a requirements discussion.',
            'Developed a webpage using ASP.NET and a SQL database to project the tower cash flow of various sites.',
            'Created an automation in UiPath to parse and upload daily lockbox deposits into SharePoint.',
        ],
        postDescription: 'Overall, it was an amazing first internship for me! I gained valuable insights into the software development process and received support from a great team.',
    }
];

export default jobHistory;