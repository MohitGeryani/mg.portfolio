import './header.css';
import CTA from './CTA';
import ME from './../../assets/images/profile1.jpg'
import Socials from './Socials';

const Header = () => {
  return (
  <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Mohit Geryani</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA/>
    <Socials/>
      <div className="me">
        <img src={ME}  alt="" />
      </div>
      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
  </header>
  )
}

export default Header