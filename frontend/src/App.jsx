import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActivationPage, LoginPage, SignUpPage } from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

//3:22

export default App;
