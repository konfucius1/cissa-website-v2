import Hamburger from './Hamburger'
import NavList from './NavList'
import { useState } from 'react'
import '../../public/only_circle_white.svg'

function Header () {
  const [isOpen, toggleOpen] = useState(false)

  const handleToggle = () => {
    toggleOpen(!isOpen)
  }
  return (
    <nav>
      <div className='container'>
        <div className='nav__content flex'>
          <img className='nav__logo' width='70' height='70' src='only_circle_white.svg' alt='Logo' />
          <Hamburger clickHandler={handleToggle} isOpen={isOpen} />
        </div>
        <NavList isOpen={isOpen} />
      </div>
    </nav>
  )
}

export default Header
