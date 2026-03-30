import { Link } from 'react-router-dom'
import './HowToBuyPage.css'

function IconCart() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
}
function IconTruck() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
}
function IconCard() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
}
function IconCheck2() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
}
function IconPhone() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.95 5.95l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
function IconArrow() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}
function IconCheck() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
}

const steps = [
  {
    icon: <IconCart />,
    title: 'Vyberte produkt',
    desc: 'Prezrite si náš sortiment, porovnajte parametre a pridajte tovar do košíka. Neviete vybrať? Zavolajte nám - poradíme do 5 minút.',
    note: null,
  },
  {
    icon: <IconCard />,
    title: 'Vyplňte objednávku',
    desc: 'Zadajte dodacie údaje a zvoľte spôsob platby. Objednávku potvrdíte jedným kliknutím.',
    note: 'Platba pri prevzatí (dobierka) alebo bankovým prevodom.',
  },
  {
    icon: <IconTruck />,
    title: 'Expedujeme',
    desc: 'Objednávky prijaté do 12:00 odosielame ešte v ten istý pracovný deň. O odoslaní dostanete e-mail s číslom zásielky.',
    note: 'Priemerná doba doručenia: 2,3 dňa.',
  },
  {
    icon: <IconCheck2 />,
    title: 'Prevezmite tovar',
    desc: 'Kuriér vám doručí zásielku priamo domov. Platíte až pri prevzatí - žiadna platba vopred, žiadne riziko.',
    note: 'Pri poškodenom obale spíšte s kuriérom škodový protokol.',
  },
]

const deliveryItems = [
  { label: 'Cena dopravy', val: 'Zdarma po celom Slovensku' },
  { label: 'Dopravca', val: 'Toptrans EU' },
  { label: 'Expedícia', val: 'Do 12:00 → odosielame v ten istý deň' },
  { label: 'Priemerné doručenie', val: '2,3 dňa od objednávky' },
  { label: 'Osobný odber', val: 'Kosatcová 2, Košice (Po–Pia 8:00–17:00)' },
]

const paymentItems = [
  { title: 'Dobierka', desc: 'Platíte hotovosťou alebo kartou priamo kuriérovi pri prevzatí. Bez rizika, bez zálohy.' },
  { title: 'Bankový prevod', desc: 'Platba vopred na náš účet. Tovar expedujeme ihneď po pripísaní platby.' },
]

const returnItems = [
  'Tovar môžete vrátiť do 14 dní od prevzatia bez udania dôvodu.',
  'Reklamácie vybavujeme do 30 dní - väčšinou podstatne rýchlejšie.',
  'Pokazený spotrebič nemusíte priniesť k nám - technik značky príde priamo k vám.',
  'Pri prevzatí vždy skontrolujte obal. Poškodenie nahláste kuriérovi na mieste.',
]

export default function HowToBuyPage() {
  return (
    <main className="htb-page">
      <div className="container">

        {/* Breadcrumb */}
        <nav className="htb-breadcrumb">
          <Link to="/">Domov</Link>
          <span>/</span>
          <span>Ako nakupovať</span>
        </nav>

        {/* Header */}
        <div className="htb-header">
          <div className="htb-eyebrow">Ako nakupovať</div>
          <h1 className="htb-title">Jednoduchý nákup<br />od výberu po doručenie</h1>
          <p className="htb-desc">
            Celý proces trvá pár minút. Objednávate bezpečne, platíte až pri prevzatí a tovar máte väčšinou do 2 dní.
          </p>
        </div>

        {/* Kroky */}
        <section className="htb-steps">
          {steps.map((s, i) => (
            <div key={i} className="htb-step">
              <div className="htb-step-number">{i + 1}</div>
              <div className="htb-step-icon">{s.icon}</div>
              <div className="htb-step-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {s.note && <div className="htb-step-note">{s.note}</div>}
              </div>
            </div>
          ))}
        </section>

        <div className="htb-grid">

          {/* Doprava */}
          <section className="htb-card">
            <div className="htb-card-header">
              <div className="htb-card-icon"><IconTruck /></div>
              <h2>Doprava</h2>
            </div>
            <ul className="htb-detail-list">
              {deliveryItems.map((item, i) => (
                <li key={i}>
                  <span className="htb-detail-label">{item.label}</span>
                  <span className="htb-detail-val">{item.val}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Platba */}
          <section className="htb-card">
            <div className="htb-card-header">
              <div className="htb-card-icon"><IconCard /></div>
              <h2>Platba</h2>
            </div>
            <div className="htb-payment-list">
              {paymentItems.map((item, i) => (
                <div key={i} className="htb-payment-item">
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Vrátenie & reklamácia */}
          <section className="htb-card htb-card-wide">
            <div className="htb-card-header">
              <div className="htb-card-icon"><IconCheck2 /></div>
              <h2>Vrátenie tovaru & reklamácia</h2>
            </div>
            <ul className="htb-check-list">
              {returnItems.map((item, i) => (
                <li key={i}>
                  <span className="htb-check-icon"><IconCheck /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* CTA */}
        <div className="htb-cta">
          <div>
            <h3>Máte otázku pred objednaním?</h3>
            <p>Zavolajte nám - odpovieme hneď.</p>
          </div>
          <div className="htb-cta-btns">
            <a href="tel:+421905901500" className="htb-btn-primary">
              <IconPhone /> +421 905 901 500
            </a>
            <Link to="/kategoria/chladnicky" className="htb-btn-secondary">
              Prezrieť ponuku <IconArrow />
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
