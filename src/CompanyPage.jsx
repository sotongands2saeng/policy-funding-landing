import { useState } from 'react'
import logo from './assets/logo.png'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScb1wfUhCT0x5fI0bdrGOQ50h4pY_INLzTV34L7zoQF2UNYVQ/formResponse'

export default function CompanyPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: '',
    businessAge: '기업형 홈페이지 문의',
    message: '',
  })

  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.')
      return
    }

    setIsSubmitting(true)

    try {
      const hiddenIframeName = 'google-form-submit-frame'
      let iframe = document.querySelector(`iframe[name="${hiddenIframeName}"]`)

      if (!iframe) {
        iframe = document.createElement('iframe')
        iframe.name = hiddenIframeName
        iframe.style.display = 'none'
        document.body.appendChild(iframe)
      }

      const form = document.createElement('form')
      form.method = 'POST'
      form.action = GOOGLE_FORM_URL
      form.target = hiddenIframeName
      form.style.display = 'none'

      const values = {
        'entry.1650683403': formData.name,
        'entry.811726835': formData.businessType,
        'entry.886282372': '기업형 홈페이지 문의',
        'entry.161963530': formData.name,
        'entry.68833453': formData.phone,
        'entry.1017186654': formData.message,
      }

      Object.entries(values).forEach(([key, value]) => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = value
        form.appendChild(input)
      })

      document.body.appendChild(form)
      form.submit()
      document.body.removeChild(form)

      setSubmitSuccess(true)

      setFormData({
        name: '',
        phone: '',
        businessType: '',
        message: '',
      })
      setPrivacyAgreed(false)

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      alert('제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
      }, 800)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center px-6">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="소통과 상생 로고" className="h-12 w-auto object-contain" />

            <div className="leading-tight">
              <p className="text-[22px] font-bold tracking-[-0.035em] text-slate-950">소통과 상생</p>
              <p className="mt-0.5 text-[10px] font-bold tracking-[0.28em] text-blue-700">BUSINESS GROWTH SUPPORT</p>
            </div>
          </a>

          <div className="ml-auto flex items-center gap-8">
            <nav className="hidden items-center gap-6 text-[14px] font-semibold tracking-[-0.015em] text-slate-600 lg:flex">
              <a href="#about" className="hover:text-amber-600">센터소개</a>
              <a href="#services" className="hover:text-amber-600">지원분야</a>
              <a href="#process" className="hover:text-amber-600">진행절차</a>
              <a href="#cases" className="hover:text-amber-600">상담사례</a>
              <a href="#insights" className="hover:text-amber-600">정보센터</a>
            </nav>

            <a href="#contact" className="hidden rounded-full bg-amber-400 px-6 py-3 text-[14px] font-bold tracking-[-0.015em] text-slate-950 shadow-lg shadow-amber-100 transition hover:bg-amber-300 md:inline-flex">
              상담 문의
            </a>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-[#07111f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.42),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(245,158,11,0.22),transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#1e3a8a_100%)]" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.04fr_0.96fr] lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                중소기업 · 소상공인 기업성장지원
              </div>

              <h1 className="max-w-3xl text-[42px] font-bold leading-[1.12] tracking-[-0.055em] md:text-[60px] lg:text-[72px]">
                운영·자금·성장 문제를 분석하고<br />실현 가능한 방향을 제시합니다.
              </h1>

              <p className="mt-7 max-w-2xl text-[18px] font-medium leading-[1.85] tracking-[-0.015em] text-slate-300 md:text-[20px]">
                소통과 상생은 사업 운영, 자금 흐름, 비용 구조, 매출 개선 방향을 함께 점검하여 사업자의 현실에 맞는 경영 컨설팅을 제공합니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-2xl bg-amber-400 px-7 py-4 text-[16px] font-bold tracking-[-0.02em] text-slate-950 shadow-xl shadow-amber-950/20 transition hover:-translate-y-0.5 hover:bg-amber-300">
                  무료 초기 상담 신청
                </a>
                <a href="#services" className="rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-[16px] font-bold tracking-[-0.02em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15">
                  지원 분야 보기
                </a>
              </div>

              <div className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
                <HeroMetric number="01" label="사업현황 진단" />
                <HeroMetric number="02" label="자금전략 검토" />
                <HeroMetric number="03" label="성장방향 제안" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-amber-300/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="rounded-[2rem] bg-white p-7 text-slate-950">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-blue-700">Business Review</p>
                      <h3 className="mt-1 text-2xl font-extrabold tracking-tight">상담 전 점검 항목</h3>
                    </div>
                    <div className="rounded-2xl bg-amber-50 px-4 py-3 text-sm font-extrabold text-amber-700">REVIEW</div>
                  </div>

                  <div className="space-y-3">
                    <ReviewItem title="운영 구조" description="현재 업무 흐름과 비용 부담 요인을 확인합니다." />
                    <ReviewItem title="자금 흐름" description="고정비, 매출 회수, 필요 자금의 우선순위를 점검합니다." />
                    <ReviewItem title="성장 방향" description="고객 유입, 매출 구조, 실행 가능한 개선 방향을 정리합니다." />
                  </div>

                  <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
                    <p className="text-sm font-bold text-slate-300">상담 방향</p>
                    <p className="mt-2 text-lg font-bold leading-7">수치보다 현재 사업의 맥락을 먼저 확인하고, 필요한 순서대로 개선 방향을 정리합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-28 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-extrabold tracking-[0.25em] text-blue-700">ABOUT CENTER</p>
              <h2 className="text-[34px] font-bold leading-[1.18] tracking-[-0.045em] text-slate-950 md:text-[48px]">
                단순 상담이 아니라<br />사업의 구조를 함께 봅니다.
              </h2>
              <p className="mt-6 text-[18px] font-medium leading-[1.85] tracking-[-0.01em] text-slate-600">
                소통과 상생은 사업자의 현재 상황을 기준으로 운영, 자금, 매출, 비용 문제를 연결해서 분석합니다. 겉으로 보이는 문제보다 실제 사업을 어렵게 만드는 원인을 찾는 데 집중합니다.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="현실 중심" description="실제 실행 가능한 방향을 기준으로 상담합니다." />
              <InfoCard title="통합 진단" description="자금, 운영, 매출, 비용을 분리하지 않고 함께 봅니다." />
              <InfoCard title="맞춤 설계" description="업종과 사업 단계에 따라 다른 전략을 제안합니다." />
              <InfoCard title="지속 점검" description="필요 시 실행 과정에서 추가 보완 방향을 안내합니다." />
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-28 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHead label="SUPPORT AREA" title="기업 성장 지원 분야" description="사업자의 현재 상황에 따라 필요한 지원 영역을 나누고, 실행 우선순위를 정리합니다." />
            <div className="grid gap-6 lg:grid-cols-3">
              <ServiceCard title="경영 진단" description="사업 구조, 운영 방식, 비용 흐름, 고객 확보 과정을 점검합니다." items={["운영 구조 분석", "비용 구조 개선", "업무 병목 파악"]} />
              <ServiceCard title="자금 전략" description="사업 단계에 맞는 자금 계획과 재무 흐름을 검토합니다." items={["운영자금 분석", "재무 흐름 진단", "정책지원 방향 검토"]} />
              <ServiceCard title="성장 전략" description="매출 개선과 고객 흐름 개선을 위한 실행 방향을 제안합니다." items={["매출 구조 진단", "고객 흐름 개선", "성장 우선순위 설정"]} />
            </div>
          </div>
        </section>

        <section id="process" className="py-28 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHead label="PROCESS" title="상담 진행 절차" description="현재 상황을 빠르게 파악하고, 필요한 순서대로 상담을 진행합니다." />
            <div className="grid gap-5 md:grid-cols-4">
              <StepCard step="01" title="상담 접수" description="업체 정보와 현재 고민을 확인합니다." />
              <StepCard step="02" title="현황 분석" description="운영, 자금, 매출, 비용 흐름을 점검합니다." />
              <StepCard step="03" title="방향 제안" description="현재 상황에 맞는 실행 우선순위를 정리합니다." />
              <StepCard step="04" title="후속 관리" description="필요 시 실행 과정의 보완 방향을 안내합니다." />
            </div>
          </div>
        </section>

        <section id="cases" className="bg-[#07111f] py-28 text-white md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHead dark label="CASE STUDY" title="상담 사례" description="실제 상담 흐름을 바탕으로 업종과 상황 중심의 예시를 정리했습니다." />
            <div className="grid gap-6 md:grid-cols-3">
              <CaseCard title="운영 비용 증가로 고민 중인 자영업자" category="운영 구조 점검" description="매출보다 비용 증가 속도가 빠른 상황에서 고정비, 재료비, 운영자금 흐름을 함께 점검합니다." />
              <CaseCard title="자금 계획을 다시 정리해야 하는 사업자" category="자금 흐름 검토" description="필요 자금 규모, 상환 부담, 준비 자료를 기준으로 무리 없는 검토 방향을 정리합니다." />
              <CaseCard title="고객 유입 이후 매출 전환이 약한 판매업" category="성장 방향 상담" description="고객 유입, 상품 구성, 재구매 흐름을 확인하고 우선 개선할 지점을 함께 검토합니다." />
            </div>
          </div>
        </section>

        <section id="insights" className="py-28 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHead label="INSIGHT" title="정보센터" description="사업 운영과 관련된 실제 정보와 운영 경험을 순차적으로 정리해나갈 예정입니다." />
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center">
              <div className="mx-auto max-w-2xl">
                <p className="text-sm font-bold tracking-[0.18em] text-blue-700">CONTENT PREPARING</p>
                <h3 className="mt-4 text-[28px] font-bold tracking-[-0.04em] text-slate-900">
                  실제 운영 경험과 상담 내용을 바탕으로<br />정보 콘텐츠를 순차적으로 업데이트할 예정입니다.
                </h3>
                <p className="mt-6 text-[17px] leading-8 text-slate-600">
                  과장된 정보나 형식적인 콘텐츠보다, 실제 사업 운영 과정에서 도움이 될 수 있는 내용을 중심으로 정리하려고 합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-50 py-28 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#0b1727] p-8 text-white lg:p-12">
                <p className="mb-4 text-sm font-extrabold tracking-[0.25em] text-amber-300">CONTACT</p>
                <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.05em] md:text-5xl">운영·자금·성장 문제를 함께 점검합니다.</h2>
                <p className="mt-6 text-lg leading-8 text-blue-100">현재 운영 상황과 고민을 남겨주시면 내용을 검토한 뒤 상담 방향에 맞춰 안내드리겠습니다.</p>
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-slate-300">
                  <div className="space-y-2">
                    <p>평일 09:00 ~ 18:00 상담 문의 접수</p>
                    <p>문의 내용 확인 후 순차적으로 안내드립니다.</p>
                    <p>온라인 기반 전국 상담 운영</p>
                    <p>카카오 채널 · 전화 상담 · 예약 시스템 순차 확장 예정</p>
                  </div>
                </div>
              </div>

              <form className="space-y-4 p-8 lg:p-12" onSubmit={handleSubmit}>
                {submitSuccess && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-700">
                    상담 문의가 정상적으로 접수되었습니다. 확인 후 연락드리겠습니다.
                  </div>
                )}
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-blue-500" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="이름 / 업체명" required />
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-blue-500" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="연락처" required />
                <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none focus:border-blue-500" name="businessType" value={formData.businessType} onChange={handleChange} required>
                  <option value="" disabled>사업 유형 선택</option>
                  <option value="개인사업자">개인사업자</option>
                  <option value="법인사업자">법인사업자</option>
                  <option value="예비창업자">예비창업자</option>
                  <option value="기타">기타</option>
                </select>
                <textarea className="min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-blue-500" name="message" value={formData.message} onChange={handleChange} placeholder="현재 고민이나 상담받고 싶은 내용을 적어주세요." />

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  <p className="font-semibold text-slate-800">개인정보 수집 및 이용 안내</p>
                  <p className="mt-2">수집 항목: 이름/업체명, 연락처, 사업 유형, 상담 내용</p>
                  <p>수집 목적: 상담 문의 확인 및 안내</p>
                  <p>보관 기간: 상담 종료 후 3개월 이내 파기</p>

                  <label className="mt-4 flex items-start gap-3 text-slate-700">
                    <input type="checkbox" checked={privacyAgreed} onChange={(event) => setPrivacyAgreed(event.target.checked)} required className="mt-1 h-4 w-4 rounded border-slate-300" />
                    <span>개인정보 수집 및 이용에 동의합니다.</span>
                  </label>
                </div>

                <button className="w-full rounded-2xl bg-amber-400 px-5 py-4 font-extrabold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting || !privacyAgreed}>
                  {isSubmitting ? '제출 중입니다...' : '상담 문의 남기기'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-14 text-sm text-slate-500">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <strong className="text-lg font-bold text-slate-900">소통과 상생</strong>
            <p className="mt-4 leading-7 text-slate-600">중소기업 · 소상공인을 위한 경영 컨설팅 및 기업 성장 지원</p>
          </div>

          <div>
            <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-slate-900">BUSINESS INFO</p>
            <div className="space-y-2 leading-7">
              <p>상호명 : 소통과 상생</p>
              <p>사업자등록번호 : 397-26-02085</p>
              <p>문의 : sotongands2saeng@gmail.com</p>
              <p>운영시간 : 평일 09:00 ~ 18:00</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-slate-900">POLICY</p>
            <div className="space-y-2 leading-7">
              <a href="/policy-funding-landing/privacy" className="block transition hover:text-slate-900">개인정보처리방침</a>
              <a href="/policy-funding-landing/terms" className="block transition hover:text-slate-900">이용약관</a>
              <p>온라인 기반 전국 상담 운영</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 px-6 pt-6 text-xs text-slate-400">
          Copyright © 소통과 상생. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function SectionHead({ label, title, description, dark = false }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className={`mb-3 text-sm font-extrabold tracking-[0.25em] ${dark ? 'text-amber-300' : 'text-blue-700'}`}>{label}</p>
      <h2 className={`text-[34px] font-bold leading-[1.18] tracking-[-0.045em] md:text-[48px] ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {description && <p className={`mt-5 text-[18px] font-medium leading-[1.8] tracking-[-0.01em] ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>}
    </div>
  )
}

function HeroMetric({ number, label }) {
  return <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"><div className="text-2xl font-extrabold text-amber-300">{number}</div><div className="mt-1 text-sm font-bold text-slate-200">{label}</div></div>
}

function ReviewItem({ title, description }) {
  return <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="flex gap-3"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">✓</span><div><p className="font-bold text-slate-900">{title}</p><p className="mt-1 text-sm leading-6 text-slate-600">{description}</p></div></div></div>
}

function InfoCard({ title, description }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"><div className="mb-5 h-1 w-12 rounded-full bg-amber-400" /><h3 className="mb-2 text-[21px] font-bold tracking-[-0.03em]">{title}</h3><p className="leading-7 text-slate-600">{description}</p></div>
}

function ServiceCard({ title, description, items }) {
  return <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"><h3 className="text-[25px] font-bold tracking-[-0.035em]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{description}</p><div className="mt-6 space-y-3">{items.map((item) => <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">{item}</div>)}</div></article>
}

function StepCard({ step, title, description }) {
  return <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><p className="text-sm font-extrabold text-blue-700">STEP {step}</p><h3 className="mt-4 text-[21px] font-bold tracking-[-0.03em]">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></article>
}

function CaseCard({ category, title, description }) {
  return <article className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur"><p className="text-sm font-extrabold text-amber-300">{category}</p><h3 className="mt-4 text-[25px] font-bold leading-snug tracking-[-0.035em] text-white">{title}</h3><p className="mt-3 leading-7 text-slate-300">{description}</p></article>
}
