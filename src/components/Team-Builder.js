import { useState, useRef, useEffect } from "react";
import Pokemon_Search from "./Pokemon-Search";
import Stats from "./Stats";
import Button from "./Button";
import Type from "./Type";

const Team_Builder = ({ addPokemonToTeam, addPokemonToTeam2 }) => {
  
  const [pokemon, setPokemon] = useState([]);
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); 
    fetch(url + '/bulbasaur')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let moves = [];
        for(let i = 0; i < 4; i++){
          moves.push(data.moves[i].move);
        }
        setPokemon([data]);
        setPokemonMoves(moves);
        setLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setPokemon([
          {
            name: 'Not Found',
            id: 0,
            stats: null,
            sprites: null,
          },
        ]);
        setLoading(false); 
      });
  }, []);

  const searchTerm = useRef(null);

  const url = 'https://pokeapi.co/api/v2/pokemon';

  const search = async (e) => {
    e.preventDefault();

    if (!searchTerm.current.value) return;

    const fullUrl = url + '/' + searchTerm.current.value.toLowerCase(); 

    setLoading(true)
    fetch(fullUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPokemon([data])
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      setPokemon([{
        name: "Not Found",
        id: 0,
      }]);
      setLoading(false);
    })
  };

  const addToTeam = () => {
    // Pass the selected Pokémon to the parent component
    if (pokemon.length > 0 && pokemon[0].id !== 0) {
      addPokemonToTeam(pokemon[0]);
    }
  };

  const addToTeam2 = () => {
    // Pass the selected Pokémon to the parent component
    if (pokemon.length > 0 && pokemon[0].id !== 0) {
      addPokemonToTeam2(pokemon[0]);
    }
  }

  const switchTeam = (team) => {
    // Function to handle switching between Team 1 and Team 2
    if (pokemon.length > 0 && pokemon[0].id !== 0) {
      addPokemonToTeam(pokemon[0], team);
    }
  };
  
  return (
    <div className='team-builder'>
      <form onSubmit={search} className="form-control">
        <input 
        type='text' 
        placeholder='Search for a Pokemon'
        ref={searchTerm}
        >
        </input>
        <button type='submit'>Search</button>
      </form>
      <div>
        { isLoading ? (<div className='poke-card'>
        <h1>Loading... </h1>
        </div>) :
        pokemon.map((pokemon) => (
          /* eslint-disable-next-line */
          <Pokemon_Search pokemon={pokemon} key={pokemon.id}/>
        ))        
        }
        { isLoading ? (<div></div>) :
        pokemon.map((pokemon) => (
          /* eslint-disable-next-line */
          <Stats stats={pokemon.stats} key={pokemon.id}/>
        ))}
      </div>
      <div className="type-container">
        { isLoading ? (<div></div>) :
        pokemon.map((pokemon) => (
          /* eslint-disable-next-line */
          <Type types={pokemon.types} key={pokemon.id}/>
        ))
        }
      </div>
      {/* <div className="moves">
        {pokemonMoves.map((move) => (
          <div className="move">
            <h3>{move.name}</h3>
          </div>
        ))}
      </div> */}
      <div className='button-container'>
        {isLoading? (<></>) : 
        (<>
        <Button text='Add to Team' color='white' textColor='red' onClick={addToTeam} />
        <Button text='Add to Team 2' color='white' textColor='red' onClick = {addToTeam2}/>
        </>)}
      </div>
    </div>
  )
}

export default Team_Builder