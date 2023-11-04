import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Team_Builder from './components/Team-Builder';
import Team from './components/Team';

function App() {

  const [team, setTeam] = useState([{name: '', id: 0},
                                    {name: '', id: 0},
                                    {name: '', id: 0},
                                    {name: '', id: 0},
                                    {name: '', id: 0},
                                    {name: '', id: 0}]);
  const [team2, setTeam2] = useState([{name: '', id: 0},
                                      {name: '', id: 0},
                                      {name: '', id: 0},
                                      {name: '', id: 0},
                                      {name: '', id: 0},
                                      {name: '', id: 0}]);
  const [teamName1, setTeamName1] = useState("Team 1");
  const [teamName2, setTeamName2] = useState("Team 2");

  const addPokemonToTeam = (pokemon) => {
    const isPokemonInTeam = team.some((p) => p.id === pokemon.id);

    if (!isPokemonInTeam) {

      for (let i = 0; i < team.length; i++) {
        if (team[i].id === 0) {
          team[i] = pokemon;
          setTeam([...team]);
          return;
        }
      }
      
    } else {
      console.log("Pokemon already in team!");
    }
  }

  const deletePokemonFromTeam = (pokemon) => {
    for(let i = 0; i < team.length; i++) {
      if (team[i].id === pokemon.id){
        team.splice(i, 1);
        team.push({name: '', id: 0});
        setTeam([...team]);
        return;
      }
    }
  } 

  const addPokemonToTeam2 = (pokemon) => {
    const isPokemonInTeam2 = team2.some((p) => p.id === pokemon.id);

    if (!isPokemonInTeam2) {

      for (let i = 0; i < team2.length; i++) {
        if (team2[i].id === 0) {
          team2[i] = pokemon;
          setTeam2([...team2]);
          return;
        }
      }
      
    } else {
      console.log("Pokemon already in team!");
    }
  } 

  const deletePokemonFromTeam2 = (pokemon) => {
    for(let i = 0; i < team2.length; i++) {
      if (team2[i].id === pokemon.id){
        team2.splice(i, 1);
        team2.push({name: '', id: 0});
        setTeam2([...team2]);
        return;
      }
    }
  }

  const handleTeamNameChange = (newName, teamNumber) => {
    if (teamNumber === 1) {
      setTeamName1(newName);
    } else if (teamNumber === 2) {
      setTeamName2(newName);
    }
  };

  return (
    <div className='container'>
      <Header />
      <div className='team-container'>
        <Team_Builder addPokemonToTeam={addPokemonToTeam} addPokemonToTeam2={addPokemonToTeam2}/>
        <div>
          <Team team={team} team_name={'Team 1'} onTeamNameChange={(newName) => handleTeamNameChange(newName, 1)} deletePokemonFromTeam={deletePokemonFromTeam}/>
          <Team team={team2} team_name={'Team 2'} onTeamNameChange={(newName) => handleTeamNameChange(newName, 2)} deletePokemonFromTeam={deletePokemonFromTeam2}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
