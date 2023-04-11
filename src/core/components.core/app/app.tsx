import AppRouter from "../approuter/approuter";
import { Header } from "../header/header";
import { Navmenu } from "../navmenu/navmenu";
import "./app.css";

export default function App() {
  return (
    <>
      <Header></Header>
      <nav className="container__container">
        <Navmenu></Navmenu>
      </nav>
      <section className="infodisplay">
        <div className="infodisplay__box">
          <AppRouter></AppRouter>
        </div>
      </section>
    </>
  );
}
