import "./app.css";

export default function App() {
  const urlAvatar =
    "https://firebasestorage.googleapis.com/v0/b/coders2023-finalproject.appspot.com/o/micv%2Favat_comp_sonrisa_color.png?alt=media&token=0b0b50cb-fe5b-4e7c-a796-bc69bd3b1b9e";

  const urlBlueGitHub =
    "https://firebasestorage.googleapis.com/v0/b/coders2023-finalproject.appspot.com/o/micv%2FRecurso%204.svg?alt=media&token=eaed496c-e114-41f7-ab0c-9b4191bc6003";
  return (
    <div className="conteinseverything">
      <aside className="container__asideup">Rocio Ricciardiello</aside>
      <img
        src={urlBlueGitHub}
        className="container__avatargithub"
        alt="Rocio`s Avatar"
      />
      <hr className="container__hrup" />
      <main className="container__container">
        <section className="container__floor3">
          <article className="container__floor3contact">Contact</article>
          <article className="container__floor3Technologies">
            Technologies
          </article>
        </section>
        <section className="container__floor2">
          <div className="container__floor2lang_exp">
            <article className="container__floor2lang, bubble">
              Soft Skills
            </article>
            <article className="container__floor2workingexp">
              Working
              <br /> Experience
            </article>
          </div>

          <div className="container__floor2stage">
            <article>
              <img
                src={urlAvatar}
                className="avatarimage"
                alt="Rocio`s Avatar"
              />
            </article>
          </div>

          <div className="container__floor2softskil_studies">
            <article className="container__floor2softskill">Education</article>
            <article className="container__floor2studies">
              Programing <br /> Exercise
            </article>
          </div>
        </section>
        <section className="container__floor1">
          <article className="container__floor1hobbies">Hobbies</article>
          <article className="container__floor1whoIam">Who I am</article>
        </section>
      </main>
      <hr className="container__hrdown" />
      <aside className="container__asidedown"></aside>
    </div>
  );
}
