import { Route, Routes } from "react-router-dom";
import Contact from "../../../features/components.features/contactform/contactform";
import { Education } from "../../../features/components.features/education/education";
import { Technologies } from "../../../features/components.features/technologies/technologies";
import { InfoDisplay } from "../infodisplay/infodisplay";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<InfoDisplay />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/technologies" element={<Technologies />}></Route>
      <Route path="/education" element={<Education />}></Route>
    </Routes>
  );
}
export default AppRouter;
