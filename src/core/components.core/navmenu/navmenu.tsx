import { EdgeLayer } from "../edgelayer/edgelayer";
import { Picture } from "../picture/picture";
// import { Link, useNavigate } from "react-router-dom";
import "./navmenu.css";

export function Navmenu() {
  return (
    <>
      <EdgeLayer
        firstElement={"Contact"}
        secondElement={"Technologies"}
        firstEleGoTo={"contact"}
        secondEleGotTo={"technologies"}
      ></EdgeLayer>
      <section className="middlelayer">
        <EdgeLayer
          firstElement={"Language"}
          secondElement={"Working Experience"}
          firstEleGoTo={"contact"}
          secondEleGotTo={"technologies"}
        ></EdgeLayer>

        <article>
          <Picture></Picture>
        </article>

        <EdgeLayer
          firstElement={"Education"}
          secondElement={`Programming  Exercise`}
          firstEleGoTo={"education"}
          secondEleGotTo={"technologies"}
        ></EdgeLayer>
      </section>
      <EdgeLayer
        firstElement={"Hobbies"}
        secondElement={"Who I am"}
        firstEleGoTo={"contact"}
        secondEleGotTo={"technologies"}
      ></EdgeLayer>
    </>
  );
}
