import { EdgeLayer } from "../edgelayer/edgelayer";
import { Header } from "../header/header";
import { InfoDisplay } from "../infodisplay/infodisplay";
import "./app.css";

export default function App() {
  const urlAvatar =
    "https://firebasestorage.googleapis.com/v0/b/coders2023-finalproject.appspot.com/o/micv%2Favat_comp_sonrisa_color.png?alt=media&token=0b0b50cb-fe5b-4e7c-a796-bc69bd3b1b9e";

  return (
    <>
      <Header></Header>
      <main className="container__container">
        <EdgeLayer
          firstElement={"Contact"}
          secondElement={"Technologies"}
        ></EdgeLayer>
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
              Programming
              <br /> Exercises
            </article>
          </div>
        </section>
        <EdgeLayer
          firstElement={"Hobbies"}
          secondElement={"Who I am"}
        ></EdgeLayer>
      </main>
      <InfoDisplay></InfoDisplay>
    </>
  );
}
