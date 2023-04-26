import NavLink from './NavLink'
import '../../public/only_circle_white.svg'

function Header () {
  const navLinkItems = [
    { id: 1, text: 'Events', link: '#', isDropDown: true },
    { id: 2, text: 'Committee', link: '#' },
    { id: 3, text: 'Sponsors', link: '#' },
    { id: 4, text: 'Careers Portal', link: '#' },
    { id: 5, text: 'Blog', link: '#' },
    { id: 6, text: 'Contact', link: '#' },
    { id: 7, text: 'Join us', link: '#', isBold: true }
  ]

  return (
    <nav>
      <div className='container flex'>
        <img className='nav__logo' width='70' height='70' src='only_circle_white.svg' alt='Logo' />

        <ul className='nav__list'>
          {navLinkItems.map((item) => {
            return (
              <li key={item.id}>
                <NavLink text={item.text} link={item.link} isBold={item.isBold} isDropDown={item.isDropDown} />
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Header
