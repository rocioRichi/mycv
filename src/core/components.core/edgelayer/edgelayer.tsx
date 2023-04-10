import "./edgelayer.css";

export type PropsEdgeLayer = {
  firstElement: string;
  secondElement: string;
};
export function EdgeLayer(propsEdgeLayer: PropsEdgeLayer) {
  return (
    <section className="edgelayer">
      <article className="edgelayer__up">{propsEdgeLayer.firstElement}</article>
      <article className="edgelayerdown">
        {propsEdgeLayer.secondElement}
      </article>
    </section>
  );
}
