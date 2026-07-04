const capabilities = [
  {
    title: 'Marketing',
    description: '브랜드가 고객에게 닿는 방식을 설계하고 실행합니다.',
    items: ['Performance Marketing', 'Search Advertising', 'Social Marketing', 'Ad Operation'],
  },
  {
    title: 'Commerce',
    description: '고객 경험이 구매로 이어지는 판매 구조를 만듭니다.',
    items: ['Smart Store', 'Coupang', 'D2C Store', 'Sales Strategy'],
  },
  {
    title: 'Distribution',
    description: '브랜드가 더 넓은 시장으로 확장되는 유통 흐름을 설계합니다.',
    items: ['Online Distribution', 'Marketplace', 'Channel Expansion', 'Brand Growth'],
  },
]

const approach = [
  ['01', 'Understand', '브랜드와 시장의 구조를 먼저 봅니다.'],
  ['02', 'Structure', '마케팅, 커머스, 유통을 하나의 흐름으로 정리합니다.'],
  ['03', 'Execute', '필요한 일을 정확하게 실행합니다.'],
  ['04', 'Scale', '성과가 반복될 수 있는 구조로 확장합니다.'],
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
        <img className="hero-logo" src="/png_01.png" alt="HNM Space" />
        <div className="hero-line" />
        <div className="hero-copy" aria-label="Core business">
          <span>Marketing</span>
          <span>Commerce</span>
          <span>Distribution</span>
        </div>
        <p className="hero-sub">Built for brands that move from strategy to results.</p>
      </section>

      <section id="about" className="section split-section">
        <p className="eyebrow">Who We Are</p>
        <div>
          <h1>We connect the structure of growth.</h1>
          <p className="lead">
            HNM Space는 Marketing, Commerce, Distribution을 하나의 흐름으로 바라봅니다.
            브랜드가 성장하기 위해 필요한 전략, 실행, 판매, 유통의 구조를 함께 설계합니다.
          </p>
        </div>
      </section>

      <section id="capabilities" className="section capabilities-section">
        <div className="section-head">
          <p className="eyebrow">Capabilities</p>
          <h2>Three functions. One direction.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article key={capability.title} className="capability-card">
              <div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
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

      <section className="section dark-section">
        <div className="dark-inner">
          <p className="eyebrow dark-eyebrow">How We Work</p>
          <h2>Less noise.<br />More execution.</h2>
          <div className="approach-list">
            {approach.map(([number, title, desc]) => (
              <article key={number} className="approach-item">
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something that works.</h2>
        <div className="contact-meta">
          <a href="mailto:henry@hnmspace.com">henry@hnmspace.com</a>
          <a href="https://hnmspace.com">hnmspace.com</a>
          <span>Based in Boryeong, Korea</span>
        </div>
      </section>

      <footer>
        <img src="/png_03.png" alt="HNM Space" />
        <span>© 2026 HNM SPACE</span>
      </footer>
    </main>
  )
}
