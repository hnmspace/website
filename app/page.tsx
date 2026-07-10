import RevealController from './reveal'

const process = [
  {
    number: '01',
    title: 'Marketing',
    text: '브랜드와 시장을 연결하는 전략과 실행을 전개합니다.',
  },
  {
    number: '02',
    title: 'Commerce',
    text: '상품과 고객이 만나는 모든 과정을 설계하고 운영합니다.',
  },
  {
    number: '03',
    title: 'Distribution',
    text: '국내외 유통 네트워크를 기반으로 사업의 확장을 만듭니다.',
  },
]

const fields = [
  { title: 'Marketing', text: 'Performance · Content · Brand' },
  { title: 'Commerce', text: 'Strategy · Operation · Growth' },
  { title: 'Distribution', text: 'Network · Expansion · Partnership' },
]

export default function Home() {
  return (
    <main>
      <RevealController />
      <div className="ambient-layer" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="HNM Space home">
          <img src="/hnm-logo-horizontal-black.png" alt="HNM Space" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#standard">Standard</a>
          <a href="#work">Business</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero" data-section="light">
        <div className="hero-mark" data-reveal="hero">
          <img src="/hnm-logo-primary-black.png" alt="HNM Space" />
        </div>
        <p className="hero-line" data-reveal>Marketing. Commerce. Distribution.</p>
        <div className="hero-rule" data-line aria-hidden="true" />
        <div className="scroll-indicator" aria-hidden="true"><span>Scroll</span><i /></div>
      </section>

      <section id="standard" className="statement-section" data-section="light">
        <div className="statement-head">
          <p className="section-kicker" data-reveal>01 / Standard</p>
          <h1 data-reveal>지속 가능한 성장은<br />분명한 기준에서<br />시작됩니다.</h1>
        </div>
        <div className="standard-principles" data-reveal>
          <article className="standard-item">
            <span>01</span>
            <strong>Long-term Perspective.</strong>
            <p>장기적인 관점으로 사업을 바라봅니다.</p>
          </article>
          <article className="standard-item">
            <span>02</span>
            <strong>Independent Thinking.</strong>
            <p>각 사업은 독립적으로 성장합니다.</p>
          </article>
          <article className="standard-item">
            <span>03</span>
            <strong>Sustainable Growth.</strong>
            <p>지속 가능한 성장을 추구합니다.</p>
          </article>
          <article className="standard-item">
            <span>04</span>
            <strong>Meaningful Execution.</strong>
            <p>기준 있는 실행이 신뢰를 만듭니다.</p>
          </article>
        </div>
      </section>

      <section id="work" className="work-section is-dark-section" data-section="dark">
        <div className="work-head">
          <p className="section-kicker" data-reveal>02 / Business</p>
          <h2 data-reveal>Three businesses.<br />One standard.</h2>
        </div>
        <div className="work-list">
          {process.map((item) => (
            <article key={item.title} className="work-item" data-reveal>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="field-section" data-section="light">
        <p className="section-kicker" data-reveal>03 / Business Areas</p>
        <div className="field-lines" data-reveal>
          {fields.map((field) => (
            <div key={field.title} className="field-row">
              <strong>{field.title}</strong>
              <span>{field.text}</span>
            </div>
          ))}
        </div>
        <p className="field-note" data-reveal>
          Independent businesses.<br />One shared standard.
        </p>
      </section>

      <section id="contact" className="contact-section is-dark-section" data-section="dark">
        <p className="section-kicker" data-reveal>04 / Contact</p>
        <h2 data-reveal>Connect with HNM SPACE.</h2>
        <div className="contact-links" data-reveal>
          <a href="mailto:henry@hnmspace.com"><span>henry@hnmspace.com</span></a>
          <a href="https://hnmspace.com"><span>hnmspace.com</span></a>
        </div>
      </section>

      <footer data-section="light">
        <img src="/hnm-symbol-black.png" alt="HNM" />
        <span>© 2026 HNM SPACE</span>
      </footer>
    </main>
  )
}
