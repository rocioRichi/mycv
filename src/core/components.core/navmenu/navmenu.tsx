import { EdgeLayer } from "../edgelayer/edgelayer";
import { LeftLayer } from "../leftlayer/leftlayer";
import { Picture } from "../picture/picture";
import { RightLayer } from "../rightlayer/rightlayer";
import "./navmenu.css";

export function Navmenu() {
  return (
    <>
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
    </>
  );
}
