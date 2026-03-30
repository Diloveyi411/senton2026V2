import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TermsPage.css'

function IconDownload() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
}

const toc = [
  { id: 'cl1',  label: 'Čl. 1 – Úvodné ustanovenia' },
  { id: 'cl2',  label: 'Čl. 2 – Uzatváranie kúpnej zmluvy' },
  { id: 'cl3',  label: 'Čl. 3 – Dodanie tovaru' },
  { id: 'cl4',  label: 'Čl. 4 – Kúpna cena a poplatky' },
  { id: 'cl5',  label: 'Čl. 5 – Odstúpenie od zmluvy' },
  { id: 'cl6',  label: 'Čl. 6 – Zodpovednosť za vady (Reklamačný poriadok)' },
  { id: 'cl7',  label: 'Čl. 7 – Hodnotenie produktov' },
  { id: 'cl8',  label: 'Čl. 8 – Alternatívne riešenie sporov' },
  { id: 'cl9',  label: 'Čl. 9 – Elektronické faktúry' },
  { id: 'cl10', label: 'Čl. 10 – Užívateľské konto' },
  { id: 'cl11', label: 'Čl. 11 – Ochrana osobných údajov' },
  { id: 'cl12', label: 'Čl. 12 – Nákup na splátky' },
  { id: 'cl13', label: 'Čl. 13 – Záverečné ustanovenia' },
  { id: 'prilohy', label: 'Prílohy na stiahnutie' },
]

const downloads = [
  { label: 'Obchodné podmienky (PDF)', file: '/docs/obchodne-podmienky.pdf' },
  { label: 'Formulár na odstúpenie od zmluvy', file: '/docs/formular-odstupenie.pdf' },
  { label: 'Formulár na vytknutie vady', file: '/docs/formular-vytknutie-vady.pdf' },
  { label: 'Poučenie o práve na odstúpenie od zmluvy', file: '/docs/poucenie-odstupenie.pdf' },
]

export default function TermsPage() {
  const [activeId, setActiveId] = useState('cl1')

  useEffect(() => {
    const handler = () => {
      const sections = toc.map(t => document.getElementById(t.id)).filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top <= 120) {
          setActiveId(sections[i].id)
          return
        }
      }
      setActiveId('cl1')
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="terms-page">
      <div className="container">

        <nav className="terms-breadcrumb">
          <Link to="/">Domov</Link>
          <span>/</span>
          <span>Obchodné podmienky</span>
        </nav>

        <div className="terms-layout">

          {/* Sidebar TOC */}
          <aside className="terms-toc">
            <div className="terms-toc-inner">
              <div className="terms-toc-title">Obsah</div>
              <ul>
                {toc.map(item => (
                  <li key={item.id}>
                    <button
                      className={`terms-toc-link${activeId === item.id ? ' active' : ''}`}
                      onClick={() => scrollTo(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <div className="terms-content">

            <div className="terms-doc-header">
              <h1>Všeobecné obchodné podmienky</h1>
              <p className="terms-valid">Platnosť od 1. 7. 2024 &nbsp;·&nbsp; SENTON, spol. s r.o.</p>
            </div>

            {/* Čl. 1 */}
            <section id="cl1" className="terms-section">
              <h2>Čl. 1 – Úvodné ustanovenia</h2>
              <p>1.1 Tieto všeobecné obchodné podmienky, ktorých súčasťou je reklamačný poriadok (ďalej ako „obchodné podmienky") upravujú práva a povinnosti zmluvných strán vyplývajúce z kúpnej zmluvy uzatvorenej medzi obchodníkom, ktorým je spoločnosť: SENTON, spol. s r.o., sídlo: Kosatcová 2, Košice - mestská časť Vyšné Opátske 040 01, IČO: 36186813, DIČ: 2020058293, IČ DPH: SK2020058293, zapísaná v: Obchodný register Mestského súdu Košice, oddiel: Sro, vložka č. 10585/V (ďalej len „obchodník") a kupujúcim, ktorej predmetom je kúpa a predaj tovaru na internetovej stránke www.senton.sk ako elektronického obchodu obchodníka (ďalej len „internetový obchod").</p>
              <p>1.2 Kontaktné údaje obchodníka:</p>
              <div className="terms-infobox">
                <p><strong>Obchodné meno:</strong> SENTON, spol. s r.o.</p>
                <p><strong>Korešpondencia:</strong> Kosatcová 2, Košice - mestská časť Vyšné Opátske 040 01</p>
                <p><strong>Tel. kontakt:</strong> 0905 901 500 | 0917 354 720</p>
                <p><strong>E-mail:</strong> senton@senton.sk</p>
                <p><strong>Bankové spojenie:</strong> IBAN: SK30 0200 0000 0023 2077 4653</p>
              </div>
              <p>1.3 Pre účel týchto obchodných podmienok sa:</p>
              <ol type="a">
                <li>spotrebiteľom rozumie fyzická osoba, ktorá v súvislosti so spotrebiteľskou zmluvou, z nej vyplývajúcim záväzkom alebo pri obchodnej praktike nekoná v rámci svojej podnikateľskej činnosti alebo povolania,</li>
                <li>podnikateľom rozumie osoba, ktorá podniká na základe živnostenského oprávnenia, alebo ktorá podniká na základe iného než živnostenského oprávnenia podľa osobitných predpisov, alebo ktorá vykonáva poľnohospodársku výrobu a je zapísaná do evidencie podľa osobitného predpisu a ktorá koná v rámci predmetu svojej podnikateľskej činnosti a nakupuje tovar v súvislosti s jej podnikateľskou činnosťou,</li>
                <li>kupujúcim rozumie spotrebiteľ alebo podnikateľ, ktorý nakupuje tovar od obchodníka,</li>
                <li>kúpnou zmluvou rozumie každá zmluva bez ohľadu na právnu formu, ktorú uzatvára obchodník s kupujúcim,</li>
                <li>tovarom rozumie predmet kúpy, ak predmetom kúpy nie je služba.</li>
              </ol>
              <p>1.4 V prípade, že je zmluvnou stranou spotrebiteľ, riadia sa vzťahy neupravené týmito obchodnými podmienkami zákonom č. 108/2024 Z.z. o ochrane spotrebiteľa a o zmene a doplnení niektorých zákonov a zákonom č. 40/1964 Zb. Občiansky zákonník, všetky v platnom znení.</p>
              <p>1.5 V prípade, že je zmluvnou stranou podnikateľ, riadia sa vzťahy neupravené týmito obchodnými podmienkami zákonom č. 513/1991 Zb. Obchodný zákonník v platnom znení.</p>
              <p>1.6 Obchodné podmienky sú súčasťou uzavretej kúpnej zmluvy medzi obchodníkom na jednej strane a kupujúcim na strane druhej. Tieto obchodné podmienky sa riadia výhradne platnou a účinnou legislatívou Slovenskej republiky. Všetky zmluvné vzťahy sú uzatvorené v súlade s právnym poriadkom Slovenskej republiky. Kupujúci odoslaním objednávky súhlasí s tým, že tieto obchodné podmienky a ich ustanovenia sa budú vzťahovať na všetky kúpne zmluvy uzatvorené prostredníctvom internetového obchodu a na všetky vzťahy medzi obchodníkom a kupujúcim, vzniknuté najmä pri uzatváraní kúpnej zmluvy a vytknutí vady výrobku.</p>
              <p>1.7 Kupujúci objednaním tovaru od obchodníka súhlasí s týmito obchodnými podmienkami a to zakliknutím políčka na konci objednávkového formulára so znením „Oboznámil/a som sa s obchodnými podmienkami a ochranou osobných údajov".</p>
              <p>1.8 Obchodník jasným, jednoznačným, zrozumiteľným a nezameniteľným spôsobom informoval pred odoslaním objednávky kupujúceho o predzmluvných informáciách, týkajúcich sa najmä zodpovednosti za vady, platobných, obchodných, prepravných a iných podmienok tak, že:</p>
              <ol type="a">
                <li>o hlavných vlastnostiach tovaru v rozsahu primeranom druhu a povahe produktu informoval na príslušnej katalógovej stránke internetového obchodu,</li>
                <li>o obchodnom mene a ďalších potrebných identifikačných údajov obchodníka informoval na príslušnej podstránke elektronického obchodu a v bode 1.1 týchto obchodných podmienok,</li>
                <li>o telefónnom čísle a elektronickej pošte obchodníka a o ďalších údajoch, ktoré sú dôležité pre kontakt kupujúceho s obchodníkom informoval na príslušnej podstránke internetového obchodu a v bode 1.2 týchto obchodných podmienok,</li>
                <li>o adrese obchodníka, na ktorej môže kupujúci uplatniť práva zo zodpovednosti za vady produktu informoval v bode 6.5 týchto obchodných podmienok,</li>
                <li>o práve podať sťažnosť alebo iný podnet a poučení o práve spotrebiteľa podať obchodníkovi žiadosť o nápravu prostredníctvom alternatívneho riešenia sporov informoval v čl. 8 týchto obchodných podmienok,</li>
                <li>o predajnej cene jednotlivého tovaru vrátane dane z pridanej hodnoty a všetkých ostatných daní informoval na príslušnej katalógovej stránke internetového obchodu,</li>
                <li>o platobných podmienkach, dodacích podmienkach a o lehote, do ktorej sa obchodník zaväzuje dodať tovar informoval v čl. 3 a 4 týchto obchodných podmienok,</li>
                <li>o právach a povinnostiach zmluvných strán spojených so zodpovednosťou za vady a o existencii a dĺžke trvania zákonnej zodpovednosti obchodníka za vady informoval v čl. 6 týchto obchodných podmienok,</li>
                <li>o informácii o práve spotrebiteľa odstúpiť od kúpnej zmluvy v zmysle zákona č. 108/2024 Z. z. o ochrane spotrebiteľa a o zmene a doplnení niektorých zákonov, o podmienkach, lehotách a postupe pri uplatňovaní práv na odstúpenie od zmluvy informoval v čl. 5 týchto obchodných podmienok,</li>
                <li>o informácii o práve spotrebiteľa odstúpiť od kúpnej zmluvy v zmysle zákona č. 40/1964 Zb. Občiansky zákonník, o podmienkach, lehotách a postupe pri uplatňovaní práv na odstúpenie od zmluvy informoval v čl. 6 týchto obchodných podmienok,</li>
                <li>o poskytnutí formuláru na odstúpenie od kúpnej zmluvy v zmysle zákona č. 108/2024 Z. z. o ochrane spotrebiteľa informoval v čl. 5.4 týchto obchodných podmienok,</li>
                <li>o informácii, že ak spotrebiteľ odstúpi od kúpnej zmluvy, bude znášať náklady spojené s vrátením tovaru obchodníkovi informoval v bode 5.5 týchto obchodných podmienok,</li>
                <li>o okolnostiach, za ktorých spotrebiteľ stráca právo na odstúpenie od zmluvy informoval v bode 5.8 týchto obchodných podmienok,</li>
                <li>o úkonoch potrebných na uzatvorenie kúpnej zmluvy informoval v čl. 2 týchto obchodných podmienok.</li>
              </ol>
            </section>

            {/* Čl. 2 */}
            <section id="cl2" className="terms-section">
              <h2>Čl. 2 – Spôsob uzatvárania kúpnej zmluvy</h2>
              <p>2.1 Návrh na uzatvorenie kúpnej zmluvy zasiela kupujúci obchodníkovi vo forme vyplneného a odoslaného objednávkového formulára na internetovom obchode, ktorým zaslal návrh na uzavretie kúpnej zmluvy, predmetom ktorej je odplatný prevod vlastníckeho práva k tovaru označeného kupujúcim za kúpnu cenu a za podmienok, uvedených v tejto objednávke (ďalej len „objednávka"). Po prijatí objednávky obchodník bezodkladne doručí kupujúcemu potvrdenie o doručení objednávky, na vznik kúpnej zmluvy toto potvrdenie nemá vplyv.</p>
              <p>2.2 Potvrdenie o prijatí objednávky obsahuje najmä údaje o názve a špecifikácii tovaru, ktorého predaj je predmetom kúpnej zmluvy, údaje o cene tovaru, údaje o dodacej lehote tovaru, názov a údaje o mieste, kde má byť tovar doručený, prípadne iné doplňujúce údaje podľa platnej legislatívy.</p>
              <p>2.3 Na e-mailovú adresu kupujúceho mu budú v prípade potreby zasielané všetky ďalšie informácie ohľadom jeho objednávky.</p>
              <p>2.4 Kúpna zmluva sa považuje za uzatvorenú v prípade, keď obchodník akceptuje návrh na uzatvorenie kúpnej zmluvy a to doručením akceptácie objednávky v elektronickej alebo písomnej podobe kupujúcemu.</p>
              <p>2.5 Podľa novely zákona č. 222/2004 Z.z. o dani z pridanej hodnoty nemožno od 1.1. 2013 meniť údaje v už vystavenom daňovom doklade (faktúre). Údaje v daňovom doklade (faktúra) je možné meniť len v prípade, kedy kupujúci tovar ešte neprijal a nezaplatil.</p>
            </section>

            {/* Čl. 3 */}
            <section id="cl3" className="terms-section">
              <h2>Čl. 3 – Dodanie tovaru</h2>
              <p>3.1 Z kúpnej zmluvy vznikne obchodníkovi povinnosť predmet kúpy kupujúcemu odovzdať a kupujúcemu povinnosť predmet kúpy prevziať a zaplatiť zaň obchodníkovi dohodnutú cenu.</p>
              <p>3.2 Obchodník dodá kupujúcemu predaný tovar bez zbytočného odkladu, najneskôr do 30 dní odo dňa uzavretia zmluvy. Štandardná dodacia doba na jednotlivý tovar ktorý je označený ako „skladom" je 2 až 5 pracovných dní.</p>
              <p>3.3 Miestom dodania tovaru je miesto uvedené kupujúcim v objednávkovom formulári.</p>
              <p>3.4 Tovar je dodaný v okamihu, keď ho prevezme kupujúci alebo ním určená osoba, alebo keď ho obchodník odovzdá prepravcovi, ktorého poveril kupujúci mimo možností prepravy, ktoré ponúkol kupujúcemu obchodník.</p>
              <p>3.5 Tovar sa ďalej považuje za dodaný okamihom, keď kupujúci alebo ním určená tretia osoba okrem dopravcu prevezme všetky časti objednaného tovaru, alebo ak sa:</p>
              <ol type="a">
                <li>tovary objednané v jednej objednávke dodávajú oddelene, okamihom prevzatia tovaru, ktorý bol dodaný ako posledný,</li>
                <li>dodáva tovar pozostávajúci z viacerých dielov alebo kusov, okamihom prevzatia posledného dielu alebo posledného kusu,</li>
                <li>tovar dodáva opakovane počas určitej doby, okamihom prevzatia prvého tovaru.</li>
              </ol>
              <p>3.6 Kupujúci si pri objednávke vyberie vhodnú formu zaplatenia kúpnej ceny tovaru a vhodnú formu dodania tovaru z možností ponúkaných obchodníkom, ktoré sa zobrazia v rozhraní internetového obchodu pri tvorbe objednávky (v nákupnom košíku).</p>
              <p>3.7 Kupujúci má okrem iného možnosť vyzdvihnúť si zakúpený tovar osobne, na adrese: Kosatcová 2, Košice - mestská časť Vyšné Opátske 040 01. Pri tejto možnosti prevzatia tovaru sa zohľadňujú prevádzkové hodiny odberného miesta.</p>
              <p>3.8 Okamihom dodania tovaru prechádza na kupujúceho vlastnícke právo k predanému tovaru, nebezpečenstvo náhodnej skazy, náhodného zhoršenia a straty tovaru.</p>
            </section>

            {/* Čl. 4 */}
            <section id="cl4" className="terms-section">
              <h2>Čl. 4 – Kúpna cena a poplatky spojené s kúpou tovaru</h2>
              <p>4.1 Výsledná konečná kúpna cena za kupujúcim vybraný tovar je uvedená na konci objednávkového formulára vytvoreného v rámci objednávky prostredníctvom internetového obchodu a je uvedená vrátane dane z pridanej hodnoty a všetkých ostatných daní, poplatku za dodanie a všetkých ostatných poplatkov spojených s objednávkou. Táto výsledná konečná kúpna cena je taktiež uvedená v akceptácii objednávky.</p>
              <p>4.2 Kupujúci je povinný zaplatiť obchodníkovi kúpnu cenu za dohodnutý tovar v lehote podľa kúpnej zmluvy, najneskôr však pri prevzatí tovaru.</p>
              <p>4.3 V prípade, ak kupujúci zaplatí obchodníkovi kúpnu cenu bezhotovostným prevodom, za deň platby sa považuje deň, kedy bola celá kúpna cena pripísaná na účet obchodníka.</p>
              <p>4.4 V prípade, ak kupujúci zaplatí obchodníkovi kúpnu cenu bezhotovostným prevodom, za deň platby sa považuje deň, kedy bola celá kúpna cena pripísaná na účet obchodníka.</p>
            </section>

            {/* Čl. 5 */}
            <section id="cl5" className="terms-section">
              <h2>Čl. 5 – Odstúpenie od kúpnej zmluvy</h2>
              <p>5.1 Spotrebiteľ má právo odstúpiť od zmluvy uzavretej na diaľku alebo od zmluvy uzavretej mimo prevádzkových priestorov obchodníka (prostredníctvom internetového obchodu obchodníka) a to do 14 dní odo dňa prevzatia tovaru podľa bodu 3.4 a 3.5 týchto obchodných podmienok.</p>
              <p>5.2 Lehota na odstúpenie od zmluvy podľa bodu 5.1 týchto obchodných podmienok sa považuje za zachovanú, ak spotrebiteľ najneskôr posledný deň lehoty odošle oznámenie o odstúpení od zmluvy obchodníkovi. Spotrebiteľ môže odstúpiť od zmluvy uzavretej na diaľku alebo od zmluvy uzavretej mimo prevádzkových priestorov obchodníka, ktorých predmetom je dodanie tovaru, aj pred začatím plynutia lehoty na odstúpenie od zmluvy.</p>
              <p>5.3 Obchodník je povinný do 14 dní odo dňa doručenia oznámenia o odstúpení od zmluvy vrátiť spotrebiteľovi všetky platby, ktoré od neho prijal na základe alebo v súvislosti so zmluvou uzavretou na diaľku, vrátane nákladov na dopravu, dodanie, poštovné a iných nákladov a poplatkov. Obchodník je povinný vrátiť spotrebiteľovi tieto platby rovnakým spôsobom, aký použil spotrebiteľ pri ich úhrade. Obchodník však nie je povinný uhradiť spotrebiteľovi dodatočné náklady, ak si spotrebiteľ výslovne zvolil iný spôsob dodania, ako je najlacnejší bežný spôsob dodania ponúkaný obchodníkom.</p>
              <p>5.4 Spotrebiteľ môže uplatniť právo na odstúpenie od zmluvy uzavretej na diaľku alebo od zmluvy uzavretej mimo prevádzkových priestorov obchodníka v listinnej podobe, v podobe zápisu na inom trvanlivom médiu, alebo zaslaním e-mailu na adresu uvedenú v bode 1.2 týchto obchodných podmienok. Spotrebiteľ k tomuto účelu môže použiť vzorový formulár na odstúpenie od zmluvy, ktorý sa nachádza k stiahnutiu na konci týchto obchodných podmienok.</p>
              <p>5.5 Pri odstúpení od zmluvy uzavretej na diaľku alebo od zmluvy uzavretej mimo prevádzkových priestorov obchodníka znáša spotrebiteľ len náklady na vrátenie tovaru obchodníkovi alebo osobe určenej obchodníkom na prevzatie tovaru. Ak spotrebiteľ odstúpi od zmluvy uzavretej na diaľku, znáša aj náklady na vrátenie tovaru, ktorý vzhľadom na jeho povahu nie je možné vrátiť prostredníctvom pošty.</p>
              <p>5.6 Spotrebiteľ je povinný do 14 dní odo dňa odstúpenia od zmluvy uzavretej na diaľku alebo od zmluvy uzavretej mimo prevádzkových priestorov obchodníka zaslať tovar späť alebo odovzdať tovar obchodníkovi alebo osobe určenej obchodníkom na prevzatie tovaru; to neplatí, ak obchodník navrhne, že si tovar vyzdvihne osobne alebo prostredníctvom ním určenej osoby.</p>
              <p>5.7 Obchodník nie je povinný pri odstúpení od zmluvy uzavretej na diaľku vrátiť spotrebiteľovi platby pred tým, ako mu je tovar doručený, alebo kým spotrebiteľ nepreukáže zaslanie tovaru späť obchodníkovi, ibaže obchodník navrhne, že tovar vyzdvihne osobne alebo prostredníctvom ním určenej osoby.</p>
              <p>5.8 Spotrebiteľ nemá právo na odstúpenie od zmluvy, ktorej predmetom je dodanie tovaru vyrobeného podľa špecifikácií spotrebiteľa alebo tovaru vyrobeného na mieru.</p>
              <p>5.9 Spotrebiteľ zodpovedá za zníženie hodnoty tovaru, ktoré vzniklo v dôsledku zaobchádzania s tovarom, ktoré je nad rámec zaobchádzania potrebného na zistenie vlastností a funkčnosti tovaru. V prípade ak kupujúci vráti tovar obchodníkovi akokoľvek poškodený či opotrebovaný, v nepôvodnom obale, alebo dokonca používaný a to v dôsledku zaobchádzania s tovarom nad rámec zaobchádzania potrebného na zistenie vlastností a funkčností tovaru, má obchodník voči kupujúcemu nárok na náhradu škody.</p>
              <p>5.10 Účinky odstúpenia od zmluvy uzavretej na diaľku alebo zmluvy uzavretej mimo prevádzkových priestorov obchodníka sa vzťahujú aj na každú doplnkovú zmluvu k zmluve, od ktorej spotrebiteľ odstúpil; to neplatí, ak sa strany výslovne dohodnú na ďalšom trvaní doplnkovej zmluvy.</p>
            </section>

            {/* Čl. 6 */}
            <section id="cl6" className="terms-section">
              <h2>Čl. 6 – Zodpovednosť za vady a vytknutie vady (Reklamačný poriadok)</h2>
              <p>6.1 Obchodník zodpovedá kupujúcemu za akúkoľvek vadu, ktorú má predaný tovar v čase jeho dodania a ktorá sa prejaví do dvoch rokov od dodania tovaru. Ak je predmetom kúpy použitý tovar, obchodník zodpovedá za akúkoľvek vadu, ktorú má predaný tovar v čase jeho dodania a ktorá sa prejaví do jedného roka od dodania tovaru.</p>
              <p>6.2 Obchodník spĺňa všeobecné požiadavky na tovar tým, že je tovar najmä:</p>
              <ol type="a">
                <li>vhodný na všetky účely, na ktoré sa tovar rovnakého druhu bežne používa s prihliadnutím na právne predpisy, technické normy alebo na kódexy správania platné pre príslušné odvetvie,</li>
                <li>zodpovedá opisu a kvalite, ktoré obchodník deklaruje spotrebiteľovi pred uzavretím zmluvy,</li>
                <li>dodaný s príslušenstvom, obalom a návodmi vrátane návodu na montáž a inštaláciu, ktoré môže spotrebiteľ dôvodne očakávať,</li>
                <li>dodaný v množstve, kvalite a s vlastnosťami vrátane funkčnosti, kompatibility, bezpečnosti a schopnosti zachovať si pri bežnom používaní svoju funkčnosť a výkonnosť, aké sú bežné pre vec rovnakého druhu a aké môže spotrebiteľ dôvodne očakávať.</li>
              </ol>
              <p>6.3 Obchodník spĺňa dohodnuté požiadavky na tovar tým, že tovar najmä:</p>
              <ol type="a">
                <li>zodpovedá opisu, druhu, množstvu a kvalite vymedzeným v kúpnej zmluve,</li>
                <li>je vhodný na konkrétny účel, s ktorým kupujúci oboznámil obchodníka najneskôr pri uzavretí zmluvy a s ktorým obchodník súhlasil,</li>
                <li>vyznačuje sa v zmluve vymedzenou schopnosťou plniť funkcie s ohľadom na svoj účel,</li>
                <li>vyznačuje sa ďalšími vlastnosťami vymedzenými v kúpnej zmluve,</li>
                <li>je dodaný so všetkým príslušenstvom vymedzeným v kúpnej zmluve,</li>
                <li>je dodaný s návodom na použitie vrátane návodu na montáž a inštaláciu, ako bolo vymedzené v kúpnej zmluve.</li>
              </ol>
              <p>6.4 Predaný tovar má vady, ak nie je v súlade so všeobecnými požiadavkami a s dohodnutými požiadavkami. Predaný tovar má ďalej vady, ak jeho používanie znemožňujú alebo obmedzujú práva tretej osoby vrátane práv duševného vlastníctva.</p>
              <p>6.5 Vytknutie vady si môže spotrebiteľ uplatniť písomne na adrese obchodníka: Kosatcová 2, Košice - mestská časť Vyšné Opátske 040 01, alebo elektronicky prostredníctvom kontaktných údajov uvedených v bode 1.2 týchto obchodných podmienok. Na tento účel môže spotrebiteľ využiť vzorový formulár, ktorý sa nachádza k stiahnutiu na konci týchto obchodných podmienok. Kupujúci má možnosť vytknúť vadu tovaru aj priamo u výrobcu.</p>
              <p>6.6 Ak si spotrebiteľ u obchodníka uplatní právo na vytknutie vady, obchodník mu bezodkladne poskytne písomné potvrdenie o vytknutí vady. Obchodník v potvrdení o vytknutí vady uvedie lehotu, v ktorej vadu odstráni. Lehota oznámená podľa predchádzajúcej vety nesmie byť dlhšia ako 30 dní odo dňa vytknutia vady, ak dlhšia lehota nie je odôvodnená objektívnym dôvodom, ktorý obchodník nemôže ovplyvniť.</p>
              <p>6.7 Ak spotrebiteľ vytkol vadu poštovou zásielkou, ktorú obchodník odoprel prijať, zásielka sa považuje za doručenú v deň odopretia.</p>
              <p>6.8 Spotrebiteľ môže uplatňovať práva zo zodpovednosti za vady len ak vytkol vadu do dvoch mesiacov od zistenia vady, najneskôr do uplynutia doby zodpovednosti obchodníka za vady tovaru.</p>
              <p>6.9 Spotrebiteľ má v rámci uplatnenia si nároku na odstránenie vady okrem iného právo najmä na:</p>
              <ol type="a">
                <li>odstránenie vady tovaru opravou,</li>
                <li>výmenu tovaru,</li>
                <li>primeranú zľavu z kúpnej ceny,</li>
                <li>odstúpenie od kúpnej zmluvy.</li>
              </ol>
              <p>6.10 Spotrebiteľ má právo zvoliť si odstránenie vady výmenou tovaru alebo opravou tovaru. Spotrebiteľ si nemôže zvoliť spôsob odstránenia vady, ktorý nie je možný alebo ktorý by v porovnaní s druhým spôsobom odstránenia vady spôsobil obchodníkovi neprimerané náklady s ohľadom na všetky okolnosti, najmä na hodnotu, ktorú by mala vec bez vady, na závažnosť vady a na skutočnosť, či by druhý spôsob odstránenia vady spôsobil obchodníkovi značné ťažkosti.</p>
              <p>6.11 Obchodník sa zaväzuje po tom, čo spotrebiteľ vytkol vadu opraviť alebo vymeniť vadný tovar v čo najkratšom čase, ktorý potrebuje na posúdenie vady a na opravu alebo výmenu tovaru s prihliadnutím na povahu tovaru a povahu a závažnosť vady. Obchodník sa ďalej zaväzuje vadu opraviť alebo vadný tovar vymeniť bezplatne, na vlastné náklady a bez spôsobenia závažných ťažkostí spotrebiteľovi.</p>
              <p>6.12 Na účely opravy alebo výmeny spotrebiteľ odovzdá alebo sprístupní tovar obchodníkovi a/alebo výrobcovi (servisnému technikovi). Náklady prevzatia veci znáša obchodník.</p>
              <p>6.13 Obchodník dodá spotrebiteľovi opravený tovar na vlastné náklady rovnakým alebo obdobným spôsobom, akým mu spotrebiteľ dodal vadný tovar, ak sa strany nedohodnú inak.</p>
              <p>6.14 Obchodník môže odmietnuť odstránenie vady, ak oprava ani výmena nie sú možné alebo ak by si vyžadovali neprimerané náklady s ohľadom na všetky okolnosti vrátane okolností podľa druhej vety bodu 6.10 týchto obchodných podmienok.</p>
              <p>6.15 Spotrebiteľ má právo na primeranú zľavu z kúpnej ceny alebo môže odstúpiť od kúpnej zmluvy aj bez poskytnutia dodatočnej primeranej lehoty ak:</p>
              <ol type="a">
                <li>obchodník tovar neopravil ani nevymenil,</li>
                <li>obchodník tovar neopravil ani nevymenil v súlade s bodom 6.12 týchto obchodných podmienok,</li>
                <li>obchodník odmietol odstrániť vadu podľa bodu 6.14 týchto obchodných podmienok,</li>
                <li>tovar má rovnakú vadu napriek oprave alebo výmene,</li>
                <li>vada je takej závažnej povahy, že odôvodňuje okamžitú zľavu z kúpnej ceny alebo odstúpenie od kúpnej zmluvy, alebo</li>
                <li>obchodník vyhlásil alebo je z okolností zrejmé, že vadu neodstráni v primeranej lehote alebo bez spôsobenia závažných ťažkostí pre spotrebiteľa.</li>
              </ol>
              <p>6.16 Pri posudzovaní práva spotrebiteľa na zľavu z kúpnej ceny alebo odstúpenie od kúpnej zmluvy podľa odseku 6.15 písm. d) a e) sa zohľadnia všetky okolnosti, najmä druh a hodnota tovaru, povaha a závažnosť vady a možnosť od spotrebiteľa objektívne žiadať, aby dôveroval v schopnosť obchodníka vadu odstrániť.</p>
              <p>6.17 Spotrebiteľ nemôže odstúpiť od kúpnej zmluvy podľa bodu 6.15, ak sa spotrebiteľ spolupodieľal na vzniku vady alebo ak je vada zanedbateľná. Dôkazné bremeno, že sa spotrebiteľ spolupodieľal na vzniku vady a že vada je zanedbateľná, nesie obchodník.</p>
              <p>6.18 Ak sa zmluva týka kúpy viacerých kusov tovaru, spotrebiteľ môže od nej odstúpiť len vo vzťahu k vadnému tovaru. Vo vzťahu k ostatnému zakúpenému tovaru môže odstúpiť od zmluvy, len ak nemožno dôvodne očakávať, že bude mať záujem ponechať si ostatný tovar bez vadného tovaru.</p>
              <p>6.19 Obchodník po odstúpení od zmluvy podľa bodu 6.15 vráti spotrebiteľovi kúpnu cenu najneskôr do 14 dní odo dňa vrátenia tovaru obchodníkovi, alebo po preukázaní, že spotrebiteľ zaslal tovar obchodníkovi, podľa toho, ktorý okamih nastane skôr.</p>
              <p>6.20 Obchodník po odstúpení od zmluvy spotrebiteľom podľa bodu 6.15 nemá právo na náhradu škody spôsobenú bežným opotrebovaním tovaru a na odplatu za bežné užívanie tovaru pred odstúpením od kúpnej zmluvy.</p>
              <p>6.21 Ak obchodník odmietne zodpovednosť za vady, dôvody odmietnutia písomne oznámi spotrebiteľovi. Ak spotrebiteľ znaleckým posudkom alebo odborným stanoviskom vydaným akreditovanou osobou, autorizovanou osobou alebo notifikovanou osobou preukáže zodpovednosť obchodníka za vadu, môže vytknúť vadu opakovane a obchodník nemôže odmietnuť zodpovednosť za vadu. Spotrebiteľ má voči obchodníkovi ďalej právo na náhradu účelne vynaložených nákladov, ktoré mu vznikli v súvislosti s vytknutím vady.</p>
            </section>

            {/* Čl. 7 */}
            <section id="cl7" className="terms-section">
              <h2>Čl. 7 – Hodnotenie produktov (Recenzie)</h2>
              <p>7.1 V prípade zverejňovania spotrebiteľských hodnotení, obchodník tieto hodnotenia overuje a má zavedené príslušné postupy na posúdenie ich pravosti. Každé zverejnené hodnotenie kontroluje predávajúci individuálne a jeho pravosť overuje na základe predložených dokladov o kúpe konkrétneho tovaru. Ak sa preukáže, že údaje uvedené v hodnotení a získané počas preverovania nesúvisia s príslušnou objednávkou, takéto hodnotenie je odstránené. Za vystavenie hodnotenia alebo jeho stiahnutie obchodník neponúka žiadne výhody. Vzhľadom na uvedené obchodník zaručuje, že hodnotenia dostupné na internetovom obchode sú overené a autentické a vyjadrujú reálne skúsenosti s nakupovaním.</p>
            </section>

            {/* Čl. 8 */}
            <section id="cl8" className="terms-section">
              <h2>Čl. 8 – Alternatívne riešenie sporov a podávanie podnetov</h2>
              <p>8.1 Spotrebiteľ má právo obrátiť sa na obchodníka so žiadosťou o nápravu ak nie je spokojný so spôsobom, ktorým obchodník vybavil jeho vytknutie vady tovaru, alebo ak sa domnieva, že obchodník porušil jeho práva. Ak obchodník odpovie na túto žiadosť zamietavo alebo na ňu neodpovie do 30 dní od jej odoslania, spotrebiteľ má právo podať návrh na začatie alternatívneho riešenia sporu subjektu alternatívneho riešenia sporov podľa Zákona č. 391/2015 Z.z. Spotrebiteľ môže podať sťažnosť aj prostredníctvom online platformy alternatívneho riešenia sporov dostupnej na: <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=SK" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
              <p>8.2 Alternatívne riešenie sporov sa týka len sporu medzi spotrebiteľom a obchodníkom, vyplývajúceho z kúpnej zmluvy alebo súvisiaceho s kúpnou zmluvou.</p>
              <p>8.3 Subjekt alternatívneho riešenia sporov môže návrh odmietnuť, ak vyčísliteľná hodnota sporu nepresahuje sumu 20,- EUR.</p>
              <p>8.4 Spotrebiteľ má ďalej právo podať podnet orgánu dohľadu v oblasti ochrany spotrebiteľa. Kontaktné údaje dozorného orgánu:</p>
              <div className="terms-infobox">
                <p><strong>Inšpektorát SOI pre Košický kraj</strong></p>
                <p>Vrátna 3, P. O. BOX A-35, 040 65 Košice 1</p>
                <p>Odbor výkonu dohľadu</p>
                <p>Tel.: 055/729 07 05, 055/622 76 55</p>
                <p><a href="http://www.soi.sk" target="_blank" rel="noopener noreferrer">www.soi.sk</a></p>
              </div>
            </section>

            {/* Čl. 9 */}
            <section id="cl9" className="terms-section">
              <h2>Čl. 9 – Podmienky zasielania elektronických faktúr</h2>
              <p>9.1 Elektronická faktúra je v zmysle § 71 ods. 1 písm. b) Zákona o dani z pridanej hodnoty č. 222/2004 Z. z. daňovým dokladom.</p>
              <p>9.2 Elektronická faktúra je riadna faktúra vystavená podľa § 74 Zákona o dani z pridanej hodnoty č. 222/2004 Z. z., ktorú obchodník vystaví elektronicky a pošle ju kupujúcemu len elektronickou poštou ako osobitný súbor vo formátoch .pdf alebo .xml alebo v inom vhodnom formáte.</p>
              <p>9.3 Kupujúci akceptovaním týchto obchodných podmienok súhlasí s tým, že mu bude elektronická faktúra zaslaná na ním uvedený e-mail v objednávkovom formulári bezodkladne po prijatí platby.</p>
              <p>9.4 Elektronická faktúra sa považuje za doručenú dňom odoslania. V prípade pochybností sa elektronická faktúra považuje za doručenú uplynutím troch pracovných dní odo dňa preukázateľného odoslania.</p>
              <p>9.5 Kupujúci je oprávnený odvolať súhlas o zasielaní elektronickej faktúry písomným alebo elektronickým oznámením obchodníkovi. Odvolanie je účinné dňom doručenia oznámenia.</p>
            </section>

            {/* Čl. 10 */}
            <section id="cl10" className="terms-section">
              <h2>Čl. 10 – Vytvorenie užívateľského konta</h2>
              <p>10.1 Vytvorením užívateľského konta sa rozumie zaregistrovanie individuálneho používateľského konta prostredníctvom internetového obchodu obchodníka (ďalej len „registrácia"). Registrácia je dobrovoľná a je bezplatná. Registrácia nie je podmienkou pre vytvorenie objednávky a uzatvorenie kúpnej zmluvy a žiadnym spôsobom neovplyvňuje konečnú kúpnu cenu.</p>
              <p>10.2 Zaregistrovaný užívateľ môže kedykoľvek požiadať obchodníka o výmaz užívateľského konta, k tomuto účelu použije kontaktné údaje obchodníka uvedené v bode 1.2 týchto obchodných podmienok.</p>
              <p>10.3 Zaregistrovaný používateľ môže získať od obchodníka aj ďalšie výhody alebo benefity, ktoré nie sú výslovne uvedené v týchto obchodných podmienkach. Tieto benefity sú poskytované podľa aktuálnych podmienok stanovených obchodníkom a sú priebežne zverejňované v rozhraní internetového obchodu.</p>
            </section>

            {/* Čl. 11 */}
            <section id="cl11" className="terms-section">
              <h2>Čl. 11 – Ochrana osobných údajov</h2>
              <p>11.1 Plne rešpektujeme súkromie našich zákazníkov. Pre vybavenie objednávky je však nevyhnutné spracúvať určité osobné údaje. Internetový obchod taktiež spracúva súbory Cookies. Pre lepšie pochopenie, za akým účelom a na akých právnych základoch spracúvame Vaše osobné údaje si prečítajte kompletné vyhlásenie Ochrany osobných údajov podľa Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 a Zákona č. 18/2018 Z. z. o ochrane osobných údajov.</p>
              <p>11.2 Vernostný program „Heureka" – zasielanie dotazníkov v rámci programu „Overené zákazníkmi" (priamy marketing prostredníctvom elektronickej pošty). Ako súčasť nášho záväzku zlepšovať služby zasielame zákazníkom dotazníky spokojnosti prostredníctvom e-mailovej komunikácie po každom nákupe. Tieto dotazníky sú súčasťou programu „Overené zákazníkmi", do ktorého je náš e-shop zapojený. Na zasielanie dotazníkov a spracovanie spätnej väzby využívame služby sprostredkovateľa Heureka Group a.s., Karolínská 706/3, 186 00 Praha 8, Česká republika, IČO: 07 822 77.</p>
              <p>Právnym základom spracúvania osobných údajov je oprávnený záujem (čl. 6 ods. 1 písm. f) GDPR). Zákazníci majú možnosť kedykoľvek jednoducho a bezplatne vyjadriť námietku proti zasielaniu dotazníkov – priamo v každom zaslanom e-maile alebo kontaktovaním obchodníka.</p>
              <p>Osobné údaje sú spracúvané výlučne na vymedzené účely, sú chránené pred neoprávneným prístupom a nie sú poskytované do tretích krajín ani medzinárodných organizácií. Doba uchovávania je najviac 5 rokov od začatia spracúvania, resp. do podania námietky.</p>
            </section>

            {/* Čl. 12 */}
            <section id="cl12" className="terms-section">
              <h2>Čl. 12 – Nákup na splátky</h2>
              <p>12.1 Kupujúci má možnosť zakúpiť tovar prostredníctvom internetového obchodu www.senton.sk aj formou splátkového predaja. Podrobné informácie o možnostiach nákupu na splátky sú dostupné na stránke obchodníka v sekcii HOMECREDIT.</p>
              <p>12.2 Bližšie informácie o poskytovaní revolvingových úverov nájdete na webovej stránke spoločnosti Home Credit Slovakia, a.s.</p>
            </section>

            {/* Čl. 13 */}
            <section id="cl13" className="terms-section">
              <h2>Čl. 13 – Záverečné ustanovenia</h2>
              <p>13.1 Obchodník si vyhradzuje právo na zmenu týchto obchodných podmienok. Povinnosť písomného oznámenia zmeny v týchto obchodných podmienkach je splnená umiestnením oznámenia na internetovom obchode obchodníka.</p>
              <p>13.2 Tieto obchodné podmienky nadobúdajú účinnosť voči kupujúcemu odoslaním objednávky kupujúcim a záväzným prijatím objednávky obchodníkom.</p>
              <p>13.3 Tieto obchodné podmienky nadobúdajú platnosť od 1. 7. 2024.</p>
            </section>

            {/* Prílohy */}
            <section id="prilohy" className="terms-section">
              <h2>Prílohy na stiahnutie</h2>
              <div className="terms-downloads">
                {downloads.map((d, i) => (
                  <a key={i} href={d.file} target="_blank" rel="noopener noreferrer" className="terms-download-btn">
                    <IconDownload />
                    <span>{d.label}</span>
                  </a>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}
