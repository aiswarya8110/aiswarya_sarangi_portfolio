import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiReactquery, SiGit } from "react-icons/si";
import FoodOrdering from './assets/FoodOrderingApp.png';
import NetflixGPTSearch from './assets/NetflixGPTSearchApp.png';
import YoutubeClone from './assets/YoutubeClone.png'; 

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
    text: 'Intermediate proficiency in Tailwind CSS, designing front-end applications with this CSS framework.',
  },
  {
    id: nanoid(),
    title: 'Redux Tool Kit',
    icon: <SiRedux className='h-16 w-16 text-emerald-500' />,
    text: 'Intermediate proficiency in Redux Tool Kit (RTK), handling complex state management for the applications using the newly introduced slices.',
  },
  {
    id: nanoid(),
    title: 'React Query',
    icon: <SiReactquery className='h-16 w-16 text-emerald-500' />,
    text: 'Beginner proficiency in React Query, using data-fetching library that involves caching, synchronizing and updating server state in the web applications.',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <SiGit className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise proficiency in Git, using as a version control system, to work together on non-linear development.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: YoutubeClone,
    url: 'https://master--unrivaled-frangipane-573e4c.netlify.app/',
    github: 'https://github.com/aiswarya8110/youtube-clone',
    title: 'YouTube Clone',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: NetflixGPTSearch,
    url: 'https://netflix-gpt-search.web.app/',
    github: 'https://github.com/aiswarya8110/netflix-gpt',
    title: 'Netflix GPT Search',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: FoodOrdering,
    url: 'https://react-food-orderingapp.netlify.app/',
    github: 'https://github.com/aiswarya8110/food-ordering-app',
    title: 'Food Ordering App',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];