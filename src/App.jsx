import React from "react";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
