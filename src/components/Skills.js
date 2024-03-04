import SectionTitle from './SectionTitle';
import { skills } from '../data';
import SkillCard from './SkillCard';

const Skills = ()=>{
    return (
        <section className="py-20 align-element" id="skills">
            <SectionTitle title="Tech Stack"/>
            <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill)=>{
                    return <SkillCard skill={skill} key={skill.id} />
                })}
            </div>
        </section>
    )
}

export default Skills;