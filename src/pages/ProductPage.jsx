import { useState, useRef, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CallbackModal from '../components/CallbackModal'
import { useCart } from '../context/CartContext'
import { getBySlug } from '../data/products'
import './ProductPage.css'

// ── Ikony ────────────────────────────────────────────────
function IconCheck({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
}
function IconTruck({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
}
function IconShield({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
}
function IconPhone({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.95 5.95l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
function IconTag({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
}
function IconCart({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
}
function IconClock({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function IconReturn({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4"/></svg>
}
function IconChevronDown({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
}

// ── Doručenie ────────────────────────────────────────────
function getDeliveryDate() {
  const now = new Date()
  const days = ['nedeľa','pondelok','utorok','streda','štvrtok','piatok','sobota']
  const months = ['jan','feb','mar','apr','máj','jún','júl','aug','sep','okt','nov','dec']
  const cutoff = new Date(now)
  cutoff.setHours(12, 0, 0, 0)

  let delivery = new Date(now)
  delivery.setDate(delivery.getDate() + (now < cutoff ? 1 : 2))
  if (delivery.getDay() === 0) delivery.setDate(delivery.getDate() + 1)
  if (delivery.getDay() === 6) delivery.setDate(delivery.getDate() + 2)

  return {
    label: `${days[delivery.getDay()]} ${delivery.getDate()}. ${months[delivery.getMonth()]}`,
    today: now < cutoff,
  }
}

// ── Price match modal ────────────────────────────────────
function PriceMatchModal({ price, onClose }) {
  const [url, setUrl] = useState('')
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="pm-modal">
        <button className="modal-close" onClick={onClose} style={{
          position:'absolute', top:16, right:16, width:32, height:32,
          borderRadius:'50%', background:'var(--bg)', border:'none', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center', color:'var(--muted)'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {sent ? (
          <div style={{ textAlign:'center', padding:'12px 0' }}>
            <div style={{ width:56, height:56, background:'rgba(75,110,255,0.1)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', color:'var(--blue)' }}>
              <IconCheck size={28} />
            </div>
            <h2>Dostali sme to!</h2>
            <p>Overíme cenu a ozveme sa vám do 15 minút.</p>
          </div>
        ) : (
          <>
            <h2>Našli ste lepšiu cenu?</h2>
            <p>Pošlite nám link a my overíme do 15 minút. Ak je cena reálna, dorovnáme ju.</p>
            <div className="pm-sla">
              <IconClock size={14} /> Odpovieme do 15 minút v pracovnej dobe
            </div>
            <div className="pm-field">
              <label>Link na produkt u konkurencie</label>
              <input type="url" placeholder="https://..." value={url} onChange={e => setUrl(e.target.value)} />
            </div>
            <div className="pm-field">
              <label>Vaše telefónne číslo</label>
              <input type="tel" placeholder="+421 9XX XXX XXX" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <button
              className="btn-add-cart"
              style={{ marginTop: 4 }}
              onClick={() => (url || phone) && setSent(true)}
            >
              Odoslať
            </button>
            <div className="pm-or">alebo</div>
            <a
              href={`https://wa.me/421905901500?text=Nasiel+som+lepšiu+cenu+na+tento+produkt+(${price}+€).+Môžete+overiť?`}
              target="_blank"
              rel="noreferrer"
              className="pm-whatsapp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </>
        )}
      </div>
    </div>
  )
}

// ── Komponenta ───────────────────────────────────────────
export default function ProductPage() {
  const { slug } = useParams()
  const product = getBySlug(slug)

  const [callbackOpen, setCallbackOpen] = useState(false)
  const [pmOpen, setPmOpen] = useState(false)
  const [stickyVisible, setStickyVisible] = useState(false)
  const [activeImg, setActiveImg] = useState(0)
  const [specsOpen, setSpecsOpen] = useState(false)
  const buyBoxRef = useRef(null)
  const { addItem } = useCart()
  const delivery = getDeliveryDate()

  useEffect(() => {
    setActiveImg(0)
    setStickyVisible(false)
    setSpecsOpen(false)
  }, [slug])

  useEffect(() => {
    const el = buyBoxRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-64px 0px 0px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [product])

  if (!product) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2 style={{ marginBottom: 16 }}>Produkt nenájdený</h2>
        <Link to="/" style={{ color: 'var(--blue)', fontWeight: 600 }}>Späť na úvodnú stránku</Link>
      </div>
    )
  }

  function handleAddToCart() {
    addItem({ id: product.id, name: product.name, price: product.price, img: product.images[0] })
  }

  function renderCompCell(row, specObj, isCurrent = false) {
    if (row.isPrice) {
      return <span style={{ fontWeight: isCurrent ? 800 : 600, color: isCurrent ? 'var(--blue)' : 'var(--ink)' }}>{specObj.price} €</span>
    }
    const val = specObj[row.key]
    if (row.isBool) {
      return typeof val === 'boolean'
        ? (val ? <span className="yes">✓</span> : <span className="no">✗</span>)
        : val
    }
    return val
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Domov</Link>
          <span className="breadcrumb-sep">/</span>
          <Link to={`/kategoria/${product.categorySlug}`}>{product.categorySlug === 'sporaky' ? 'Sporáky' : product.categorySlug === 'umyvacky' ? 'Umývačky riadu' : product.categorySlug}</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>
      </div>

      {/* PDP grid */}
      <div className="container">
        <div className="pdp-grid">

          {/* Gallery */}
          <div className="pdp-gallery" ref={buyBoxRef}>
            <div className="pdp-main-img" style={{ background: '#f8f9fb', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--line)', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <img
                src={product.images[activeImg]}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 16 }}
              />
            </div>
            <div className="pdp-thumbnails" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {product.images.map((src, i) => (
                <div
                  key={i}
                  className={`pdp-thumb${activeImg === i ? ' active' : ''}`}
                  onClick={() => setActiveImg(i)}
                  style={{ background: '#f8f9fb', overflow: 'hidden', padding: 4 }}
                >
                  <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Buy box */}
          <div className="buy-box">

            <div className="pdp-badge-row">
              <span className="pdp-badge stock"><IconCheck size={11} /> Skladom</span>
              <span className="pdp-badge sale">AKCIA -{product.savingsPct}%</span>
            </div>

            <h1 className="pdp-title">{product.name}</h1>
            <p className="pdp-model">{product.fullModel}</p>

            {/* Heureka */}
            <div className="heureka-bar">
              <div className="heureka-score">
                <span className="heureka-stars">★★★★★</span>
                <span className="heureka-num">{product.heureka.score}</span>
              </div>
              <div className="heureka-divider" />
              <div className="heureka-stat">
                <strong>{product.heureka.reviews}</strong>
                <span>recenzií</span>
              </div>
              <div className="heureka-divider" />
              <div className="heureka-stat">
                <strong>{product.heureka.recommend}%</strong>
                <span>odporúča</span>
              </div>
              <span className="heureka-logo">HEUREKA</span>
            </div>

            {/* Cena */}
            <div className="price-block">
              <div className="price-main-row">
                <span className="price-main">{product.price} €</span>
                <span className="price-old">{product.oldPrice} €</span>
                <span className="price-save">Ušetríte {product.savings} €</span>
              </div>
              <p className="price-installment">
                alebo <strong>od {product.installment} €/mesiac</strong> cez{' '}
                <a href="#homecredit">Home Credit</a> &middot; {product.installmentMonths} splátok
              </p>
            </div>

            {/* Benefity */}
            <div className="pdp-benefits">
              {product.benefits.map((b, i) => (
                <div className="pdp-benefit" key={i}>
                  <div className="benefit-icon"><IconCheck size={13} /></div>
                  <div className="pdp-benefit-text">
                    <strong>{b.title}</strong>
                    <span>{b.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Doručenie */}
            <div className="delivery-box">
              <div className="delivery-icon"><IconTruck size={18} /></div>
              <div className="delivery-text">
                <strong>Doručenie {delivery.label} &middot; doprava zdarma</strong>
                <span>{delivery.today ? 'Objednajte do 12:00 - expedujeme dnes' : 'Objednajte teraz - expedujeme zajtra'}</span>
              </div>
            </div>

            {/* Price match */}
            <button className="price-match" onClick={() => setPmOpen(true)}>
              <div className="price-match-left">
                <strong>Našli ste lepšiu cenu?</strong>
                <span>Overíme do 15 minút a dorovnáme</span>
              </div>
              <span className="price-match-cta">Napísať nám →</span>
            </button>

            {/* CTA */}
            <div className="pdp-cta-row">
              <button className="btn-add-cart" onClick={handleAddToCart}>
                <IconCart size={18} /> Vložiť do košíka
              </button>
              <button className="btn-callback-pdp" onClick={() => setCallbackOpen(true)}>
                <IconPhone size={15} /> Poradte mi s výberom
              </button>
            </div>

            {/* Trust badges */}
            <div className="trust-badges">
              <span className="trust-badge"><span className="trust-badge-icon"><IconReturn size={13} /></span>30 dní na vrátenie</span>
              <span className="trust-badge"><span className="trust-badge-icon"><IconShield size={13} /></span>Záruka 2 roky</span>
              <span className="trust-badge"><span className="trust-badge-icon"><IconTag size={13} /></span>Platba na dobierku</span>
            </div>

          </div>
        </div>
      </div>

      {/* Pre koho */}
      <section className="for-whom-section">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom: 8 }}>
            <div className="section-eyebrow" style={{ display:'inline-block', fontSize:12, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--blue)', fontFamily:'var(--font-ui)' }}>Pomôžeme sa rozhodnúť</div>
            <h2 className="section-title" style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(26px, 3vw, 36px)', color:'var(--ink)', letterSpacing:'-0.5px' }}>Pre koho je tento produkt?</h2>
          </div>
          <div className="for-whom-grid">
            <div className="for-whom-card good">
              <div className="for-whom-card-title">Ideálne ak...</div>
              <ul className="for-whom-list">
                {product.forWhom.good.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="for-whom-card" style={{ background: 'rgba(75,110,255,0.03)', borderColor: 'rgba(75,110,255,0.15)' }}>
              <div className="for-whom-card-title">Zvážte ak...</div>
              <ul className="for-whom-list">
                {product.forWhom.neutral.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="for-whom-card bad">
              <div className="for-whom-card-title">Nie je pre vás ak...</div>
              <ul className="for-whom-list">
                {product.forWhom.bad.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recenzie */}
      <section className="reviews-section">
        <div className="container">
          <div style={{ textAlign:'center' }}>
            <div className="section-eyebrow" style={{ display:'inline-block', fontSize:12, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--blue)', fontFamily:'var(--font-ui)' }}>Zákazníci o nás</div>
            <h2 className="section-title" style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(26px, 3vw, 36px)', color:'var(--ink)', letterSpacing:'-0.5px' }}>{product.heureka.score} z 5 &middot; {product.heureka.reviews} recenzií na Heureka</h2>
          </div>
          <div className="reviews-grid">
            {product.reviews.map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">"{r.text}"</p>
                <span className="review-author">{r.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technické špecifikácie */}
      <section className="specs-section">
        <div className="container">
          <button className="specs-toggle" onClick={() => setSpecsOpen(v => !v)}>
            <span>Technické špecifikácie</span>
            <span className="specs-toggle-icon" style={{ transform: specsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', display: 'flex' }}>
              <IconChevronDown size={18} />
            </span>
          </button>
          {specsOpen && (
            <div className="specs-table">
              {Object.entries(product.specsFull).map(([key, val]) => (
                <div className="specs-row" key={key}>
                  <span className="specs-key">{key}</span>
                  <span className="specs-val">{val}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Porovnanie */}
      <section className="comparison-section">
        <div className="container">
          <div style={{ textAlign:'center' }}>
            <div className="section-eyebrow" style={{ display:'inline-block', fontSize:12, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--blue)', fontFamily:'var(--font-ui)' }}>Porovnanie</div>
            <h2 className="section-title" style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(26px, 3vw, 36px)', color:'var(--ink)', letterSpacing:'-0.5px' }}>Ako stojí oproti alternatívam?</h2>
          </div>
          <div className="comparison-table">
            <div className="comparison-head">
              <div className="comparison-col-header" />
              <div className="comparison-col-header current">{product.shortName}</div>
              {product.alternatives.map(a => (
                <div className="comparison-col-header" key={a.name}>{a.name.split(' ').slice(-1)}</div>
              ))}
            </div>
            {product.compRows.map(row => (
              <div className="comparison-row" key={row.label}>
                <div className="comparison-cell">{row.label}</div>
                <div className="comparison-cell current">
                  {renderCompCell(row, product.specs, true)}
                </div>
                {product.alternatives.map(alt => (
                  <div className="comparison-cell" key={alt.name}>
                    {renderCompCell(row, alt, false)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className={`sticky-cta-bar${stickyVisible ? ' visible' : ''}`}>
        <div className="container sticky-cta-inner">
          <div className="sticky-cta-info">
            <span className="sticky-cta-name">{product.name}</span>
            <span className="sticky-cta-price">{product.price} €</span>
          </div>
          <div className="sticky-cta-actions">
            <button className="sticky-cta-callback" onClick={() => setCallbackOpen(true)}>
              <IconPhone size={14} /> Poradte mi
            </button>
            <button className="btn-add-cart sticky-btn" onClick={handleAddToCart}>
              <IconCart size={16} /> Vložiť do košíka
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {callbackOpen && <CallbackModal onClose={() => setCallbackOpen(false)} />}
      {pmOpen && <PriceMatchModal price={product.price} onClose={() => setPmOpen(false)} />}
    </div>
  )
}
