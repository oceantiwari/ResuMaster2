

export interface ResumeTemplateContent {
    header: {
        name: string;
        contact: {
            phone: string;
            email: string;
            linkedin: string;
        }
    },
    summary: string;
    experience: {
        title: string;
        company: string;
        date: string;
        responsibilities: string[];
    }[];
    education: {
        school: string;
        degree: string;
        date: string;
    }[];
    skills: string[];
}


export interface ResumeTemplate {
    id: string;
    name: string;
    description: string;
    thumbnailUrl: string;
    content: ResumeTemplateContent
}


export const templates: ResumeTemplate[] = [
    {
        id: 'classic-professional',
        name: 'Classic Professional',
        description: 'A timeless, clean, and professional layout suitable for any industry.',
        thumbnailUrl: 'https://placehold.co/300x400.png',
        content: {
            header: {
                name: "Alex Doe",
                contact: {
                    phone: "123-456-7890",
                    email: "alex.doe@email.com",
                    linkedin: "linkedin.com/in/alexdoe"
                }
            },
            summary: "Experienced and results-oriented professional with a proven track record of success in project management and team leadership. Seeking to leverage skills in a challenging new role.",
            experience: [
                {
                    title: "Senior Project Manager",
                    company: "Innovate Inc.",
                    date: "Jan 2020 - Present",
                    responsibilities: [
                        "Led cross-functional teams to deliver complex projects on time and within budget.",
                        "Developed and managed project timelines, resources, and stakeholder communications.",
                        "Implemented new agile methodologies, increasing team productivity by 25%.",
                    ]
                },
                {
                    title: "Project Coordinator",
                    company: "Solutions Corp.",
                    date: "Jun 2017 - Dec 2019",
                    responsibilities: [
                        "Assisted in the planning and execution of multiple enterprise-level projects.",
                        "Coordinated project activities and ensured all tasks were completed as scheduled.",
                        "Prepared and presented project status reports to senior management.",
                    ]
                }
            ],
            education: [
                {
                    school: "State University",
                    degree: "Bachelor of Science in Business Administration",
                    date: "2013 - 2017"
                }
            ],
            skills: ["Project Management", "Agile Methodologies", "Scrum", "JIRA", "Team Leadership", "Budget Management", "Stakeholder Communication"]
        }
    }
];
