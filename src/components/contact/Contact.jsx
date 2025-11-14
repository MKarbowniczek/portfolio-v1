import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Kontakt</h2>
        <p>
          📞 <a href="tel:+48502639198">502 639 198</a>
        </p>
        <p>
          ✉️ <a href="mailto:aneta.naglarska@gmail.com">aneta.naglarska@gmail.com</a>
        </p>
        <p>
          🌐{" "}
          <a
            href="https://www.e-korepetycje.net/anenag/jezyk-angielski"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profil na e-korepetycje.net
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
