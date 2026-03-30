import { Link } from 'react-router-dom'
import './Footer.css'

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">

          <div>
            <Link to="/" className="footer-logo">SENTON</Link>
            <p className="footer-tagline">Technika, ktorá funguje.<br />Na slovenskom trhu od roku 1991.</p>
            <div className="footer-badges">
              <span className="footer-badge">35 rokov na trhu</span>
              <span className="footer-badge">Overení zákazníkmi</span>
              <span className="footer-badge">Certifikát AAA</span>
              <span className="footer-badge">Rýchla dodávka</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Senton</h4>
            <ul>
              <li><Link to="/o-nas">O nás</Link></li>
              <li><Link to="/preco-u-nas">Prečo u nás</Link></li>
              <li><Link to="/referencie">Referencie Heureka</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Nakupovanie</h4>
            <ul>
              <li><Link to="/ako-nakupovat">Ako nakupovať</Link></li>
              <li><Link to="/doprava">Doprava a poštovné</Link></li>
              <li><Link to="/vratenie">Vrátenie tovaru</Link></li>
              <li><Link to="/obchodne-podmienky">Obchodné podmienky</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Poradenstvo & Blog</h4>
            <ul>
              <li><Link to="/poradenstvo">Poradenstvo</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
            <h4 style={{ marginTop: 24 }}>Kontakt</h4>
            <ul>
              <li className="footer-contact-item">
                <span>Telefón</span>
                <a href="tel:+421905901500">+421 905 901 500</a>
              </li>
              <li className="footer-contact-item">
                <span>E-mail</span>
                <a href="mailto:senton@senton.sk">senton@senton.sk</a>
              </li>
              <li className="footer-contact-item">
                <span>Adresa</span>
                <a href="https://maps.google.com/?q=Kosatcova+2+Kosice" target="_blank" rel="noreferrer">
                  Kosatcová 2, 040 01 Košice
                </a>
              </li>
            </ul>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Senton s.r.o. Všetky práva vyhradené.</p>
          <div className="footer-bottom-links">
            <Link to="/ochrana-udajov">Ochrana osobných údajov</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
