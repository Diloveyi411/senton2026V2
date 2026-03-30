import { useState } from 'react'
import './CallbackModal.css'

function PhoneIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.95 5.95l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function CallbackModal({ onClose }) {
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (phone.length < 9) return
    setSubmitted(true)
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Zavrieť">
          <CloseIcon />
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon"><CheckIcon /></div>
            <h2>Zavoláme vám!</h2>
            <p>Prijali sme váš požiadavok. Ozveme sa vám čo najskôr, zvyčajne do 30 minút počas pracovnej doby.</p>
          </div>
        ) : (
          <>
            <div className="modal-icon"><PhoneIcon /></div>
            <h2>Zavolajte mi späť</h2>
            <p>Zanechajte nám číslo a ozveme sa vám do 30 minút. Poradíme vám s výberom alebo zodpovieme vaše otázky.</p>
            <form onSubmit={handleSubmit}>
              <div className="modal-field">
                <label htmlFor="phone">Vaše telefónne číslo</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+421 9XX XXX XXX"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <button className="modal-submit" type="submit">
                Zavolajte mi späť
              </button>
            </form>
            <p className="modal-note">Pracovná doba: Po–Pia 8:00–17:00</p>
          </>
        )}
      </div>
    </div>
  )
}
