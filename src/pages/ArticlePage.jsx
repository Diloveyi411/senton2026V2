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

function ArticleRozmery() {
  return (
    <article className="article-body">

      <div className="article-section">
        <p className="article-intro">
          Väčšina reklamácií pri zabudovaných spotrebičoch má rovnaký dôvod: spotrebič bol objednaný bez overenia rozmerov.
          Doručenie prebehlo, montér prišiel — a zistilo sa, že skrinka je o 2 cm nízka. Tento checklist vám ušetrí čas, peniaze
          a zbytočný stres.
        </p>
      </div>

      <div className="article-section">
        <h2>Prečo rozmery tak veľmi záleží</h2>
        <p>
          Vstavaný spotrebič musí presne sedieť do pripraveného otvoru. Na rozdiel od voľne stojacich spotrebičov tu
          nie je priestor na kompromis — ak je otvor o 1 cm príliš úzky, spotrebič jednoducho nepasuje. Ak je príliš
          široký, zostane viditeľná medzera a spotrebič sa nedá správne upevniť.
        </p>
        <div className="article-tip">
          <strong>Zlaté pravidlo:</strong> Merajte trikrát — šírku hore, v strede aj dole. Staré kuchyne nebývajú
          vždy rovnako zvislé a rozdiel 3–5 mm je bežný.
        </div>
      </div>

      <div className="article-section">
        <h2>Checklist: 8 rozmerov ktoré musíte poznať</h2>

        <div className="article-checklist-numbered">

          <div className="article-check-item">
            <span className="check-num">1</span>
            <div>
              <strong>Šírka otvoru</strong>
              <p>Merajte na troch miestach — hore, v strede a dole. Rozhoduje najmenší rozmer. Spotrebič musí byť
              o 2–4 mm užší ako otvor. Štandardné šírky: <strong>45 cm</strong> (úzke modely) alebo <strong>60 cm</strong> (štandard).</p>
            </div>
          </div>

          <div className="article-check-item">
            <span className="check-num">2</span>
            <div>
              <strong>Výška otvoru</strong>
              <p>Merajte od podlahy skrinky po spodnú hranu pracovnej dosky alebo vrchnej police.
              Väčšina vstavaných rúr a umývačiek vyžaduje <strong>min. 820 mm</strong>, práčky <strong>min. 850 mm</strong>.
              Pozor na modely so zvýšeným ovládacím panelom — môžu vyžadovať až 880 mm.</p>
            </div>
          </div>

          <div className="article-check-item">
            <span className="check-num">3</span>
            <div>
              <strong>Hĺbka skrinky</strong>
              <p>Merajte od zadnej steny po prednú hranu dvierok skrinky (nie po čelnú hranu nábytku).
              Minimum pre väčšinu spotrebičov je <strong>560 mm</strong>. Ak je skrinka plytšia, spotrebič bude vyčnievať
              alebo sa nedá zatvoriť.</p>
            </div>
          </div>

          <div className="article-check-item">
            <span className="check-num">4</span>
            <div>
              <strong>Výška sokla (pre chladničky a práčky)</strong>
              <p>Ak je spotrebič umiestnený na sokli alebo podstavci, odrátajte jeho výšku od celkovej dostupnej
              výšky. Bežná výška sokla je <strong>100–150 mm</strong>. Chladničky zabudované pod pracovnou doskou
              musia zmestiť vrátane prípadného sokla.</p>
            </div>
          </div>

          <div className="article-check-item">
            <span className="check-num">5</span>
            <div>
              <strong>Poloha elektrickej zásuvky</strong>
              <p>Kábel vstavanej rúry má zvyčajne <strong>1,5 m</strong>, umývačky a práčky <strong>1,5–2 m</strong>.
              Zásuvka musí byť v dosahu — a nesmie byť za spotrebičom (nie je prístupná po zabudovaní).
              Ideálna poloha: v susednej skrinke alebo nad spotrebičom.</p>
            </div>
          </div>

          <div className="article-check-item">
            <span className="check-num">6</span>
            <div>
              <strong>Prívod vody (umývačky a práčky)</strong>
              <p>Prívod musí byť v dosahu prívodnej hadice — štandardná dĺžka je <strong>1,5 m</strong>.
              Skontrolujte tiež typ ventilu: rohový ventil pod drezom je najpohodlnejší.
              Ak prívod nie je v blízkosti, je potrebný zásah inštalatéra.</p>
            </div>
          </div>

          <div className="article-check-item">
            <span className="check-num">7</span>
            <div>
              <strong>Odtok (umývačky a práčky)</strong>
              <p>Odtoková hadica má dĺžku <strong>1,5–2 m</strong> a musí byť vyvedená do sifónu alebo odtokového
              potrubia. Výška odtoku nesmie prekročiť <strong>1 m</strong> nad podlahou — inak čerpadlo nestačí
              vytlačiť vodu. Pri práčkach je maximálna výška odtoku zvyčajne <strong>100 cm</strong>.</p>
            </div>
          </div>

          <div className="article-check-item">
            <span className="check-num">8</span>
            <div>
              <strong>Vetranie (chladničky)</strong>
              <p>Zabudovaná chladnička potrebuje priestor na cirkuláciu vzduchu — inak sa prehrieva a znižuje
              sa jej životnosť. Minimálny priestor nad chladničkou: <strong>50 mm</strong>, za chladničkou: <strong>50 mm</strong>.
              Modely s ventilačnou mriežkou vpredu (No Frost) majú menšie nároky na vetranie zo zadnej strany.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="article-section">
        <h2>Štandardné rozmery podľa typu spotrebiča</h2>
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr>
                <th>Spotrebič</th>
                <th>Šírka</th>
                <th>Výška</th>
                <th>Hĺbka</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Vstavaná rúra</td><td>56–60 cm</td><td>56–60 cm</td><td>min. 56 cm</td></tr>
              <tr><td>Vstavaná umývačka (štandard)</td><td>60 cm</td><td>82 cm</td><td>min. 56 cm</td></tr>
              <tr><td>Vstavaná umývačka (úzka)</td><td>45 cm</td><td>82 cm</td><td>min. 56 cm</td></tr>
              <tr><td>Práčka pod pracovnou doskou</td><td>60 cm</td><td>min. 85 cm</td><td>min. 56 cm</td></tr>
              <tr><td>Chladnička pod prac. doskou</td><td>56–60 cm</td><td>82–88 cm</td><td>min. 55 cm</td></tr>
              <tr><td>Vstavaná mikrovlnná rúra</td><td>56–60 cm</td><td>38–46 cm</td><td>min. 32 cm</td></tr>
              <tr><td>Varná doska (štandard)</td><td>60 cm</td><td>—</td><td>min. 50 cm</td></tr>
            </tbody>
          </table>
        </div>
        <div className="article-tip">
          <strong>Pozor:</strong> Tabuľka uvádza minimálne rozmery otvoru. Skutočný spotrebič býva o 2–5 mm menší —
          výrobcovia rátajú s montážnou vôľou. Vždy si overte konkrétne rozmery v technickom liste vybraného modelu.
        </div>
      </div>

      <div className="article-section">
        <h2>Čo ak rozmery nevychádzajú?</h2>
        <p>
          Nesnažte sa situáciu riešiť hrubou silou. Máte tri možnosti:
        </p>
        <ul className="article-list">
          <li><strong>Vybrať iný model</strong> — mnohé značky ponúkajú rovnaký spotrebič vo viacerých šírkach (45 a 60 cm). Úzky model
          môže byť riešením ak otvor nestačí na štandard.</li>
          <li><strong>Upraviť skrinku</strong> — stolár vie rozšíriť alebo zúžiť otvor. Lacnejšie ako meniť celú kuchyňu.</li>
          <li><strong>Poradiť sa vopred</strong> — zafoťte skrinku s pásmom a napíšte nám. Bezplatne overíme, ktoré modely pasujú.</li>
        </ul>
      </div>

      <div className="article-section">
        <h2>Záverečný checklist pred objednaním</h2>
        <ul className="article-checklist">
          <li><span className="check-icon">✓</span> Šírka otvoru zmeraná na 3 miestach (najmenší rozmer)</li>
          <li><span className="check-icon">✓</span> Výška otvoru od podlahy skrinky po hornú hranu</li>
          <li><span className="check-icon">✓</span> Hĺbka skrinky od zadnej steny po prednú hranu</li>
          <li><span className="check-icon">✓</span> Výška sokla (ak existuje) odrátaná</li>
          <li><span className="check-icon">✓</span> Elektrická zásuvka v dosahu kábla a prístupná</li>
          <li><span className="check-icon">✓</span> Prívod vody v dosahu (umývačky, práčky)</li>
          <li><span className="check-icon">✓</span> Odtok max. 1 m výšky, v dosahu hadice</li>
          <li><span className="check-icon">✓</span> Vetranie pre chladničku min. 50 mm nad a za spotrebičom</li>
        </ul>
      </div>

    </article>
  )
}

function ArticlePrackaSusicka() {
  return (
    <article className="article-body">

      <div className="article-section">
        <p className="article-intro">
          Práčka a sušička alebo kombinácia — toto je otázka, pri ktorej sa väčšina ľudí rozhoduje podľa ceny alebo miesta.
          Obe kritériá sú dôležité, ale nie sú jediné. Tento článok vám ukáže, kedy kombinácia dáva zmysel a kedy za
          ušetrené miesto zaplatíte príliš vysokú cenu.
        </p>
      </div>

      <div className="article-section">
        <h2>Ako funguje kombinácia a kde je háčik</h2>
        <p>
          Kombinovaná práčka so sušičkou robí oboje v jednom bubne. Zvonka vyzerá ako bežná práčka — rovnaké rozmery,
          jeden prívodný kábel, jedna vodovodná prípojka.
        </p>
        <p>
          Háčik je v kapacite. Bubon má zvyčajne objem <strong>7–9 kg na pranie</strong>, ale na sušenie zvládne
          len <strong>4–5 kg</strong>. To znamená, že pri plnom naplnení musíte pranie rozdeliť na dve časti —
          alebo sušičku vôbec nepoužiť.
        </p>
        <div className="article-tip">
          <strong>Kľúčové číslo:</strong> Pri kombináciách platí, že kapacita sušenia je zhruba polovica kapacity prania.
          Ak kúpite model 9/6 kg — vyperie 9 kg, ale vysuší iba 6 kg naraz.
        </div>
      </div>

      <div className="article-section">
        <h2>Porovnanie: čo dostanete a za čo platíte</h2>
        <div className="article-clean-grid">
          <div className="article-clean-card">
            <h3>Kombinácia 2v1</h3>
            <p>Jeden spotrebič, jeden zábor miesta, jedna inštalácia. Ideálna ak nemáte priestor na dva spotrebiče.</p>
            <span className="article-clean-price">Od cca 500 €</span>
          </div>
          <div className="article-clean-card">
            <h3>Práčka + sušička</h3>
            <p>Plná kapacita oboch, možnosť prať a sušiť súčasne. Každý spotrebič robí svoju prácu naplno.</p>
            <span className="article-clean-price">Od cca 350 + 400 € = 750 €</span>
          </div>
          <div className="article-clean-card">
            <h3>Práčka + sušič vzduchotechnikou</h3>
            <p>Najlacnejší vstup, ale vyžaduje miesto na sušenie. Nie vždy praktické v malom byte.</p>
            <span className="article-clean-price">Od cca 350 €</span>
          </div>
        </div>
      </div>

      <div className="article-section">
        <h2>Kedy sa kombinácia oplatí</h2>
        <ul className="article-list">
          <li><strong>Malý byt alebo garsónka</strong> — máte priestor len na jeden spotrebič. Kombinácia je jediné riešenie.</li>
          <li><strong>1–2 osoby v domácnosti</strong> — preriete menej ako 5 kg naraz, kapacita sušenia postačuje.</li>
          <li><strong>Sušíte príležitostne</strong> — sušičku využívate len v zime alebo pri daždi, nie každý deň.</li>
          <li><strong>Nájomný byt</strong> — nechcete investovať do dvoch spotrebičov, ktoré si neberieme so sebou.</li>
        </ul>
      </div>

      <div className="article-section">
        <h2>Kedy sa kombinácia neoplatí</h2>
        <ul className="article-list">
          <li><strong>Rodina s deťmi</strong> — perieš každý deň, kapacita sušenia 4–5 kg nestačí. Čakáš na druhý cyklus.</li>
          <li><strong>Sušíte pravidelne</strong> — kombinácia má dlhší cyklus sušenia (3–5 hodín) a vyššiu spotrebu než samostatná sušička.</li>
          <li><strong>Máte kotolňu alebo kúpeľňu s miestom</strong> — samostatné spotrebiče sú spoľahlivejšie a efektívnejšie.</li>
          <li><strong>Chcete prať a sušiť súčasne</strong> — kombinácia to neumožňuje. Kým sa suší, nemôžete prať.</li>
        </ul>
        <div className="article-tip">
          <strong>Dôležité:</strong> Kombinácia sa v priemere pokazí skôr než samostatné spotrebiče — opravuje sa zložitejší
          mechanizmus. Servis kombinácie je drahší než oprava práčky alebo sušičky zvlášť.
        </div>
      </div>

      <div className="article-section">
        <h2>Typy sušičiek — čo znamená kondenzačná a tepelné čerpadlo</h2>
        <p>Ak sa rozhodnete pre samostatnú sušičku, narazíte na dva hlavné typy:</p>
        <div className="article-energy-grid">
          <div className="article-energy-row">
            <span className="energy-badge energy-a">TČ</span>
            <span><strong>Tepelné čerpadlo</strong> — najúspornejšia možnosť, energetická trieda A+++. Suší pri nižšej teplote, šetrí tkaniny. Cena od 600 €, úspora na elektrine až 50 % oproti kondenzačnej.</span>
          </div>
          <div className="article-energy-row">
            <span className="energy-badge energy-b">K</span>
            <span><strong>Kondenzačná</strong> — nevyžaduje výfukové potrubie, vodu zachytáva do nádoby alebo odvádza hadicou. Dostupnejšia cena od 350 €, vyššia spotreba.</span>
          </div>
          <div className="article-energy-row">
            <span className="energy-badge energy-c">O</span>
            <span><strong>Odťahová</strong> — najlacnejšia, ale vyžaduje otvor do vonku. Hodí sa do domov, nie do bytov.</span>
          </div>
        </div>
        <p>
          Pre byt odporúčame kondenzačnú alebo tepelné čerpadlo. Ak perieš viac než 3-krát týždenne,
          investícia do tepelného čerpadla sa vráti do 3–4 rokov.
        </p>
      </div>

      <div className="article-section">
        <h2>Odporúčania podľa situácie</h2>
        <div className="article-budget-grid">
          <div className="article-budget-card">
            <span className="article-budget-label">Malý byt, 1–2 osoby</span>
            <h3>Kombinácia 2v1</h3>
            <p>Ušetríte miesto, jedna inštalácia. Vyberajte model s kapacitou aspoň 8/5 kg a tepelným čerpadlom.</p>
          </div>
          <div className="article-budget-card article-budget-featured">
            <span className="article-budget-label">Rodina, 3+ osoby</span>
            <h3>Práčka + sušička zvlášť</h3>
            <p>Plná kapacita, súbežná prevádzka, dlhšia životnosť. Najlepšia investícia na roky dopredu.</p>
          </div>
          <div className="article-budget-card">
            <span className="article-budget-label">Obmedzený rozpočet</span>
            <h3>Práčka teraz, sušička neskôr</h3>
            <p>Kúpte dobrú práčku, sušičku dokúpite keď to finančne vyjde. Obe spolu postavia na seba (stackovanie).</p>
          </div>
        </div>
      </div>

      <div className="article-section">
        <h2>Záverečný checklist pred rozhodnutím</h2>
        <ul className="article-checklist">
          <li><span className="check-icon">✓</span> Zmerajte dostupné miesto — pasujú tam dva spotrebiče?</li>
          <li><span className="check-icon">✓</span> Koľko kg perieš naraz? Nad 5 kg pravidelne → zvlášť</li>
          <li><span className="check-icon">✓</span> Sušíš každý deň alebo len príležitostne?</li>
          <li><span className="check-icon">✓</span> Je k dispozícii prívod vody aj odtok pre dva spotrebiče?</li>
          <li><span className="check-icon">✓</span> Ak kombinácia — hľadaj model aspoň 8/5 kg s tepelným čerpadlom</li>
          <li><span className="check-icon">✓</span> Ak sušička zvlášť — kondenzačná alebo tepelné čerpadlo pre byt</li>
        </ul>
      </div>

    </article>
  )
}

function ArticleBoschElectrolux() {
  return (
    <article className="article-body">

      <div className="article-section">
        <p className="article-intro">
          Bosch a Electrolux sú dvaja najpredávanejší výrobcovia umývačiek na slovenskom trhu. Oba robia spoľahlivé
          spotrebiče — ale s inou filozofiou. Bosch stavia na tichosti a nemeckej precíznosti, Electrolux na
          škandinávskom dizajne a hodnote za peniaze. Ktorý si vybrať závisí od toho, čo vám skutočne záleží.
        </p>
      </div>

      <div className="article-section">
        <h2>Bosch: čo robí dobre</h2>
        <p>
          Bosch je synonymom pre tichú umývačku. Ich modely v strednej kategórii dosahujú <strong>42–44 dB</strong> —
          to je hlučnosť tichej knižnice. Ak máte otvorenú kuchyňu prepojenú s obývačkou, pri Boschi nepočujete
          nič. Pri lacnejších značkách počujete všetko.
        </p>
        <ul className="article-list">
          <li><strong>Hlučnosť</strong> — 42–46 dB, najlepší výsledok v triede</li>
          <li><strong>AquaStop</strong> — ochrana pred zaplavením zahrnutá aj v lacnejších modeloch</li>
          <li><strong>EcoSilence Drive</strong> — bezkartáčový motor, tichší a odolnejší</li>
          <li><strong>Varioschublade</strong> — tretí koš na príbory (dostupný od strednej triedy)</li>
          <li><strong>Servis</strong> — hustá servisná sieť po celom Slovensku</li>
        </ul>
        <div className="article-tip">
          <strong>Kde Bosch zaostáva:</strong> Cena. Za rovnakú výbavu zaplatíte o 50–100 € viac než pri Electroluxe.
          Dizajn ovládacieho panela je konzervatívnejší.
        </div>
      </div>

      <div className="article-section">
        <h2>Electrolux: čo robí dobre</h2>
        <p>
          Electrolux ponúka výborne vybavené umývačky za nižšiu cenu ako Bosch. Škandinávsky dizajn je čistý
          a moderný — ovládacie panely sú intuitívnejšie než u Boschu. Výkon umývania je porovnateľný.
        </p>
        <ul className="article-list">
          <li><strong>Cena</strong> — o 50–100 € lacnejšie za porovnateľnú výbavu</li>
          <li><strong>AirDry</strong> — automatické otvorenie dvierok po skončení — riad vyschne bez kondenzácie</li>
          <li><strong>ComfortLift</strong> — spodný kôš sa dá zdvihnúť na pohodlnú výšku (prémiové modely)</li>
          <li><strong>Dizajn</strong> — čistejší, modernejší vzhľad ovládania</li>
          <li><strong>Spotreba vody</strong> — v eco programe veľmi konkurencieschopná</li>
        </ul>
        <div className="article-tip">
          <strong>Kde Electrolux zaostáva:</strong> Hlučnosť — bežné modely sú o 2–4 dB hlasnejšie ako Bosch.
          V otvorenej kuchyni to počuť.
        </div>
      </div>

      <div className="article-section">
        <h2>Priame porovnanie parametrov</h2>
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Bosch</th>
                <th>Electrolux</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Hlučnosť (stredná trieda)</td><td><strong>42–44 dB</strong></td><td>44–48 dB</td></tr>
              <tr><td>Ochrana pred zaplavením</td><td>AquaStop (štandard)</td><td>Áno (vyššie modely)</td></tr>
              <tr><td>Sušenie</td><td>Kondenzačné</td><td>AirDry (otvorenie dvierok)</td></tr>
              <tr><td>Tretí koš na príbory</td><td>Od strednej triedy</td><td>Od vyššej triedy</td></tr>
              <tr><td>Spotreba energie (A-rated)</td><td>~0,87 kWh/cyklus</td><td>~0,84 kWh/cyklus</td></tr>
              <tr><td>Spotreba vody (eco)</td><td>~9,5 l</td><td>~9 l</td></tr>
              <tr><td>Cena (stredná trieda)</td><td>450–650 €</td><td>350–550 €</td></tr>
              <tr><td>Záručný servis SR</td><td>Výborný</td><td>Dobrý</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="article-section">
        <h2>Kedy zvoliť Bosch</h2>
        <ul className="article-list">
          <li><strong>Otvorená kuchyňa prepojená s obývačkou</strong> — pri Boschi nepočujete umývačku ani pri rozhovore</li>
          <li><strong>Chcete AquaStop pri každom modeli</strong> — pri Electroluxe ho nájdete len vo vyšších radoch</li>
          <li><strong>Dlhodobá investícia</strong> — Bosch má mierne lepšiu povesť spoľahlivosti pri intenzívnom používaní</li>
          <li><strong>Tretí koš je priorita</strong> — dostupný od nižšej ceny ako u konkurencie</li>
        </ul>
      </div>

      <div className="article-section">
        <h2>Kedy zvoliť Electrolux</h2>
        <ul className="article-list">
          <li><strong>Rozpočet do 450 €</strong> — za túto cenu dostanete od Electroluxu výrazne lepšiu výbavu</li>
          <li><strong>AirDry je pre vás dôležité</strong> — riad po umytí skutočne vyschne, Bosch to nerobí štandardne</li>
          <li><strong>Dizajn je priorita</strong> — modernejší, čistejší vzhľad ovládania</li>
          <li><strong>Uzavretá kuchyňa</strong> — rozdiel 3–4 dB v hlučnosti nepocítite cez zatvorené dvere</li>
        </ul>
      </div>

      <div className="article-section">
        <h2>Odporúčania podľa rozpočtu</h2>
        <div className="article-budget-grid">
          <div className="article-budget-card">
            <span className="article-budget-label">Do 400 €</span>
            <h3>Electrolux vyhrá</h3>
            <p>V tejto cenovej kategórii ponúka Electrolux lepšiu výbavu. Bosch za túto cenu predáva len základné modely bez tretieho koša.</p>
          </div>
          <div className="article-budget-card article-budget-featured">
            <span className="article-budget-label">400–600 €</span>
            <h3>Záleží na prioritách</h3>
            <p>Bosch pre tiché prostredie a AquaStop. Electrolux pre AirDry, dizajn a úsporu 50–80 €. Oba sú výbornou voľbou.</p>
          </div>
          <div className="article-budget-card">
            <span className="article-budget-label">600 € a viac</span>
            <h3>Oba sú výborné</h3>
            <p>V tejto kategórii sa rozdiel zmenšuje. Bosch Série 6/8 vs Electrolux 700/900 — rozhodujte podľa funkcií, nie značky.</p>
          </div>
        </div>
      </div>

      <div className="article-section">
        <h2>Záver: ako sa rozhodnúť</h2>
        <ul className="article-checklist">
          <li><span className="check-icon">✓</span> Otvorená kuchyňa alebo na tichosti záleží → <strong>Bosch</strong></li>
          <li><span className="check-icon">✓</span> Rozpočet do 450 € → <strong>Electrolux</strong></li>
          <li><span className="check-icon">✓</span> AirDry sušenie je priorita → <strong>Electrolux</strong></li>
          <li><span className="check-icon">✓</span> AquaStop vo všetkých modeloch → <strong>Bosch</strong></li>
          <li><span className="check-icon">✓</span> Modernejší dizajn ovládania → <strong>Electrolux</strong></li>
          <li><span className="check-icon">✓</span> Tretí koš za rozumnú cenu → <strong>Bosch</strong></li>
        </ul>
      </div>

    </article>
  )
}

function ArticleChladnicky() {
  return (
    <article className="article-body">

      <div className="article-section">
        <p className="article-intro">
          Chladnička je spotrebič, ktorý beží 24 hodín denne, 365 dní v roku. Zlá voľba vás bude trápiť každý deň
          nasledujúcich 10–15 rokov. Tieto chyby robí väčšina ľudí — nie z nevedomosti, ale preto, že sa sústredia
          na nesprávne veci.
        </p>
      </div>

      <div className="article-section">
        <h2>Chyba č. 1: Kúpili ste príliš malý objem</h2>
        <p>
          Najčastejšia chyba. Ľudia podceňujú, koľko miesta v chladničke reálne potrebujú — a potom zápasiaci
          s plnou chladničkou každý deň.
        </p>
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr><th>Domácnosť</th><th>Odporúčaný objem</th><th>Minimálny objem</th></tr>
            </thead>
            <tbody>
              <tr><td>1 osoba</td><td>200–250 l</td><td>180 l</td></tr>
              <tr><td>2 osoby</td><td>250–300 l</td><td>220 l</td></tr>
              <tr><td>3–4 osoby</td><td>300–400 l</td><td>280 l</td></tr>
              <tr><td>5 a viac osôb</td><td>400+ l</td><td>350 l</td></tr>
            </tbody>
          </table>
        </div>
        <div className="article-tip">
          <strong>Pravidlo:</strong> Počítajte 80–100 litrov na osobu. Ak varíte doma pravidelne a nakupujete
          raz týždenne, radšej vyberte väčší model. Chladnička sa nedá ľahko vymeniť.
        </div>
      </div>

      <div className="article-section">
        <h2>Chyba č. 2: Nezmerali ste priestor vrátane vetrania</h2>
        <p>
          Chladnička potrebuje priestor na chladenie — vzduch musí cirkulovať okolo kondenzátora. Ak ju zasunete
          do tesného výklenku bez vetrania, motor pracuje neustále a spotrebič sa pokazí oveľa skôr.
        </p>
        <ul className="article-list">
          <li><strong>Nad chladničkou</strong> — min. 50 mm voľného priestoru</li>
          <li><strong>Za chladničkou</strong> — min. 50 mm (modely s kondenzátorom vzadu)</li>
          <li><strong>Po bokoch</strong> — min. 5–10 mm na každej strane</li>
          <li><strong>No Frost modely</strong> — majú ventilátor vpredu dole, menej nárokov na zadnú stranu</li>
        </ul>
        <p>
          Zmerajte tiež <strong>šírku dverí a chodieb</strong> — chladnička musí fyzicky vojsť do bytu.
          Štandardná šírka 60 cm chladničky plus dvierka je pri otvorení okolo 120 cm.
        </p>
      </div>

      <div className="article-section">
        <h2>Chyba č. 3: Ignorovali ste hlučnosť</h2>
        <p>
          Hlučnosť chladničky je parameter, ktorý ľudia objavujú až po kúpe — keď je neskoro.
          Chladnička stojí v kuchyni a beží stále. Rozdiel medzi 35 dB a 42 dB je v praxi veľmi citeľný.
        </p>
        <div className="article-energy-grid">
          <div className="article-energy-row">
            <span className="energy-badge energy-a">35 dB</span>
            <span>Takmer nepočuteľná. Tiché modely prémiových značiek — Bosch, Liebherr. Ideálne pre otvorenú kuchyňu.</span>
          </div>
          <div className="article-energy-row">
            <span className="energy-badge energy-b">38 dB</span>
            <span>Štandard dobrých modelov. Počuteľná len v tichej miestnosti. Pre väčšinu domácností v poriadku.</span>
          </div>
          <div className="article-energy-row">
            <span className="energy-badge energy-c">42 dB</span>
            <span>Výrazne počuteľná. Ak máte kuchyňu prepojenú s obývačkou, bude vás rušiť.</span>
          </div>
          <div className="article-energy-row">
            <span className="energy-badge energy-d">45+ dB</span>
            <span>Veľmi hlasná. Lacné modely bez kvalitného kompresora. Dlhodobo nepríjemné.</span>
          </div>
        </div>
      </div>

      <div className="article-section">
        <h2>Chyba č. 4: Nekúpili ste No Frost keď mali</h2>
        <p>
          No Frost technológia zabraňuje tvorbe ľadu v mrazničke. Bez nej musíte mrazničku odmrazovať
          ručne — zvyčajne každé 3–6 mesiacov. Je to 2–3 hodiny práce a dočasné vykladanie mrazeného tovaru.
        </p>
        <ul className="article-list">
          <li><strong>Bez No Frost</strong> — mrazničku treba odmrazovať ručne, nižšia cena o 50–80 €</li>
          <li><strong>No Frost v mrazničke</strong> — automatické odmrazovanie mrazničky, chladnička manuálne</li>
          <li><strong>Total No Frost</strong> — automatické odmrazovanie oboch priestorov, najpohodlnejšie</li>
        </ul>
        <div className="article-tip">
          <strong>Odporúčanie:</strong> Pre väčšinu domácností sa Total No Frost oplatí. Priplatok 60–100 €
          sa vráti v ušetrenom čase a pohodlí behom prvého roka.
        </div>
      </div>

      <div className="article-section">
        <h2>Chyba č. 5: Podceňovanie energetickej triedy</h2>
        <p>
          Chladnička je jediný spotrebič, ktorý nikdy nevypnete. Každý rok vám nôta za elektrinu priamo ukazuje,
          či ste kúpili dobre.
        </p>
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr><th>Trieda</th><th>Ročná spotreba (300 l)</th><th>Ročné náklady (0,20 €/kWh)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>A</strong></td><td>~100 kWh</td><td>~20 €</td></tr>
              <tr><td><strong>B</strong></td><td>~130 kWh</td><td>~26 €</td></tr>
              <tr><td><strong>C</strong></td><td>~165 kWh</td><td>~33 €</td></tr>
              <tr><td><strong>D</strong></td><td>~210 kWh</td><td>~42 €</td></tr>
              <tr><td><strong>E a horšie</strong></td><td>270+ kWh</td><td>54+ €</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Rozdiel medzi triedou A a E je až <strong>35 € ročne</strong>. Za 15 rokov životnosti chladničky
          to je 525 € — viac ako priplatok za energeticky úsporný model.
        </p>
      </div>

      <div className="article-section">
        <h2>Záverečný checklist pred kúpou</h2>
        <ul className="article-checklist">
          <li><span className="check-icon">✓</span> Objem: 80–100 l na osobu, radšej viac</li>
          <li><span className="check-icon">✓</span> Rozmery výklenku vrátane priestoru na vetranie</li>
          <li><span className="check-icon">✓</span> Hlučnosť: max. 38 dB pre otvorenú kuchyňu</li>
          <li><span className="check-icon">✓</span> No Frost — aspoň v mrazničke, ideálne Total No Frost</li>
          <li><span className="check-icon">✓</span> Energetická trieda min. C, ideálne A alebo B</li>
          <li><span className="check-icon">✓</span> Skontrolujte šírku dverí — chladnička musí vojsť do bytu</li>
        </ul>
      </div>

    </article>
  )
}

function ArticleUmyvacka() {
  return (
    <article className="article-body">

      <div className="article-section">
        <p className="article-intro">
          Nemáte miesto na klasickú 60 cm umývačku? Existujú tri riešenia — a každé sa hodí na inú situáciu.
          Porovnáme rozmery, kapacity a odporúčame konkrétne modely.
        </p>
      </div>

      <div className="article-section">
        <h2>Tri typy umývačiek podľa veľkosti</h2>
        <div className="article-clean-grid">
          <div className="article-clean-card">
            <h3>Plnorozmerná 60 cm</h3>
            <p>Štandard. 12–14 súprav riadu, vstavaná pod pracovnú dosku. Potrebuje 60 cm šírky a prívod vody + odpad.</p>
            <span className="article-clean-price">od 350 €</span>
          </div>
          <div className="article-clean-card">
            <h3>Úzka 45 cm</h3>
            <p>O 15 cm užšia, kapacita 9–10 súprav. Ideálna pre 1–2 osoby alebo kuchyňu kde chýba tých 15 cm.</p>
            <span className="article-clean-price">od 320 €</span>
          </div>
          <div className="article-clean-card">
            <h3>Stolová (mini)</h3>
            <p>Stojí na linke, nepotrebuje inštaláciu. Kapacita 4–6 súprav. Pre single alebo ako dočasné riešenie.</p>
            <span className="article-clean-price">od 250 €</span>
          </div>
        </div>
      </div>

      <div className="article-section">
        <h2>Rozmery, ktoré treba zmerať</h2>
        <ul className="article-list">
          <li><strong>Šírka výklenku:</strong> štandard 60 cm, pri úzkej umývačke 45 cm — zmerajte na mm presne</li>
          <li><strong>Výška pod pracovnou doskou:</strong> min. 82 cm pre vstavaný model</li>
          <li><strong>Hĺbka skrinky:</strong> väčšina umývačiek má hĺbku 55–60 cm, skontrolujte panel kuchyne</li>
          <li><strong>Prívod vody a odpad:</strong> musia byť v dosahu hadíc (zvyčajne 1,5 m)</li>
        </ul>
        <div className="article-tip">
          Ak nemáte prívod vody priamo pri umývačke, stolová umývačka sa dá napojiť na kohútik — žiadna
          inštalácia nie je potrebná.
        </div>
      </div>

      <div className="article-section">
        <h2>Komu sa hodí ktorý typ</h2>
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr><th>Situácia</th><th>Odporúčaný typ</th></tr>
            </thead>
            <tbody>
              <tr><td>Rodina 3–4 osoby, bežná kuchyňa</td><td>Plnorozmerná 60 cm</td></tr>
              <tr><td>Pár alebo single, kuchyňa s menším výklenkom</td><td>Úzka 45 cm</td></tr>
              <tr><td>Malý byt, nájom, žiadna inštalácia</td><td>Stolová</td></tr>
              <tr><td>Chata alebo dočasné bývanie</td><td>Stolová</td></tr>
              <tr><td>Malá kuchyňa, ale 3+ osoby</td><td>Plnorozmerná 60 cm — hľadajte priestor</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="article-section">
        <h2>Na čo ešte nezabudnúť</h2>
        <ul className="article-list">
          <li><strong>Hlučnosť:</strong> pre otvorenú kuchyňu hľadajte pod 44 dB, ideálne 40–42 dB</li>
          <li><strong>Programy:</strong> rýchlý program (30–45 min) je must-have pre každodenné použitie</li>
          <li><strong>Energetická trieda:</strong> min. D, ideálne C — umývačka sa zapína denne</li>
          <li><strong>Výška košov:</strong> nastaviteľný horný kôš umožní umývanie vysokých fliaš</li>
        </ul>
      </div>

      <div className="article-section">
        <h2>Checklist pred kúpou</h2>
        <ul className="article-checklist">
          <li><span className="check-icon">✓</span> Zmerané rozmery výklenku (šírka, výška, hĺbka)</li>
          <li><span className="check-icon">✓</span> Overený prívod vody a odpad v dosahu</li>
          <li><span className="check-icon">✓</span> Kapacita zodpovedá počtu osôb v domácnosti</li>
          <li><span className="check-icon">✓</span> Hlučnosť max. 44 dB pre obytný priestor</li>
          <li><span className="check-icon">✓</span> Energetická trieda min. D (ideálne C)</li>
        </ul>
      </div>

    </article>
  )
}

function ArticleOdvoz() {
  return (
    <article className="article-body">

      <div className="article-section">
        <p className="article-intro">
          Nový spotrebič prinesieme, starý odnesieme. Ale kedy je odvoz zahrnutý v cene, kedy sa priplatí
          a čo sa so starým spotrebičom stane? Tu je všetko, čo potrebujete vedieť vopred.
        </p>
      </div>

      <div className="article-section">
        <h2>Kedy je odvoz zadarmo?</h2>
        <p>
          Pri väčšine objednávok s dovozom a inštaláciou od Sentonu zahŕňame odvoz starého spotrebiča
          <strong> bez príplatku</strong>. Platí to pri štandardných spotrebičoch — chladnička, práčka,
          sušička, umývačka, rúra.
        </p>
        <div className="article-tip">
          Odvoz starého spotrebiča je zadarmo, ak si objednávate dopravu s vynáškou. Pri doručení
          "pred dvere" (bez inštalácie) odvoz nie je súčasťou služby.
        </div>
      </div>

      <div className="article-section">
        <h2>Čo so starým spotrebičom urobíme?</h2>
        <p>
          Senton spolupracuje s autorizovanými zberňami elektroodpadu. Starý spotrebič odovzdávame
          na <strong>ekologickú likvidáciu</strong> v súlade so zákonom o odpadoch. Dostanete potvrdenie
          o odovzdaní, ak ho potrebujete.
        </p>
        <ul className="article-list">
          <li>Spotrebič sa nelikviduje na skládke</li>
          <li>Chladivá a oleje sa ekologicky spracúvajú</li>
          <li>Kovy a plasty putujú do recyklácie</li>
          <li>Na požiadanie vystavíme doklad o ekologickej likvidácii</li>
        </ul>
      </div>

      <div className="article-section">
        <h2>Ako to prebieha v praxi</h2>
        <div className="article-checklist-numbered">
          <div className="article-check-item">
            <div className="check-num">1</div>
            <div>
              <strong>Objednávka s odvozom</strong>
              <p>Pri objednávaní uvediete, že chcete odviezť starý spotrebič. Dohodne sa pri telefonickej potvrdzovaní.</p>
            </div>
          </div>
          <div className="article-check-item">
            <div className="check-num">2</div>
            <div>
              <strong>Pripravte spotrebič</strong>
              <p>Chladničku a mrazničku vypnite 24 hodín vopred. Práčku nechajte odčerpať a odpojiť od prívodu vody.</p>
            </div>
          </div>
          <div className="article-check-item">
            <div className="check-num">3</div>
            <div>
              <strong>Doručenie a výmena</strong>
              <p>Technici prinesú nový spotrebič, nainštalujú ho a odnesú starý v rámci tej istej návštevy.</p>
            </div>
          </div>
          <div className="article-check-item">
            <div className="check-num">4</div>
            <div>
              <strong>Ekologická likvidácia</strong>
              <p>Starý spotrebič odovzdáme do autorizovanej zberne. Nič nemusíte riešiť.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="article-section">
        <h2>Na čo si dať pozor</h2>
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr><th>Situácia</th><th>Postup</th></tr>
            </thead>
            <tbody>
              <tr><td>Spotrebič je v suteréne alebo na poschodí bez výťahu</td><td>Informujte nás vopred — môže sa priplatkovať za sťahovanie</td></tr>
              <tr><td>Vstavaný spotrebič treba demonterovať</td><td>Dohodnutie vopred, technik prinesie náradie</td></tr>
              <tr><td>Chcete si starý spotrebič nechať</td><td>Povedzte to pri objednávke — neodvezieme ho</td></tr>
              <tr><td>Spotrebič obsahuje freón (staré chladničky)</td><td>Ekologicky spracujeme, nevyžaduje extra kroky od vás</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="article-section">
        <h2>Checklist pred dňom doručenia</h2>
        <ul className="article-checklist">
          <li><span className="check-icon">✓</span> Chladnička/mraznička vypnutá 24 hodín vopred</li>
          <li><span className="check-icon">✓</span> Práčka odčerpaná, hadice voľné</li>
          <li><span className="check-icon">✓</span> Spotrebič prístupný — voľná cesta od vchodu k miestu inštalácie</li>
          <li><span className="check-icon">✓</span> Informovaní o prípadných prekážkach (schody, úzky vchod)</li>
        </ul>
      </div>

    </article>
  )
}

function ArticleEnergetickaTrieda() {
  return (
    <article className="article-body">

      <div className="article-section">
        <p className="article-intro">
          Od roku 2021 platí nové označenie energetických tried A až G. Staré A+++, A++, A+ zmizli —
          a väčšina spotrebičov, ktoré boli "A+++", je dnes zaradená do triedy C alebo D. Vysvetlíme prečo a čo to znamená pre váš výber.
        </p>
      </div>

      <div className="article-section">
        <h2>Prečo sa zmenilo označenie?</h2>
        <p>
          Staré stupnice A+++ až D boli príliš zahustené na vrchole — takmer každý spotrebič bol "A niečo".
          Zákazníci nemali reálne porovnanie. Európska únia preto zaviedla novú škálu, kde <strong>trieda A je rezervovaná
          pre budúce, ešte úspornejšie technológie</strong> — v roku 2026 je trh A zatiaľ prakticky prázdny.
        </p>
        <div className="article-tip">
          Ak vidíte spotrebič označený A+++ — je to starý štítok pred rokom 2021. Dnes by bol zaradený zhruba do triedy B–C.
        </div>
      </div>

      <div className="article-section">
        <h2>Nová škála A až G: čo znamená každá trieda</h2>
        <div className="article-energy-grid">
          <div className="article-energy-row">
            <div className="energy-badge energy-a">A</div>
            <div><strong>Najúspornejšia</strong> — zatiaľ takmer nedostupná na trhu. Rezerva pre budúce technológie.</div>
          </div>
          <div className="article-energy-row">
            <div className="energy-badge energy-b">B</div>
            <div><strong>Výborná</strong> — prémiové modely, najlepšia voľba ak vám záleží na spotrebe.</div>
          </div>
          <div className="article-energy-row">
            <div className="energy-badge energy-b" style={{background:'#84cc16'}}>C</div>
            <div><strong>Dobrá</strong> — väčšina strednej triedy. Rozumný pomer ceny a spotreby.</div>
          </div>
          <div className="article-energy-row">
            <div className="energy-badge energy-c">D</div>
            <div><strong>Priemerná</strong> — bežné modely. Nie zlé, ale vyššia spotreba ako C.</div>
          </div>
          <div className="article-energy-row">
            <div className="energy-badge energy-d">E–G</div>
            <div><strong>Podpriemer</strong> — starší dizajn alebo lacné modely. Dlhodobo drahé na prevádzku.</div>
          </div>
        </div>
      </div>

      <div className="article-section">
        <h2>Trieda podľa typu spotrebiča</h2>
        <p>Každý typ spotrebiča má inú škálu — neporovnávajte chladničku s práčkou.</p>
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr><th>Spotrebič</th><th>Odporúčaná min. trieda</th><th>Ideál</th></tr>
            </thead>
            <tbody>
              <tr><td>Chladnička / mraznička</td><td>C</td><td>B</td></tr>
              <tr><td>Práčka</td><td>C</td><td>B</td></tr>
              <tr><td>Sušička</td><td>C</td><td>B</td></tr>
              <tr><td>Umývačka riadu</td><td>D</td><td>C</td></tr>
              <tr><td>Vstavaná rúra</td><td>A (starý štítok) / C (nový)</td><td>B (nový)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="article-section">
        <h2>Oplatí sa priplatiť za vyššiu triedu?</h2>
        <p>
          Záleží na type spotrebiča. Chladnička beží 24 hodín denne — rozdiel medzi triedou C a E je
          pri 300 l modeli asi <strong>20–25 € ročne</strong>. Za 15 rokov životnosti je to 300–375 €.
        </p>
        <p>
          Práčka a umývačka bežia len niekoľko hodín denne — úspora na triede je menej dramatická, typicky
          <strong>5–15 € ročne</strong>. Tu rozhoduje skôr cena a funkcie ako trieda.
        </p>
        <div className="article-tip">
          <strong>Pravidlo:</strong> Pri spotrebičoch, ktoré bežia stále (chladnička, mraznička), investujte do vyššej triedy.
          Pri ostatných uprednostnite funkcie a spoľahlivosť značky.
        </div>
      </div>

      <div className="article-section">
        <h2>Ako čítať nový energetický štítok</h2>
        <ul className="article-list">
          <li><strong>QR kód</strong> — odkazuje na európsku databázu EPREL s detailnými parametrami</li>
          <li><strong>Šípka s triedou</strong> — poloha na stupnici A–G, farebne odlíšená</li>
          <li><strong>Spotreba v kWh</strong> — ročná (chladnička) alebo na cyklus (práčka, umývačka)</li>
          <li><strong>Hlučnosť v dB</strong> — dôležité najmä pri práčke a umývačke v otvorenom dispozícii</li>
          <li><strong>Kapacita</strong> — v litroch (chladnička) alebo kg (práčka)</li>
        </ul>
      </div>

    </article>
  )
}

function ArticleKuchynskySet() {
  return (
    <article className="article-body">

      <div className="article-section">
        <p className="article-intro">
          Rúra, varná doska, digestor, umývačka — kuchynské spotrebiče väčšina ľudí kupuje postupne, jeden po druhom.
          Pritom kúpa viacerých naraz môže ušetriť stovky eur a ušetriť vám aj veľa starostí s kompatibilitou.
        </p>
      </div>

      <div className="article-section">
        <h2>Prečo kupovať v sete?</h2>
        <p>
          Spotrebiče od rovnakého výrobcu do seba vizuálne pasujú — rovnaké ovládacie prvky, rovnaký dizajn nerezovej ocele,
          rovnaká farebná teplota LED podsvietenia. Ale úspora nejde len o estetiku.
        </p>
        <ul className="article-list">
          <li><strong>Zľava na set:</strong> pri kúpe 3 a viac spotrebičov naraz Senton poskytuje množstevnú zľavu</li>
          <li><strong>Jeden dovoz:</strong> platíte dopravu raz, nie trikrát</li>
          <li><strong>Kompatibilita zaručená:</strong> rúra + doska od rovnakého výrobcu fungujú spolu bez problémov</li>
          <li><strong>Záruka a servis:</strong> jeden kontakt pre všetky spotrebiče</li>
        </ul>
      </div>

      <div className="article-section">
        <h2>Typická zostava kuchynského setu</h2>
        <p>Najčastejšia kombinácia pri komplexnom vybavení kuchyne:</p>
        <div className="article-checklist-numbered">
          <div className="article-check-item">
            <div className="check-num">1</div>
            <div>
              <strong>Vstavaná rúra</strong>
              <p>Základ každej kuchyne. Pri sete odporúčame pyrolytické čistenie — ušetríte čas aj námahu.</p>
            </div>
          </div>
          <div className="article-check-item">
            <div className="check-num">2</div>
            <div>
              <strong>Varná doska</strong>
              <p>Indukcia alebo plyn — podľa preferencie. Šírka musí odpovedať výklenku v linke (60 cm alebo 90 cm).</p>
            </div>
          </div>
          <div className="article-check-item">
            <div className="check-num">3</div>
            <div>
              <strong>Digestor</strong>
              <p>Šírka digestora by mala byť rovnaká alebo väčšia ako varná doska. Skontrolujte výkon v m³/h.</p>
            </div>
          </div>
          <div className="article-check-item">
            <div className="check-num">4</div>
            <div>
              <strong>Umývačka riadu</strong>
              <p>Vstavaná 60 cm alebo 45 cm. Pri malých kuchyniach zvážte užší model — ušetríte miesto.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="article-section">
        <h2>Kedy sa set oplatí najviac?</h2>
        <div className="article-budget-grid">
          <div className="article-budget-card">
            <span className="article-budget-label">Ideálne</span>
            <h3>Nová kuchyňa</h3>
            <p>Kupujete všetko naraz pri rekonštrukcii alebo zariaďovaní nového bytu. Maximálna úspora aj pohodlie.</p>
          </div>
          <div className="article-budget-card article-budget-featured">
            <span className="article-budget-label">Najčastejšie</span>
            <h3>Výmena 2–3 starých</h3>
            <p>Niektoré spotrebiče ešte fungujú, ale rúra a doska dosloužili. Ideálny čas dokúpiť aj digestor.</p>
          </div>
          <div className="article-budget-card">
            <span className="article-budget-label">Menej výhodné</span>
            <h3>Jeden spotrebič</h3>
            <p>Kupujete len rúru alebo len umývačku? Set sa neoplatí, ale stále môžete vybrať rovnakú značku do budúcna.</p>
          </div>
        </div>
      </div>

      <div className="article-section">
        <h2>Ako na to v Sentone</h2>
        <p>
          V Sentone máme kompletné zostavy od Bosch, Electrolux a AEG. Stačí zavolať — poradíme vám, ktoré modely
          do seba pasujú vizuálne aj technicky, a spočítame cenu za celú zostavu vrátane dopravy a inštalácie.
        </p>
        <div className="article-tip">
          <strong>Tip:</strong> Pri objednávke setu sa spýtajte na odvoz starých spotrebičov. Pri väčších objednávkach
          ho vieme zahrnúť do ceny dopravy.
        </div>
      </div>

      <div className="article-section">
        <h2>Checklist pred objednávkou setu</h2>
        <ul className="article-checklist">
          <li><span className="check-icon">✓</span> Zmerajte všetky výklenky vopred (šírka, výška, hĺbka)</li>
          <li><span className="check-icon">✓</span> Rozhodnite sa pre jednu značku — pasujú vizuálne aj technicky</li>
          <li><span className="check-icon">✓</span> Skontrolujte prívody (elektrina, plyn, voda, odpad)</li>
          <li><span className="check-icon">✓</span> Zahrňte digestor — jeho šírka = šírka varnej dosky alebo väčšia</li>
          <li><span className="check-icon">✓</span> Opýtajte sa na množstevnú zľavu a cenu dopravy za celý set</li>
        </ul>
      </div>

    </article>
  )
}

const articleComponents = {
  'ako-vybrat-vstavanu-ruru': ArticleRura,
  'rozmery-pre-zabudovanie-checklist': ArticleRozmery,
  'pracka-susicka-alebo-kombinacia': ArticlePrackaSusicka,
  'bosch-vs-electrolux-umyvacky': ArticleBoschElectrolux,
  'najcastejsie-chyby-pri-vybere-chladnicky': ArticleChladnicky,
  'kuchynsky-set-ako-setrit': ArticleKuchynskySet,
  'energeticka-trieda-spotrebice-2026': ArticleEnergetickaTrieda,
  'odvoz-stareho-spotrebica-ako-funguje': ArticleOdvoz,
  'umyvacka-riadu-do-malej-kuchyne': ArticleUmyvacka,
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

      {meta.heroImg && (
        <div className={`article-hero-img-wrap${meta.heroImgFit === 'contain' ? ' article-hero-img-wrap--contain' : ''}`}>
          <img src={meta.heroImg} alt={meta.title} className="article-hero-img" />
        </div>
      )}

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
