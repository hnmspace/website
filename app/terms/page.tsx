import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'HNM SPACE 웹사이트 이용약관',
}

export default function TermsPage() {
  return (
    <main className="legal-page">
      <a className="legal-logo" href="/" aria-label="HNM SPACE 홈">
        <img src="/hnm-logo-horizontal-black.png" alt="HNM SPACE" width={1275} height={185} />
      </a>

      <section>
        <p className="legal-kicker">HNM SPACE</p>
        <h1>Terms of Use</h1>
        <p className="legal-lead">
          본 페이지는 HNM SPACE 웹사이트 이용에 대한 기본 안내입니다.
        </p>

        <div className="legal-content">
          <article>
            <h2>웹사이트 이용</h2>
            <p>
              본 웹사이트의 콘텐츠는 HNM SPACE의 회사 및 사업 영역을 소개하기 위한 목적으로 제공됩니다.
            </p>
          </article>

          <article>
            <h2>콘텐츠 사용</h2>
            <p>
              웹사이트에 포함된 로고, 이미지, 문구, 구성 요소는 사전 동의 없이 무단 복제하거나 상업적으로 사용할 수 없습니다.
            </p>
          </article>

          <article>
            <h2>외부 문의</h2>
            <p>
              사업 문의, 협업 제안, 기타 문의는 웹사이트에 표시된 이메일을 통해 접수할 수 있습니다.
            </p>
          </article>

          <article>
            <h2>문의</h2>
            <p>
              <a href="mailto:contact@hnmspace.com">contact@hnmspace.com</a>
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
