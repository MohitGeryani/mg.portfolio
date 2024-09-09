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

    <p>I'm a B.Tech student with a strong passion for full-stack development, specializing in the MERN stack. With hands-on experience in building dynamic web applications, I focus on creating secure, user-friendly platforms, like my recent social media app project. I have a solid foundation in C++, DSA, Python, and cloud technologies, coupled with certifications in ServiceNow and Python. My internship at Celebal Technologies sharpened my skills in React and Firebase. I'm always eager to learn, solve problems, and take on new challenges.</p>
     <a href='#contact' className='btn btn-primary'>Let's Connect</a>
    </div>
   </div>
   </section>
  )
}

export default About