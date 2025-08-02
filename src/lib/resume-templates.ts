
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
    },
    {
        id: 'modern-creative',
        name: 'Modern Creative',
        description: 'A stylish, modern template for creative professionals in fields like design and marketing.',
        thumbnailUrl: 'https://placehold.co/300x400.png',
        content: {
            header: {
                name: "Jamie Creative",
                contact: {
                    phone: "555-123-4567",
                    email: "jamie@design.co",
                    linkedin: "linkedin.com/in/jamiecreative"
                }
            },
            summary: "Innovative and detail-oriented Graphic Designer with 5+ years of experience in creating compelling visual identities and marketing materials. Passionate about user-centered design and brand storytelling.",
            experience: [
                {
                    title: "Lead UI/UX Designer",
                    company: "Pixel Perfect Agency",
                    date: "May 2021 - Present",
                    responsibilities: [
                        "Lead the design of responsive websites and mobile apps from concept to launch.",
                        "Conduct user research and usability testing to inform design decisions.",
                        "Collaborate with developers to ensure faithful implementation of designs.",
                    ]
                },
                {
                    title: "Graphic Designer",
                    company: "Artvertise Ltd.",
                    date: "Jul 2018 - Apr 2021",
                    responsibilities: [
                        "Designed logos, brochures, and social media graphics for a variety of clients.",
                        "Maintained brand consistency across all marketing materials.",
                        "Worked closely with the marketing team to develop campaign visuals.",
                    ]
                }
            ],
            education: [
                {
                    school: "Design Institute of Arts",
                    degree: "Bachelor of Fine Arts in Graphic Design",
                    date: "2014 - 2018"
                }
            ],
            skills: ["Adobe Creative Suite (Photoshop, Illustrator, InDesign)", "Figma", "Sketch", "UI/UX Design", "Typography", "Brand Identity", "Prototyping"]
        }
    },
    {
        id: 'minimalist-clean',
        name: 'Minimalist Clean',
        description: 'A simple, elegant, and scannable template that focuses on the content.',
        thumbnailUrl: 'https://placehold.co/300x400.png',
        content: {
            header: {
                name: "Sam Minimalist",
                contact: {
                    phone: "987-654-3210",
                    email: "sam.minimalist@me.com",
                    linkedin: "linkedin.com/in/samminimalist"
                }
            },
            summary: "A highly organized and efficient administrative professional with extensive experience in office management and executive support. Excels at streamlining processes and improving workflow.",
            experience: [
                {
                    title: "Executive Assistant",
                    company: "Global Corp.",
                    date: "2019 - Present",
                    responsibilities: [
                        "Provide high-level administrative support to the CEO and executive team.",
                        "Manage complex calendars, travel arrangements, and expense reports.",
                        "Prepare correspondence, presentations, and reports.",
                    ]
                }
            ],
            education: [
                {
                    school: "Community College",
                    degree: "Associate of Arts in Business Administration",
                    date: "2017 - 2019"
                }
            ],
            skills: ["Microsoft Office Suite", "Google Workspace", "Calendar Management", "Event Coordination", "Travel Arrangements", "Confidentiality", "Communication"]
        }
    },
    {
        id: 'technical-it',
        name: 'Technical IT',
        description: 'A structured template perfect for software developers, engineers, and IT professionals.',
        thumbnailUrl: 'https://placehold.co/300x400.png',
        content: {
            header: {
                name: "Chris Tech",
                contact: {
                    phone: "222-333-4444",
                    email: "chris.tech@dev.io",
                    linkedin: "linkedin.com/in/christech"
                }
            },
            summary: "Full Stack Developer with a passion for building scalable and efficient web applications. Proficient in JavaScript, React, Node.js, and cloud technologies. Eager to contribute to a collaborative and innovative team.",
            experience: [
                {
                    title: "Software Engineer",
                    company: "Code Wizards",
                    date: "Aug 2020 - Present",
                    responsibilities: [
                        "Develop and maintain RESTful APIs using Node.js and Express.",
                        "Build and optimize responsive user interfaces with React and Redux.",
                        "Deploy applications to AWS using Docker and CI/CD pipelines.",
                    ]
                },
                {
                    title: "Junior Developer",
                    company: "StartUp Solutions",
                    date: "Jan 2019 - Jul 2020",
                    responsibilities: [
                        "Assisted in the development of a new e-commerce platform.",
                        "Wrote unit tests and integration tests with Jest and React Testing Library.",
                        "Fixed bugs and implemented new features based on user feedback.",
                    ]
                }
            ],
            education: [
                {
                    school: "Tech University",
                    degree: "Bachelor of Science in Computer Science",
                    date: "2015 - 2019"
                }
            ],
            skills: ["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Express", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"]
        }
    },
    {
        id: 'academic-cv',
        name: 'Academic CV',
        description: 'A comprehensive template for academics, researchers, and students, with sections for publications.',
        thumbnailUrl: 'https://placehold.co/300x400.png',
        content: {
            header: {
                name: "Dr. Evelyn Reed",
                contact: {
                    phone: "111-222-3333",
                    email: "e.reed@university.edu",
                    linkedin: "linkedin.com/in/evelynreed"
                }
            },
            summary: "Dedicated and analytical researcher with a Ph.D. in Molecular Biology and a strong publication record. Seeking a post-doctoral research position to investigate cellular signaling pathways.",
            experience: [
                {
                    title: "Graduate Research Assistant",
                    company: "University of Science",
                    date: "Sep 2018 - May 2024",
                    responsibilities: [
                        "Conducted independent research on gene expression in response to environmental stress.",
                        "Authored and co-authored 4 peer-reviewed publications in high-impact journals.",
                        "Presented research findings at 3 international conferences.",
                        "Mentored junior graduate students in laboratory techniques."
                    ]
                }
            ],
            education: [
                {
                    school: "University of Science",
                    degree: "Ph.D. in Molecular Biology",
                    date: "2018 - 2024"
                },
                {
                    school: "State College",
                    degree: "Bachelor of Science in Biology",
                    date: "2014 - 2018"
                }
            ],
            skills: ["PCR", "Western Blotting", "CRISPR-Cas9", "Confocal Microscopy", "R", "Python (Pandas, Matplotlib)", "Scientific Writing", "Grant Proposal Writing"]
        }
    }
];
