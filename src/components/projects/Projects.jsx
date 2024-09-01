import IMG1 from './../../assets/images/project1.jpg'
import IMG2 from './../../assets/images/project2.jpg'
import IMG3 from './../../assets/images/project3.jpg'
import './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
    
    <h5>My Recent Work</h5>
    <h2>Projects</h2>

    <div className="container project_container">
        <article className='project_item'>
        <div className="project-image">
        <img src={IMG1} alt="" />
        </div>
            <h3>MG's Cart: A Fullstack Ecommerce WebApp</h3>
            <div className="project_item-cta">
            <a href="https://mgscartapp.onrender.com/" className='btn '>View Project</a>
            <a href="https://mgscartapp.onrender.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='project_item'>
        <div className="project-image">
        <img src={IMG2} alt="" />
        </div>
            <h3>SocioBook: A Fullstack Social Media Application</h3>
            <div className="project_item-cta">
            <a href="https://sociobook-app.onrender.com/" className='btn '>View Project</a>
            <a href="https://sociobook-app.onrender.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        
            </div>
        </article>
        <article className='project_item'>
        <div className="project-image">
        <img src={IMG3} alt="" />
        </div>
            <h3>Auth App: A Fullstack Authentication System </h3>
            <div className="project_item-cta">
            <a href="https://my-auth-app-jtxy.onrender.com" className='btn '>View Project</a>
            <a href="https://my-auth-app-jtxy.onrender.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        
    </div>

    </section>
  )
}

export default Projects