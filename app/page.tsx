const capabilities = [
  {
    label: '01',
    title: 'Marketing',
    description: '성과를 만들기 위한 광고 구조를 설계하고 운영합니다.',
    items: ['Performance Marketing', 'Search Advertising', 'Social Marketing', 'Ad Operation'],
  },
  {
    label: '02',
    title: 'Commerce',
    description: '고객 경험이 실제 구매로 이어지는 판매 구조를 만듭니다.',
    items: ['Smart Store', 'Coupang', 'D2C Store', 'Sales Strategy'],
  },
  {
    label: '03',
    title: 'Distribution',
    description: '브랜드가 더 넓은 시장으로 확장되는 유통 흐름을 설계합니다.',
    items: ['Online Distribution', 'Marketplace', 'Channel Expansion', 'Brand Growth'],
  },
]

const principles = [
  ['01', 'No empty campaigns.', '성과 없는 광고 운영은 하지 않습니다.'],
  ['02', 'Structure first.', '광고, 판매, 유통을 따로 보지 않고 하나의 성장 구조로 봅니다.'],
  ['03', 'Execution matters.', '필요한 일을 정확하게 실행하고 결과로 판단합니다.'],
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

      <section id="top" className="hero section">
        <div className="hero-kicker">Marketing · Commerce · Distribution</div>
        <img className="hero-logo" src="/png_01.png" alt="HNM Space" />
        <h1>Built for brands<br />that move.</h1>
        <p className="hero-sub">
          HNM Space는 브랜드의 성장 과정을 설계하고 실행합니다.<br />
          전략에서 광고, 판매와 유통까지. 결과로 이어지는 구조를 만듭니다.
        </p>
      </section>

      <section id="about" className="section about-section">
        <div className="section-index">01 / About</div>
        <div className="about-copy">
          <h2>Strategy is not enough.<br />Execution completes it.</h2>
          <p>
            좋은 결과는 하나의 영역에서 만들어지지 않습니다. HNM Space는 Marketing, Commerce,
            Distribution을 분리하지 않고 브랜드가 성장하는 하나의 흐름으로 연결합니다.
          </p>
        </div>
      </section>

      <section className="section principle-section">
        <div className="statement-block">
          <p>Our Standard</p>
          <h2>맡기면<br />결과가 나오는 회사.</h2>
        </div>
        <div className="principle-list">
          {principles.map(([number, title, description]) => (
            <article key={number} className="principle-item">
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section capabilities-section">
        <div className="section-head">
          <div className="section-index">02 / Capabilities</div>
          <h2>Three functions.<br />One direction.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article key={capability.title} className="capability-card">
              <span>{capability.label}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
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
          <div className="section-index light">03 / Approach</div>
          <h2>Understand.<br />Build.<br />Execute.<br />Scale.</h2>
          <p>
            HNM Space는 더 많은 일을 하는 팀이 아니라, 필요한 일을 정확하게 하는 팀을 지향합니다.
            복잡한 문제를 단순한 실행 구조로 정리하고, 결과가 반복될 수 있는 흐름을 만듭니다.
          </p>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-index">04 / Contact</div>
        <h2>Let’s build<br />something that works.</h2>
        <div className="contact-grid">
          <div>
            <span>Email</span>
            <a href="mailto:henry@hnmspace.com">henry@hnmspace.com</a>
          </div>
          <div>
            <span>Web</span>
            <a href="https://hnmspace.com">hnmspace.com</a>
          </div>
          <div>
            <span>Based</span>
            <p>Boryeong, Korea</p>
          </div>
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
