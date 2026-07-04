const capabilities = [
  {
    number: '01',
    title: 'Marketing',
    lead: '광고를 집행하는 것이 아니라 성과가 반복되는 구조를 설계합니다.',
    items: ['Performance Marketing', 'Search Advertising', 'Social Marketing', 'Ad Operation'],
  },
  {
    number: '02',
    title: 'Commerce',
    lead: '고객 경험이 실제 구매로 이어지도록 판매 흐름을 정리합니다.',
    items: ['Smart Store', 'Coupang', 'D2C Store', 'Sales Strategy'],
  },
  {
    number: '03',
    title: 'Distribution',
    lead: '브랜드가 더 넓은 시장으로 확장될 수 있는 유통 경로를 만듭니다.',
    items: ['Online Distribution', 'Marketplace', 'Channel Expansion', 'Brand Growth'],
  },
]

const approach = [
  ['Understand', '브랜드와 시장, 판매 구조를 먼저 이해합니다.'],
  ['Structure', '마케팅·커머스·유통을 하나의 성장 흐름으로 설계합니다.'],
  ['Execute', '필요한 일을 정확하게 실행하고 데이터로 판단합니다.'],
  ['Scale', '검증된 결과가 반복될 수 있도록 확장합니다.'],
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="HNM Space home">
          <img src="/png_05.png" alt="HNM Space" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-inner">
          <img className="hero-logo" src="/png_01.png" alt="HNM Space" />
          <div className="hero-copy">
            <p className="eyebrow">Marketing · Commerce · Distribution</p>
            <h1>Built for<br />results.</h1>
            <p className="hero-description">
              브랜드의 성장은 하나의 영역에서 만들어지지 않습니다.<br />
              HNM Space는 마케팅, 커머스, 유통을 하나의 실행 구조로 연결합니다.
            </p>
          </div>
        </div>
        <div className="scroll-note">Scroll</div>
      </section>

      <section id="about" className="section intro-section">
        <div className="section-label">01 / Who we are</div>
        <div className="intro-copy">
          <h2>We design the structure behind growth.</h2>
          <p>
            HNM Space는 광고만 운영하지 않습니다. 판매만 보지도 않습니다. 브랜드가 시장에서 성장하기 위해 필요한 전략, 실행, 판매, 유통의 흐름을 함께 설계합니다.
          </p>
        </div>
      </section>

      <section className="section standard-section">
        <div className="large-statement">
          맡기면<br />결과가<br />나오는 회사.
        </div>
        <div className="standard-copy">
          <p className="eyebrow">Our standard</p>
          <p>
            성과 없는 광고 운영은 하지 않습니다. 필요한 일을 정확하게 실행하고, 결과로 판단합니다. HNM Space의 기준은 화려한 설명보다 반복 가능한 결과에 있습니다.
          </p>
        </div>
      </section>

      <section id="capabilities" className="section capabilities-section">
        <div className="section-title-row">
          <div className="section-label">02 / Capabilities</div>
          <h2>Three functions.<br />One direction.</h2>
        </div>
        <div className="line-list">
          {capabilities.map((capability) => (
            <article key={capability.title} className="line-item">
              <div className="line-number">{capability.number}</div>
              <div className="line-main">
                <h3>{capability.title}</h3>
                <p>{capability.lead}</p>
              </div>
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section">
        <div className="dark-inner">
          <div className="section-label light">03 / Approach</div>
          <h2>Understand.<br />Structure.<br />Execute.<br />Scale.</h2>
          <div className="approach-list">
            {approach.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-label">04 / Contact</div>
        <h2>Let’s build<br />something that works.</h2>
        <div className="contact-row">
          <a href="mailto:henry@hnmspace.com">henry@hnmspace.com</a>
          <a href="https://hnmspace.com">hnmspace.com</a>
        </div>
      </section>

      <footer>
        <img src="/png_03.png" alt="HNM Space" />
        <span>Marketing · Commerce · Distribution</span>
        <span>© 2026 HNM SPACE</span>
      </footer>
    </main>
  )
}
