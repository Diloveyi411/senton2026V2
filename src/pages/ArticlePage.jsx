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

const articleComponents = {
  'ako-vybrat-vstavanu-ruru': ArticleRura,
  'rozmery-pre-zabudovanie-checklist': ArticleRozmery,
  'pracka-susicka-alebo-kombinacia': ArticlePrackaSusicka,
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
