import { Link } from 'react-router-dom'
import logoImg from '../assets/devantalogo.jpeg'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-columns">
        {/* Left: Brand & Info */}
        <div className="footer-col footer-about">
          <img src={logoImg} alt="Devanta Lifesciences logo" className="logo-img footer-logo" />
          <p className="footer-company">
            Devanta Lifesciences Pvt. Ltd.<br/>
            #123 Pharma Park Lane,<br/>
            Hyderabad, India - 500001<br/>
          </p>
        </div>
        {/* Center: Navigation */}
        <div className="footer-col footer-nav">
          <span className="footer-title">Quick Links</span>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/quality">Quality</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        {/* Right: Contact & Social */}
        <div className="footer-col footer-contact">
          <span className="footer-title">Contact</span>
          <a className="footer-contact-link" href="mailto:info@devantalifesciences.com">info@devantalifesciences.com</a>
          <a className="footer-contact-link" href="tel:+910000000000">+91 00000 00000</a>
          <div className="footer-socials">
            {/* Placeholders for icons: replace with real icons if available */}
            <a href="https://www.linkedin.com" className="footer-social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">🔗</a>
            <a href="mailto:info@devantalifesciences.com" className="footer-social" aria-label="Email">✉</a>
          </div>
        </div>
      </div>
      {/* Bottom strip */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copy">© {currentYear} Devanta Lifesciences. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

