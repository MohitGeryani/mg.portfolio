import './about.css';
import profile from './../../assets/images/profile.jpg'

import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import ME from './../../assets/images/me.jpg';


const About = () => {
  return (
   <section id="about">
   <h5>Get to know</h5>
   <h2>About Me</h2>

   <div className="container about_container">
    <div className="about_me">
      <div className="about_me-image">
        <img src={ME} alt="profile"/>
      </div>
    </div>
    <div className="about_content">
      <div className="about_cards">
        <article className='about_card'>
        <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>1.5+ Years Working</small>
        </article>
        <article className='about_card'>
        <FiUsers className='about_icon'/>
          <h5>Community</h5>
          <small>40k+ worldwide</small>
        </article>
        <article className='about_card'>
        <VscFolderLibrary className='about_icon'/>
          <h5>Projects</h5>
          <small>20+ Completed</small>
        </article>

      </div>

      <p>B.Tech student focused on full-stack development, specializing in the MERN stack. I create secure, user-friendly applications, like my recent social media app. Proficient in C++, Python, DSA, and more, with certifications in ServiceNow. My internship at Celebal Technologies sharpened my React skills. I’m driven by a passion for learning and tackling new challenges.</p>        
           
             <a href='#contact' className='btn btn-primary'>Let's Connect</a>
    </div>
   </div>
   </section>
  )
}

export default About