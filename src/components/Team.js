import { useState } from "react";
import Box from "./Box";

const Team = ({ team, team_name, onTeamNameChange, deletePokemonFromTeam }) => {
  const [editing, setEditing] = useState(false);
  const [newTeamName, setNewTeamName] = useState(team_name);
  
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = (e) => {
    setEditing(false);
    // Update the team name using a function from the parent component
    onTeamNameChange(newTeamName);
  };

  const handleInputChange = (e) => {
    setNewTeamName(e.target.value);
  };

  return (
    // @TODO add ability to edit team name
    <div className="team">
      {editing ? (
        <input
          type="text"
          value={newTeamName}
          onChange={handleInputChange}
          onBlur={handleSaveClick}
          autoFocus
        />
      ) : (
        <h2 onClick={handleEditClick}>{team_name}</h2>
      )}
      <div className='box-container'>
        {team.map((pokemon) => (
          <Box pokemon = {pokemon} deletePokemonFromTeam={deletePokemonFromTeam}/>
        ))}
      </div>
    </div>
  );
};

export default Team;
