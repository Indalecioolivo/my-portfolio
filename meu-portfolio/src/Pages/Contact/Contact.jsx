import "./Contact.css";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import WhatsAppImg from "../../assets/whatsapp.png";

export default function Contact() {
  return (
    <section className="contact-container">
      <article>
        <h2>Entre em Contato</h2>
        <p></p>
      </article>
      <article>
        <h3>Contato via WhatsApp</h3>
        <div>
          <a href="https://wa.me/5511944698742" target="_blank">
            <img src={WhatsAppImg} alt="" />
          </a>
        </div>
      </article>
      <article>
        <h3>Contato via Email</h3>
        <form
          action="https://formsubmit.co/indalecioolivo@gmail.com"
          method="POST"
        >
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" name="email" required />
          <label htmlFor="textcontact">Mensagem</label>
          <textarea id="textcontact" name="message" required></textarea>
          <PrimaryButton styleBtn="btn-blue" textBtn="ENVIAR" />
        </form>
      </article>
    </section>
  );
}
