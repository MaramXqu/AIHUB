import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatgpt from "./pages/Chatgpt";
import Translate from './pages/Translate';
import Home from "./pages/Home";
import ImageGenerator from './pages/Image';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={ <Home/>}></Route>
<Route path="/chatgpt" element={ <Chatgpt/>}></Route>
<Route path="/translat" element={ <Translate/>}></Route>
<Route path="/image" element={ <ImageGenerator/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};
export default App;

