import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";

const Pokemon = ({ pokemon }) => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        className={`my-3 p-3 rounded text-center shadow mb-5 ${pokemon.types[0].type.name} `}
        style={{ width: "11rem" }}
      >
        <Card.Img
          variant="top"
          style={{ width: "9rem" }}
          src={pokemon.sprites.front_default}
        />
        <Card.Title>
          <strong>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </strong>
        </Card.Title>
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
              <Modal.Title className="w-100 text-center">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </Modal.Title>
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
                    Type:{" "}
                    {pokemon.types[0].type.name.charAt(0).toUpperCase() +
                      pokemon.types[0].type.name.slice(1)}
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
              <div className="row col-md-4 ms-auto">
                {/*maps through pokemon types and displays them in card */}
                {pokemon.types.map((types) => (
                  <div key={types.type.name}>
                    <div className={`${types.type.name}`}>
                      {types.type.name}
                    </div>
                  </div>
                ))}
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
                <p className="col-md-7 ms-auto">
                  <img src={pokemon.sprites.front_default} />
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pokemon;
