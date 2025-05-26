
import type { Icon } from 'lucide-react';
import { CodeXmlIcon, PaletteIcon, BoxesIcon, FeatherIcon, OrbitIcon, NetworkIcon, ServerIcon, PyramidIcon, DatabaseIcon, FileCodeIcon, GitForkIcon, GithubIcon, ContainerIcon, CodeSquareIcon, FigmaIcon, LinkedinIcon, MailIcon, FileJsonIcon, BriefcaseIcon, AwardIcon, GraduationCapIcon, HomeIcon, UsersIcon, StarIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: Icon;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  certificateLink?: string;
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  codeLink: string;
  image?: string;
  aiHint?: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
}

export interface NavItem {
  href: string;
  label: string;
  icon: Icon;
}

export const akuSarmaData = {
  name: "Aku Sarma",
  title: "Full Stack Developer & Data Scientist",
  email: "akusarma1702@gmail.com",
  location: "Assam, India",
  linkedin: "https://www.linkedin.com/in/akusarma/",
  github: "https://www.github.com/AkuSarma",
  phone: "+91 93654 27437",
  about: "Aspiring full-stack developer with expertise in the MERN stack, React, Django, and UI/UX design. Achieved 3rd place in a national hackathon with a book donation web app. Boosted team productivity by 30% as a Software Development Intern at ICM Guwahati. Serving as Cloud Computing Head at GDSC, Assam Downtown University, leading workshops and app development. Ready to bring strong technical skills and teamwork to drive project success.",
  briefAbout: "Driven Full Stack Developer and aspiring Data Scientist proficient in MERN, Django, and UI/UX. Passionate about crafting innovative solutions and leveraging data to achieve impactful results.",
  education: [
    {
      institution: "Assam downtown University",
      degree: "BTech CSE (CTIS)",
      duration: "Nov 2021 - July 2025",
      cgpa: "Current CGPA 8.7",
    },
  ] as EducationItem[],
  skills: [
    {
      title: "Front-end",
      skills: [
        { name: "HTML", icon: CodeXmlIcon },
        { name: "CSS", icon: PaletteIcon },
        { name: "Bootstrap", icon: BoxesIcon },
        { name: "Tailwind CSS", icon: FeatherIcon },
        { name: "React", icon: OrbitIcon },
        { name: "Next.js", icon: NetworkIcon },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Django", icon: PyramidIcon },
        { name: "Express.js", icon: ServerIcon },
        { name: "Next.js", icon: NetworkIcon },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: DatabaseIcon },
        { name: "MySQL", icon: DatabaseIcon },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: FileCodeIcon },
        { name: "JavaScript", icon: FileJsonIcon },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: GitForkIcon },
        { name: "Github", icon: GithubIcon },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Docker", icon: ContainerIcon },
        { name: "VSCode", icon: CodeSquareIcon },
        { name: "Figma", icon: FigmaIcon },
      ],
    },
  ] as SkillCategory[],
  workExperience: [
    {
      role: "Intern",
      company: "CDAC, Noida",
      duration: "Feb 2025 - Present",
      description: [
        "Developing a MERN-based web application to optimize workflows.",
        "Building scalable UI with React and backend with Express & MongoDB.",
        "Integrating APIs and managing databases for improved performance.",
      ],
      certificateLink: "#", // Placeholder
    },
    {
      role: "Software Development Intern",
      company: "ICM, Guwahati",
      duration: "Feb 2024 - May 2024",
      description: [
        "Developed software that manages the organization's work, with an integrated event manager.",
        "Increased employee efficiency by 30%.",
        "Integrated with the ICM integrated database.",
      ],
      certificateLink: "#", // Placeholder
    },
    {
      role: "Cloud Computing Head",
      company: "Google Developer Student Club AdtU, Assam India",
      duration: "Sep 2023 - July 2024",
      description: [
        "Conducted an intro to cloud computing session with 30+ participants.",
        "Took session on cloudfest’24 with 100+ participants.",
        "Successfully completed google cloud study jam and reached tier 1.",
      ],
      certificateLink: "#", // Placeholder
    },
  ] as Experience[],
  projects: [
    {
      title: "Rent-a-car",
      description: [
        "Car rental application in MERN Stack.",
        "Built a car rental platform for seamless booking and tracking with integrated secure payment interface.",
        "Developed backend for real-time vehicle availability management.",
      ],
      technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB Atlas"],
      codeLink: "https://github.com/AkuSarma/Rent-a-car",
      image: "https://placehold.co/600x400.png",
      aiHint: "car rental"
    },
    {
      title: "JILancer",
      description: [
        "A freelancing platform connecting freelancers with employers.",
        "Implemented AI-powered search, skill verification, and secure payment gateways for efficient job matching and transactions.",
        "Designed a platform to enhance job access and skills development, focusing on underserved communities.",
      ],
      technologies: ["React", "Tailwind CSS", "Django", "Django REST API", "SQLite3"],
      codeLink: "https://github.com/AkuSarma/JILancer",
      image: "https://placehold.co/600x400.png",
      aiHint: "freelance platform"
    },
    {
      title: "Task Manager",
      description: [
        "A task manager to manage your daily tasks.",
        "This is a frontend application made using React to manage our day-to-day tasks.",
        "It is a web application that helps us to remember our tasks and complete them on time.",
      ],
      technologies: ["React", "JavaScript", "CSS"],
      codeLink: "https://github.com/AkuSarma/Task-Manager",
      image: "https://placehold.co/600x400.png",
      aiHint: "task manager"
    },
    {
      title: "Find your book",
      description: [
        "A full-stack web app made using Django.",
        "This website facilitates seniors to donate their books and study materials to juniors.",
        "The website also has a community where anyone can ask questions regarding their problems and anyone can answer them.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "Django"],
      codeLink: "https://github.com/AkuSarma/FindYourBook",
      image: "https://placehold.co/600x400.png",
      aiHint: "book donation"
    },
  ] as Project[],
  awards: [
    {
      title: "Second Runners up, Hack-a-Thon",
      organization: "Inurture",
      date: "April 2023",
      description: "Led a team to develop a book donation platform that fosters community interaction, showcasing leadership, problem-solving, and full-stack development skills.",
      link: "#", // Placeholder
    },
    {
      title: "Top Ten in Coding Competition",
      organization: "Coding Club Inurture",
      date: "Feb 2022",
      description: "Secured third place by excelling in algorithm design and coding challenges, demonstrating advanced programming and critical thinking skills.",
    },
  ] as Award[],
  testimonials: [ 
    {
      quote: "Aku is a highly skilled and dedicated developer. His ability to quickly grasp complex concepts and deliver high-quality work is truly impressive. He was a valuable asset to our team.",
      name: "Jane Doe",
      title: "Senior Developer, Tech Solutions Inc.",
      image: "https://placehold.co/100x100.png",
      aiHint: "person portrait"
    },
    {
      quote: "Working with Aku on the JILancer project was a fantastic experience. His innovative approach and technical expertise in both frontend and backend development were key to our success.",
      name: "John Smith",
      title: "Project Manager, Innovate Startups",
      image: "https://placehold.co/100x100.png",
      aiHint: "professional headshot"
    },
    {
      quote: "As Cloud Computing Head for GDSC, Aku demonstrated excellent leadership and a deep understanding of cloud technologies. His workshops were always engaging and informative.",
      name: "Dr. Emily Carter",
      title: "Faculty Advisor, Assam Downtown University",
      image: "https://placehold.co/100x100.png",
      aiHint: "academic profile"
    }
  ],
  navItems: [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/projects', label: 'Projects', icon: BriefcaseIcon },
    { href: '/about', label: 'About', icon: UsersIcon },
    // { href: '/resume-analyzer', label: 'Resume Analyzer', icon: LightbulbIcon }, // Removed Resume Analyzer
    { href: '/testimonials', label: 'Testimonials', icon: StarIcon }, // Changed icon to StarIcon as AwardIcon might be used elsewhere.
  ] as NavItem[],
  socialLinks: [
    { href: "https://www.github.com/AkuSarma", icon: GithubIcon, label: "GitHub" },
    { href: "https://www.linkedin.com/in/akusarma/", icon: LinkedinIcon, label: "LinkedIn" },
    { href: "mailto:akusarma1702@gmail.com", icon: MailIcon, label: "Email" },
  ]
};

export const getAllSkillsFlat = (): string[] => {
  return akuSarmaData.skills.flatMap(category => category.skills.map(skill => skill.name));
};
