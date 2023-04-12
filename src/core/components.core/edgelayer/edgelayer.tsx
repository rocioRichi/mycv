import "./edgelayer.css";
import { Link } from "react-router-dom";
import { PropsLayer } from "../../../features/components.features/propstype/propstype";

export function EdgeLayer(propsEdgeLayer: PropsLayer) {
  const slash = "/";
  let firstElementpage = slash + propsEdgeLayer.firstEleGoTo;
  let secondElementpage = slash + propsEdgeLayer.secondEleGotTo;

  return (
    <section className="edgelayer">
      <Link to={firstElementpage}>
        <article className="edgelayer__up">
          {propsEdgeLayer.firstElement}
        </article>
      </Link>
      <Link to={secondElementpage}>
        <article className="edgelayerdown">
          {propsEdgeLayer.secondElement}
        </article>
      </Link>
    </section>
  );
}
