import cartoon_pokeball from '../assets/cartoon_pokeball.png'
import Button from './Button'

const Header = () => {
  return (
    <div className='header'>
        <img src={cartoon_pokeball} alt='logo' className='pokeball'/>
        <div className='buttons'>
            <Button text='Home' />
            <Button text='About' />
            <Button text='Build' />
        </div>
        
    </div>
  )
}

export default Header