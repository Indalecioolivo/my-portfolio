import "./Project.css";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
export default function Project() {
  const { project, setProject } = useContext(GeneralContext);
  console.log(project);

  return (
    <article className="project-container">
      <img src={project.art} alt="" />
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
        <div className="right-content">
          <h3>Projeto</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            at accusantium deserunt similique culpa fugiat, tempora ad autem
            praesentium ipsam quos ipsum nam excepturi saepe minus consequuntur
            placeat laboriosam sunt vero quibusdam beatae aut rerum architecto?
            Rem, facilis quia placeat aut a est laborum ut impedit! Deleniti
            quibusdam minus quia asperiores dolorem recusandae debitis soluta.
            Maxime atque, totam modi delectus provident enim distinctio labore
            quaerat dolores accusantium iure, doloremque reiciendis debitis
            corrupti dignissimos, sit excepturi illo nesciunt sint cumque?
            Beatae nemo ducimus esse animi qui laborum ut dolor dolores neque
            dolorum voluptatem, ipsam architecto molestias, facere, odio quo id.
          </p>
          <h3>Previews</h3>
          <img src={project.photo1} alt="" />
          <img src={project.photo2} alt="" />
        </div>
      </div>
    </article>
  );
}
