import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Novosti from "./Components/Novosti";
import Header from "./Components/Header";
import Home from "./Components/Home"
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
<Header/>
        <Routes>
        <Route index element={<Home/>} />
          <Route path="/novosti" element={<Novosti/>} />
        </Routes>

<Footer/>        
      </BrowserRouter>
    </>
  );
}

export default App;
