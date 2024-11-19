import "./Project.css";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
export default function Project() {
  const { project, setProject } = useContext(GeneralContext);

  return (
    <article className="project-container">
      <img src={project.mainImg} alt="" />
      <div className="content-container">
        <div className="left-content">
          <h2>{project.projectName}</h2>
          <p>{project.aboutProject}</p>
          <h3>Tecnologias Utilizadas</h3>
          <div className="used-tecnology">
            {project.technologiesUsed.map((element) => (
              <img src={element} alt="" />
            ))}
          </div>
          <SecondaryButton styleBtn="btn-gray" textBtn="VISITAR" />
        </div>
        <div className="right-content"></div>
      </div>
    </article>
  );
}
