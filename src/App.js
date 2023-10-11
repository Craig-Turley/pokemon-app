import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Team_Builder from './components/Team-Builder';
import Team from './components/Team';

function App() {

  const [team, setTeam] = useState([]);
  const [team2, setTeam2] = useState([]);
  
  const addPokemonToTeam = (pokemon) => {
    setTeam([...team, pokemon]);
  }

  const addPokemonToTeam2 = (pokemon) => {
    setTeam([...team2, pokemon])
  } 

  return (
    <div className='container'>
      <Header />
      <div className='team-container'>
        <Team_Builder addPokemonToTeam={addPokemonToTeam}/>
        <div>
          <Team team={team} team_name={'Team 1'}/>
          <Team team={team2} team_name={'Team 2'}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
