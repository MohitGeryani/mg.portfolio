import { BiCheck } from 'react-icons/bi';
import './services.css';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className='service_list-icon' /> 
            <p> Crafting intuitive and visually appealing interfaces that prioritize user experience.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Creating wireframes and prototypes to visualize and test design ideas before implementation.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Ensuring that designs are fully responsive, providing a seamless experience across all devices.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Aligning design elements with the brand’s identity to create a cohesive look and feel.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Conducting user testing to gather insights and refine designs based on feedback.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className='service_list-icon' /> 
            <p>Building dynamic and robust web applications using the latest technologies in the MERN stack.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Seamlessly integrating third-party APIs to extend the functionality of web applications.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Ensuring fast load times and smooth performance through code optimization and best practices.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Developing custom features tailored to meet specific business needs and goals.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Implementing security measures to protect user data and ensure safe transactions.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className='service_list-icon' /> 
            <p>Crafting compelling and clear content that resonates with the target audience.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Writing content that is optimized for search engines to improve visibility and reach.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Creating and curating visuals, such as images & graphics, to enhance content engagement.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Developing a content plan that aligns with business goals and drives user engagement.</p>
            </li>
            <li><BiCheck className='service_list-icon' /> 
            <p>Managing and creating content for social media platforms to build brand awareness and engagement.</p>
            </li>
          </ul>
        </article>
   

      </div>
    </section>
  )
}

export default Services