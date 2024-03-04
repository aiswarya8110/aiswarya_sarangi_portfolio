import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import { projects } from "./data";
import { otherProjects } from './data';
const App = ()=>{
    return (
        <>
         <Nav />
         <Hero />
         <Skills />
         <Projects title="Projects" projects={projects} />
         <Projects title="Other Projects" projects={otherProjects} />
         <About />
        </>
    )
}

export default App;