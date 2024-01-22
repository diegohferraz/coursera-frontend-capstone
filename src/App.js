import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
