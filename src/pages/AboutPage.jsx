import { Link } from 'react-router-dom'
import './AboutPage.css'

function IconPhone() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.95 5.95l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
function IconMail() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
function IconMapPin() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
}
function IconClock() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function IconArrow() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

const milestones = [
  { year: '1991', text: 'Senton otvára dvere v Košiciach. Začíname predávať bielu techniku v čase, keď e-shop ešte ani neexistoval ako pojem.' },
  { year: '2000', text: 'Rozšírenie sortimentu o kuchynské spotrebiče a digestory. Budujeme reputáciu ako odborný poradca, nielen predajca.' },
  { year: '2010', text: 'Spúšťame e-shop a začíname rozvážať po celom Slovensku. Zákazníci z Bratislavy, Žiliny aj Prešova nakupujú rovnako jednoducho ako tí z Košíc.' },
  { year: '2026', text: 'Viac ako 1 900 overených recenzií na Heureka, hodnotenie 4,9/5 a 100 % zákazníkov, ktorí by nás odporučili. Robíme to isté, čo vždy - len lepšie.' },
]

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="container">

        {/* Breadcrumb */}
        <nav className="about-breadcrumb">
          <Link to="/">Domov</Link>
          <span>/</span>
          <span>O nás</span>
        </nav>

        {/* Hero */}
        <div className="about-hero">
          <div className="about-hero-text">
            <div className="about-eyebrow">O nás</div>
            <h1 className="about-title">35 rokov<br />robíme to správne</h1>
            <p className="about-desc">
              Sme rodinná firma z Košíc. Od roku 1991 pomáhame ľuďom vybrať si spotrebič, ktorý im bude slúžiť roky - bez zbytočného tlaku a s osobným prístupom, na ktorý sme hrdí.
            </p>
          </div>
          <div className="about-hero-stats">
            {[
              { val: '1991', label: 'Rok vzniku' },
              { val: '35+', label: 'Rokov na trhu' },
              { val: '4,9★', label: 'Heureka hodnotenie' },
              { val: '100 %', label: 'Zákazníkov odporúča' },
              { val: '5★', label: 'Google hodnotenie', sub: '8 recenzií' },
            ].map((s, i) => (
              <div key={i} className="about-stat">
                <strong>{s.val}</strong>
                <span>{s.label}</span>
                {s.sub && <span className="about-stat-sub">{s.sub}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Príbeh */}
        <section className="about-story">
          <div className="about-story-text">
            <h2>Náš príbeh</h2>
            <p>
              Senton vznikol v Košiciach v roku 1991 ako malý predaj domácich spotrebičov. V dobe, keď sa ešte nakupovalo výlučne osobne, sme stavili na jednoduchú vec: poctivý prístup a dobrá rada zadarmo.
            </p>
            <p>
              Postupom rokov sme rozšírili sortiment, spustili e-shop a začali rozvážať po celom Slovensku. Ale jedna vec sa nezmenila - zákazník dostane rovnakú pozornosť, či nakupuje online alebo príde k nám osobne na Kosatcovú.
            </p>
            <p>
              Dnes máme za sebou tisíce spokojných zákazníkov a viac než 1 900 overených recenzií. Nie preto, že by sme boli najväčší. Ale preto, že nám záleží.
            </p>
          </div>
          <div className="about-timeline">
            {milestones.map((m, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-text">{m.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Kontakt */}
        <section className="about-contact">
          <h2 className="about-contact-title">Kde nás nájdete</h2>
          <div className="about-contact-grid">
            <div className="about-contact-info">
              <div className="contact-row">
                <span className="contact-icon"><IconMapPin /></span>
                <div>
                  <strong>Adresa</strong>
                  <a href="https://maps.google.com/?q=Kosatcova+2+Kosice" target="_blank" rel="noreferrer">
                    Kosatcová 2, 040 01 Košice
                  </a>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-icon"><IconClock /></span>
                <div>
                  <strong>Otváracie hodiny</strong>
                  <span>Po – Pia: 8:00 – 17:00</span>
                  <span>So – Ne: Zatvorené</span>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-icon"><IconPhone /></span>
                <div>
                  <strong>Telefón</strong>
                  <a href="tel:+421905901500">+421 905 901 500</a>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-icon"><IconMail /></span>
                <div>
                  <strong>E-mail</strong>
                  <a href="mailto:senton@senton.sk">senton@senton.sk</a>
                </div>
              </div>
            </div>

            <div className="about-map">
              <iframe
                title="Senton mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.223635226952!2d21.275630049674465!3d48.709151907202845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473edfdcbd4e0133%3A0x258d4830fa692001!2sSENTON%20-%20Internetov%C3%A9%20elektro!5e0!3m2!1ssk!2scz!4v1774839319146!5m2!1ssk!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="about-cta">
          <div>
            <h3>Potrebujete poradiť?</h3>
            <p>Zavolajte nám alebo si prezrite náš sortiment.</p>
          </div>
          <div className="about-cta-btns">
            <a href="tel:+421905901500" className="about-btn-primary">
              <IconPhone /> +421 905 901 500
            </a>
            <Link to="/kategoria/chladnicky" className="about-btn-secondary">
              Prezrieť ponuku <IconArrow />
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
