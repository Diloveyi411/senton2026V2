import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import './SearchBar.css'

function SearchIcon() {
  return (
    <svg className="sb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
  )
}

function highlight(text, query) {
  if (!query) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  )
}

const MAX_RESULTS = 6

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [active, setActive] = useState(-1)
  const [open, setOpen] = useState(false)
  const inputRef = useRef(null)
  const containerRef = useRef(null)
  const navigate = useNavigate()

  const search = useCallback((q) => {
    const term = q.trim().toLowerCase()
    if (!term) { setResults([]); return }
    const matches = products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term) ||
      p.shortName.toLowerCase().includes(term) ||
      p.model.toLowerCase().includes(term)
    ).slice(0, MAX_RESULTS)
    setResults(matches)
  }, [])

  useEffect(() => {
    search(query)
    setActive(-1)
  }, [query, search])

  // close on outside click
  useEffect(() => {
    function handle(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  function handleKeyDown(e) {
    if (!open || results.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive(a => Math.min(a + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive(a => Math.max(a - 1, -1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (active >= 0) {
        goTo(results[active])
      } else if (results.length > 0) {
        goTo(results[0])
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
      inputRef.current?.blur()
    }
  }

  function goTo(product) {
    setQuery('')
    setResults([])
    setOpen(false)
    navigate(`/produkt/${product.slug}`)
  }

  function handleChange(e) {
    setQuery(e.target.value)
    setOpen(true)
  }

  const showDropdown = open && query.trim().length > 0

  return (
    <div className="sb-wrap" ref={containerRef}>
      <div className={`sb-field${open ? ' sb-focused' : ''}`}>
        <SearchIcon />
        <input
          ref={inputRef}
          type="search"
          className="sb-input"
          placeholder="Hľadať spotrebiče..."
          value={query}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck={false}
        />
        {query && (
          <button
            className="sb-clear"
            onClick={() => { setQuery(''); setResults([]); inputRef.current?.focus() }}
            tabIndex={-1}
            aria-label="Vymazať"
          >
            <CloseIcon />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="sb-dropdown">
          {results.length > 0 ? (
            <>
              <div className="sb-section-label">Produkty</div>
              <ul className="sb-list">
                {results.map((p, i) => (
                  <li key={p.id}>
                    <button
                      className={`sb-result${i === active ? ' sb-result-active' : ''}`}
                      onClick={() => goTo(p)}
                      onMouseEnter={() => setActive(i)}
                    >
                      <img src={p.img} alt={p.name} className="sb-result-img" />
                      <div className="sb-result-info">
                        <span className="sb-result-name">{highlight(p.name, query)}</span>
                        <span className="sb-result-model">{p.model}</span>
                      </div>
                      <span className="sb-result-price">{p.price} €</span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="sb-empty">
              <span>Žiadne výsledky pre „{query}"</span>
              <span className="sb-empty-sub">Skúste iný názov alebo značku</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
