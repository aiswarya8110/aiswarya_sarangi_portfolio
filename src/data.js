import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiReactquery, SiGit } from "react-icons/si";
import FoodOrdering from './assets/FoodOrderingApp.png';
import NetflixGPTSearch from './assets/NetflixGPTSearchApp.png';
import YoutubeClone from './assets/YoutubeClone.png'; 

export const links = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#skills', text: 'skills' },
  { id: 3, href: '#about', text: 'about' },
  { id: 4, href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: 1,
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: 2,
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: 3,
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: 4,
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
    text: 'Intermediate proficiency in Tailwind CSS, designing front-end applications with this CSS framework.',
  },
  {
    id: 5,
    title: 'Redux Tool Kit',
    icon: <SiRedux className='h-16 w-16 text-emerald-500' />,
    text: 'Intermediate proficiency in Redux Tool Kit (RTK), handling complex state management for the applications using the newly introduced slices.',
  },
  {
    id: 6,
    title: 'React Query',
    icon: <SiReactquery className='h-16 w-16 text-emerald-500' />,
    text: 'Beginner proficiency in React Query, using data-fetching library that involves caching, synchronizing and updating server state in the web applications.',
  },
  {
    id: 7,
    title: 'Git',
    icon: <SiGit className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise proficiency in Git, using as a version control system, to work together on non-linear development.',
  },
];

export const projects = [
  {
    id: 1,
    img: YoutubeClone,
    url: 'https://master--unrivaled-frangipane-573e4c.netlify.app/',
    github: 'https://github.com/aiswarya8110/youtube-clone',
    title: 'YouTube Clone',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: 2,
    img: NetflixGPTSearch,
    url: 'https://netflix-gpt-search.web.app/',
    github: 'https://github.com/aiswarya8110/netflix-gpt',
    title: 'Netflix GPT Search',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: 3,
    img: FoodOrdering,
    url: 'https://react-food-orderingapp.netlify.app/',
    github: 'https://github.com/aiswarya8110/food-ordering-app',
    title: 'Food Ordering App',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];

export const otherProjects = [
  {
    id:1,
    img: '',
    url: 'https://react-and-redux-shopping-app.netlify.app',
    github: 'https://github.com/aiswarya8110/e-commerce-app',
    title: 'e-commerce',
  },
  {
    id: 2,
    img: '',
    url: 'https://react-search-movieapp.netlify.app/',
    github: 'https://github.com/aiswarya8110/react-movieDB',
    title: 'Movie Search'
  },
  {
    id: 3,
    img: '',
    url: 'https://react-hacker-newsapp.netlify.app/',
    github: 'https://github.com/aiswarya8110/react-hacker-news',
    title: 'Hacker News'
  },
  {
    id: 4,
    img: '',
    url: 'https://timely-basbousa-9058e8.netlify.app/',
    github: 'https://github.com/aiswarya8110/react-mix-master-app',
    title: 'Cocktail Search'
  },
  {
    id: 5,
    img: '',
    url: 'https://singular-fox-16ef90.netlify.app',
    github: 'https://github.com/aiswarya8110/react-cart',
    title: 'Cart'
  },
  {
    id:6,
    img: '',
    url: 'https://quiet-pavlova-b0a421.netlify.app',
    github: 'https://github.com/aiswarya8110/react-unsplash-images-app',
    title: 'Unsplash Images'
  },{
    id:7,
    img:'',
    url: 'https://react-paginationapp.netlify.app/',
    github: 'https://github.com/aiswarya8110/react-pagination',
    title: 'React Pagination'
  }
  ,{
    id: 8,
    img: '',
    url: 'https://master--leafy-mousse-d5be7e.netlify.app/',
    github: 'https://github.com/aiswarya8110/react-infinite-scroll',
    title: 'Infinite Scroll'
  }
]