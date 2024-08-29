import resume from "../../assets/docs/resume.pdf"

// call to action component 

const CTA = () => {
  return (
    <div className="cta">
        <a href={resume} className="btn" download>Resume</a>
        <a href="#contact" className="btn btn-primary">Contact</a>
    </div>
  )
}

export default CTA