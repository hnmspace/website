const capabilities = [
  {
    number: '01',
    title: 'Strategy',
    text: '브랜드가 어디에서 성장할 수 있는지 먼저 봅니다.',
  },
  {
    number: '02',
    title: 'Execution',
    text: '필요한 일을 정확하게 실행하고, 결과로 판단합니다.',
  },
  {
    number: '03',
    title: 'Scale',
    text: '검증된 흐름이 반복될 수 있도록 확장합니다.',
  },
]

const fields = ['Marketing', 'Commerce', 'Distribution']

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="HNM Space home">
          <img src="/png_03.png" alt="HNM Space" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#standard">Standard</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-mark">
          <img src="/png_01.png" alt="HNM Space" />
        </div>
        <p className="hero-line">Build. Grow. Last.</p>
      </section>

      <section id="standard" className="statement-section">
        <p className="section-kicker">01 / Standard</p>
        <h1>Not another agency.</h1>
        <div className="statement-copy">
          <p>우리는 더 많은 말을 하기보다, 필요한 일을 정확히 합니다.</p>
          <p>성과 없는 운영은 하지 않습니다.</p>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="work-head">
          <p className="section-kicker">02 / What we build</p>
          <h2>Structure<br />before noise.</h2>
        </div>
        <div className="work-list">
          {capabilities.map((item) => (
            <article key={item.title} className="work-item">
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="field-section">
        <p className="section-kicker">03 / Fields</p>
        <div className="field-lines">
          {fields.map((field) => <div key={field}>{field}</div>)}
        </div>
        <p className="field-note">
          세 영역을 따로 보지 않습니다. 브랜드가 성장하는 하나의 흐름으로 봅니다.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <p className="section-kicker">04 / Contact</p>
        <h2>한번 맡겨보고 싶다면.</h2>
        <div className="contact-links">
          <a href="mailto:henry@hnmspace.com">henry@hnmspace.com</a>
          <a href="https://hnmspace.com">hnmspace.com</a>
        </div>
      </section>

      <footer>
        <img src="/png_05.png" alt="HNM" />
        <span>© 2026 HNM SPACE</span>
      </footer>
    </main>
  )
}
