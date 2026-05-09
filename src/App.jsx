import { useState } from 'react'
import logo from './assets/logo.png'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScb1wfUhCT0x5fI0bdrGOQ50h4pY_INLzTV34L7zoQF2UNYVQ/formResponse'

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

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="w-full border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="flex justify-center">
            <img src={logo} alt="회사 로고" className="h-20 w-auto object-contain" />
          </div>

          <div className="mt-8 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-800">
            개인사업자 · 소상공인 정책자금 상담
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            소상공인 정책자금,
            <br />
            <span className="text-blue-900">신청부터 관리까지</span>
            <br />
            1:1 전담 지원
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            사업 상황에 맞는 정책자금 방향을 검토하고, 복잡한 신청 과정과 진행 관리를 전담 담당자가 함께합니다.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
            상담 후 진행 가능 여부와 절차를 안내드리며, 실제 진행 여부는 상담 후 결정하실 수 있습니다.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#consult-form" className="rounded-2xl bg-blue-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]">
              무료 상담 신청하기
            </a>

            <div className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm text-slate-600 shadow-sm">
              상담부터 진행까지 전담 관리
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">왜 정책자금을 찾는 사업자가 많을까요?</h2>
          <p className="mt-4 text-lg text-slate-600">사업 운영 부담 완화와 운영 안정성 확보를 위해 정책자금을 검토하는 사업자가 많습니다.</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-4xl">💰</div>
            <h3 className="mt-6 text-2xl font-bold text-slate-900">2~3%대 저금리 및 여유 있는 상환 구조 검토 가능</h3>
            <p className="mt-4 leading-relaxed text-slate-600">상대적으로 낮은 금리와 장기 분할상환 구조를 통해 사업 운영 부담 완화를 기대하는 사업자가 많습니다.</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-4xl">📋</div>
            <h3 className="mt-6 text-2xl font-bold text-slate-900">다양한 상황별 지원 제도</h3>
            <p className="mt-4 leading-relaxed text-slate-600">업종, 업력, 사업 상황 등에 따라 다양한 정책자금 검토가 가능합니다.</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-4xl">🏢</div>
            <h3 className="mt-6 text-2xl font-bold text-slate-900">운영 안정성 확보</h3>
            <p className="mt-4 leading-relaxed text-slate-600">운영자금, 시설자금, 대환 목적 등 사업 운영 안정화를 위해 활용됩니다.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">왜 저희와 함께 진행할까요?</h2>
            <p className="mt-4 text-lg text-slate-600">복잡한 정책자금 과정을 보다 안정적으로 진행할 수 있도록 지원합니다.</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-4xl">📌</div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">전문가 1:1 전담 관리</h3>
              <p className="mt-4 leading-relaxed text-slate-600">상담부터 진행 과정까지 전담 담당자가 1:1로 끝까지 관리합니다.</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-4xl">🛠️</div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">어려운 상황도 상담 가능</h3>
              <p className="mt-4 leading-relaxed text-slate-600">채무조정 등 일반적인 진행이 어려운 상황도 상담 가능합니다.</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-4xl">📊</div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">맞춤형 진단 및 진행 지원</h3>
              <p className="mt-4 leading-relaxed text-slate-600">업종·업력·현재 상황 등을 바탕으로 사업 상황에 맞는 정책자금 방향을 검토하고 실제 진행까지 지원합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">상담 진행 절차</h2>
            <p className="mt-4 text-lg text-slate-600">복잡한 과정을 보다 명확하게 안내해드립니다.</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              { step: '01', title: '상담 신청', desc: '기본 정보 및 현재 상황 접수' },
              { step: '02', title: '상황 진단', desc: '업종·업력·진행 가능성 검토' },
              { step: '03', title: '진행 안내', desc: '상황에 맞는 진행 방향 안내' },
              { step: '04', title: '1:1 진행 관리', desc: '진행 과정 전담 관리 지원' },
            ].map((item) => (
              <div key={item.step} className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <div className="text-sm font-bold tracking-widest text-blue-900">STEP {item.step}</div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="consult-form" className="mx-auto max-w-4xl px-6 py-24">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">무료 상담 신청</h2>
            <p className="mt-4 text-lg text-slate-600">상담 신청 내용을 남겨주시면 영업일 기준 1일 이내 연락드립니다.</p>
            <p className="mx-auto mt-4 max-w-2xl rounded-2xl bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-600">
              개인사업자 및 소상공인 대상 상담입니다. 법인사업자 또는 무등록 사업자는 상담 범위에서 제외될 수 있습니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">업체명</label>
                <input name="companyName" value={formData.companyName} onChange={handleChange} required type="text" placeholder="업체명을 입력해주세요" className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-800" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">업종</label>
                <input name="industry" value={formData.industry} onChange={handleChange} required type="text" placeholder="예: 음식점, 온라인판매, 제조업" className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-800" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">업력</label>
                <select name="businessAge" value={formData.businessAge} onChange={handleChange} required className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition focus:border-blue-800">
                  <option value="">선택해주세요</option>
                  <option value="6개월 미만">6개월 미만</option>
                  <option value="6개월~1년 미만">6개월~1년 미만</option>
                  <option value="1~3년">1~3년</option>
                  <option value="3~5년">3~5년</option>
                  <option value="5년 이상">5년 이상</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">대표자 성함</label>
                <input name="representativeName" value={formData.representativeName} onChange={handleChange} required type="text" placeholder="대표자 성함을 입력해주세요" className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-800" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">연락 가능한 핸드폰 번호</label>
              <input name="phone" value={formData.phone} onChange={handleChange} required type="tel" placeholder="연락 가능한 핸드폰 번호를 입력해주세요" className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-800" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">추가 문의 및 요청사항</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="현재 상황이나 문의 내용을 자유롭게 작성해주세요. (예: 기존 대출 현황, 채무조정 여부, 필요 자금 규모 등)" className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-800"></textarea>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
              <div>
                <p className="font-semibold text-slate-800">개인정보 수집 및 이용 안내</p>
                <p className="mt-2">수집 항목: 업체명, 대표자명, 연락처, 상담 내용 등</p>
                <p>수집 목적: 정책자금 상담 진행 및 안내</p>
                <p>보관 기간: 상담 종료 후 3개월 이내 파기</p>
                <p>입력하신 정보는 상담 목적 외에는 사용되지 않습니다.</p>
              </div>

              <label className="flex items-start gap-3 pt-2 text-sm text-slate-700">
                <input type="checkbox" checked={privacyAgreed} onChange={(e) => setPrivacyAgreed(e.target.checked)} className="mt-1 h-4 w-4 rounded border-slate-300" />
                <span>개인정보 수집 및 이용에 동의합니다.</span>
              </label>
            </div>

            <button type="submit" disabled={isSubmitting || !privacyAgreed} className="w-full rounded-2xl bg-blue-900 px-6 py-5 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60">
              {isSubmitting ? '제출 중입니다...' : '무료 상담 신청하기'}
            </button>
          </form>

          <div className="mt-6 space-y-2 text-center text-sm leading-relaxed text-slate-500">
            <p>입력하신 정보는 상담 진행 목적 외에는 사용되지 않습니다.</p>
            <p>정책자금 승인 여부는 신청자의 신용, 업력, 매출, 기관 심사 기준 등에 따라 달라질 수 있습니다.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm leading-relaxed text-slate-500">
          <p className="font-medium text-slate-700">상호명 : 소통과 상생</p>
          <p className="mt-1">사업자등록번호 : 397-26-02085</p>
          <div className="mt-4">
            <p>본 서비스는 정책자금 상담 및 진행 지원 서비스이며, 정부기관 또는 공공기관이 아닙니다.</p>
            <p className="mt-2">정책자금 승인 여부는 신청자의 신용, 업력, 매출 및 기관 심사 기준 등에 따라 달라질 수 있습니다.</p>
          </div>
        </div>
      </footer>

      <section className="bg-blue-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            복잡한 정책자금,
            <br />
            혼자 고민하지 마세요.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
            사업 상황에 맞는 방향을 함께 검토하고 진행 과정까지 전담 관리해드립니다.
          </p>

          <a href="#consult-form" className="mt-10 inline-flex rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-blue-950 shadow-lg transition hover:scale-[1.02]">
            상담 신청하기
          </a>
        </div>
      </section>
    </div>
  )
}
