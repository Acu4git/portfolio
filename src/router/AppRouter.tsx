import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Secret from "@/pages/Secret";
import Works from "@/pages/Works";
import BASE_URL from "./basename";

const AppRouter = () => {
  return (
    <>
      <HashRouter basename={BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default AppRouter;
