import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'HNM SPACE 개인정보처리방침',
}

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <a className="legal-logo" href="/" aria-label="HNM SPACE 홈">
        <img src="/hnm-logo-horizontal-black.png" alt="HNM SPACE" width={1275} height={185} />
      </a>

      <section>
        <p className="legal-kicker">HNM SPACE</p>
        <h1>Privacy Policy</h1>
        <p className="legal-lead">
          HNM SPACE는 웹사이트 이용 과정에서 필요한 범위의 정보만 확인합니다.
        </p>

        <div className="legal-content">
          <article>
            <h2>수집하는 정보</h2>
            <p>
              현재 웹사이트는 회원가입, 결제, 게시판 기능을 제공하지 않습니다. 이메일 문의 시 사용자가 직접 제공한 이름, 연락처, 문의 내용이 확인될 수 있습니다.
            </p>
          </article>

          <article>
            <h2>이용 목적</h2>
            <p>
              제공된 정보는 문의 확인, 답변, 협업 및 사업 관련 커뮤니케이션을 위해 사용됩니다.
            </p>
          </article>

          <article>
            <h2>보관 및 관리</h2>
            <p>
              문의 내용은 필요한 기간 동안 관리되며, 관계 법령 또는 업무상 필요한 경우를 제외하고 제3자에게 임의로 제공하지 않습니다.
            </p>
          </article>

          <article>
            <h2>문의</h2>
            <p>
              Privacy Contact: <a href="mailto:contact@hnmspace.com">contact@hnmspace.com</a>
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
