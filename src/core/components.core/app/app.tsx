import { Header } from "../header/header";
import { InfoDisplay } from "../infodisplay/infodisplay";
import { Navmenu } from "../navmenu/navmenu";
import "./app.css";

export default function App() {
  return (
    <>
      <Header></Header>
      <nav className="container__container">
        <Navmenu></Navmenu>
      </nav>
      <InfoDisplay></InfoDisplay>
    </>
  );
}
