import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    deerhold,
    dghub,
    freelancer,
    infodeveloper,
    mango,
    tangy,
    facedetection,
    threejs,
} from "@public/assets";


const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "C# .NET Developer",
        icon: web,
    },
    ,
    {
        title: "Next.js Developer",
        icon: creator,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Web Developer",
        icon: backend,
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Deerhold Ltd.",
        icon: deerhold,
        iconBg: "#383E56",
        date: "March 2023 - Until now",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "C# .NET Developer",
        company_name: "DigiHub Pvt Ltd.",
        icon: dghub,
        iconBg: "#E6DEDD",
        date: "Feb 2021 - March 2023",
        points: [
            "Developing and maintaining web applications using .NET MVC and other related technologies.",
            "Designing and testing REST API for Thaili digital App along with developing background services and desktop applicaitons.",
            "Integrating third-party APIs and services into web applications to extend functionality and improve overall efficiency.",
            "Developing RESTful services for different digital wallets including but not limited to CGPAY, MYPAY, YOAPP, PAYTIME, CHITTOPAISA, and PAYWELL.",
            "Developng short-and long term strategy with front end developers to meet company's goals and objectives.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Interviewing candidates and overseeing internal product development.",
        ],
    },
    {
        title: "Free Lancing",
        company_name: "Self",
        icon: freelancer,
        iconBg: "#383E56",
        date: "November 2017 - Jan 2021",
        points: [
            "Customizing and enhancing existing web applications to meet specific client requirements, ensuring optimal performance and user experience.",
            "Utilizing database technologies such as SQL Server or MySQL to design and implement efficient data storage and retrieval solutions.",
            "Collaborating with clients to gather project requirements, provide technical recommendations, and deliver timely updates on project progress.",
            "Implementing security measures, such as user authentication and authorization, to ensure the confidentiality and integrity of sensitive data within web applications.",
            "Providing ongoing technical support and troubleshooting services to clients, addressing any issues or bugs that may arise during or after the development process."
        ],
    },
    {
        title: ".NET Developer",
        company_name: "Info Developers Pvt Ltd",
        icon: infodeveloper,
        iconBg: "#E6DEDD",
        date: "April 2017 - October 2017",
        points: [
            "Developing and maintaining web applications using Knockout.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Generating different types of finantial reports as per clients using RDLC report.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Mango Restaurant",
        description:
            "Web-based platform that allows users to search, order, and manage foods from various providers, providing a convenient and efficient solution for restaurant.",
        tags: [
            {
                name: ".net mvc",
                color: "blue-text-gradient",
            },
            {
                name: "sql server",
                color: "green-text-gradient",
            },
            {
                name: "rest api",
                color: "pink-text-gradient",
            },
        ],
        image: mango,
        source_code_link: "https://github.com/Parasmahzn/MangoRestaurant",
    },
    {
        name: "Tangy",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: ".net",
                color: "blue-text-gradient",
            },
            {
                name: "blazor",
                color: "green-text-gradient",
            },
            {
                name: "sql server",
                color: "pink-text-gradient",
            },
        ],
        image: tangy,
        source_code_link: "https://github.com/Parasmahzn/Tangy",
    },
    {
        name: "Face Detection",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: ".net",
                color: "blue-text-gradient",
            },
            {
                name: "winform",
                color: "green-text-gradient",
            },
            {
                name: "machine learning",
                color: "pink-text-gradient",
            },
        ],
        image: facedetection,
        source_code_link: "https://github.com/Parasmahzn/FaceDetection",
    },
];

export { navLinks, services, technologies, experiences, testimonials, projects };