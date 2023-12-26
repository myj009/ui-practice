import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Signin"; // You will need to create the LoginPage component similarly.
import Home from "./pages/Home";
import { UserProvider } from "./context/UserContext";
import UserHome from "./pages/UserHome";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<LoginPage />} />

          {/* Define other routes as needed */}
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
