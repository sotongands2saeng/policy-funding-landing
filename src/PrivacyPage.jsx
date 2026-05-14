export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-900">
          개인정보처리방침
        </h1>

        <p className="mt-6 leading-8 text-slate-600">
          소통과 상생은 상담 문의 과정에서 최소한의 개인정보를 수집하며,
          관련 법령에 따라 안전하게 관리합니다.
        </p>

        <div className="mt-14 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              1. 수집하는 개인정보 항목
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              상담 문의 시 아래 정보를 수집할 수 있습니다.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-600">
              <li>이름 또는 업체명</li>
              <li>연락처</li>
              <li>사업 유형</li>
              <li>상담 내용</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              2. 개인정보 수집 및 이용 목적
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-600">
              <li>상담 문의 확인 및 응대</li>
              <li>서비스 안내</li>
              <li>운영 관련 문의 처리</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              3. 개인정보 보관 기간
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              수집된 개인정보는 상담 종료 후 최대 3개월 이내 파기합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              4. 개인정보 제3자 제공
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              수집된 개인정보는 법령에 따른 경우를 제외하고 외부에 제공하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              5. 문의처
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              이메일 : sotongands2saeng@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}