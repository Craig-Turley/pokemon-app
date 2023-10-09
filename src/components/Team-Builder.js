import { useState, useRef, useEffect } from "react";
import Pokemon_Search from "./Pokemon-Search";
import Stats from "./Stats";

const Team_Builder = () => {
  
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); 
    fetch(url + '/bulbasaur')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon([data]);
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
    </div>
  )
}

export default Team_Builder