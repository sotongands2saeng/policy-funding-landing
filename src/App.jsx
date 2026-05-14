import { useState } from 'react'
import logo from './assets/logo.png'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScb1wfUhCT0x5fI0bdrGOQ50h4pY_INLzTV34L7zoQF2UNYVQ/formResponse'

export default function LandingPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    businessAge: '',
    representativeName: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [privacyAgreed, setPrivacyAgreed] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.')
      return
    }

    setIsSubmitting(true)

    const googleFormData = new FormData()
    googleFormData.append('entry.1650683403', formData.companyName)
    googleFormData.append('entry.811726835', formData.industry)
    googleFormData.append('entry.886282372', formData.businessAge)
    googleFormData.append('entry.161963530', formData.representativeName)
    googleFormData.append('entry.68833453', formData.phone)
    googleFormData.append('entry.1017186654', formData.message)

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData,
      })

      window.dataLayer?.push({ event: 'policy_funding_submit' })

      alert('상담 신청이 접수되었습니다. 확인 후 연락드리겠습니다.')

      setFormData({
        companyName: '',
        industry: '',
        businessAge: '',
        representativeName: '',
        phone: '',
        message: '',
      })

      setPrivacyAgreed(false)
    } catch (error) {
      alert('제출 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    {
      eyebrow: '금리 부담 완화',
      title: '저금리 가능성 검토',
      desc: '정책자금은 일반 대출보다 유리한 조건이 적용될 수 있어, 사업 운영 부담을 줄이는 데 도움이 될 수 있습니다.',
    },
    {
      eyebrow: '조건별 검토',
      title: '사업 상황별 자금 방향 안내',
      desc: '업종, 업력, 매출, 신용 상황 등을 바탕으로 현재 검토 가능한 정책자금 방향을 확인합니다.',
    },
    {
      eyebrow: '운영 안정화',
      title: '운영 안정성 확보',
      desc: '운영자금, 시설자금, 대환 목적 등 사업 상황에 맞는 자금 활용 방향을 함께 검토합니다.',
    },
  ]

  const reasons = [
    {
      title: '전담 담당자 1:1 관리',
      desc: '상담부터 진행 과정까지 전담 담당자가 사업자의 상황을 기준으로 함께 관리합니다.',
    },
    {
      title: '어려운 상황도 상담 가능',
      desc: '채무조정, 기존 대출, 매출 감소 등 일반적인 진행이 어려워 보이는 상황도 먼저 상담해볼 수 있습니다.',
    },
    {
      title: '맞춤형 진단 및 진행 지원',
      desc: '무작정 신청을 권하는 방식이 아니라, 현재 조건에서 가능한 방향을 먼저 검토합니다.',
    },
  ]

  const steps = [
    { step: '01', title: '상담 신청', desc: '기본 정보와 현재 상황을 접수합니다.' },
    { step: '02', title: '상황 진단', desc: '업종·업력·자금 목적을 기준으로 검토합니다.' },
    { step: '03', title: '진행 안내', desc: '가능한 방향과 필요한 절차를 안내합니다.' },
    { step: '04', title: '1:1 진행 관리', desc: '진행 과정에서 필요한 사항을 함께 관리합니다.' },
  ]

  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-900 antialiased">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/50 bg-white/85 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="소통과 상생 로고" className="h-10 w-auto object-contain" />
            <span className="hidden text-sm font-extrabold tracking-tight text-slate-900 sm:inline">소통과 상생</span>
          </a>

          <div className="flex items-center gap-3">
            <a href="#process" className="hidden text-sm font-semibold text-slate-600 transition hover:text-blue-900 md:inline">
              진행 절차
            </a>
            <a href="#consult-form" className="rounded-full bg-blue-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-blue-800">
              무료 상담 신청
            </a>
          </div>
        </div>
      </nav>

      <main id="top" className="pt-16">
        <section className="relative isolate overflow-hidden border-b border-blue-100 bg-[radial-gradient(circle_at_top_left,_#dbeafe,_transparent_36%),linear-gradient(180deg,#f8fbff_0%,#ffffff_70%)]">
          <div className="absolute -right-28 top-20 -z-10 h-80 w-80 rounded-full bg-blue-200/35 blur-3xl"></div>
          <div className="absolute -left-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl"></div>

          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-28">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-bold text-blue-900 shadow-sm shadow-blue-100/70">
                <span className="h-2 w-2 rounded-full bg-blue-700"></span>
                개인사업자 · 소상공인 정책자금 무료 상담
              </div>

              <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-6xl lg:text-7xl">
                정책자금
                <br />
                <span className="text-blue-900">간편신청</span>
                으로
                <br />
                바로 확인하세요.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                사업 상황에 맞는 정책자금 방향을 검토하고, 복잡한 신청 과정과 진행 관리를 전담 담당자가 1:1로 함께합니다.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
                상담 후 진행 가능 여부와 절차를 안내드리며, 실제 진행 여부는 상담 후 결정하실 수 있습니다.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#consult-form" className="inline-flex justify-center rounded-2xl bg-blue-950 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-950/25 transition hover:-translate-y-0.5 hover:bg-blue-800">
                  정책자금 무료 상담 신청
                </a>
                <div className="rounded-2xl border border-slate-200 bg-white/90 px-6 py-4 text-sm font-bold text-slate-700 shadow-sm">
                  상담비 0원 · 전담 1:1 관리
                </div>
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-center">
                {[
                  ['1:1', '전담 관리'],
                  ['0원', '초기 상담비'],
                  ['조건별', '자금 검토'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-blue-100 bg-white/90 p-4 shadow-lg shadow-blue-100/40">
                    <p className="text-2xl font-black text-blue-900">{value}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-blue-300/60 via-white to-slate-200/70 blur"></div>
              <div className="relative rounded-[2rem] border border-white bg-white/95 p-6 shadow-2xl shadow-blue-950/10 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-extrabold text-blue-900">빠른 상담 안내</p>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">영업일 1일 이내</span>
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">우리 사업장도 가능할까요?</h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  업종, 업력, 현재 상황을 남겨주시면 상담 방향을 안내드립니다.
                </p>

                <div className="mt-6 space-y-3 rounded-3xl border border-slate-100 bg-slate-50 p-5 text-sm leading-relaxed text-slate-700">
                  <p className="flex gap-2"><span className="font-black text-blue-900">✓</span> 개인사업자 및 소상공인 대상 상담</p>
                  <p className="flex gap-2"><span className="font-black text-blue-900">✓</span> 운영자금·시설자금·대환 목적 상담 가능</p>
                  <p className="flex gap-2"><span className="font-black text-blue-900">✓</span> 진행 가능 여부는 조건 검토 후 안내</p>
                </div>

                <a href="#consult-form" className="mt-6 inline-flex w-full justify-center rounded-2xl bg-blue-950 px-6 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-blue-800">
                  간편 무료 상담 신청
                </a>

                <p className="mt-4 text-xs leading-relaxed text-slate-500">
                  * 정책자금 승인 여부와 조건은 신청자의 신용, 업력, 매출 및 기관 심사 기준에 따라 달라질 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold tracking-widest text-blue-900">POLICY FUNDING</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">왜 정책자금을 찾는 사업자가 많을까요?</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">사업 운영 부담 완화와 운영 안정성 확보를 위해 정책자금을 검토하는 사업자가 많습니다.</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {benefits.map((item, index) => (
              <div key={item.title} className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-900">
                  {index + 1}
                </div>
                <p className="mt-6 text-sm font-extrabold text-blue-900">{item.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold tracking-widest text-blue-900">WHY US</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">왜 저희와 함께 진행할까요?</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">복잡한 정책자금 과정을 보다 안정적으로 진행할 수 있도록 지원합니다.</p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {reasons.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-blue-950 to-blue-500"></div>
                  <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white py-24 scroll-mt-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold tracking-widest text-blue-900">PROCESS</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">상담 진행 절차</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">복잡한 과정을 보다 명확하게 안내해드립니다.</p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-4">
              {steps.map((item) => (
                <div key={item.step} className="relative rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-sm font-black tracking-widest text-white shadow-lg shadow-blue-950/20">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="consult-form" className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] px-6 py-24 scroll-mt-24">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-100 bg-white p-7 shadow-2xl shadow-blue-950/10 md:p-12">
            <div className="text-center">
              <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-extrabold text-blue-900">무료 상담 신청</div>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">정책자금 가능성부터 확인하세요</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">상담 신청 내용을 남겨주시면 영업일 기준 1일 이내 연락드립니다.</p>
              <p className="mx-auto mt-4 max-w-2xl rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-600">
                개인사업자 및 소상공인 대상 상담입니다. 법인사업자 또는 무등록 사업자는 상담 범위에서 제외될 수 있습니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">업체명</label>
                  <input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="업체명을 입력해주세요"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition placeholder:text-slate-400 focus:border-blue-800 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">업종</label>
                  <input
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="예: 음식점, 온라인판매, 제조업"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition placeholder:text-slate-400 focus:border-blue-800 focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">업력</label>
                  <select
                    name="businessAge"
                    value={formData.businessAge}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition focus:border-blue-800 focus:ring-4 focus:ring-blue-50"
                  >
                    <option value="">선택해주세요</option>
                    <option value="6개월 미만">6개월 미만</option>
                    <option value="6개월~1년 미만">6개월~1년 미만</option>
                    <option value="1~3년">1~3년</option>
                    <option value="3~5년">3~5년</option>
                    <option value="5년 이상">5년 이상</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">대표자 성함</label>
                  <input
                    name="representativeName"
                    value={formData.representativeName}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="대표자 성함을 입력해주세요"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition placeholder:text-slate-400 focus:border-blue-800 focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">연락 가능한 핸드폰 번호</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="연락 가능한 핸드폰 번호를 입력해주세요"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition placeholder:text-slate-400 focus:border-blue-800 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">추가 문의 및 요청사항</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="현재 상황이나 문의 내용을 자유롭게 작성해주세요. (예: 기존 대출 현황, 채무조정 여부, 필요 자금 규모 등)"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition placeholder:text-slate-400 focus:border-blue-800 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
                <div>
                  <p className="font-bold text-slate-800">개인정보 수집 및 이용 안내</p>
                  <p className="mt-2">수집 항목: 업체명, 업종, 업력, 대표자명, 연락처, 상담 내용 등</p>
                  <p>수집 목적: 정책자금 상담 진행 및 안내</p>
                  <p>보관 기간: 상담 종료 후 3개월 이내 파기</p>
                  <p>입력하신 정보는 상담 목적 외에는 사용되지 않습니다.</p>
                </div>

                <label className="flex items-start gap-3 rounded-xl bg-white p-3 text-sm font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                  />
                  <span>개인정보 수집 및 이용에 동의합니다.</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !privacyAgreed}
                className="w-full rounded-2xl bg-blue-950 px-6 py-5 text-lg font-extrabold text-white shadow-xl shadow-blue-950/25 transition hover:-translate-y-0.5 hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? '제출 중입니다...' : '정책자금 무료 상담 신청'}
              </button>
            </form>

            <div className="mt-6 space-y-2 text-center text-sm leading-relaxed text-slate-500">
              <p>입력하신 정보는 상담 진행 목적 외에는 사용되지 않습니다.</p>
              <p>정책자금 승인 여부는 신청자의 신용, 업력, 매출, 기관 심사 기준 등에 따라 달라질 수 있습니다.</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-950 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              복잡한 정책자금,
              <br />
              혼자 고민하지 마세요.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
              사업 상황에 맞는 정책자금 방향을 함께 검토하고 진행 과정까지 전담 관리해드립니다.
            </p>

            <a href="#consult-form" className="mt-10 inline-flex rounded-2xl bg-white px-8 py-4 text-lg font-extrabold text-blue-950 shadow-lg transition hover:-translate-y-0.5">
              상담 신청하기
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm leading-relaxed text-slate-500">
          <p className="font-semibold text-slate-700">상호명 : 소통과 상생</p>
          <p className="mt-1">사업자등록번호 : 397-26-02085</p>
          <div className="mt-4">
            <p>본 서비스는 정책자금 상담 및 진행 지원 서비스이며, 정부기관 또는 공공기관이 아닙니다.</p>
            <p className="mt-2">정책자금 승인 여부는 신청자의 신용, 업력, 매출 및 기관 심사 기준 등에 따라 달라질 수 있습니다.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
