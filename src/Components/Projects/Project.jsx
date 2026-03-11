import "./Project.css";

function Projects() {

  const projects = [
    {
      title: "Machine Learning Model",
      description: "A beginner ML model built using Python and Scikit-Learn.",
      link: "#"
    },
    {
      title: "React Portfolio Website",
      description: "My personal portfolio built using React, CSS and Vite.",
      link: "#"
    },
    {
      title: "C Programming Problems",
      description: "Collection of algorithms and data structure programs in C.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">

      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a href={project.link} target="_blank">View Project</a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;