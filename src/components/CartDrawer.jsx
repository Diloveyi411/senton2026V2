import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './CartDrawer.css'

function IconX() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
}
function IconArrow() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
}

export default function CartDrawer() {
  const { items, count, total, removeItem, updateQty, drawerOpen, setDrawerOpen } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={() => setDrawerOpen(false)} />
      <div className="cart-drawer">
        <div className="drawer-header">
          <div className="drawer-title">
            Košík
            {count > 0 && <span className="drawer-count">{count}</span>}
          </div>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)}>
            <IconX />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="drawer-empty">
            <div className="drawer-empty-icon">🛒</div>
            <h3>Košík je prázdny</h3>
            <p>Pridajte produkty z nášho e-shopu</p>
          </div>
        ) : (
          <div className="drawer-items">
            {items.map(item => (
              <div className="drawer-item" key={item.id}>
                <div className="drawer-item-img">
                  {item.img
                    ? <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                    : (item.icon || '📦')}
                </div>
                <div className="drawer-item-info">
                  <div className="drawer-item-name">{item.name}</div>
                  <div className="drawer-item-controls">
                    <button className="qty-btn" onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span className="qty-num">{item.qty}</span>
                    <button className="qty-btn" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    <button className="drawer-remove" onClick={() => removeItem(item.id)} title="Odstrániť">
                      <IconX />
                    </button>
                  </div>
                </div>
                <div className="drawer-item-price">{(item.price * item.qty)} €</div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="drawer-footer">
            <div>
              <div className="drawer-total-row">
                <span className="drawer-total-label">Celkom</span>
                <span className="drawer-total-price">{total} €</span>
              </div>
              <div className="drawer-total-shipping">Doprava zdarma po celom Slovensku</div>
            </div>
            <Link to="/kosik" className="btn-checkout" onClick={() => setDrawerOpen(false)}>
              Prejsť do košíka <IconArrow />
            </Link>
            <button className="btn-continue-shopping" onClick={() => setDrawerOpen(false)}>
              Pokračovať v nákupe
            </button>
          </div>
        )}
      </div>
    </>
  )
}
