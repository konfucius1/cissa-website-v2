import '../../public/hamburger.svg'
import '../../public/cross.svg'
import { useState } from 'react'
import NavList from './NavList'

function Hamburger () {
  const [isOpen, toggleOpen] = useState(false)

  const handleToggle = () => {
    toggleOpen(!isOpen)
  }

  return (
    <>
      <NavList />
      <div className='burger'>
        <img width='50' height='50' onClick={handleToggle} src={isOpen ? 'cross.svg' : 'hamburger.svg'} />
      </div>
    </>
  )
}

export default Hamburger
