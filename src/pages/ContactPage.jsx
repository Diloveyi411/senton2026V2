import { Link } from 'react-router-dom'
import './ContactPage.css'

function IconPhone() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.95 5.95l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
function IconMail() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
function IconClock() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function IconMapPin() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
}

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="container">

        <nav className="contact-breadcrumb">
          <Link to="/">Domov</Link>
          <span>/</span>
          <span>Kontakt</span>
        </nav>

        <div className="contact-header">
          <div className="contact-eyebrow">Kontakt</div>
          <h1 className="contact-title">Sme tu pre vás</h1>
          <p className="contact-desc">Zavolajte, napíšte alebo príďte osobne. Radi poradíme.</p>
        </div>

        {/* Hlavné kontaktné karty */}
        <div className="contact-cards">

          <div className="contact-card">
            <div className="contact-card-label">Telefón</div>
            <a href="tel:+421905901500" className="contact-card-primary">
              <IconPhone /> 0905 901 500
            </a>
            <a href="tel:+421917354720" className="contact-card-secondary">
              <IconPhone /> 0917 354 720
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-label">E-mail</div>
            <a href="mailto:senton@senton.sk" className="contact-card-primary">
              <IconMail /> senton@senton.sk
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-label">Adresa</div>
            <a
              href="https://maps.google.com/?q=Kosatcova+2+Kosice"
              target="_blank"
              rel="noreferrer"
              className="contact-card-primary"
            >
              <IconMapPin /> Kosatcová 2, 040 01 Košice
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-label">Otváracie hodiny</div>
            <div className="contact-card-hours">
              <span className="contact-card-primary" style={{ pointerEvents: 'none' }}>
                <IconClock /> Po – Pi: 09:00 – 16:30
              </span>
              <span className="contact-hours-closed">So – Ne: zatvorené</span>
            </div>
          </div>

        </div>

        {/* Dvojstĺpcový layout: info + mapa */}
        <div className="contact-layout">

          <div className="contact-info-col">

            {/* Výdajné miesto */}
            <div className="contact-block">
              <h2>Výdajné miesto</h2>
              <p className="contact-block-note">Kontaktné miesto pre styk so zákazníkmi · adresa na doručenie reklamácií</p>
              <div className="contact-detail-list">
                <div className="contact-detail-row">
                  <span className="contact-detail-icon"><IconMapPin /></span>
                  <div>
                    <div>Senton, spol. s r.o.</div>
                    <div>Kosatcová 2, 040 01 Košice</div>
                  </div>
                </div>
                <div className="contact-detail-row">
                  <span className="contact-detail-icon"><IconPhone /></span>
                  <div>
                    <a href="tel:+421905901500">0905 901 500</a>
                    <a href="tel:+421917354720">0917 354 720</a>
                  </div>
                </div>
                <div className="contact-detail-row">
                  <span className="contact-detail-icon"><IconClock /></span>
                  <div>
                    <div><strong>Výdaj tovaru:</strong></div>
                    <div>Po – Pi: 09:00 – 16:30</div>
                    <div>So – Ne: voľný deň</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fakturačné údaje */}
            <div className="contact-block">
              <h2>Fakturačné údaje</h2>
              <div className="contact-invoice-grid">
                <div className="contact-invoice-col">
                  <div className="contact-invoice-label">Obchodné meno</div>
                  <div className="contact-invoice-val">Senton, spol. s r.o.</div>
                  <div className="contact-invoice-label">Sídlo</div>
                  <div className="contact-invoice-val">Kosatcová 2, 040 01 Košice</div>
                  <div className="contact-invoice-label">IČO</div>
                  <div className="contact-invoice-val">36 186 813</div>
                  <div className="contact-invoice-label">DIČ</div>
                  <div className="contact-invoice-val">2020058293</div>
                  <div className="contact-invoice-label">IČ DPH</div>
                  <div className="contact-invoice-val">SK2020058293</div>
                </div>
                <div className="contact-invoice-col">
                  <div className="contact-invoice-label">VÚB banka</div>
                  <div className="contact-invoice-val">IBAN: SK30 0200 0000 0023 2077 4653</div>
                  <div className="contact-invoice-val contact-invoice-sub">SWIFT: SUBASKBX</div>
                  <div className="contact-invoice-label" style={{ marginTop: 12 }}>Tatrabanka</div>
                  <div className="contact-invoice-val">IBAN: SK71 1100 0000 0029 4904 2599</div>
                  <div className="contact-invoice-val contact-invoice-sub">BIC (SWIFT): TATRSKBX</div>
                </div>
              </div>
            </div>

          </div>

          {/* Mapa */}
          <div className="contact-map-col">
            <div className="contact-map">
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
            <a
              href="https://maps.google.com/?q=Senton+Kosatcova+2+Kosice"
              target="_blank"
              rel="noreferrer"
              className="contact-map-link"
            >
              <IconMapPin /> Otvoriť v Google Mapách
            </a>
          </div>

        </div>

      </div>
    </main>
  )
}
