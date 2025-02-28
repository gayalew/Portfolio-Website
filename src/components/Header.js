//Node modules
import { useState } from 'react'
// Components
import Navbar from './Navbar'
//images
import logo2 from './images/logo.jpg'

function Header() {
  const [navOpen, setNavOpen] = useState(true)
  return (
    <header className="fixed top-0 left-0 w-full h-20 items-center z-40 bg-gradient-to-b from-zink-900 to-zink-900/0">
      <div
        className="max-w-screen-2xl w-full mx-auto px-4
      flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]"
      >
        <h1>
          <a href="/" className="logo">
            <img src={logo2} width={40} height={40} alt="Bemnet Ayalew" />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  )
}

export default Header
