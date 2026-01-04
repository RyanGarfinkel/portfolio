
interface Job {
    title: string;
    company: string;
    summary: string;
    skills: string[];
    description: string[];
    location: string;
    date: string;
    links?: { label: string; url: string }[];
};

const jobs: Job[] = [
    {
        title: 'Software Engineering Intern',
        company: 'Precisely',
        summary: 'Improved accessibility and component reliability across the DI Suite, working closely with UX to address usability and reduce false positives in regression reviews. Continued into the fall based on impact.',
        skills: ['Node', 'Angular', 'Storybook', 'Chromatic', 'TypeScript', 'SCSS', 'Accessibility'],
        description: [
            'Shipped accessibility improvements across 15+ UI components for keyboard navigation and screen reader support.',
            'Reduced Chromatic false positives by 60% by making Storybook tweaks used in UX regression reviews.',
            'Refined color palettes to meet WCAG standards, ensuring compliance and better readability for users.',
        ],
        location: 'Remote',
        date: 'June 2025 - August 2025',
        links: [
            {
                label: 'Blog Post',
                url: 'https://www.precisely.com/blog/company-culture/a-look-into-preciselys-2025-summer-internship-program/'
            },
            {
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/posts/ryan-garfinkel_preciselyinterns-preciselyproud-softwaredevelopment-activity-7330329334844436481-i7wH/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3_S0gB_Y1xWWxmnr2DBmMG_dzqQBimm_M',
            }
        ]
    },
    {
        title: 'Undergraduate Learning Assistant',
        company: 'UCF',
        summary: 'Served as ULA for 6 semesters, supporting hundreds of students through office hours and recitations for Computer Science I. Reappointed each term based on improved student learning and reliability.',
        skills: ['Mentoring', 'Teaching', 'DSA', 'C'],
        description: [
            'Mentored 750+ CS1 students on data structures and algorithms in C, supporting understanding of core concepts.',
            'Facilitated weekly recitations and office hours, guiding students with debugging, exam prep, and assignments.',
            'Led 61 one-on-one tutoring sessions, resulting in improved performance on exams and boosting confidence.',
        ],
        location: 'Orlando, FL',
        date: 'Fall 2023 - Present',
    },
    {
        title: 'IT Intern',
        company: 'Vertical Bridge',
        summary: 'Returned for a second summer, building internal dashboards and tools used by leadership and marketing teams to streamline decision-making. Developed frontend components to visualize site metrics and standardize UI components, as well as backend components to automate PDF generation.',
        skills: ['Angular', 'C#', 'Azure SQL', 'SharePoint', 'Excel'],
        description: [
            'Engineered Angular dashboard to visualize 6+ site metrics, enabling leadership to make data-driven decisions.',
            'Built dynamic site-summary generator in C# with QuestPDF, accelerating marketing team’s ability to promote sites.',
            'Standardized components and improved UI with SCSS, enhancing consistency and usability across 7+ pages.',
        ],
        location: 'Boca Raton, FL',
        date: 'June 2024 - August 2024',
        links: [
            {
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/posts/vertical-bridge_teamvb-activity-7211005171097579525-20m7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3_S0gB_Y1xWWxmnr2DBmMG_dzqQBimm_M',
            }
        ]
    },
    {
        title: 'IT Intern',
        company: 'Vertical Bridge',
        summary: 'Gained hands-on exposure to the SDLC during my first internship, seeing firsthand how production software is shaped by constraints, requirements, and business needs. Built my first full-stack app and automation scripts to streamline internal data processing.',
        skills: ['UiPath', 'C#', 'Angular', 'Azure SQL', 'SharePoint', 'Excel'],
        description: [
            'Automated transaction document workflow to SharePoint with UiPath, saving 2+ hours of manual processing per day.',
            'Integrated Azure SQL data with Angular and C# webpage to forecast tower cash flow, supporting financial planning.',
            'Documented 20+ UI input fields in Excel, aiding in stakeholder requirements gathering.',
        ],
        location: 'Boca Raton, FL',
        date: 'June 2023 - August 2023',
        links: [
            {
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/posts/vertical-bridge_teamvb-internship-it-activity-7075488903289327617-hPG3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3_S0gB_Y1xWWxmnr2DBmMG_dzqQBimm_M',
            },
        ]
    },
];

export type { Job };
export default jobs;
