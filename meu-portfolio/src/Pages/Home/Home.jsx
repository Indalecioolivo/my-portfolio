import "./Home.css";
import Photo from "../../assets/photo-home.png";
import ModelPhoto from "../../assets/model-photo.png";
import ArrowButton from "../../assets/arrow-button-about-me.svg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

export default function Home() {
  return (
    <section className="home-container">
      <section>
        <img src={Photo} alt="" />
        <div className="apresentation">
          <h1>Olá, me chamo Indalecio, sou Desenvolvedor Web Full-Stack</h1>
          <a href="#my-area">
            <button>
              <div>
                <img src={ArrowButton} alt="" />
              </div>
              SOBRE MIM
            </button>
          </a>
        </div>
      </section>
      <article id="my-area">
        <img src={ModelPhoto} alt="" />
        <div className="about-me">
          <h2>Sobre Mim</h2>
          <p>
            Sou um desenvolvedor front-end júnior procurando por uma
            oportunidade. Eu foco em escrever HTML acessível, usando práticas
            modernas de CSS e escrevendo um JavaScript limpo. Quando estou
            escrevendo código JavaScript, na maioria das vezes estou usando
            React, mas posso me adapta para qualquer ferramenta se necessário.
            Moro em Londres, UK, mas também seria feliz trabalhando remotamente
            e tenho experiência em times remotos. Quando não estou codando,
            poderá me achar fora de casa. Eu adoro estar próximo a natureza seja
            para uma caminhada, corrida ou ciclismo. Eu amaria se você desse uma
            olhada no meu trabalho.
          </p>
          <a href="/portfolio" className="for-button">
            <PrimaryButton styleBtn="btn-gray" textBtn="IR PARA PORTFÓLIO" />
          </a>
        </div>
      </article>
    </section>
  );
}
