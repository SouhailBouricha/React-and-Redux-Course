import AboutUs from "./pages/AboutUs";
import OurWork from './pages/OurWork';
import ContactUs from "./pages/ContactUs"
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Route , Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Route path="/">
        <AboutUs/>
      </Route>
      <Route>
        <OurWork/>
      </Route>
      <Route>
        <ContactUs/>
      </Route>
    </div>
  );
}

export default App;
