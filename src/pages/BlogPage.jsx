import { Link } from 'react-router-dom'
import { articles, categoryColor } from '../data/blog'
import './BlogPage.css'

export default function BlogPage() {
  return (
    <main>
      <section className="blog-hero">
        <div className="container">
          <div className="section-eyebrow">Poradenský obsah</div>
          <h1 className="blog-hero-title">Ako vybrať, porovnať<br />a správne kúpiť.</h1>
          <p className="blog-hero-desc">Praktické sprievodcovia, porovnania a checklisty pre nákup bielej techniky.</p>
        </div>
      </section>

      <section className="blog-list-section">
        <div className="container">
          <div className="blog-grid">
            {articles.map(a => (
              <article key={a.slug} className="blog-card">
                <div className="blog-card-body">
                  <span
                    className="blog-category"
                    style={{ color: categoryColor(a.category), background: categoryColor(a.category) + '18' }}
                  >
                    {a.category}
                  </span>
                  <h2 className="blog-card-title">{a.title}</h2>
                  <p className="blog-card-perex">{a.perex}</p>
                  <div className="blog-card-footer">
                    <span className="blog-read-time">{a.readTime}</span>
                    {['ako-vybrat-vstavanu-ruru', 'rozmery-pre-zabudovanie-checklist', 'pracka-susicka-alebo-kombinacia', 'bosch-vs-electrolux-umyvacky', 'najcastejsie-chyby-pri-vybere-chladnicky', 'kuchynsky-set-ako-setrit'].includes(a.slug) ? (
                      <Link to={`/blog/${a.slug}`} className="blog-read-link">Čítať článok →</Link>
                    ) : (
                      <span className="blog-coming-soon">Čoskoro</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-cta-section">
        <div className="container">
          <div className="blog-cta-inner">
            <div>
              <h2 className="blog-cta-title">Stále si nie ste istí?</h2>
              <p className="blog-cta-desc">Poradíme vám telefonicky do 5 minút. Zadarmo, bez záväzkov.</p>
            </div>
            <div className="blog-cta-btns">
              <a href="tel:+421905901500" className="btn-primary">Zavolať teraz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
