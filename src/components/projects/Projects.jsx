

const Projects = () => {
  return (
    <section id='projects'>
    
    <h5>My Recent Work</h5>
    <h2>Projects</h2>

    <div className="container project_container">
        <article className='project_item'>
        <div className="project-image">
            <h3>This is a Project title</h3>
            <a href="https://github.com" className='btn '>View Project</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
    </div>

    </section>
  )
}

export default Projects