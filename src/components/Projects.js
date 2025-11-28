function Projects() {
  const data = [
    { title: "Project 1", desc: "Description...", link: "#" },
    { title: "Project 2", desc: "Description...", link: "#" }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-grid">
        {data.map((p, i) => (
          <div key={i} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link}>View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
