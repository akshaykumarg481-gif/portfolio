import "./about.css";
import profile from "/src/assets/photo.jpg";
function About() {
  return (

    <section id="about" className="about-section">

      <div className="about-container">

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I am a passionate Computer Science student interested in
            Web Development, Artificial Intelligence, and Machine Learning.
            I enjoy building modern websites and learning new technologies.
          </p>

          
          <a href="#contact" className="about-btn">
            Contact Me
          </a>
        </div>

        <div className="about-image">
          <img
            src={profile}
            alt="profile"
          />
        </div>

      </div>

    </section>
  );
}

export default About;