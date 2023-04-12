import { SyntheticEvent } from "react";
import "./edgelayer.css";
import { useNavigate } from "react-router-dom";

export type PropsEdgeLayer = {
  firstElement: string;
  secondElement: string;
};
export function EdgeLayer(propsEdgeLayer: PropsEdgeLayer) {
  const navigate = useNavigate();

  const handlenav = (event: SyntheticEvent) => {
    navigate("/contac");
  };

  return (
    <section className="edgelayer">
      <article className="edgelayer__up" onClick={handlenav}>
        {propsEdgeLayer.firstElement}
      </article>
      <article className="edgelayerdown">
        {propsEdgeLayer.secondElement}
      </article>
    </section>
  );
}
