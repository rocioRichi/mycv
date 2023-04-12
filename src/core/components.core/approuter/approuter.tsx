import { Route, Routes } from "react-router-dom";
import Contact from "../../../features/components.features/contactform/contactform";
import { InfoDisplay } from "../infodisplay/infodisplay";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<InfoDisplay />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
export default AppRouter;
