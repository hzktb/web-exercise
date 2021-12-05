import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import ContactForm from "./components/ContactForm";
import ProductForm from "./components/ProductForm";
function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="wrapper">
      <div>
        <Nav selected={selected} setSelected={setSelected} />
        <ContactForm selected={selected} setSelected={setSelected} />
        <ProductForm selected={selected} />
      </div>
    </div>
  );
}

export default App;
