import "./MyProject.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function MyProject({
  mainImg,
  projectName,
  aboutProject,
  technologiesUsed,
}) {
  return (
    <div className="myproject-container">
      <img src={mainImg} alt="" />
      <div className="about-project">
        <h2>{projectName}</h2>
        <p>{aboutProject}</p>
        <div className="used-tecnology">
          <h3>Tecnologias Utilizadas</h3>
          {technologiesUsed.map((element) => (
            <img src={element} alt="" />
          ))}
        </div>
        <PrimaryButton textBtn="VER PROJETO" styleBtn="btn-gray" />
      </div>
    </div>
  );
}
