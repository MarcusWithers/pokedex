import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";
import HeartIcon from "../images/hearticon.png";

//import Link from "react-router-dom";
// <Link to={`/pokemon/${(pokemon, id)}`}>
//Link
const Pokemon = ({ pokemon }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const typeHandler = ({ pokemon }) => {
    if (pokemon.types[0].type.name == "fire") {
      console.log("fire");
    }
  };

  return (
    <>
      <Card
        className={`my-3 p-3 rounded text-center shadow mb-5 ${pokemon.types[0].type.name}`}
        style={{ width: "11rem" }}
      >
        <Card.Img
          variant="top"
          style={{ width: "8rem" }}
          src={pokemon.sprites.front_default}
        />
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Body
          className={`$pokemon.types[0].type.name $pokemon.types[1].type.name rounded text-white`}
        >
          <Button onClick={handleShow} className="text-wrap" stlye="primary ">
            Stats
          </Button>
          <br />
          <Modal
            show={show}
            onHide={handleClose}
            animation={true}
            centered
            size="lg"
            dialogClassName="my-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>Stats</Modal.Title>
              <img src={pokemon.sprites.front_default} />
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <p className="col-md-4 ms-auto">
                  <b>Combat Stats</b>
                </p>
                <p className="col-md-4 ms-auto ">
                  <b>Life Stats</b>
                </p>
              </div>
              <div className="row">
                <p className={`$pokemon.types[0].type.name col-md-4 ms-auto`}>
                  <em className={`$pokemon.types[0].type.name`}>
                    Type: {pokemon.types[0].type.name}
                  </em>
                </p>
                <p className="col-md-4 ms-auto">Height: {pokemon.height}</p>
              </div>
              <div className="row">
                <p className="col-md-4 ms-auto">
                  HP: {pokemon.stats[0].base_stat}
                </p>

                <p className="col-md-4 ms-auto">Weight: {pokemon.weight}</p>
              </div>
              <div className="row">
                <p className="col-md-10 ms-auto">
                  Attack: {pokemon.stats[1].base_stat}
                </p>
                <p className="col-md-10 ms-auto">
                  Defense: {pokemon.stats[2].base_stat}
                </p>
                <p className="col-md-10 ms-auto">
                  Special-Attack: {pokemon.stats[3].base_stat}
                </p>
                <p className="col-md-10 ms-auto">
                  Special-Defense: {pokemon.stats[4].base_stat}
                </p>
                <p className="col-md-10 ms-auto">
                  Speed: {pokemon.stats[5].base_stat}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pokemon;
