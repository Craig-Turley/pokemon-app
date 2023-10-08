const Pokemon_Search = ({ pokemon }) => {
    
    function capitilization(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
    <div className="poke-card">
        <h1>{capitilization(pokemon.name)}</h1>
            {pokemon.sprites ?
            (
            <img src={pokemon.sprites.front_default} 
            alt={pokemon.name} />
            ) : 
            (<div></div>)}
    </div>
  )
}

export default Pokemon_Search