import SectionTitle from "./SectionTitle"
import ProjectCard from "./ProjectCard"

const Projects = ({ title, projects })=>{
    return (
        <section className="py-20 align-element" id="projects">
            <SectionTitle title={title} />
            <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {
                    projects.map((project)=>{
                        return <ProjectCard key={project.id} project={project} />
                    })
                }
            </div>
        </section>
    )
}

export default Projects;