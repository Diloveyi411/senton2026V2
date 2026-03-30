import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CheckoutPage.css'

const STEPS = ['Kontakt', 'Doručenie', 'Platba']

function ProgressBar({ current }) {
  return (
    <div className="checkout-progress">
      {STEPS.map((step, i) => {
        const done    = i < current
        const active  = i === current
        return (
          <div key={step} className="progress-step-wrap">
            <div className={`progress-step${active ? ' active' : done ? ' done' : ''}`}>
              <div className="progress-dot">
                {done ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
              <span className="progress-label">{step}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`progress-line${done ? ' done' : ''}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function IconCheck({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
}
function IconShield({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
}
function IconLock({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
}
function IconTruck({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
}

const product = { name: 'Whirlpool AKZ9 6230 IX', model: 'Vstavaná rúra', price: 359, oldPrice: 489 }

const deliveryOptions = [
  { id: 'courier', name: 'Kuriér GLS', desc: 'Doručenie na adresu - zajtra', price: 0, priceFree: true },
  { id: 'pickup', name: 'Osobný odber', desc: 'Kosatcová 2, Košice - ihneď', price: 0, priceFree: true },
]

const paymentOptions = [
  { id: 'cod',      icon: '💵', name: 'Dobierka', desc: 'Platíte pri prevzatí tovaru' },
  { id: 'transfer', icon: '🏦', name: 'Bankový prevod', desc: 'Číslo účtu dostanete e-mailom' },
  { id: 'card',     icon: '💳', name: 'Platobná karta', desc: 'Visa, Mastercard' },
]

function Required() {
  return <span className="field-required" aria-label="povinné pole">*</span>
}

export default function CheckoutPage() {
  const [method, setMethod] = useState('guest')
  const [delivery, setDelivery] = useState('courier')
  const [payment, setPayment] = useState('cod')
  const [currentStep, setCurrentStep] = useState(0)

  // derive current step from form scroll / section completion
  useEffect(() => {
    function onScroll() {
      const s1 = document.getElementById('section-contact')
      const s2 = document.getElementById('section-delivery')
      const s3 = document.getElementById('section-payment')
      if (!s1 || !s2 || !s3) return
      const mid = window.innerHeight / 2
      const top3 = s3.getBoundingClientRect().top
      const top2 = s2.getBoundingClientRect().top
      if (top3 < mid) setCurrentStep(2)
      else if (top2 < mid) setCurrentStep(1)
      else setCurrentStep(0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', street: '', city: '', zip: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function set(field, val) {
    setForm(f => ({ ...f, [field]: val }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: null }))
  }

  function validate() {
    const e = {}
    if (!form.firstName.trim())  e.firstName = 'Meno je povinné'
    if (!form.lastName.trim())   e.lastName  = 'Priezvisko je povinné'
    if (!form.email.includes('@')) e.email   = 'Zadajte platnú e-mailovú adresu'
    if (form.phone.length < 9)   e.phone     = 'Zadajte platné telefónne číslo'
    if (delivery === 'courier') {
      if (!form.street.trim()) e.street = 'Ulica je povinná'
      if (!form.city.trim())   e.city   = 'Mesto je povinné'
      if (!form.zip.trim())    e.zip    = 'PSČ je povinné'
    }
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, background: 'rgba(75,110,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--blue)' }}>
          <IconCheck size={36} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: 'var(--ink)', marginBottom: 12 }}>Objednávka prijatá!</h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', marginBottom: 32, lineHeight: 1.6 }}>
          Potvrdenie sme poslali na {form.email}.<br />
          Zavoláme vám pred doručením.
        </p>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: 'var(--blue)', color: '#fff', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 15 }}>
          Späť na hlavnú stránku
        </Link>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <h1>Dokončiť objednávku</h1>
          <p>Vypĺňate len to, čo naozaj potrebujeme.</p>
          <ProgressBar current={currentStep} />
        </div>

        <div className="checkout-grid">
          <form onSubmit={handleSubmit} noValidate>

            {/* Metóda */}
            <div className="checkout-method">
              <div className={`method-card${method === 'guest' ? ' active' : ''}`} onClick={() => setMethod('guest')}>
                <div className="method-card-title">
                  Bez registrácie
                  <span className="method-recommended">ODPORÚČAME</span>
                </div>
                <div className="method-card-desc">Rýchle a jednoduché - žiadne heslo</div>
              </div>
              <div className={`method-card${method === 'login' ? ' active' : ''}`} onClick={() => setMethod('login')}>
                <div className="method-card-title">Prihlásenie</div>
                <div className="method-card-desc">Máte u nás účet? Prihláste sa</div>
              </div>
            </div>

            {/* Kontaktné údaje */}
            <div className="checkout-section" id="section-contact">
              <div className="checkout-section-title">
                <span className="checkout-section-num">1</span>
                Kontaktné údaje
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="form-row">
                  <div className="field">
                    <label>Meno <Required /></label>
                    <input type="text" placeholder="Ján" value={form.firstName} onChange={e => set('firstName', e.target.value)} className={errors.firstName ? 'error' : ''} autoComplete="given-name" />
                    {errors.firstName && <span className="field-error">{errors.firstName}</span>}
                  </div>
                  <div className="field">
                    <label>Priezvisko <Required /></label>
                    <input type="text" placeholder="Novák" value={form.lastName} onChange={e => set('lastName', e.target.value)} className={errors.lastName ? 'error' : ''} autoComplete="family-name" />
                    {errors.lastName && <span className="field-error">{errors.lastName}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label>E-mail <Required /></label>
                    <input type="email" placeholder="jan.novak@email.sk" value={form.email} onChange={e => set('email', e.target.value)} className={errors.email ? 'error' : ''} autoComplete="email" />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                    <span className="field-hint">Potvrdenie objednávky pošleme sem</span>
                  </div>
                  <div className="field">
                    <label>Telefón <Required /></label>
                    <input type="tel" placeholder="+421 9XX XXX XXX" value={form.phone} onChange={e => set('phone', e.target.value)} className={errors.phone ? 'error' : ''} autoComplete="tel" />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                    <span className="field-hint">Zavoláme pred doručením</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doprava */}
            <div className="checkout-section" id="section-delivery">
              <div className="checkout-section-title">
                <span className="checkout-section-num">2</span>
                Spôsob doručenia
              </div>
              <div className="delivery-options">
                {deliveryOptions.map(opt => (
                  <div key={opt.id} className={`delivery-option${delivery === opt.id ? ' active' : ''}`} onClick={() => setDelivery(opt.id)}>
                    <div className="delivery-radio">
                      <div className="delivery-radio-dot" />
                    </div>
                    <div className="delivery-option-info">
                      <div className="delivery-option-name">{opt.name}</div>
                      <div className="delivery-option-desc">{opt.desc}</div>
                    </div>
                    <div className={`delivery-option-price${opt.priceFree ? ' free' : ''}`}>
                      {opt.priceFree ? 'Zdarma' : `${opt.price} €`}
                    </div>
                  </div>
                ))}
              </div>

              {delivery === 'courier' && (
                <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div className="form-row single">
                    <div className="field">
                      <label>Ulica a číslo <Required /></label>
                      <input type="text" placeholder="Hlavná 1" value={form.street} onChange={e => set('street', e.target.value)} className={errors.street ? 'error' : ''} autoComplete="street-address" />
                      {errors.street && <span className="field-error">{errors.street}</span>}
                    </div>
                  </div>
                  <div className="form-row triple">
                    <div className="field">
                      <label>Mesto <Required /></label>
                      <input type="text" placeholder="Košice" value={form.city} onChange={e => set('city', e.target.value)} className={errors.city ? 'error' : ''} autoComplete="address-level2" />
                      {errors.city && <span className="field-error">{errors.city}</span>}
                    </div>
                    <div className="field">
                      <label>PSČ <Required /></label>
                      <input type="text" placeholder="040 01" value={form.zip} onChange={e => set('zip', e.target.value)} className={errors.zip ? 'error' : ''} autoComplete="postal-code" />
                      {errors.zip && <span className="field-error">{errors.zip}</span>}
                    </div>
                    <div className="field">
                      <label>Krajina</label>
                      <select defaultValue="SK" autoComplete="country">
                        <option value="SK">Slovensko</option>
                        <option value="CZ">Česká republika</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Platba */}
            <div className="checkout-section" id="section-payment">
              <div className="checkout-section-title">
                <span className="checkout-section-num">3</span>
                Spôsob platby
              </div>
              <div className="payment-options">
                {paymentOptions.map(opt => (
                  <div key={opt.id} className={`payment-option${payment === opt.id ? ' active' : ''}`} onClick={() => setPayment(opt.id)}>
                    <div className="delivery-radio" style={{ flexShrink: 0 }}>
                      {payment === opt.id && <div className="delivery-radio-dot" style={{ display: 'block' }} />}
                    </div>
                    <div className="payment-option-icon">{opt.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div className="payment-option-name">{opt.name}</div>
                      <div className="payment-option-desc">{opt.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </form>

          {/* Súhrn objednávky */}
          <div className="order-summary">
            <div className="summary-header">Súhrn objednávky</div>

            <div className="summary-item">
              <div className="summary-item-img">🔥</div>
              <div className="summary-item-info">
                <div className="summary-item-name">{product.name}</div>
                <div className="summary-item-model">{product.model}</div>
              </div>
              <div className="summary-item-price">{product.price} €</div>
            </div>

            <div className="summary-lines">
              <div className="summary-line">
                <span>Cena produktu</span>
                <span>{product.oldPrice} €</span>
              </div>
              <div className="summary-line saving">
                <span>Zľava</span>
                <span>-{product.oldPrice - product.price} €</span>
              </div>
              <div className="summary-line free">
                <span>Doprava</span>
                <span>Zdarma</span>
              </div>
              <div className="summary-line total">
                <span>Celkom</span>
                <span>{product.price} €</span>
              </div>
            </div>

            <div className="summary-trust">
              <div className="summary-trust-item">
                <span className="summary-trust-icon"><IconTruck /></span>
                Doručenie zajtra pri objednávke do 12:00
              </div>
              <div className="summary-trust-item">
                <span className="summary-trust-icon"><IconShield /></span>
                Záručná doba 2 roky
              </div>
              <div className="summary-trust-item">
                <span className="summary-trust-icon"><IconCheck /></span>
                30 dní na vrátenie bez udania dôvodu
              </div>
              <div className="summary-trust-item">
                <span className="summary-trust-icon"><IconLock /></span>
                Zabezpečená platba
              </div>
            </div>

            <button className="btn-order" onClick={handleSubmit}>
              <IconLock size={16} /> Záväzne objednať
            </button>

            <p className="order-legal">
              Kliknutím potvrdíte, že ste si prečítali{' '}
              <Link to="/obchodne-podmienky">obchodné podmienky</Link> a{' '}
              <Link to="/ochrana-udajov">ochranu osobných údajov</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
