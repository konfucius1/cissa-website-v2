import Hamburger from './Hamburger'

import '../../public/only_circle_white.svg'

function Header () {
  return (
    <nav>
      <div className='container flex'>
        <img className='nav__logo' width='70' height='70' src='only_circle_white.svg' alt='Logo' />
        <Hamburger />
      </div>
    </nav>
  )
}

export default Header
