import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/mohit-geryani-bb2747220/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/MohitGeryani" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/mohit_geryan/?hl=en" target="_blank"><BsInstagram/></a>
         </div>
  )
}

export default Socials