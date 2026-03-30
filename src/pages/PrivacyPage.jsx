import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TermsPage.css'

const toc = [
  { id: 'prevadzkovatel', label: 'Prevádzkovateľ' },
  { id: 'spracuvanie',    label: 'Spracúvanie osobných údajov' },
  { id: 'registracia',   label: 'Ochrana OÚ a registrácia' },
  { id: 'cookies',       label: 'Súbory cookies' },
  { id: 'socialne',      label: 'Sociálne pluginy' },
  { id: 'prava',         label: 'Vaše práva' },
  { id: 'uplatnenie',    label: 'Kde uplatniť práva' },
]

export default function PrivacyPage() {
  const [activeId, setActiveId] = useState('prevadzkovatel')

  useEffect(() => {
    const handler = () => {
      const sections = toc.map(t => document.getElementById(t.id)).filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top <= 120) {
          setActiveId(sections[i].id)
          return
        }
      }
      setActiveId('prevadzkovatel')
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
          <span>Ochrana osobných údajov</span>
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
              <h1>Ochrana osobných údajov</h1>
              <p className="terms-valid">SENTON, spol. s r.o. &nbsp;·&nbsp; Platné v zmysle Zákona č. 18/2018 Z.z. a GDPR</p>
            </div>

            {/* Prevádzkovateľ */}
            <section id="prevadzkovatel" className="terms-section">
              <h2>Prevádzkovateľ</h2>
              <div className="terms-infobox">
                <p><strong>SENTON, spol. s r.o.</strong></p>
                <p>Kosatcová 2, 040 01 Košice</p>
                <p>IČO: 36 186 813 &nbsp;·&nbsp; IČ DPH: SK2020058293</p>
              </div>
              <p>Predávajúci pri spracovaní osobných údajov postupuje v zmysle Zákona č. 18/2018 o ochrane osobných údajov a spracúva iba osobné údaje nevyhnutné na uzavretie spotrebiteľskej zmluvy.</p>
              <p>Osobné údaje sú spracúvané na účely:</p>
              <ul>
                <li>Spracovania objednávky, vystavenia daňového dokladu a vedenia reklamácií v internetovom obchode www.senton.sk v rozsahu: titul, meno, priezvisko, poštová adresa, e-mailová adresa, telefón, číslo bankového účtu, podpis.</li>
                <li>Marketingu formou zasielania reklamných správ na e-mailovú adresu po prihlásení zákazníka do mailing listu v rozsahu: titul, meno, priezvisko, e-mailová adresa.</li>
              </ul>
              <p>Prevádzkovateľ alebo doručovacia spoločnosť pri odovzdávaní objednávky je oprávnená si od zákazníka vyžiadať doklad totožnosti za účelom overenia jeho identity alebo osoby uvedenej na doručovacej adrese.</p>
              <p>Kupujúci udeľuje prevádzkovateľovi súhlas na dobu určitú do splnenia účelu spracúvania osobných údajov kupujúceho. Prevádzkovateľ po splnení účelu spracúvania zabezpečí bezodkladne likvidáciu osobných údajov kupujúceho. Súhlas so spracovaním osobných údajov môže kupujúci odvolať kedykoľvek písomnou formou. Súhlas zanikne v lehote 1 mesiaca od doručenia odvolania súhlasu kupujúcim prevádzkovateľovi.</p>
              <p>Prevádzkovateľ prehlasuje, že:</p>
              <ul>
                <li>spracované osobné údaje dotknutých osôb použije len na vyššie uvedené účely v rámci svojich obchodných aktivít,</li>
                <li>nevyužívaním zasielania reklamných správ nevzniká hrozba odmietnutia zmluvného vzťahu,</li>
                <li>má e-shop zaregistrovaný na Úrade na ochranu osobných údajov (UOOU SR).</li>
              </ul>
            </section>

            {/* Spracúvanie */}
            <section id="spracuvanie" className="terms-section">
              <h2>Spracúvanie osobných údajov</h2>
              <p>Ochrana vašich osobných údajov sa spravuje ustanoveniami zákona o ochrane osobných údajov. Máte napríklad právo na základe písomnej žiadosti požadovať od prevádzkovateľa zoznam vašich osobných údajov, ktoré sú predmetom spracúvania, potvrdenie, či sú alebo nie sú osobné údaje o vás spracúvané, opravu alebo likvidáciu vašich nesprávnych, neúplných alebo neaktuálnych osobných údajov.</p>
              <p>Osobné údaje, ktoré poskytujete prevádzkovateľovi prostredníctvom registračného formulára alebo priamej objednávky musia byť pravdivé, a v prípade ich zmeny ste povinný o ich zmene bezodkladne informovať aj prevádzkovateľa.</p>
              <p>Vaše osobné údaje môžu byť poskytnuté tretím stranám a sprostredkovateľom, t.j. subjektom spolupracujúcim s prevádzkovateľom, ktorými sú napríklad marketingové agentúry, súdy a orgány činné v trestnom konaní, účtovné kancelárie, prepravné a doručovacie spoločnosti. Konkrétne ide o:</p>
              <div className="terms-infobox">
                <p><strong>TOPTRANS EU, a.s.</strong> – Na priehon 50, 949 01 Nitra, IČO: 36 703 923, IČ DPH: SK2022296199</p>
                <p><strong>HEUREKA SHOPPING, s.r.o.</strong> – Karolínská 650/1, 186 00 Praha 8, IČ: 02387727, Česká republika</p>
                <p><strong>Home Credit Slovakia, a.s.</strong> – Teplická 7434/147, 921 22 Piešťany, IČO: 36 234 176</p>
              </div>
            </section>

            {/* Registrácia */}
            <section id="registracia" className="terms-section">
              <h2>Ochrana osobných údajov a registrácia</h2>
              <p>Účelom spracovania osobných údajov je ich využitie na plnenie spotrebiteľskej zmluvy, ktorú predávajúci uzatvára s kupujúcim vytvorením objednávky v tomto internetovom obchode. Táto spotrebiteľská zmluva je zároveň právnym základom pre spracúvanie osobných údajov kupujúceho. Poskytnutie osobných údajov kupujúceho je zmluvnou požiadavkou, ktorá je potrebná na uzavretie zmluvy. Ak kupujúci neposkytne všetky požadované osobné údaje predávajúcemu, môže to mať za následok neuzavretie kúpnej zmluvy.</p>
              <p>Predávajúci pri spracovaní osobných údajov postupuje v zmysle Zákona č. 18/2018 o ochrane osobných údajov a spracúva iba osobné údaje nevyhnutné na uzavretie spotrebiteľskej zmluvy. Predávajúci spracúva bežné osobné údaje kupujúceho.</p>
              <p>Osobné údaje kupujúceho sú v informačnom systéme predávajúceho uchovávané po dobu 10 rokov.</p>
              <p>Kupujúci má právo a možnosť aktualizovať osobné údaje v online režime na web stránke internetového obchodu v zákazníckej sekcii, po prihlásení, alebo inou formou (e-mailom, písomne).</p>
              <p>Osobné údaje môžu byť pre účely plnenia spotrebiteľskej zmluvy poskytnuté tretím stranám – doručovacím spoločnostiam (kuriérom) a spoločnosti, ktorá spracúva účtovné doklady. Osobné údaje kupujúceho sa nezverejňujú.</p>
              <p>Predávajúci využíva softvérové riešenie, ktoré spracúva osobné údaje v tretej krajine – v Spojených štátoch amerických (krajina, ktorá zaručuje primeranú úroveň ochrany osobných údajov).</p>
              <p>Predávajúci môže poskytnúť osobné údaje zákazníka (v rozsahu: e-mailová adresa) spoločnosti Heureka Shopping s.r.o., výlučne pre účely programu „Overené zákazníkmi", pre získanie spätnej väzby od kupujúceho v súvislosti s uskutočneným nákupom.</p>
              <p>Predávajúci môže spracúvať osobné údaje na marketingové účely (napríklad pre odosielanie newslettra alebo e-mailov o novinkách, zľavách, akciách) aj bez predchádzajúceho súhlasu kupujúceho. Pre tento účel predávajúci spracúva meno, priezvisko a e-mailovú adresu kupujúceho. Ak kupujúci nesúhlasí so spracovaním údajov na marketingové účely, môže kedykoľvek vyjadriť nesúhlas odoslaním správy na e-mailovú adresu predávajúceho alebo kliknutím na link v e-mailovej správe.</p>
              <p>Kupujúci má právo získať od predávajúceho potvrdenie o tom, aké osobné údaje kupujúceho sa spracúvajú. Kupujúci má právo získať prístup k takýmto údajom a tiež informácie: na aký účel sa spracúvajú, aké kategórie údajov sa spracúvajú, komu sa poskytujú, ako dlho sa uchovávajú, či existuje automatizované individuálne rozhodovanie vrátane profilovania.</p>
              <p>Prvé poskytnutie vyššie uvedených osobných údajov kupujúcemu je bezplatné. Opakované poskytnutie osobných údajov, o ktoré kupujúci požiada, bude spoplatnené ako administratívny poplatok vo výške 5 €.</p>
              <p>Kupujúci môže od predávajúceho požadovať opravu alebo doplnenie neúplných osobných údajov. Kupujúci môže žiadať vymazanie jeho osobných údajov alebo obmedzenia spracovania týchto údajov. Kupujúci môže aj namietať spracúvanie osobných údajov.</p>
              <p>Ak bude kupujúci žiadať o vymazanie osobných údajov, ktoré sa spracúvajú v súvislosti s kúpnou zmluvou, jeho žiadosť môže byť zamietnutá z dôvodu zákonnej povinnosti archivácie (napr. uchovávanie účtovných dokladov po dobu 10 rokov).</p>
              <p>Kupujúci má právo získať osobné údaje, ktoré sa ho týkajú a ktoré poskytol predávajúcemu, v štruktúrovanom, bežne používanom a strojovo čitateľnom formáte, a právo preniesť tieto osobné údaje inému prevádzkovateľovi, ak je to technicky možné.</p>
            </section>

            {/* Cookies */}
            <section id="cookies" className="terms-section">
              <h2>Súbory cookies</h2>
              <p>S cieľom zabezpečiť riadne fungovanie internetového obchodu môže predávajúci ukladať na zariadení kupujúceho malé dátové súbory – cookies, vďaka ktorým si internetový obchod môže na určitý čas uchovávať údaje o činnosti a nastaveniach (napr. prihlasovacie meno, jazyk, veľkosť písma a pod.). Internetový obchod predávajúceho používa súbory cookies na zapamätanie si používateľských nastavení kupujúceho a pre nevyhnutnú funkcionalitu internetového obchodu, prípadne na marketingové účely.</p>
              <p>Kupujúci môže všetky súbory cookies uložené v jeho zariadení vymazať a prípadne internetový prehliadač vo svojom zariadení nastaviť tak, aby znemožnil ich ukladanie. V takom prípade bude kupujúci pri opakovanej návšteve internetového obchodu pravdepodobne musieť manuálne upravovať niektoré nastavenia a niektoré služby alebo funkcie internetového obchodu nemusia byť funkčné.</p>
              <p><strong>Čo sú súbory cookies?</strong> Súbor cookie je malý textový súbor, ktorý webová lokalita ukladá vo vašom počítači alebo mobilnom zariadení pri jej prehliadaní. Vďaka tomuto súboru si webová lokalita na určitý čas uchováva informácie o vašich krokoch a preferenciách (ako sú jazyk, mena, krajina, identifikácia neprihláseného užívateľa pre uchovanie nákupného košíka a podobne), takže ich pri ďalšej návšteve lokality nemusíte opätovne uvádzať.</p>
              <p><strong>Ako kontrolovať súbory cookies?</strong> Súbory cookie môžete kontrolovať alebo zmazať podľa uváženia – podrobnosti si pozrite na stránke <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a>. Môžete vymazať všetky súbory cookie uložené vo svojom počítači a väčšinu prehliadačov môžete nastaviť tak, aby ste im znemožnili ich ukladanie.</p>
              <p><strong>Ako odmietnuť používanie súborov cookies?</strong> Používanie súborov cookie je možné nastaviť pomocou vášho internetového prehliadača. Väčšina prehliadačov súbory cookie automaticky prijíma už v úvodnom nastavení.</p>
            </section>

            {/* Sociálne pluginy */}
            <section id="socialne" className="terms-section">
              <h2>Používanie pluginov sociálnych sietí</h2>
              <p>Webové stránky spoločnosti môžu tiež obsahovať sociálne pluginy tretích strán, pomocou ktorých môžu návštevníci webových stránok zdieľať obsah so svojimi priateľmi a ďalšími kontaktmi. Jedná sa hlavne o:</p>
              <ul>
                <li>plugin siete <strong>Facebook</strong>, spravovaný spoločnosťou Facebook Inc., 1601 South California Avenue, Palo Alto, CA 94304, USA,</li>
                <li>plugin služby <strong>YouTube</strong>, spravovaný spoločnosťou YouTube, LLC 901 Cherry Ave., 94066 San Bruno, CA, USA, dcérska spoločnosť Google Inc.,</li>
                <li>plugin služby <strong>Instagram</strong>, spravovaný spoločnosťou Instagram Inc., 1601 Willow Road, Menlo Park, California 94025, USA.</li>
              </ul>
              <p>Tieto sociálne pluginy nie sú spravované našou spoločnosťou, a tak naša spoločnosť nie je zodpovedná za prípadné spracovanie osobných údajov vyššie uvedenými prevádzkovateľmi týchto pluginov alebo webových stránok, na ktoré sa odkazujú, ani za ich funkčnosť a prípadné škody.</p>
            </section>

            {/* Práva */}
            <section id="prava" className="terms-section">
              <h2>Vaše práva ako dotknutých osôb</h2>
              <p>Pri spracúvaní vašich osobných údajov sme pripravení vykonávať vaše práva:</p>
              <ul>
                <li><strong>Právo na prístup</strong> – máte právo vedieť, aké osobné údaje o vás spracúvame, na aký účel, kto sú ich príjemcovia a aká je doba spracúvania.</li>
                <li><strong>Právo na opravu</strong> – pokiaľ sú vaše osobné údaje nesprávne alebo sa zmenili, kontaktujte nás, opravíme ich.</li>
                <li><strong>Právo na výmaz</strong> – máte právo na vymazanie osobných údajov, pokiaľ sú nesprávne alebo spracúvané nezákonne.</li>
                <li><strong>Právo odvolať súhlas</strong> – ak sú vaše osobné údaje spracúvané na základe súhlasu, máte právo ho kedykoľvek odvolať, bez toho, aby to malo vplyv na zákonnosť predchádzajúceho spracúvania.</li>
                <li><strong>Právo byť zabudnutý</strong> – rozširuje existujúce právo na likvidáciu osobných údajov a právo na prenosnosť údajov k inému prevádzkovateľovi.</li>
                <li><strong>Právo na obmedzenie spracúvania</strong> – pokiaľ si želáte, budeme údaje spracúvať iba na najnutnejšie zákonné dôvody, alebo vôbec.</li>
                <li><strong>Právo namietať</strong> – pokiaľ zistíte, že spracúvanie je nezákonné alebo v rozpore s vašimi právami, môžete namietať vrátane automatizovaného individuálneho rozhodovania a profilovania.</li>
                <li><strong>Právo na prenosnosť údajov</strong> – ak si želáte preniesť údaje k inému prevádzkovateľovi, poskytneme ich vám v zodpovedajúcom formáte, ak tomu nebudú brániť technické alebo zákonné prekážky.</li>
              </ul>
              <p>Rovnako máte právo podať sťažnosť dozornému orgánu:</p>
              <div className="terms-infobox">
                <p><strong>Úrad na ochranu osobných údajov Slovenskej republiky</strong></p>
                <p>Hraničná 12, 820 07 Bratislava 27</p>
                <p>IČO: 36 064 220 &nbsp;·&nbsp; Tel.: +421 2 3231 3220</p>
                <p><a href="https://dataprotection.gov.sk/uoou/" target="_blank" rel="noopener noreferrer">dataprotection.gov.sk</a></p>
              </div>
            </section>

            {/* Kde uplatniť práva */}
            <section id="uplatnenie" className="terms-section">
              <h2>Kde a ako môžete svoje práva uplatniť</h2>
              <p>Vaše práva si môžete uplatniť:</p>
              <div className="terms-infobox">
                <p><strong>Telefonicky:</strong> <a href="tel:+421905901500">+421 905 901 500</a></p>
                <p><strong>Písomne:</strong> SENTON spol. s r.o., Kosatcová 2, 040 01 Košice</p>
                <p><strong>E-mailom:</strong> <a href="mailto:senton@senton.sk">senton@senton.sk</a></p>
              </div>
              <p>V súvislosti s účinnosťou zákona 18/2018 Z.z. od 25. mája 2018 sme spracovali aktualizáciu bezpečnostnej dokumentácie a zaviedli do praxe základné princípy GDPR. Tieto dokumenty sú umiestnené na prevádzke a sú k dispozícii dotknutým osobám.</p>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}
