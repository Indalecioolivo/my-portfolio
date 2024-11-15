import "./Home.css";
import Photo from "../../assets/photo-home.png";
import ModelPhoto from "../../assets/model-photo.png";
export default function Home() {
  return (
    <section className="home-container">
      <section>
        <img src={Photo} alt="" />
      </section>
      <article>
        <img src={ModelPhoto} alt="" />
      </article>
    </section>
  );
}
