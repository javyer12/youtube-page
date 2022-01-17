import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../view/Log/Register/Register";
import Home from "../container/Home";

import "../style/Global.scss";
import "../style/Login.scss";
import Layout from "../container/Layout"
import NotFound from "../container/NotFound";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
};

export default App;
