import { useState } from 'react'
import { Link } from 'react-router-dom'
import { activeCategories } from '../data/categories'
import { useCart } from '../context/CartContext'
import SearchBar from './SearchBar'
import './Header.css'

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.95 5.95l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { count: cartCount, setDrawerOpen } = useCart()

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="header-left">
            <Link to="/" className="logo">SENTON</Link>
            <button
              className={`menu-btn${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>

          <SearchBar />

          <div className="header-right">
            <Link to="/kontakt" className="header-kontakt-link">Kontakt</Link>
            <a href="tel:+421905901500" className="icon-btn" title="Zavolať">
              <PhoneIcon />
            </a>
            <button className="icon-btn" title="Môj účet">
              <UserIcon />
            </button>
            <button className="icon-btn" title="Košík" onClick={() => setDrawerOpen(true)}>
              <CartIcon />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      <nav className={`menu-dropdown${menuOpen ? ' open' : ''}`}>
        <div className="menu-dropdown-inner">
          {activeCategories.map(cat => (
            <Link
              key={cat.slug}
              to={`/kategoria/${cat.slug}`}
              className="menu-cat-link"
              onClick={() => setMenuOpen(false)}
            >
              <span className="menu-cat-dot" />
              {cat.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
