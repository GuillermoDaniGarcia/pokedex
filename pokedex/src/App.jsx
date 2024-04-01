/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Creamos un estado para poder renderizar el nombre de los pokemons
  const [pokemons, setPokemons] = useState([]);

  // Creamos estado para el filtro de los botones
  const [filtro, setFiltro] = useState([]);

  // Creamos una función que nos guarde el tipo
  function Guardado(filtro) {
    setFiltro(filtro);
  }

  // Creamos una petición a la API para poder obtener los pokemons
  useEffect(() => {
    const getPokemons = async () => {
      // Recuperamos el listado de los pokemons
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
      );
      const listaPokemons = await response.json();
      const { results } = listaPokemons;

      // Creamos una variable para la petición a la API
      const newPokemons = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        // Accedemos a las propiedades de la API para poder renderizar los datos
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

  // Creamos un useEffect para realizar un filtro de la array de pokemons, que pille el tipo que queramos
  useEffect(() => {
    if (filtro != null) {
      pokemons.filter((types) => (types.type.name = filtro));
    }
  }, [filtro]);

  return (
    <div className="App">
      <header>
        <nav className="nav">
          <img src="./img/image.png" alt="Logo Pokédex"></img>
          <ul className="nav-list">
            <li className="nav-item">
              <button
                className="btn btn-header"
                id="ver-todos"
                onClick={() => {
                  Guardado();
                }}
              >
                Ver todos
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header normal"
                id="normal"
                onClick={() => {
                  Guardado("normal");
                }}
              >
                Normal
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header fire"
                id="fire"
                onClick={() => {
                  Guardado("fire");
                }}
              >
                Fire
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header water"
                id="water"
                onClick={() => {
                  Guardado("water");
                }}
              >
                Water
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header grass"
                id="grass"
                onClick={() => {
                  Guardado("grass");
                }}
              >
                Grass
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header electric"
                id="electric"
                onClick={() => {
                  Guardado("electric");
                }}
              >
                Electric
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header ice"
                id="ice"
                onClick={() => {
                  Guardado("ice");
                }}
              >
                Ice
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header fighting"
                id="fighting"
                onClick={() => {
                  Guardado("fighting");
                }}
              >
                Fighting
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header poison"
                id="poison"
                onClick={() => {
                  Guardado("poison");
                }}
              >
                Poison
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header ground"
                id="ground"
                onClick={() => {
                  Guardado("ground");
                }}
              >
                Ground
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header flying"
                id="flying"
                onClick={() => {
                  Guardado("flying");
                }}
              >
                Flying
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header psychic"
                id="psychic"
                onClick={() => {
                  Guardado("psychic");
                }}
              >
                Psychic
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header bug"
                id="bug"
                onClick={() => {
                  Guardado("bug");
                }}
              >
                Bug
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header rock"
                id="rock"
                onClick={() => {
                  Guardado("rock");
                }}
              >
                Rock
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header ghost"
                id="ghost"
                onClick={() => {
                  Guardado("ghost");
                }}
              >
                Ghost
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header dark"
                id="dark"
                onClick={() => {
                  Guardado("dark");
                }}
              >
                Dark
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header dragon"
                id="dragon"
                onClick={() => {
                  Guardado("dragon");
                }}
              >
                Dragon
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header steel"
                id="steel"
                onClick={() => {
                  Guardado("steel");
                }}
              >
                Steel
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-header fairy"
                id="fairy"
                onClick={() => {
                  Guardado("fairy");
                }}
              >
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
