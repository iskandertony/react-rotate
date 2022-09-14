import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Singupp from "./componet/sing up/Singup";
import Table from "./componet/table/Table";

function App() {


  return (
    <div className="main">
      <h1>Welcome to Dungan FOOD!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="singup" element={<Singup />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="main">
      <main>
        <h2>Welcome to the Mainpage!</h2>
      </main>
      <nav>
        <Link to="about" className="menu">
          Menu
        </Link>
      </nav>
      <nav>
        <Link to="singup" className="menu">
          singup
        </Link>
      </nav>
    </div>
  );
}

function About() {
  return (
    <div className="main">
      <main>
      <Table></Table>
      </main>
      <nav>
        <Link to="/" className="menu">
          Home
        </Link>
      </nav>
    </div>
  );
}

function Singup() {
  return (
    <div>
      <main>
        <Singupp></Singupp>
      </main>
      <nav>
        <Link to="/" className="menu">
          Home
        </Link>
      </nav>
    </div>
  );
}

export default App;
