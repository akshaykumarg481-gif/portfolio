import "./service.css";
import { FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";

function Services() {
  return (
   <section id="services" className="services">

      <h2 className="services-title">My Services</h2>

      <div className="services-container">

        <div className="service-card">
          <FaCode className="icon" />
          <h3>Web Development</h3>
          <p>
            I build responsive and modern websites using
            React, HTML, CSS and JavaScript.
          </p>
        </div>

        <div className="service-card">
          <FaBrain className="icon" />
          <h3>Machine Learning</h3>
          <p>
            I explore AI and Machine Learning concepts and
            build beginner ML projects.
          </p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="icon" />
          <h3>Programming</h3>
          <p>
            I write efficient code in languages like
            C, Python and JavaScript.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;