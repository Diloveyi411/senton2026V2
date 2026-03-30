import { Link, useParams, Navigate } from 'react-router-dom'
import { articles } from '../data/blog'
import './ArticlePage.css'

function ArticleRura() {
  return (
    <article className="article-body">

      <div className="article-section">
        <p className="article-intro">
          Vstavaná rúra je jeden z mála spotrebičov, pri ktorom ľudia najčastejšie robia chybu pri kúpe. Nie preto, že by bol výber zložitý,
          ale preto, že sa pozerajú na nesprávne parametre. Tento sprievodca vám ukáže, čo skutočne rozhoduje o tom, či bude rúra
          fungovať práve vo vašej kuchyni.
        </p>
      </div>

      <div className="article-section">
        <h2>1. Najprv rozmery, potom všetko ostatné</h2>
        <p>
          Štandardný montážny otvor pre vstavanú rúru je <strong>600 × 560 × 560 mm</strong> (šírka × výška × hĺbka).
          Väčšina modelov v strednej cenovej kategórii tento rozmer dodržiava a pasuje do bežných kuchynských skriniek.
        </p>
        <p>Pred nákupom zmerajte:</p>
        <ul className="article-list">
          <li><strong>Šírku otvoru</strong> — zvyčajne 56 alebo 60 cm. Rúra musí byť o 2–3 mm užšia ako otvor.</li>
          <li><strong>Výšku otvoru</strong> — štandard je 56 cm, ale pozor na modely s vysokým ovládacím panelom.</li>
          <li><strong>Hĺbku skrinky</strong> — minimum 56 cm, inak rúra nebude mať dostatok priestoru na vetranie.</li>
          <li><strong>Polohu elektrickej zásuvky</strong> — kábel rúry má zvyčajne 1,5 m, zásuvka musí byť v dosahu.</li>
        </ul>
        <div className="article-tip">
          <strong>Tip od Senton:</strong> Ak si nie ste istí rozmermi, zafoťte si skrinku s pásmom a pošlite nám foto na senton@senton.sk. Poradíme do 5 minút.
        </div>
      </div>

      <div className="article-section">
        <h2>2. Energetická trieda: čo znamenajú písmená v 2026</h2>
        <p>
          Od roku 2021 platí nová energetická stupnica <strong>A až G</strong>. Pozor: táto stupnica je prísnejšia než predchádzajúca.
          Stará trieda A+ zodpovedá zhruba novej triede C alebo D.
        </p>
        <div className="article-energy-grid">
          <div className="article-energy-row">
            <span className="energy-badge energy-a">A</span>
            <span>Najúspornejšie, cena zvyčajne nad 600 €. Pre bežné varenie nie je rozdiel oproti B viditeľný na účte.</span>
          </div>
          <div className="article-energy-row">
            <span className="energy-badge energy-b">B</span>
            <span>Dobrý kompromis medzi cenou a spotrebou. Odporúčame pre väčšinu domácností.</span>
          </div>
          <div className="article-energy-row">
            <span className="energy-badge energy-c">C</span>
            <span>Najčastejšia trieda v segmente 250–450 €. Spotreba je prijateľná pri normálnom používaní.</span>
          </div>
          <div className="article-energy-row">
            <span className="energy-badge energy-d">D a nižšie</span>
            <span>Staršie modely alebo veľmi lacné rúry. Pri intenzívnom varení môže byť spotreba citeľná.</span>
          </div>
        </div>
        <p>
          Pre bežnú rodinu, ktorá pečie 2–3 krát týždenne, rozdiel medzi triedou B a C na ročnom účte za elektrinu
          predstavuje 8–15 €. Vyššia investícia do triedy A sa vráti až po rokoch.
        </p>
      </div>

      <div className="article-section">
        <h2>3. Typ čistenia: pyrolýza, katalýza alebo manuál?</h2>
        <p>
          Toto je parameter, kde sa model za 250 € a model za 700 € líšia najviac. Nie výkonom, ale komfortom.
        </p>
        <div className="article-clean-grid">
          <div className="article-clean-card">
            <h3>Pyrolytické čistenie</h3>
            <p>Rúra sa zahreje na 480 °C a vypáli všetok tuk na popol, ktorý stačí utrieť. Trvá 1,5–3 hodiny. Výsledok je dokonalý bez chemikálií.</p>
            <span className="article-clean-price">Od cca 400 €</span>
          </div>
          <div className="article-clean-card">
            <h3>Katalytické čistenie</h3>
            <p>Špeciálny povrch bočníc absorbuje tuk počas varenia. Menej účinné ako pyrolýza, ale lepšie ako nič. Dno a dvere treba čistiť manuálne.</p>
            <span className="article-clean-price">Od cca 250 €</span>
          </div>
          <div className="article-clean-card">
            <h3>Manuálne čistenie</h3>
            <p>Štandardný smaltovaný povrch. Najlacnejší, ale vyžaduje pravidelné čistenie. Pre niekoho úplne postačujúce.</p>
            <span className="article-clean-price">Od cca 180 €</span>
          </div>
        </div>
        <div className="article-tip">
          <strong>Odporúčanie:</strong> Ak pečiete mäso a mastné jedlá aspoň raz týždenne, pyrolýza sa oplatí. Pri príležitostnom pečení postačí katalýza.
        </div>
      </div>

      <div className="article-section">
        <h2>4. Objem: 60, 65 alebo 70 litrov?</h2>
        <p>
          Väčšina vstavaných rúr má objem <strong>60–75 litrov</strong>. Rozdiel medzi 60 a 73 litrami v praxi pocítite
          len pri pečení veľkého morčacieho alebo pri súčasnom pečení na dvoch poschodiach.
        </p>
        <ul className="article-list">
          <li><strong>Do 65 l</strong> — postačuje pre 1–3 osoby, bežné pečenie a varenie</li>
          <li><strong>65–75 l</strong> — ideálne pre rodiny, pečenie na viac úrovniach naraz</li>
          <li><strong>Nad 75 l</strong> — pre náročných kuchárov, špecifické rozmery skrinky</li>
        </ul>
      </div>

      <div className="article-section">
        <h2>5. Funkcie, ktoré sú užitočné a ktoré len nafukujú cenu</h2>
        <p><strong>Užitočné funkcie:</strong></p>
        <ul className="article-list">
          <li>Horúci vzduch (termoventilát) — rovnomerné pečenie na viac úrovniach naraz</li>
          <li>Gril — zapekanie, brúschety, mäso</li>
          <li>Funkcia rozmrazovania</li>
          <li>Integrovaný teplomer na mäso</li>
          <li>Rýchle predhrievanie</li>
        </ul>
        <p><strong>Funkcie, za ktoré preplácate:</strong></p>
        <ul className="article-list">
          <li>Wi-Fi a ovládanie cez aplikáciu — väčšina ľudí to po mesiaci nepoužíva</li>
          <li>Parná funkcia — iba ak naozaj varíte s parou pravidelne</li>
          <li>Dotykový displej namiesto otočného ovládania — menej pohodlné pri mastných rukách</li>
        </ul>
      </div>

      <div className="article-section">
        <h2>Konkrétne odporúčania podľa rozpočtu</h2>
        <div className="article-budget-grid">
          <div className="article-budget-card">
            <span className="article-budget-label">Do 300 €</span>
            <h3>Základná, spoľahlivá rúra</h3>
            <p>Katalytické čistenie, štandardné funkcie, overená značka. Ideálne pre bežné domácnosti bez nárokov na špeciálne funkcie.</p>
          </div>
          <div className="article-budget-card article-budget-featured">
            <span className="article-budget-label">300–500 €</span>
            <h3>Najlepší pomer ceny a výkonu</h3>
            <p>Tu nájdete modely s pyrolytickým čistením, termoventilátom a väčším objemom. Odporúčame väčšine zákazníkov.</p>
          </div>
          <div className="article-budget-card">
            <span className="article-budget-label">500 € a viac</span>
            <h3>Pre náročných</h3>
            <p>Para, špeciálne pečiace funkcie, prémiový dizajn. Oplatí sa, ak naozaj pečiete a varíte intenzívne.</p>
          </div>
        </div>
      </div>

      <div className="article-section">
        <h2>Čo skontrolovať pred objednaním</h2>
        <ul className="article-checklist">
          <li><span className="check-icon">✓</span> Rozmer montážneho otvoru (šírka, výška, hĺbka)</li>
          <li><span className="check-icon">✓</span> Poloha a dostupnosť elektrickej zásuvky</li>
          <li><span className="check-icon">✓</span> Typ skrinky (bude treba vyrobiť policu pod rúru?)</li>
          <li><span className="check-icon">✓</span> Objem podľa veľkosti domácnosti</li>
          <li><span className="check-icon">✓</span> Typ čistenia podľa zvyklostí</li>
          <li><span className="check-icon">✓</span> Energetická trieda min. C</li>
        </ul>
      </div>

    </article>
  )
}

const articleComponents = {
  'ako-vybrat-vstavanu-ruru': ArticleRura,
}

export default function ArticlePage() {
  const { slug } = useParams()
  const meta = articles.find(a => a.slug === slug)

  if (!meta) return <Navigate to="/blog" replace />

  const Content = articleComponents[slug]
  if (!Content) return <Navigate to="/blog" replace />

  return (
    <main>
      <div className="container">
        <div className="article-breadcrumb">
          <Link to="/blog">Blog</Link>
          <span>/</span>
          <span>{meta.title}</span>
        </div>
      </div>

      <section className="article-hero">
        <div className="container">
          <span className="article-category">{meta.category}</span>
          <h1 className="article-title">{meta.title}</h1>
          <p className="article-lead">{meta.perex}</p>
          <div className="article-meta">
            <span>{meta.readTime}</span>
            <span>Senton poradenstvo</span>
            <span>Aktualizované: marec 2026</span>
          </div>
        </div>
      </section>

      <section className="article-main">
        <div className="container article-layout">
          <Content />

          <aside className="article-sidebar">
            <div className="article-callout">
              <strong>Nie ste si istí?</strong>
              <p>Zavolajte nám. Poradíme pri výbere do 5 minút, zadarmo.</p>
              <a href="tel:+421905901500" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: 12 }}>
                +421 905 901 500
              </a>
            </div>
            <div className="article-back-block">
              <Link to="/blog" className="btn-secondary" style={{ display: 'block', textAlign: 'center' }}>
                ← Späť na blog
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
