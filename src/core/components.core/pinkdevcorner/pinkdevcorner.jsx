import "./pinkdevcorner.css";
import corner from "../../../assets/corner.png";

function PinkDevCorner() {
  return (
    <div className="pinkdev-corner">
      <a
        href="https://thepinkdev.es"
        title="Volver a la landing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={corner} alt="Logo ThePinkDev" />
      </a>
    </div>
  );
}

export default PinkDevCorner;
