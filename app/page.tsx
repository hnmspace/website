const capabilities = [
  {
    title: 'Marketing',
    items: ['Performance Marketing', 'Search Advertising', 'Social Marketing', 'Ad Operation'],
  },
  {
    title: 'Commerce',
    items: ['Smart Store', 'Coupang', 'D2C Store', 'Sales Strategy'],
  },
  {
    title: 'Distribution',
    items: ['Online Distribution', 'Marketplace', 'Channel Expansion', 'Brand Growth'],
  },
]

const process = ['Discover', 'Structure', 'Execute', 'Scale']

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
        <div className="hero-logo-wrap">
          <img className="hero-logo" src="/png_01.png" alt="HNM Space" />
        </div>
        <div className="hero-copy">
          <p>Marketing</p>
          <p>Commerce</p>
          <p>Distribution</p>
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

      <section id="capabilities" className="section">
        <div className="section-head">
          <p className="eyebrow">Capabilities</p>
          <h2>Three functions. One direction.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article key={capability.title} className="capability-card">
              <h3>{capability.title}</h3>
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section process-section">
        <p className="eyebrow">How We Work</p>
        <div>
          <h2>Less noise. More execution.</h2>
          <div className="process-list">
            {process.map((item, index) => (
              <div key={item} className="process-item">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something that works.</h2>
        <div className="contact-links">
          <a href="mailto:henry@hnmspace.com">henry@hnmspace.com</a>
          <a href="https://hnmspace.com">hnmspace.com</a>
        </div>
      </section>

      <footer>
        <img src="/png_03.png" alt="HNM Space" />
        <span>© 2026 HNM SPACE</span>
      </footer>
    </main>
  )
}
