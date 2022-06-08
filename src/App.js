import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import SecondGen from "./pages/SecondGeneration";
import ThirdGen from "./pages/ThirdGeneration";
import FourthGen from "./pages/FourthGeneration";
import FifthGen from "./pages/FifthGeneration";
import SixthGen from "./pages/SixthGeneration";
import SeventhGen from "./pages/SeventhGeneration";
import EighthGen from "./pages/EighthGeneration";
import ErrorPage from "./pages/ErrorPage";
import Shinies from "./pages/Shinies";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar className="nav-item px-3" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link className="nav-item" to="/">
                Pokedex
              </Link>
              <img alt="" src="./images/Poke_Ball.png" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="nav-item" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item px-3">
                <Link to="/pokedex/SecondGeneration">2nd Gen</Link>
              </Nav.Link>
              <Nav.Link className="nav-item px-3">
                <Link className="nav-item" to="/pokedex/ThirdGeneration">
                  3rd Gen
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item px-3">
                <Link className="nav-item" to="/pokedex/FourthGeneration">
                  4th Gen
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item px-3">
                <Link className="nav-item" to="/pokedex/FifthGeneration">
                  5th Gen
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item px-3">
                <Link className="nav-item" to="/pokedex/SixthGeneration">
                  6th Gen
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item px-3">
                <Link className="nav-item" to="/pokedex/SeventhGeneration">
                  7th Gen
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item px-3">
                <Link className="nav-item" to="/pokedex/EigthGeneration">
                  8th Gen
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item px-3">
                <Link className="nav-item" to="/pokedex/Shinies">
                  Shinies
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex/SecondGeneration" element={<SecondGen />} />
          <Route path="/pokedex/ThirdGeneration" element={<ThirdGen />} />
          <Route path="/pokedex/FourthGeneration" element={<FourthGen />} />
          <Route path="/pokedex/FifthGeneration" element={<FifthGen />} />
          <Route path="/pokedex/SixthGeneration" element={<SixthGen />} />
          <Route path="/pokedex/SeventhGeneration" element={<SeventhGen />} />
          <Route path="/pokedex/EighthGeneration" element={<EighthGen />} />
          <Route path="/pokedex/Shinies" element={<Shinies />} />
          <Route path="*" element={<ErrorPage />} />
          {/*error page must be last */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
