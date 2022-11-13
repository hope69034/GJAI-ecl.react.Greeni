import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//page
import Main from "./page/Main";
import Join from "./page/Join";
import Login from "./page/Login";
import Greeni from "./page/Greeni";
//layout
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";


function App() {
  console.log("react : app.js");
  return (
    <>
      <div>
        <Header></Header>
     {/*    <Navbar></Navbar> */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
 {/*          <Route path="/Join" element={<Join></Join>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route> */}
          <Route path="/Greeni" element={<Greeni />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
