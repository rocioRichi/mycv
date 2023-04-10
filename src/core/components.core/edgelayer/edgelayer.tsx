import "./edgelayer.css";

type PropsEdgeLayer = {
  firstElement: string;
  secondElement: string;
};
export function EdgeLayer(propsEdgeLayer: PropsEdgeLayer) {
  return (
    <section className="edgelayer">
      <article className="container__floor3contact">
        {propsEdgeLayer.firstElement}
      </article>
      <article className="container__floor3Technologies">
        {propsEdgeLayer.secondElement}
      </article>
    </section>
  );
}
