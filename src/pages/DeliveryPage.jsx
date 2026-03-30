import { Link } from 'react-router-dom'
import './DeliveryPage.css'

function IconTruck() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
}
function IconStore() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
}
function IconPhone() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.95 5.95l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}

const deliveryRows = [
  {
    kurier: '1x kuriér',
    sluzba: '',
    popis: 'Bez vynášky',
    oblast: 'celá SR',
    cena: '0,00 €',
    highlight: true,
  },
  {
    kurier: '1x kuriér + asistencia',
    sluzba: 'Top Comfort',
    popis: 'Vynáška spotrebiča do 80 kg',
    oblast: 'celá SR',
    cena: '19,00 €',
    highlight: false,
  },
  {
    kurier: '1x kuriér',
    sluzba: '',
    popis: 'Odvoz starého spotrebiča',
    oblast: 'celá SR',
    cena: '38,40 €',
    highlight: false,
  },
  {
    kurier: '2x kuriér',
    sluzba: 'Top Comfort plus',
    popis: 'Vynáška spotrebiča + odvoz starého spotrebiča',
    oblast: 'BA, TN, NR, ZA, BB, PP, KE',
    cena: '57,40 €',
    highlight: false,
  },
  {
    kurier: '1x kuriér + asistencia',
    sluzba: '',
    popis: 'Vynáška spotrebiča + odvoz starého spotrebiča',
    oblast: 'celá SR',
    cena: '43,80 €',
    highlight: false,
  },
]

export default function DeliveryPage() {
  return (
    <main className="delivery-page">
      <div className="container">

        <nav className="delivery-breadcrumb">
          <Link to="/">Domov</Link>
          <span>/</span>
          <span>Doprava a poštovné</span>
        </nav>

        <div className="delivery-header">
          <div className="delivery-eyebrow">Doprava a poštovné</div>
          <h1 className="delivery-title">Doručíme priamo k vám</h1>
          <p className="delivery-desc">Základná doprava po celom Slovensku je zdarma. Pre vynášku alebo odvoz starého spotrebiča si vyberte doplnkovú službu.</p>
        </div>

        {/* Hlavné info karty */}
        <div className="delivery-highlights">
          <div className="delivery-highlight-card free">
            <div className="delivery-highlight-icon"><IconTruck /></div>
            <div>
              <strong>Doprava ZDARMA</strong>
              <p>Doprava v rámci Slovenska po prvé uzamykateľné dvere na všetky spotrebiče je zdarma.</p>
            </div>
          </div>
          <div className="delivery-highlight-card">
            <div className="delivery-highlight-icon"><IconStore /></div>
            <div>
              <strong>Osobný odber zadarmo</strong>
              <p>Vyzdvihnite si tovar osobne na Kosatcovej 2 v Košiciach. Poplatok: 0,00 €.</p>
            </div>
          </div>
        </div>

        {/* Tabuľka dopravy */}
        <section className="delivery-section">
          <h2>Cenník dopravných služieb</h2>
          <p className="delivery-section-note">Dopravu zabezpečuje prepravná spoločnosť <strong>TOPTRANS EU, a.s.</strong></p>
          <div className="delivery-table-wrap">
            <table className="delivery-table">
              <thead>
                <tr>
                  <th>Typ dopravy</th>
                  <th>Služba</th>
                  <th>Popis</th>
                  <th>Oblasť</th>
                  <th>Cena</th>
                </tr>
              </thead>
              <tbody>
                {deliveryRows.map((row, i) => (
                  <tr key={i} className={row.highlight ? 'row-free' : ''}>
                    <td>{row.kurier}</td>
                    <td>{row.sluzba ? <span className="delivery-service-tag">{row.sluzba}</span> : '–'}</td>
                    <td>{row.popis}</td>
                    <td className="delivery-area">{row.oblast}</td>
                    <td className="delivery-price">{row.cena}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Doplňujúce info */}
        <section className="delivery-notes">
          <div className="delivery-note-item">
            <strong>Kedy expedujeme?</strong>
            <p>Objednávky prijaté do 12:00 odosielame ešte v ten istý pracovný deň. Priemerná doba doručenia sú 2,3 dňa.</p>
          </div>
          <div className="delivery-note-item">
            <strong>Prevzatie zásielky</strong>
            <p>Pri prevzatí vždy skontrolujte obal. Ak je poškodený, spíšte s kuriérom škodový protokol a kontaktujte nás na <a href="mailto:senton@senton.sk">senton@senton.sk</a>.</p>
          </div>
          <div className="delivery-note-item">
            <strong>Doručenie do zahraničia</strong>
            <p>Dopravu mimo územia SR momentálne nezabezpečujeme. V prípade záujmu nás kontaktujte.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="delivery-cta">
          <div>
            <h3>Otázky k doprave?</h3>
            <p>Zavolajte nám, radi poradíme.</p>
          </div>
          <a href="tel:+421905901500" className="delivery-btn">
            <IconPhone /> +421 905 901 500
          </a>
        </div>

      </div>
    </main>
  )
}
