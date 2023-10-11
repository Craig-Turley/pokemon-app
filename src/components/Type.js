const Type = ({ types }) => {
    
    const types_map = {
        "normal": "rgba(168, 167, 122)",
        "fire": "rgba(238, 129, 48)",
        "water": "rgba(99, 144, 240)",
        "electric": "rgba(247, 208, 44)",
        "grass": "rgba(122, 199, 76)",
        "ice": "rgba(150, 217, 214)",
        "fighting": "rgba(194, 46, 40)",
        "poison": "rgba(163, 62, 161)",
        "ground": "rgba(226, 191, 101)",
        "flying": "rgba(169, 143, 243)",
        "psychic": "rgba(249, 85, 135)",
        "bug": "rgba(166, 185, 26)",
        "rock": "rgba(182, 161, 54)",
        "ghost": "rgba(115, 87, 151)",
        "dragon": "rgba(111, 53, 252)",
        "dark": "rgba(112, 87, 70)",
        "steel": "rgba(183, 183, 206)",
        "fairy": "rgba(214, 133, 173)",
    }

    function capitilization(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    console.log(types_map[types[0].type.name])

    return (types ? types.map((type) => (
        <div className="type" style={{backgroundColor: types_map[type.type.name]}}>
                <h3>{capitilization(type.type.name)}</h3>
        </div>
    )) : (<div></div>)
    )
}

export default Type