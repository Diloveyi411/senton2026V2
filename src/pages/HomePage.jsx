import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { activeCategories } from '../data/categories'
import { products, shopReviews } from '../data/products'
import CallbackModal from '../components/CallbackModal'
import './HomePage.css'

const heroOffers = products.filter(p => p.badges?.includes('AKCIA'))

// ── SVG ikony pre "Prečo u nás" ──────────────────────────
function IconTruck() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
}
function IconStore() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
}
function IconClock() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function IconCard() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
}
function IconTag() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
}
function IconAward() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>
}
function IconChevron() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
}
function IconArrow() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}
function IconPhone() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.95 5.95l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
function IconCheck() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
}
function IconStar({ size = 15 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
}

// ── Ikony kategórií ───────────────────────────────────────
const categoryIcons = {
  chladnicky:  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="9" y1="6" x2="9" y2="8"/><line x1="9" y1="14" x2="9" y2="18"/></svg>,
  digestory:   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="8" rx="2"/><path d="M7 11v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6"/><line x1="12" y1="3" x2="12" y2="11"/></svg>,
  kavovary:    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>,
  mikrovlnky:  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M18 9v6"/><rect x="5" y="8" width="9" height="8" rx="1"/></svg>,
  pracky:      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="12" cy="13" r="4"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="10" y1="6" x2="10.01" y2="6"/></svg>,
  sporaky:     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="7" cy="9" r="1.5"/><circle cx="12" cy="9" r="1.5"/><circle cx="17" cy="9" r="1.5"/><rect x="5" y="14" width="14" height="3" rx="1"/></svg>,
  televizory:  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  umyvacky:    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="2" width="18" height="20" rx="2"/><circle cx="12" cy="12" r="4"/><line x1="8" y1="6" x2="8.01" y2="6"/></svg>,
  'varne-dosky': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="7" cy="12" r="2"/><circle cx="17" cy="12" r="2"/><circle cx="12" cy="9" r="1.5"/></svg>,
}

// ── Dáta ─────────────────────────────────────────────────
const whyItems = [
  { icon: <IconTruck />,  title: 'Doprava zdarma po celom Slovensku', desc: 'Doručíme priamo k vám domov bez príplatku. Platí pre všetok tovar v našej ponuke.' },
  { icon: <IconStore />,  title: 'Osobný odber v Košiciach',           desc: 'Prídite si po tovar osobne na Kosatcovú 2 v Košiciach. Bez čakania, hneď k dispozícii.' },
  { icon: <IconClock />,  title: 'Expedícia v deň objednávky',         desc: 'Objednávky prijaté do 12:00 expedujeme ešte v ten istý deň. Na druhý deň máte tovar doma.' },
  { icon: <IconCard />,   title: 'Platba na dobierku',                 desc: 'Platíte až pri prevzatí tovaru. Žiadna platba vopred, žiadne riziko.' },
  { icon: <IconTag />,    title: 'Najlepšia cena alebo zľava',         desc: 'Našli ste rovnaký tovar lacnejšie? Kontaktujte nás a cenu upravíme. Pri 3+ kusoch nad 300 €/ks dostanete množstevnú zľavu.' },
  { icon: <IconAward />,  title: '35 rokov skúseností',                desc: 'Na slovenskom trhu od roku 1991. Poradíme vám s výberom a odporučíme správny spotrebič pre váš domov.' },
]

const faqItems = [
  { q: 'Kedy presne mi tovar príde?',           a: 'Pri objednávke do 12:00 expedujeme v ten istý pracovný deň - tovar máte doma na druhý deň. Objednávky po 12:00 expedujeme nasledujúci pracovný deň. O odoslaní dostanete e-mail s číslom zásielky.' },
  { q: 'Kto vynesie spotrebič do bytu?',        a: 'Štandardná doprava zahŕňa doručenie k vchodovým dverám. Vynášaciu službu do bytu zabezpečíme na požiadanie - stačí nám to povedať pri objednávke alebo zavolať na +421 905 901 500.' },
  { q: 'Čo so starým spotrebičom?',             a: 'Ponúkame odvoz starého spotrebiča cez špedíciu Toptrans EU. Táto služba je spoplatnená. Kontaktujte nás pre aktuálny cenník a dohodnutie termínu.' },
  { q: 'Čo ak tovar príde poškodený?',          a: 'Pri prevzatí zásielky skontrolujte obal. Ak je obal poškodený, spíšte s kuriérom škodový protokol a kontaktujte nás na senton@senton.sk alebo +421 905 901 500. Situáciu vyriešime okamžite.' },
  { q: 'Ako prebieha reklamácia?',              a: 'Reklamácie vybavujeme podstatne rýchlejšie ako zákonom stanovených 30 dní. Pokazený spotrebič nemusíte priniesť k nám - stačí kontaktovať servis danej značky a technik príde priamo k vám domov.' },
]

const brands = ['Electrolux', 'Bosch', 'Whirlpool', 'Samsung', 'DeLonghi', 'Siemens', 'LG']

// ── Komponenty ────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <div className="faq-list">
      {faqItems.map((item, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            {item.q}
            <span className="faq-chevron"><IconChevron /></span>
          </button>
          <div className="faq-answer">{item.a}</div>
        </div>
      ))}
    </div>
  )
}

// ── HomePage ──────────────────────────────────────────────
export default function HomePage() {
  const [callbackOpen, setCallbackOpen] = useState(false)
  const [offerIdx, setOfferIdx] = useState(0)

  const next = useCallback(() => setOfferIdx(i => (i + 1) % heroOffers.length), [])
  const prev = () => setOfferIdx(i => (i - 1 + heroOffers.length) % heroOffers.length)

  useEffect(() => {
    const t = setInterval(next, 4500)
    return () => clearInterval(t)
  }, [next])

  const offer = heroOffers[offerIdx]

  return (
    <main>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg-pattern" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-stars">★★★★★</span>
              1 931 overených recenzií na Heureka · 35 rokov na trhu
            </div>
            <h1 className="hero-title">
              Najlepšia cena<br /><span>bez kompromisov.</span>
            </h1>
            <p className="hero-desc">
              Ak nájdete lacnejšie, dorovnáme. K tomu rýchle doručenie a podpora pri výbere.
            </p>
            <div className="hero-ctas">
              <Link to="/kategoria/chladnicky" className="btn-primary">
                Prezrieť ponuku <IconArrow />
              </Link>
              <Link to="/poradenstvo" className="btn-secondary">
                Poradiť sa zadarmo
              </Link>
            </div>
            <div className="hero-trust">
              {[
                { val: '2,3 dna', label: 'Priem. dodanie' },
                { val: '0 €',     label: 'Doprava' },
                { val: '35 r.',   label: 'Skúsenosti' },
                { val: '4,9★',   label: '1 931 recenzií' },
              ].map((item, i) => (
                <div key={i} className="hero-trust-item">
                  <strong>{item.val}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-offer-card">
              <div className="hero-offer-img">
                <img src={offer.img} alt={offer.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 8 }} />
                {heroOffers.length > 1 && (
                  <>
                    <button className="offer-nav offer-nav-prev" onClick={prev} aria-label="Predchádzajúci">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>
                    <button className="offer-nav offer-nav-next" onClick={next} aria-label="Nasledujúci">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  </>
                )}
              </div>
              <div className="hero-offer-body">
                <div className="offer-badge-row">
                  <span className="offer-badge">AKCIA DŇA</span>
                  {heroOffers.length > 1 && (
                    <div className="offer-dots">
                      {heroOffers.map((_, i) => (
                        <button
                          key={i}
                          className={`offer-dot${i === offerIdx ? ' active' : ''}`}
                          onClick={() => setOfferIdx(i)}
                          aria-label={`Ponuka ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <h3>{offer.name}</h3>
                <p>{offer.model}</p>
                <div className="offer-price-row">
                  <span className="offer-price">{offer.price} €</span>
                  <span className="offer-price-old">{offer.oldPrice} €</span>
                  <span className="offer-price-save">−{offer.savingsPct}%</span>
                </div>
                <Link to={`/produkt/${offer.slug}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Zobraziť produkt <IconArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social proof bar ── */}
      <section className="brands-bar">
        <div className="container brands-bar-inner">
          <span className="brands-bar-label">Predávame značky</span>
          <div className="brands-list">
            {brands.map(b => (
              <span key={b} className="brand-item">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kategórie ── */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Ponuka</div>
            <h2 className="section-title">Čo hľadáte?</h2>
          </div>
          <div className="categories-grid">
            {activeCategories.map(cat => (
              <Link key={cat.slug} to={`/kategoria/${cat.slug}`} className="category-card">
                <div className="category-icon">
                  {categoryIcons[cat.slug]}
                </div>
                <span className="category-label">{cat.label}</span>
                <span className="category-arrow"><IconArrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prečo u nás ── */}
      <section className="why-section" id="preco-u-nas">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Prečo Senton</div>
            <h2 className="section-title">Viac než len e-shop</h2>
          </div>
          <div className="why-grid">
            {whyItems.map((item, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Heureka recenzie ── */}
      <section className="reviews-section" id="recenzie">
        <div className="container">
          <div className="reviews-header">
            <div>
              <div className="section-eyebrow">Overené zákazníkmi</div>
              <h2 className="section-title">Čo hovoria naši zákazníci</h2>
            </div>
            <a
              href="https://obchody.heureka.sk/senton-sk/recenze/overene"
              target="_blank"
              rel="noopener noreferrer"
              className="heureka-badge"
            >
              <span className="heureka-badge-logo">heureka</span>
              <span className="heureka-badge-score">4,9 / 5</span>
            </a>
          </div>

          <div className="reviews-stats">
            {[
              { val: '4,9', label: 'Hodnotenie', sub: 'z 5 bodov' },
              { val: '1 931', label: 'Recenzií', sub: 'overených zákazníkov' },
              { val: '100 %', label: 'Odporúča', sub: 'nákup u nás' },
              { val: '2,3 dňa', label: 'Priemerné doručenie', sub: 'od objednávky' },
            ].map((s, i) => (
              <div key={i} className="reviews-stat">
                <strong>{s.val}</strong>
                <span>{s.label}</span>
                <span className="reviews-stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>

          <div className="reviews-grid">
            {shopReviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="review-star"><IconStar size={14} /></span>
                  ))}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <span className="review-author-name">{r.author.split(',')[0]}</span>
                  <span className="review-author-badge">
                    <IconCheck /> overená recenzia
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-footer">
            <a
              href="https://obchody.heureka.sk/senton-sk/recenze/overene"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-all-link"
            >
              Zobraziť všetky recenzie na Heureka <IconArrow />
            </a>
          </div>
        </div>
      </section>

      {/* ── Telefónna podpora ── */}
      <section className="phone-section">
        <div className="container phone-inner">
          <div className="phone-left">
            <div className="phone-eyebrow">Osobné poradenstvo</div>
            <h2 className="phone-title">Pomôžeme vybrať<br />do 5 minút</h2>
            <p className="phone-desc">
              Neviete si vybrať? Zavolajte nám. Náš poradca vám odporučí správny spotrebič podľa vašich potrieb a rozpočtu - bez zbytočného presviedčania.
            </p>
            <div className="phone-perks">
              <span className="phone-perk"><span className="phone-perk-check"><IconCheck /></span>Poradenstvo pre vstavané spotrebiče</span>
              <span className="phone-perk"><span className="phone-perk-check"><IconCheck /></span>Kuchynské sety na mieru</span>
              <span className="phone-perk"><span className="phone-perk-check"><IconCheck /></span>Asistovaný výber pri košíku nad 500 €</span>
            </div>
          </div>
          <div className="phone-right">
            <a href="tel:+421905901500" className="btn-phone">
              <IconPhone />
              +421 905 901 500
            </a>
            <button className="btn-callback" onClick={() => setCallbackOpen(true)}>
              Zavolajte mi späť
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="container faq-inner">
          <div className="faq-left">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: 16 }}>
              <div className="section-eyebrow">Časté otázky</div>
              <h2 className="section-title">Doručenie<br />& servis</h2>
            </div>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 380 }}>
              Žiadne prekvapenia po objednaní. Čo potrebujete vedieť pred aj po dodaní.
            </p>
          </div>
          <div className="faq-right">
            <FAQ />
          </div>
        </div>
      </section>

      {/* ── Callback Modal ── */}
      {callbackOpen && <CallbackModal onClose={() => setCallbackOpen(false)} />}

    </main>
  )
}
