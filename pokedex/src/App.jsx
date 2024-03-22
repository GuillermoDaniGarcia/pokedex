/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Creamos un estado para poder renderizar el nombre de los pokemons
  const [pokemons, setPokemons] = useState([]);

  // Creamos una petición a la API para poder obtener los pokemons
  useEffect(() => {
    const getPokemons = async () => {
      // Recuperamos el listado de los pokemons
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
      );
      const listaPokemons = await response.json();
      const { results } = listaPokemons;

      // Creamos una variable para la petición a la API de las imagenes
      const newPokemons = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        // Accedemos a las propiedades de la API para poder renderizar las imagenes
        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
          height: poke.height,
          weight: poke.weight,
          types: poke.types,
        };
      });

      setPokemons(await Promise.all(newPokemons));
    };

    getPokemons();
  }, []);

  return (
    <div className="App">
      <header>
        <nav className="nav">
          <img src="./img/image.png" alt="Logo Pokédex"></img>
          <ul className="nav-list">
            <li className="nav-item">
              <button className="btn btn-header" id="ver-todos">
                Ver todos
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header normal" id="normal">
                Normal
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header fire" id="fire">
                Fire
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header water" id="water">
                Water
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header grass" id="grass">
                Grass
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header electric" id="electric">
                Electric
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header ice" id="ice">
                Ice
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header fighting" id="fighting">
                Fighting
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header poison" id="poison">
                Poison
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header ground" id="ground">
                Ground
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header flying" id="flying">
                Flying
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header psychic" id="psychic">
                Psychic
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header bug" id="bug">
                Bug
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header rock" id="rock">
                Rock
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header ghost" id="ghost">
                Ghost
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header dark" id="dark">
                Dark
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header dragon" id="dragon">
                Dragon
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header steel" id="steel">
                Steel
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header fairy" id="fairy">
                Fairy
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {/* Mostramos los nombres de los pokemon */}
      <main>
        <div id="todos">
          <div className="pokemon-todos" id="listaPokemon">
            {pokemons.map((pokemon) => {
              return (
                <>
                  <div className="pokemon">
                    <p className="pokemon-id-back">#{pokemon.id}</p>
                    <div className="pokemon-imagen">
                      <img src={pokemon.img} alt={pokemon.name} />
                    </div>
                    <div className="pokemon-info">
                      <div className="nombre-contenedor">
                        <p className="pokemon-id">#{pokemon.id}</p>
                        <h2 className="pokemon-nombre">{pokemon.name}</h2>
                      </div>
                      <div className="pokemon-tipos">
                        {pokemon.types.map((types) => {
                          return (
                            <p className={types.type.name + " tipo"}>
                              {types.type.name}
                            </p>
                          );
                        })}
                      </div>
                      <div className="pokemon-stats">
                        <p className="stat">{pokemon.height}m</p>
                        <p className="stat">{pokemon.weight}kg</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
