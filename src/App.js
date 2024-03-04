import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
const App = ()=>{
    return (
        <>
         <Nav />
         <Hero />
         <Skills />
         <Projects />
         <About />
        </>
    )
}

export default App;