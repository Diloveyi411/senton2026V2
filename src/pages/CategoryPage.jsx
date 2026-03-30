import { Link, useParams } from 'react-router-dom'
import { categories } from '../data/categories'
import { getByCategory } from '../data/products'
import { useCart } from '../context/CartContext'
import './CategoryPage.css'

function IconCart({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
}
function IconStar({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
}
function IconChevron({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
}
function IconPhone({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.95 5.95l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}

function ProductCard({ product }) {
  const { addItem } = useCart()
  const discount = product.oldPrice ? Math.round(100 - (product.price / product.oldPrice) * 100) : 0

  function handleAdd(e) {
    e.preventDefault()
    addItem({ id: product.id, name: product.name, price: product.price, img: product.img })
  }

  return (
    <Link to={`/produkt/${product.slug}`} className="product-card">
      <div className="product-card-img">
        {product.img
          ? <img src={product.img} alt={product.name} />
          : <span className="product-card-placeholder">📦</span>
        }
        {product.badges?.map(b => (
          <span className="product-card-badge" key={b}>{b}</span>
        ))}
        {discount > 0 && (
          <span className="product-card-badge sale">-{discount}%</span>
        )}
      </div>
      <div className="product-card-body">
        <div className="product-card-brand">{product.brand}</div>
        <div className="product-card-name">{product.shortName || product.name}</div>
        <div className="product-card-model">{product.model}</div>
        {product.heureka && (
          <div className="product-card-rating">
            <IconStar size={12} />
            <span>{product.heureka.score}</span>
            <span className="product-card-reviews">({product.heureka.reviews})</span>
          </div>
        )}
        <div className="product-card-price-row">
          <div>
            <div className="product-card-price">{product.price} €</div>
            {product.oldPrice && <div className="product-card-old-price">{product.oldPrice} €</div>}
          </div>
          <button className="product-card-add" onClick={handleAdd} title="Vložiť do košíka">
            <IconCart size={15} />
          </button>
        </div>
      </div>
    </Link>
  )
}

function EmptyState({ categoryLabel }) {
  return (
    <div className="cat-empty">
      <div className="cat-empty-icon">🔧</div>
      <h3>Pracujeme na tom</h3>
      <p>Kategória <strong>{categoryLabel}</strong> bude čoskoro dostupná.</p>
      <p>Zavolajte nám a poradíme vám s výberom.</p>
      <a href="tel:+421905901500" className="cat-empty-btn">
        <IconPhone size={15} /> +421 905 901 500
      </a>
    </div>
  )
}

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find(c => c.slug === slug)
  const products = getByCategory(slug)

  if (!category) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Kategória nenájdená</h2>
        <Link to="/" style={{ color: 'var(--blue)', fontWeight: 600 }}>Späť na úvodnú stránku</Link>
      </div>
    )
  }

  return (
    <div className="category-page">
      <div className="container">

        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Domov</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{category.label}</span>
        </nav>

        <div className="cat-header">
          <div>
            <h1 className="cat-title">{category.label}</h1>
            {products.length > 0 && (
              <p className="cat-count">{products.length} {products.length === 1 ? 'produkt' : products.length < 5 ? 'produkty' : 'produktov'}</p>
            )}
          </div>
        </div>

        {products.length === 0 ? (
          <EmptyState categoryLabel={category.label} />
        ) : (
          <div className="cat-layout">
            {/* Sidebar filters */}
            <aside className="cat-filters">
              <div className="filter-group">
                <div className="filter-group-title">Cena (€)</div>
                <div className="filter-price-row">
                  <input type="number" placeholder="Od" className="filter-price-input" defaultValue={0} />
                  <span>-</span>
                  <input type="number" placeholder="Do" className="filter-price-input" defaultValue={1000} />
                </div>
              </div>
              <div className="filter-group">
                <div className="filter-group-title">Značka</div>
                {['Electrolux', 'Bosch', 'Gorenje', 'Whirlpool', 'Samsung', 'LG'].map(brand => (
                  <label className="filter-checkbox" key={brand}>
                    <input type="checkbox" defaultChecked={brand === 'Electrolux'} />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
              <div className="filter-group">
                <div className="filter-group-title">Dostupnosť</div>
                <label className="filter-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>Skladom</span>
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" />
                  <span>Na objednávku</span>
                </label>
              </div>
            </aside>

            {/* Product grid */}
            <div className="cat-products">
              <div className="cat-sort-row">
                <span className="cat-sort-label">Zoradiť:</span>
                <select className="cat-sort-select">
                  <option>Odporúčané</option>
                  <option>Cena: od najnižšej</option>
                  <option>Cena: od najvyššej</option>
                  <option>Hodnotenie</option>
                </select>
              </div>
              <div className="products-grid">
                {products.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Help CTA */}
        <div className="cat-help-bar">
          <div className="cat-help-text">
            <strong>Neviete vybrať?</strong> Zavolajte nám a poradíme vám s výberom.
          </div>
          <a href="tel:+421905901500" className="cat-help-btn">
            <IconPhone size={15} /> +421 905 901 500
          </a>
        </div>

      </div>
    </div>
  )
}
