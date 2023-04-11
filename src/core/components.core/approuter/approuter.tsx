import { Route, Routes } from "react-router-dom";
import Login from "../../../features/components.features/login/login";
import Wellcome from "../../../features/components.features/wellcome/wellcome";
import { InfoDisplay } from "../infodisplay/infodisplay";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<InfoDisplay />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/wellcome" element={<Wellcome />}></Route>
    </Routes>
  );
}
export default AppRouter;
