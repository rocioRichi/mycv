import { Route, Routes } from "react-router-dom";
import Container from "../../../features/components.features/container/container";
import Login from "../../../features/components.features/login/login";
import Wellcome from "../../../features/components.features/wellcome/wellcome";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/wellcome" element={<Wellcome />}></Route>
      <Route path="/container" element={<Container />}></Route>
    </Routes>
  );
}
export default AppRouter;
