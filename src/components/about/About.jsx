import React from "react";
import "./About.scss";
import profileImage from "../../assets/aneta.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image-wrapper">
          <img src={profileImage} alt="About me" className="about-image" />
        </div>
        <div className="about-text">
          <h2>O mnie</h2>
          <p>
            Chcesz swobodnie mówić po angielsku? Masz dosyć stania w miejscu i w końcu wskoczyć na wyższy poziom?

            Mam na imię Aneta, ukończyłam fililogię angielską i od 4 lat pomagam moimkursantom rozpracować angielską gramatykę i nabrać pewności siebie w mówieniu po angielsku! Aktualnie prowadzę swoją szkołę Just say a word;)
            Od samego początku mojej przygody z nauczaniem  uczę tak jak sama kiedyś chciałabym być uczona. Pokażę Ci, że nauka może być przyjemna i nie musi kojarzyć się z czasami szkolnej ławki.

            Zajęcia odbywają się online , przez Teams  . Zajęcia oparte są w dużej mierze na materiałach autentycznych , abyś mógł/mogła poznać naturalny język angielski i takim też się zacząć posługiwać.Po każdych zajęciach otrzymujesz ode mnie materiały z lekcji jak i ćwiczenia na pracę domową, aby móc uporządkować i utrwalić poznane zagadnienia.

            Zajęcia skierowane są dla młodzieży i dorosłych  na poziomie średniozaawansowanym i zaawansowanym . Ze mną przygotujesz się do egzaminu 8klasisty , matury jak i egzaminów Cambridge takich jak FCE czy CAE . Pomogę Ci także rozwinąć umiejętności, które pozwolą Ci swobodnie  wypowiedziećsię na każdy temat, zapominając z lekcji na lekcję co to bariera językowa .Do każdego z kursantów podchodzę indywidualnie więc na początku zawsze określamy cele i potrzeby jakie pragniesz zrealizować.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
