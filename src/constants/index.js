import {
    mobile,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    bootstrap,
    starbucks,
    tesla,
    coorporate,
    estateplus,
    famille,
    zeroadmin,
    quams,
    zeroweb,

    threejs,
    github,
  } from "../assets";
  
  export const navLinks = [
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Dynamics 365 Developer",
      icon: mobile,
    },
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
      name: "Github",
      icon: github,
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
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Techend Ltd",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "To produce high-quality products, I work with cross-functional teams that include designers, product managers, and other developers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Dynamics 365 Developer",
      company_name: "Gritty Minds Concept",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2023 -  Present",
      points: [
        "Developing and maintaining Dynamics 365 using AI languguage and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Coorporate Setup",
      description:
        "A platform that allows users to incorporate business and also helps tostore and transport securely, their official document ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "react-native",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: coorporate,
      source_code_link: "https://corporate-setup.app/",
    },
    {
      name: "Estate Plus",
      description:
        "A comprehensive platform designed to enhance contemporary lifestyles. It serves as a user-friendly solution for acquiring virtual energy, visitor management, resident communications and more.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: estateplus,
      source_code_link: "https://estateplusng.com/",
    },
    {
      name: "4Famille",
      description:
        "An application that fosters connectivity among family members. Facilitating the transfer of funds among family members, parental control features and seamless conversations with family members.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: famille,
      source_code_link: "https://famillie.surge.sh/",
    },
    {
      name: "Zero Interest",  
      description:
        "An application that helps to manage the cooporative banking processes of a cooporative banking society.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "laravel",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: zeroweb,
      source_code_link: "https://www.zimcserver.com/",
    },
    {
      name: "Zero Admin",
      description:
        "An admin interface of the zero application where certain assigned executives have access to the society's analytics, viewing , processing and approval of users requests.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "laravel",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: zeroadmin,
      source_code_link: "",
    },
    {
      name: "Quams Portfolio",
      description:
        "An admin interface of the zero application where certain assigned executives have access to the society's analytics, viewing , processing and approval of users requests.",
      tags: [
        {
          name: "react + vite",
          color: "blue-text-gradient",
        },
       
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: quams,
      source_code_link: "#",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };