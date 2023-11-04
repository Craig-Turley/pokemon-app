import { useState } from "react";
import Box from "./Box";

const Team = ({ team, team_name, onTeamNameChange, deletePokemonFromTeam }) => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [newTeamName, setNewTeamName] = useState(team_name);

  return (
    // @TODO add ability to edit team name
    <div className="team">
      {isEditing ? (
        <input
          className="team-name"
          type="text"
          value={newTeamName}
          onChange={(e) => setNewTeamName(e.target.value)}
          onBlur={() => {
            setIsEditing(false);
            onTeamNameChange(newTeamName);
          }}
        />
      ) : (
        <h2 onClick={() => setIsEditing(true)}>{newTeamName}</h2>
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
