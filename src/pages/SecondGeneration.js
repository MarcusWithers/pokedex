import React, { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const SecondGeneration = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);

  const getPokemon = async () => {
    const getPokemonData = async (id) => {
      return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    };
    let pokemonArray = [];
    for (let i = 152; i <= 251; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    console.log(pokemonArray);
    setPokemon(pokemonArray);
    setIsLoaded(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <Container className=" m-auto px-auto pt-3 pb-3 border bg-light ">
        {isLoaded ? (
          <h1 className="text-center">Loading Pokedex</h1>
        ) : (
          <Row>
            {pokemon.map((p) => (
              <Col
                className="mx-auto"
                key={p.data.name}
                xs="auto"
                sm="auto"
                md="auto"
                xl="auto"
              >
                <Pokemon pokemon={p.data} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default SecondGeneration;
