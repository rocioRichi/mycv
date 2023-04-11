import { Route, Routes } from "react-router-dom";
import Register from "../../../features/components.features/register.form/register.form";
import { InfoDisplay } from "../infodisplay/infodisplay";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<InfoDisplay />}></Route>
      <Route path="/contact" element={<Register />}></Route>
    </Routes>
  );
}
export default AppRouter;
