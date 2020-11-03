import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Attila Szaloki', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Attila Szaloki',
  subtitle: 'Full-stack Developer',
  cta: 'Show more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Designing, Building and managing a number of European wide clients projects. Complete Full-Stack website build along with associated services including social media and communications campaigns. Creative, flexible and supportive service with practical and strategic consultations.',
  paragraphTwo:
    'HTML5, CSS3, JavaScript, Python, Django, AWS, MongoDB, Flask, React, Gatsby, Github, Gitpod, Heroku, Github Pages.',
  paragraphThree:
    'Willing to learn new computer languages and use other frameworks and technologies.',
  resume: 'https://attilaszaloki.files.wordpress.com/2020/07/web-developer-cv-06.07.2020.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome! Click!',
  btn: 'Contact Me',
  email: 'szalokiattila@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aticodein',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
