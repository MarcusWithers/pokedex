import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";

//import Link from "react-router-dom";
// <Link to={`/pokemon/${(pokemon, id)}`}>
//Link
const PokemonShinies = ({ pokemon }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        className={`my-3 p-3 rounded text-center shadow mb-5 ${pokemon.types[0].type.name}`}
        style={{ width: "11rem" }}
      >
        <Card.Img
          variant="top"
          style={{ width: "8rem" }}
          src={pokemon.sprites.front_shiny}
        />
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Body className={`$pokemon.types[0].type.name rounded text-white`}>
          <Button
            //onClick={buttonHandler}
            onClick={handleShow}
            className="text-wrap"
            stlye="primary "
          >
            Stats
          </Button>
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
            </Modal.Header>
            <Modal.Body>
              <p>Type: {pokemon.types[0].type.name}</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              <p>HP: {pokemon.stats[0].base_stat}</p>
              <p>Attack: {pokemon.stats[1].base_stat}</p>
              <p>Defense: {pokemon.stats[2].base_stat}</p>
              <p>Special-Attack: {pokemon.stats[3].base_stat}</p>
              <p>Special-Defense: {pokemon.stats[4].base_stat}</p>
              <p>Speed: {pokemon.stats[5].base_stat}</p>
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

export default PokemonShinies;
