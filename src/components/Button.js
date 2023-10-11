const Button = ({ text, color, textColor, onClick }) => {
  
    const runFunction = () => {
        onClick();
    };
  
    return (
    <button 
    className='button' 
    style={{backgroundColor: `${color}`, color: `${textColor}`}}
    onClick={runFunction}
    >
        {text}
    </button>
  )
}

export default Button