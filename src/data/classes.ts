interface Course {
    prefix: string;
    name: string;
};

interface Semester {
    semester: string;
    courses: Course[];
    isCurrent?: boolean;
};

const courseHistory: Semester[] = [
    {
        semester: 'Fall 2025',
        courses: [
            {
                prefix: 'COP 4934',
                name: 'Senior Design I',
            },
            {
                prefix: 'CAP 5610',
                name: 'Machine Learning',
            },
            {
                prefix: 'ISC 4241',
                name: 'Data Science I',
            },
            {
                prefix: 'STA 4364',
                name: 'Statistical Foundations of Data Science and AI I',
            },
            {
                prefix: 'COP 4903H',
                name: 'Honors Directed Reading I',
            },
            {
                prefix: 'EGS 3030',
                name: 'Engineering Leadership I',
            },
        ],
        isCurrent: true,
    },
    {
        semester: 'Summer 2025',
        courses: [
            {
                prefix: 'CNT 4603',
                name: 'System Administration',
            },
        ],
    },
    {
        semester: 'Spring 2025',
        courses: [
            {
                prefix: 'CAP 5115',
                name: 'VR Engineering',
            },
            {
                prefix: 'CNT 4714',
                name: 'Enterprise Computing',
            },
            {
                prefix: 'COP 4020',
                name: 'Programming Languages',
            },
            {
                prefix: 'BSC 2011C',
                name: 'Biology II',
            },
            {
                prefix: 'EGS 3031',
                name: 'Engineering Leadership II',
            },
        ],
    },
    {
        semester: 'Fall 2024',
        courses: [
            {
                prefix: 'CEN 5016',
                name: 'Software Engineering',
            },
            {
                prefix: 'CAP 4611',
                name: 'Algorithms for ML',
            },
            {
                prefix: 'COT 4210',
                name: 'Discrete Structures II',
            },
            {
                prefix: 'BSC 2010C',
                name: 'Biology I',
            },
            {
                prefix: 'EGS 3030',
                name: 'Engineering Leadership I',
            },
        ],
    },
    {
        semester: 'Summer 2024',
        courses: [
            {
                prefix: 'ENC 3241',
                name: 'Writing for the Technical Professional',
            },
            {
                prefix: 'THE 2000',
                name: 'Theatre Survey',
            },
        ],
    },
    {
        semester: 'Spring 2024',
        courses: [
            {
                prefix: 'COP 4331C',
                name: 'Processes for Object Oriented Software Development',
            },
            {
                prefix: 'COP 3402',
                name: 'Systems Software',
            },
            {
                prefix: 'CIS 3360',
                name: 'Security in Computing',
            },
            {
                prefix: 'PHY 2049',
                name: 'Physics II with Calculus',
            },
            {
                prefix: 'AMH 2010',
                name: 'US History: 1492-1877',
            },
        ],
    },
    {
        semester: 'Fall 2023',
        courses: [
            {
                prefix: 'COP 3502C',
                name: 'Computer Science II',
            },
            {
                prefix: 'MAS 3105',
                name: 'Matrix and Linear Algebra',
            },
            {
                prefix: 'PHY 2048C',
                name: 'Physics I with Calculus',
            },
            {
                prefix: 'EGS 3030',
                name: 'Engineering Leadership I',
            },
            {
                prefix: 'FIL 1000',
                name: 'Cinema Survey',
            },
        ],
    },
    {
        semester: 'Summer 2023',
        courses: [
            {
                prefix: 'AMH 2020',
                name: 'US History 1877-Present',
            },
            {
                prefix: 'SYG 2000',
                name: 'Introduction to Sociology',
            },
        ],
    },
    {
        semester: 'Spring 2023',
        courses: [
            {
                prefix: 'COP 3330',
                name: 'Object Oriented Programming',
            },
            {
                prefix: 'COP 3502C',
                name: 'Computer Science I',
            },
            {
                prefix: 'COT 3100C',
                name: 'Intro to Discrete Structures',
            },
            {
                prefix: 'EGS 3031',
                name: 'Engineering Leadership II',
            },
            {
                prefix: 'ENC 1102',
                name: 'Composition II',
            },
        ],
    },
    {
        semester: 'Fall 2022',
        courses: [
            {
                prefix: 'COP 3223C',
                name: 'Intro to Programming with C',
            },
            {
                prefix: 'MAC 2313',
                name: 'Calculus with Analytical Geometry III',
            },
            {
                prefix: 'EGS 3030',
                name: 'Engineering Leadership I',
            },
            {
                prefix: 'SPC 1603C',
                name: 'Fundamentals of Technical Presentations',
            },
            {
                prefix: 'ENC 1101',
                name: 'Composition I'
            },
        ],
    },
];

export type { Course, Semester };
export default courseHistory;