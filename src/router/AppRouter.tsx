import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Secret from "@/pages/Secret";
import Works from "@/pages/Works";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
