export default function Contact() {
  return (
    <div className="contact">
      <h2 id="contact">Me contacter</h2>
      <div className="contact_info">
        <p>
          Si vous souhaitez, n'hésitez pas à me contacter par {" "}
          <a href="mailto:topchiyski@hotmail.fr" className="email">
            Email
          </a>
        </p>
        <p>
          Vous pouvez également m'envoyer un message sur {" "}
          <a
            href="https://www.linkedin.com/in/petar-topchiyski-099b8936/"
            target="blank"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}
