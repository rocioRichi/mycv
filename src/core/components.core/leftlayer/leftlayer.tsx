import "./leftlayer.css";

export type PropsLeftLayer = {
  firstElement: string;
  secondElement: string;
};
export function LeftLayer(propsleftlayer: PropsLeftLayer) {
  return (
    <article className="leftlayer">
      <p className="leftlayer__up">{propsleftlayer.firstElement}</p>
      <p className="leftlayer__down">{propsleftlayer.secondElement}</p>
    </article>
  );
}
