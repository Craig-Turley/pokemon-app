const Team = ({ team, team_name }) => {
  return (
    <div className='team'>
        <h2>{team_name}</h2>
        <ul>
            {team.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Team