import "./rightlayer.css";

export type PropsRightLayer = {
  firstElement: string;
  secondElement: string;
};
export function RightLayer(propsLeftAndRight: PropsRightLayer) {
  return (
    <article className="rightlayer">
      <p className="rightlayer__up">{propsLeftAndRight.firstElement}</p>
      <p className="rightlayer__down">{propsLeftAndRight.secondElement}</p>
    </article>
  );
}
