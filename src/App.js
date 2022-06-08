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
            <Navbar.Brand href="/pokedex">
              Pokedex
              <img alt="" src="./images/Poke_Ball.png" />
            </Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link className="nav-item px-3" href="/pokedex">
                Home
              </Nav.Link>
              <Nav.Link
                className="nav-item px-3"
                href="/pokedex/SecondGeneration"
              >
                2nd Gen
              </Nav.Link>
              <Nav.Link className="nav-item px-3" href="/ThirdGeneration">
                3rd Gen
              </Nav.Link>
              <Nav.Link className="nav-item px-3" href="/FourthGeneration">
                4th Gen
              </Nav.Link>
              <Nav.Link className="nav-item px-3" href="/FifthGeneration">
                5th Gen
              </Nav.Link>
              <Nav.Link className="nav-item px-3" href="/SixthGeneration">
                6th Gen
              </Nav.Link>
              <Nav.Link className="nav-item px-3" href="/SeventhGeneration">
                7th Gen
              </Nav.Link>
              <Nav.Link className="nav-item px-3" href="/EighthGeneration">
                8th Gen
              </Nav.Link>
              <Nav.Link className="nav-item px-3" href="/Shinies">
                Shinies
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/pokedex" element={<Home />} />
          <Route path="/SecondGeneration" element={<SecondGen />} />
          <Route path="/ThirdGeneration" element={<ThirdGen />} />
          <Route path="/FourthGeneration" element={<FourthGen />} />
          <Route path="/FifthGeneration" element={<FifthGen />} />
          <Route path="/SixthGeneration" element={<SixthGen />} />
          <Route path="/SeventhGeneration" element={<SeventhGen />} />
          <Route path="/EighthGeneration" element={<EighthGen />} />
          <Route path="/Shinies" element={<Shinies />} />
          <Route path="*" element={<ErrorPage />} />
          {/*error page must be last */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
