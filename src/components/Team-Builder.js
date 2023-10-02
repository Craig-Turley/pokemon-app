import { useState, useRef, useEffect } from "react";

const Team_Builder = () => {
  
  const [pokemon, setPokemon] = useState([]);
  const searchTerm = useRef(null);

  const url = 'https://pokeapi.co/api/v2/pokemon';
  
  useEffect(() => {
    fetch(url + '/bulbasaur')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setPokemon([data])
    })
  }, [pokemon])

  const search = async (e) => {
    e.preventDefault();

    const fullUrl = url + '/' + searchTerm.current.value.toLowerCase(); 

    fetch(fullUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPokemon([data])
    })
    .catch(err => console.log(err))
  };
  
  return (
    <div className='team-builder'>
      <form onSubmit={search}>
        <input 
        type='text' 
        placeholder='Search for a Pokemon'
        ref={searchTerm}
        >
        </input>
        <button type='submit'>Search</button>
      </form>
      <div>
        {pokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team_Builder