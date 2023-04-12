import "./edgelayer.css";
import { Link } from "react-router-dom";

export type PropsEdgeLayer = {
  firstElement: string;
  secondElement: string;
  navigateTo: string;
};
export function EdgeLayer(propsEdgeLayer: PropsEdgeLayer) {
  const slash = "/";
  let gotoanotherpage = slash + propsEdgeLayer.navigateTo;
  gotoanotherpage = propsEdgeLayer.navigateTo;
  return (
    <section className="edgelayer">
      <Link to={gotoanotherpage}>
        <article className="edgelayer__up">
          {propsEdgeLayer.firstElement}
        </article>
      </Link>

      <article className="edgelayerdown">
        {propsEdgeLayer.secondElement}
      </article>
    </section>
  );
}
