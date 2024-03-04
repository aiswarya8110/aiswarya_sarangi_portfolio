import React from 'react';
import SectionTitle from './SectionTitle';
import heroImg from '../assets/heroImg.svg';
const About = ()=>{
    return (
        <section className="bg-white py-20" id="about">
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={heroImg} className="w-full h-64" />
                <article>
                    <SectionTitle title="About Me" />
                    <p className="text-slate-600 mt-8 leading-loose">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam doloribus ab iusto facere ad laudantium sequi veritatis magni sint dolorem ullam aliquid rerum quo necessitatibus quod incidunt, vitae excepturi nam.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About;