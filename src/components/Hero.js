import React from 'react';
import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import heroImg from '../assets/heroImg.svg';
const Hero = ()=>{
    return (
        <div className="bg-emerald-100 py-24">
            <div className="align-element px-8 grid md:grid-cols-2 items-center gap-8">
                <article>
                    <h1 className="text-7xl font-bold tracking-wider">
                        I'm Aiswarya Sarangi
                    </h1>
                    <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wider">
                        Front-End Developer
                    </p>
                    <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
                        turning ideas into interactive reality
                    </p>
                    <div className="flex gap-x-4 mt-4">
                        <a href="https://github.com/aiswarya8110">
                            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                        </a>
                        <a href="https://www.linkedin.com/in/aiswaryasarangi">
                            <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                        </a>
                        <a href="mailto:saish8110@gmail.com">
                            <FaEnvelope className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                        </a>
                    </div>
                </article>
                <article className="hidden md:block">
                    <img src={heroImg} alt="woman with website" className="h-90 md:h-100"/>
                </article>
            </div>
        </div>
    )
}

export default Hero;