const capabilities = [
  {
    title: 'Marketing',
    items: ['Performance Marketing', 'Social Marketing', 'Search Advertising', 'Ad Operation']
  },
  {
    title: 'Commerce',
    items: ['Store Operation', 'Sales Strategy', 'Brand Growth', 'Channel Optimization']
  },
  {
    title: 'Distribution',
    items: ['Online Distribution', 'Marketplace', 'Channel Expansion', 'Sales Network']
  }
];

const approach = [
  ['01', 'Understand', '브랜드와 시장, 판매 구조를 먼저 이해합니다.'],
  ['02', 'Build', '실행 가능한 전략과 운영 구조를 설계합니다.'],
  ['03', 'Execute', '광고, 콘텐츠, 커머스, 유통을 연결해 실행합니다.'],
  ['04', 'Scale', '성과가 검증된 구조를 확장합니다.']
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="HNM SPACE home">HNM SPACE</a>
        <nav>
          <a href="#philosophy">Philosophy</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero section">
        <div className="eyebrow">Based in Boryeong · Working everywhere</div>
        <h1>HNM SPACE</h1>
        <div className="hero-lines" aria-label="core business">
          <span>Marketing</span>
          <span>Commerce</span>
          <span>Distribution</span>
        </div>
      </section>

      <section id="philosophy" className="section split">
        <div className="section-label">Philosophy</div>
        <div className="content-large">
          <p>
            HNM Space는 브랜드의 성장을 하나의 흐름으로 봅니다.
          </p>
          <p>
            마케팅, 커머스, 유통을 분리하지 않고 전략부터 실행까지 연결합니다.
            더 많은 일을 하는 것보다, 결과가 나오는 구조를 만드는 데 집중합니다.
          </p>
        </div>
      </section>

      <section className="section approach-section">
        <div className="section-label">How we work</div>
        <div className="approach-grid">
          {approach.map(([num, title, desc]) => (
            <article className="approach-card" key={title}>
              <span>{num}</span>
              <h2>{title}</h2>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section capabilities-section">
        <div className="section-label">Capabilities</div>
        <div className="capability-list">
          {capabilities.map((group) => (
            <article className="capability" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-label">Contact</div>
        <h2>Let’s build together.</h2>
        <a href="mailto:hm.business.op@gmail.com">hm.business.op@gmail.com</a>
      </section>

      <footer>
        <span>HNM SPACE</span>
        <span>Marketing · Commerce · Distribution</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
