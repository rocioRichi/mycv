import { EdgeLayer } from "../edgelayer/edgelayer";
import { Header } from "../header/header";
import { InfoDisplay } from "../infodisplay/infodisplay";
import { LeftLayer } from "../leftlayer/leftlayer";
import { Picture } from "../picture/picture";
import { RightLayer } from "../rightlayer/rightlayer";
import "./app.css";

export default function App() {
  return (
    <>
      <Header></Header>
      <nav className="container__container">
        <EdgeLayer
          firstElement={"Contact"}
          secondElement={"Technologies"}
        ></EdgeLayer>
        <section className="middlelayer">
          <LeftLayer
            firstElement={"Soft Skills"}
            secondElement={"Working Experience"}
          ></LeftLayer>

          <article>
            <Picture></Picture>
          </article>

          <RightLayer
            firstElement={"Education"}
            secondElement={`Programming  Exercise`}
          ></RightLayer>
        </section>
        <EdgeLayer
          firstElement={"Hobbies"}
          secondElement={"Who I am"}
        ></EdgeLayer>
      </nav>
      <InfoDisplay></InfoDisplay>
    </>
  );
}
