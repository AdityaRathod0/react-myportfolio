function Skills() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Bootstrap"];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills">
        {skills.map((s) => (
          <span className="skill" key={s}>{s}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
