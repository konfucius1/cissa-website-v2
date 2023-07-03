import '../../public/hamburger.svg'
import '../../public/cross.svg'
import { FaBars, FaTimes } from 'react-icons/fa'

function Hamburger ({ isOpen, clickHandler }) {
  return (
    <>
      <div className='burger' onClick={clickHandler}>
        {isOpen
          ? <FaTimes size={35} color='grey' />
          : <FaBars size={35} color='white' />}
      </div>
    </>
  )
}

export default Hamburger
