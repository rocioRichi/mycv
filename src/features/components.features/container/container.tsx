import "./container.css";

export default function Container() {
  const urlAvatar =
    "https://firebasestorage.googleapis.com/v0/b/coders2023-finalproject.appspot.com/o/micv%2Frocioavatar.png?alt=media&token=bb934daa-939c-4698-91c1-d622f0b66a4c";
  return (
    <main className="container__container">
      <section className="container__floor3">
        <article className="container__floor3contact">Contact</article>
        <article className="container__floor3Technologies">
          Technologies
        </article>
      </section>
      <section className="container__floor2">
        <div className="container__floor2lang_exp">
          <article className="container__floor2lang">Language</article>
          <article className="container__floor2workingexp">Working Exp</article>
        </div>

        <div className="container__floor2stage">
          <article>
            <img src={urlAvatar} className="avatarimage" alt="Rocio`s Avatar" />
          </article>
        </div>

        <div className="container__floor2softskil_studies">
          <article className="container__floor2softskill">Soft Skill</article>
          <article className="container__floor2studies">Studies</article>
        </div>
      </section>

      <section className="container__floor1">
        <article className="container__floor1hobbies">Hobbies</article>
        <article className="container__floor1whoIam">Who I am</article>
      </section>
    </main>
  );
}
