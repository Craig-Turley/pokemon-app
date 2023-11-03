import { FaTimes } from 'react-icons/fa';

const Box = ({ pokemon, deletePokemonFromTeam }) => {
    
    return (
        <div className="box">
        {pokemon.id !== 0 && (
          <>
            {pokemon.sprites && pokemon.sprites.front_default ? (
              <img src={pokemon.sprites.front_default} alt="Pokemon" />
            ) : (
              "No image available"
            )}
            <div className='faTimes-container'>
                <FaTimes className='faTimes' onClick={() => deletePokemonFromTeam(pokemon)}/> 
            </div>
          </>
        )}
      </div>
    );
  }

export default Box