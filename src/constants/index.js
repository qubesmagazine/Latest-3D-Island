import { fieldbridge, vinemobile } from "../assets/images";
import {
    car,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    summiz,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
      title: "Web Management",
      company_name: "FieldBridge Technologies",
      icon: fieldbridge,
      iconBg: "#383E56",
      date: "April 2019 - April 2021",
      points: [
        "Monitored social media and Google SEO analytics to adjust post time, location and various media to grow target platform by 20,000 + plus followers in less than a year",
        "Created a Mobile Responsive User Experience with CSS Flexbox that allowed cross-platform accessibility to the website on any device with primary use on mobile",
        " Built API following RESTful standards to allow users to submit information by storing data in MongoDB.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "FieldBridge Technologies",
      icon: fieldbridge,
      iconBg: "#383E56",
      date: "April 2019 - April 2021",
      points: [
        "Partnered with data science to develop the front end for a product recommendation engine that increased user time on page by 4 minutes",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Curated over 30 website changes to increase the user flow and understanding of all platform capabilities and feature",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "VineMobile Networks",
      icon: vinemobile,
      iconBg: "#383E56",
      date: "2021 - Present",
      points: [
        "Developing and maintaining 20+ front-ends for user experience.",
        "Writing front-end code, and back-end code. Integrating 4+ with frameworks and APIs.",
        "Utilizing multiple CLI tools and configuration GUIs.",
        "Creating and updating 4 websites with a focus on creating an exceptional user experience.",
      ],
    },
    {
      title: "Mobile Appplications",
      company_name: "VineMobile Networks",
      icon: vinemobile,
      iconBg: "#383E56",
      date: "2021 - Present",
      points: [
        "Utilizing and implementing 7+ attractive, responsive, and mobile-friendly website contexts and elements.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Creating informative and effective documentation, reports, and inline comments on 100% of code/work accomplished",
      ],
    },
  ];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/qubesmagazine',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://bit.ly/4849zEU',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Dispatch Rider Locator',
        description: 'Creating a dispatch rider app is now simpler with intuitive platform, connecting you to nearby riders for swift and cost-effective deliveries, eliminating delays.',
        link: 'https://github.com/qubesmagazine/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/qubesmagazine/Cars-Webapp',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'React-Native-NewsApp',
        description: 'MERN Stack News App backend not only keeps up with the pace of technological advancements but propels your news application development to new heights',
        link: 'https://github.com/qubesmagazine/react-Native-NewsApp',
    }
];