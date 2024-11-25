import "./Contact.css";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

export default function Contact() {
  return (
    <section className="contact-container">
      <article>
        <h2>Entre em Contato</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          possimus veniam quidem ipsum tempore minus ipsam animi, enim eaque
          nostrum in temporibus explicabo dolor iusto illum, adipisci eveniet
          expedita, est aspernatur quae. Hic tenetur delectus pariatur modi fuga
          laboriosam commodi quasi error recusandae, asperiores dolores est
          provident nobis temporibus nulla.
        </p>
      </article>
      <article>
        <h3>Contato</h3>
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
