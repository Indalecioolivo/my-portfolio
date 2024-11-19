import "./Portfolio.css";
import MyProject from "../../components/MyProject/MyProject";
import myProjectsInfos from "../../db/dbprojects";

export default function Portfolio() {
  return (
    <section className="portfolio-container">
      {myProjectsInfos.map((project) => (
        <MyProject
          mainImg={project.mainImg}
          projectName={project.projectName}
          aboutProject={project.aboutProject}
          technologiesUsed={project.technologiesUsed}
          key={project.id}
          id={project.id}
        />
      ))}
    </section>
  );
}
