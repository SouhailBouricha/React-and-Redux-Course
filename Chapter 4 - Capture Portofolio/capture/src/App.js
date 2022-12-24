import AboutUs from "./pages/AboutUs";
import OurWork from './pages/OurWork';
import ContactUs from "./pages/ContactUs"
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Routes>
        <Route path="/" element={<AboutUs/>} />
        <Route path="/OurWork" element={<OurWork/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
    </div>
  );
}

export default App;
