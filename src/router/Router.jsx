import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Principal from "../Components/Principal";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Principal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
