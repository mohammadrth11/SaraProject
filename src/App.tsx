import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/organisms/layout";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import About from "./pages/About";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whoWeAre" element={<WhoWeAre />} />
            <Route path="/About/" element={<About />}>
              <Route path="team" element={<Team />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
