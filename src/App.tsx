import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/organisms/layout";
import SingleProject from "./components/organisms/SingleProject";
import ContactUs from "./pages/ContactUs";
import Divisions from "./pages/Divisions";
import OurCompanies from "./pages/OurCompanies";
import Projects from "./pages/Projects";
import Shop from "./pages/Shop";
import Home from "./pages/WhoWeAre";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/divisions" element={<Divisions />} />
            <Route path="/OurCompanies" element={<OurCompanies />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Projects/:projectId" element={<SingleProject />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
