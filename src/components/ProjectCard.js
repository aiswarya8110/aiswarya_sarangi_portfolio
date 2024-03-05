import React from 'react';
import { FaGitSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
const ProjectCard = ({ project })=>{
   const { url, img, github, title, features } = project;
    return (
        <article className='bg-white rounded-lg shadow-md hover:shadow-lg duration-300'>
            <img src={img} alt={title} className='w-full object-contain rounded-t-lg h-64'/>
            <div className='capitalize p-8'>
                <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                {
                    features && (
                    <>
                        <h3 className='text-xl font-semibold text-emerald-500'>Features</h3>
                        <ul>
                            {features.map((item)=> <li className='font-normal'>{item}</li>)}
                        </ul>
                    </>
                    )
                }
                <div className='mt-4 flex gap-x-4'>
                    <a href={url}>
                        <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                    </a>
                    <a href={github}>
                        <FaGitSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;