
interface Job {
    title: string;
    company: string;
    description: string[];
    date: string;
};

const jobs: Job[] = [
    {
        title: 'Software Engineering Intern',
        company: 'Precisely',
        description: [
            'Collaborated with UX team during stand-ups and sprint planning to ensure component accuracy across design system.',
            'Reduced Chromatic false positives by mocking dates and adding Storybook delays, eliminating inconsistent snapshots.',
            'Enhanced accessibility in 5+ components by refining SCSS focus states for keyboard navigation and contrast.',
        ],
        date: 'June 2025 - August 2025',
    },
    {
        title: 'IT Intern',
        company: 'Vertical Bridge',
        description: [
            'Developed dashboard with Angular to visualize 6+ site metrics, aiding leadership in data-driven decision-making.',
            'Built dynamic one-pager generation tool in C# using QuestPDF, producing detailed site summaries for marketing.',
            'Standardized components and improved UI with SCSS, enhancing consistency and usability across 7+ pages.',
        ],
        date: 'June 2024 - August 2024',
    },
    {
        title: 'Undergraduate Learning Assistant',
        company: 'UCF',
        description: [
            'Mentored 750+ CS1 students, teaching foundational data structures and algorithms concepts in C.',
            'Facilitated weekly recitations and office hours to review problem sets, improving understanding of course materials.',
            'Led 61 individual tutoring sessions to address student challenges, resulting in improved performance on exams.',
        ],
        date: 'Fall 2023 - Present',
    },
    {
        title: 'IT Intern',
        company: 'Vertical Bridge',
        description: [
            'Automated transaction document uploads to SharePoint with UiPath, reducing 2+ hours of daily manual processing.',
            'Developed Angular and C# webpage to pull site data from Azure SQL and project tower cash flow.',
            'Documented 20+ UI input fields in Excel, aiding in stakeholder requirements gathering.',
        ],
        date: 'June 2023 - August 2023',
    },
];

export type { Job };
export default jobs;
