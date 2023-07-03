import Header from "./components/Header/Header";
import "./App.css";
import Home from "./components/Home/Home";
import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
const App = () => {
  const [hide, setHide] = useState("yes");
  function callBack(data) {
    setHide(data);
  }
  return (
    <>
      <BrowserRouter>
        <Header handleCallBack={callBack} />
        <Routes>
          <Route path="/" element={<Home hide={hide} />} />
          <Route path="/education" element={<Education hide={hide} />} />
          <Route path="/contact" element={<Contact hide={hide} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
