import { useState, useEffect } from "react";
import './Home.css'
import profile from "/src/assets/image.png";
function Home() {

  const roles = [
    "Akshay Kumar B",
    "AIML Student",
    "Programmer",
    "Developer",
    "Machine Learning Learner"
  ];

  const [currentRole, setCurrentRole] = useState(0);

  // change text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home">
      <div className="home">
        <div className="main">
          <img src={profile} className="photo" />

          <h1>Hi, I'am {roles[currentRole]}</h1>

          <p>
            I’m a beginner developer and AIML student at PES University,
            passionate about building modern web applications and
            exploring Machine Learning technologies.
          </p>

          

        </div>
      </div>
    </section>
  );
}

export default Home;