import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/devantalogo.jpeg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Devanta Lifesciences logo" className="logo-img" />
        </Link>
        <nav ref={navRef} className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>
            Products
          </Link>
          <Link to="/industries" className={`nav-link ${isActive('/industries') ? 'active' : ''}`}>
            Industries
          </Link>
          <Link to="/quality" className={`nav-link ${isActive('/quality') ? 'active' : ''}`}>
            Quality
          </Link>
          <Link to="/contact" className={`nav-link cta-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact
          </Link>
        </nav>
        <button
          ref={toggleRef}
          className={`nav-toggle ${isMenuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

