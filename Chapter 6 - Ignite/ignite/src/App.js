import Home from "./pages/home";
import GlobaleStyle from "./components/GlobaleStyles";
import { Routes, Route} from "react-router-dom"
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <GlobaleStyle/>
      <Nav/>
      <Routes >
        <Route path="/" element={<Home/>}  />
        <Route path="/game/:id" element={<Home/>}  />
      </Routes>
    </div>
  );
}

export default App;
