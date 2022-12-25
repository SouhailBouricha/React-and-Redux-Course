import AboutUs from "./pages/AboutUs";
import OurWork from './pages/OurWork';
import ContactUs from "./pages/ContactUs"
import MovieDetails from "./pages/MovieDetails";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Route, Routes,useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AboutUs/>} />
            <Route path="/OurWork" element={<OurWork/>} />
            <Route path="/OurWork/:id" element={<MovieDetails/>} />
            <Route path="/ContactUs" element={<ContactUs/>} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
