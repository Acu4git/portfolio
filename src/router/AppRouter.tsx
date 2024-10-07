import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Secret from "@/pages/Secret";
import Works from "@/pages/Works";

// const basename = import.meta.env.VITE_BASENAME || "/";

const AppRouter = () => {
  return (
    <>
      <HashRouter>
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
