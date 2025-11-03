import { Route,  Routes } from "react-router-dom";
import "./App.css";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/signUp" element={<SignUp/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
    </Routes>

  );
}

export default App;
